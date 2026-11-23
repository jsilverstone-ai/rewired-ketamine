#Requires -Version 5.1
<#
.SYNOPSIS
  Link hero "Hablamos Espanol" badges to /es, and add the ketamine insurance
  page to Services menus (desktop dropdown, mobile menu, footer Services list).

.DESCRIPTION
  Run from the repo root (the folder that contains src\app), or pass -Root.
  You can also point -Root at the insurance app folder (the folder that
  contains app\services\ketamine-insurance).

  Site files are read and written as UTF-8 without a BOM. Line endings are
  preserved. This script does not create backup copies; if the repo is a git
  checkout, undo with:  git checkout -- .

  Running the script a second time is safe: already-linked badges and existing
  insurance menu links are left alone.

.PARAMETER Root
  Repo root, or the insurance folder that contains an app\ directory.
  Defaults to the current directory. May be passed more than once.

.PARAMETER DryRun
  Show what would change without writing files. Same as -WhatIf.

.EXAMPLE
  cd C:\Users\Jacob\rewired-ketamine
  powershell -NoProfile -ExecutionPolicy Bypass -File .\Update-SpanishLinks.ps1 -DryRun

.EXAMPLE
  .\Update-SpanishLinks.ps1
#>
[CmdletBinding(SupportsShouldProcess = $true)]
param(
    [Parameter(ValueFromRemainingArguments = $false)]
    [string[]]$Root = @('.'),

    [Alias('WhatIfAlias')]
    [switch]$DryRun
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

if ($DryRun) {
    $WhatIfPreference = $true
}

function Get-HablamosPattern {
    # Matches ¡Hablamos Español! and unaccented / no-exclamation variants.
    $nye = [string][char]0x00F1
    $inv = [string][char]0x00A1
    return ($inv + '?Hablamos\s+Espa[n' + $nye + ']ol!?')
}

function Get-HablamosExample {
    return ([string][char]0x00A1 + 'Hablamos Espa' + [char]0x00F1 + 'ol!')
}

function Get-InsuranceLabel([bool]$Spanish) {
    if ($Spanish) {
        return ('Seguro M' + [char]0x00E9 + 'dico')
    }
    return 'Insurance'
}

function Get-NewLine([string]$Text) {
    if ($Text.Contains("`r`n")) { return "`r`n" }
    return "`n"
}

function Read-Utf8NoBom([string]$Path) {
    $utf8 = New-Object System.Text.UTF8Encoding $false
    return [System.IO.File]::ReadAllText($Path, $utf8)
}

function Write-Utf8NoBom([string]$Path, [string]$Text) {
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllText($Path, $Text, $utf8)
}

function Test-HasLinkImport([string]$Text) {
    return ($Text -match 'from\s+[''"]next/link[''"]')
}

function Test-UsesLinkComponent([string]$Text) {
    return ((Test-HasLinkImport $Text) -or ($Text -match '<Link[\s>]'))
}

function Add-LinkImport([string]$Text, [string]$NewLine) {
    if (Test-HasLinkImport $Text) { return $Text }
    $importLine = 'import Link from "next/link";'
    $rx = [regex]'(?s)\A(?<prefix>(?:"use client";[^\S\r\n]*\r?\n(?:\r?\n)?)?(?:import[\s\S]*?;[^\S\r\n]*\r?\n)*)'
    $m = $rx.Match($Text)
    if ($m.Success -and $m.Groups['prefix'].Length -gt 0) {
        $prefix = $m.Groups['prefix'].Value
        # Keep a blank line after the import block if one was already there.
        if ($prefix -match '(\r?\n){2}$') {
            $insert = $prefix.TrimEnd("`r", "`n") + $NewLine + $importLine + $NewLine + $NewLine
        } else {
            $insert = $prefix + $importLine + $NewLine
        }
        return $insert + $Text.Substring($prefix.Length)
    }
    if ($Text -match '^(?<uc>"use client";\s*)') {
        return $Text.Substring(0, $Matches['uc'].Length) + $NewLine + $importLine + $NewLine + $Text.Substring($Matches['uc'].Length)
    }
    return $importLine + $NewLine + $Text
}

function Set-HeroLinks {
    param(
        [string]$Text,
        [bool]$UseAnchor
    )
    $phrase = Get-HablamosPattern
    $openTag = '<p\s+className="text-\[#C9A66B\][^"]*"\s*>'
    $pattern = $openTag + '(?<pre>\s*)(?<phrase>' + $phrase + ')(?<post>\s*)(?<close></p>)'
    $rx = New-Object System.Text.RegularExpressions.Regex $pattern, ([System.Text.RegularExpressions.RegexOptions]::CultureInvariant)
    $sb = New-Object System.Text.StringBuilder
    $last = 0
    $count = 0
    foreach ($m in $rx.Matches($Text)) {
        if ($m.Groups['pre'].Value -match '<') { continue }
        [void]$sb.Append($Text.Substring($last, $m.Index - $last))
        $phraseText = $m.Groups['phrase'].Value
        if ($UseAnchor) {
            $inner = '<a href="/es" className="hover:underline">' + $phraseText + '</a>'
        } else {
            $inner = '<Link href="/es" className="hover:underline">' + $phraseText + '</Link>'
        }
        $openLen = $m.Groups['pre'].Index - $m.Index
        [void]$sb.Append($m.Value.Substring(0, $openLen))
        [void]$sb.Append($m.Groups['pre'].Value)
        [void]$sb.Append($inner)
        [void]$sb.Append($m.Groups['post'].Value)
        [void]$sb.Append($m.Groups['close'].Value)
        $count++
        $last = $m.Index + $m.Length
    }
    [void]$sb.Append($Text.Substring($last))
    return @{ Text = $sb.ToString(); Count = $count }
}

# --- Menu helpers ----------------------------------------------------------

# A single <Link> or <a> opening through its matching close tag (no nesting).
$Script:TagRegex = [regex]'(?s)<(?<tag>Link|a)\s+(?<attrs>(?:=>|[^>])*)>(?<label>[^<]*)</\k<tag>>'
# attrs allow "=>" so arrow-function onClick handlers are not cut off at ">".

function Get-Href([string]$Attrs) {
    $hm = [regex]::Match($Attrs, 'href="([^"]*)"')
    if ($hm.Success) { return $hm.Groups[1].Value }
    return $null
}

function Test-IsSpanishContext([string]$Path, [string]$Text) {
    $norm = $Path.Replace('\', '/')
    if ($norm -match '/es/') { return $true }
    # Root Spanish homepage: src/app/es/page.tsx or app/es/page.tsx
    if ($norm -match '/es/page\.tsx$') { return $true }
    return $false
}

function New-ServiceTag {
    param(
        [string]$ExampleTag,
        [string]$Href,
        [string]$Label
    )
    $m = $Script:TagRegex.Match($ExampleTag)
    if (-not $m.Success) { return $null }
    $attrs = $m.Groups['attrs'].Value
    $attrs = [regex]::Replace($attrs, 'href="[^"]*"', ('href="' + $Href + '"'))
    return ('<' + $m.Groups['tag'].Value + ' ' + $attrs + '>' + $Label + '</' + $m.Groups['tag'].Value + '>')
}

function Get-MatchesOfKind {
    param(
        [string]$Text,
        [string]$Kind,   # Desktop | Mobile | Footer
        [bool]$Spanish
    )
    $found = New-Object System.Collections.Generic.List[object]
    # Limit search range for footer to each Servicios / Services heading block.
    $ranges = @()
    if ($Kind -eq 'Footer') {
        $headRx = [regex]'(?s)<h[34][^>]*>\s*(?:Our Services|Services|Servicios)\s*</h[34]>'
        $heads = $headRx.Matches($Text)
        foreach ($h in $heads) {
            $start = $h.Index + $h.Length
            $nextHead = [regex]::Match($Text.Substring($start), '</?h[34][\s>]')
            $end = if ($nextHead.Success) { $start + $nextHead.Index } else { [Math]::Min($Text.Length, $start + 2000) }
            # Do not treat a Quick Links "Our Services" / "Servicios" *item* as a list heading.
            # The regex only matches h3/h4 text, so Quick Links <li> items are already excluded.
            $ranges += ,@( $start, $end )
        }
    } else {
        $ranges += ,@( 0, $Text.Length )
    }

    $svcSlug = [regex]'^(/es)?/services(/[a-z0-9-]+)?$'
    foreach ($range in $ranges) {
        $start = $range[0]
        $end = $range[1]
        $chunk = $Text.Substring($start, $end - $start)
        foreach ($m in $Script:TagRegex.Matches($chunk)) {
            $href = Get-Href $m.Groups['attrs'].Value
            if (-not $href) { continue }
            if (-not $svcSlug.IsMatch($href)) { continue }
            $attrs = $m.Groups['attrs'].Value
            $label = $m.Groups['label'].Value.Trim()
            if ($Kind -eq 'Desktop') {
                if ($attrs -notmatch 'block px-4') { continue }
            } elseif ($Kind -eq 'Mobile') {
                if ($attrs -notmatch 'onClick') { continue }
                # Skip in-page / non-menu service links that happen to have onClick
                # but are not in the header menu: still OK because we only want
                # setIsMenuOpen closers, which every real mobile nav link has.
                if ($attrs -notmatch 'setIsMenuOpen') { continue }
            } elseif ($Kind -eq 'Footer') {
                # Footer list items are usually wrapped in <li>.
                $abs = $start + $m.Index
                $lookBehind = $Text.Substring([Math]::Max(0, $abs - 80), [Math]::Min(80, $abs))
                if ($lookBehind -notmatch '<li[^>]*>\s*$' -and $m.Value -notmatch '^<li') {
                    # allow if an <li> opens immediately before on the same snippet
                    if ($lookBehind -notmatch '<li[^>]*>') { continue }
                }
            }

            $found.Add([pscustomobject]@{
                Index  = $start + $m.Index
                Length = $m.Length
                Href   = $href
                Attrs  = $attrs
                Label  = $label
                Value  = $m.Value
            })
        }
    }
    return $found
}

function Select-AnchorIndex($Items) {
    # Prefer Cost, then IV vs Spravato, then Spravato, then Home Ketamine, then last slug link.
    $prefs = @(
        '/services/ketamine-therapy-cost',
        '/es/services/ketamine-therapy-cost',
        '/services/iv-ketamine-vs-spravato',
        '/es/services/iv-ketamine-vs-spravato',
        '/services/spravato',
        '/es/services/spravato',
        '/services/home-ketamine',
        '/es/services/home-ketamine',
        '/services/ketamine-infusion',
        '/es/services/ketamine-infusion'
    )
    foreach ($pref in $prefs) {
        $idxs = @()
        for ($i = 0; $i -lt $Items.Count; $i++) {
            if ($Items[$i].Href -eq $pref) { $idxs += $i }
        }
        if ($idxs.Count -gt 0) {
            # Last of a consecutive run of the same href (handles a duplicate Cost line).
            $startRun = $idxs[0]
            $endRun = $idxs[0]
            foreach ($i in $idxs) {
                if ($i -eq $endRun -or $i -eq ($endRun + 1)) { $endRun = $i } else { break }
            }
            # If later non-consecutive matches exist, still use the first run's last item
            # so we insert before the rest of the dropdown.
            return $endRun
        }
    }
    # Fall back to the last item that is a specific service page (not the /services index).
    for ($i = $Items.Count - 1; $i -ge 0; $i--) {
        if ($Items[$i].Href -match '/services/.+') { return $i }
    }
    # Last resort: the index link ("Nuestros Servicios" / "Our Services") so a
    # Spanish mobile menu with only that item still gets an insurance link.
    if ($Items.Count -gt 0) { return ($Items.Count - 1) }
    return $null
}

function Add-InsuranceInKind {
    param(
        [string]$Text,
        [string]$Kind,
        [bool]$Spanish,
        [string]$NewLine
    )
    $items = @(Get-MatchesOfKind -Text $Text -Kind $Kind -Spanish $Spanish)
    if ($items.Count -eq 0) {
        return @{ Text = $Text; Added = 0 }
    }
    foreach ($it in $items) {
        if ($it.Href -match 'ketamine-insurance') {
            return @{ Text = $Text; Added = 0 }
        }
    }
    $anchorIdx = Select-AnchorIndex $items
    if ($null -eq $anchorIdx) {
        return @{ Text = $Text; Added = 0 }
    }
    $anchor = $items[$anchorIdx]
    $href = if ($Spanish) { '/es/services/ketamine-insurance' } else { '/services/ketamine-insurance' }
    $label = Get-InsuranceLabel $Spanish
    $newTag = New-ServiceTag -ExampleTag $anchor.Value -Href $href -Label $label
    if (-not $newTag) {
        return @{ Text = $Text; Added = 0 }
    }

    $insertAt = $anchor.Index + $anchor.Length
    $after = ''
    if ($insertAt -lt $Text.Length) {
        $after = $Text.Substring($insertAt, [Math]::Min(20, $Text.Length - $insertAt))
    }

    $insertion = $newTag
    if ($Kind -eq 'Footer') {
        # Keep the <li> wrapper if the anchor sits inside one.
        $before = $Text.Substring([Math]::Max(0, $anchor.Index - 120), [Math]::Min(120, $anchor.Index))
        $liOpen = [regex]::Match($before, '(?s)(<li[^>]*>)\s*$')
        $afterLi = [regex]::Match($after, '^\s*</li>')
        if ($liOpen.Success -and $afterLi.Success) {
            $indentM = [regex]::Match($before, '(?m)^([ \t]*)<li')
            $indent = if ($indentM.Success) { $indentM.Groups[1].Value } else { '              ' }
            $liCloseLen = $afterLi.Length
            $insertAt = $insertAt + $liCloseLen
            $insertion = $NewLine + $indent + '<li>' + $newTag + '</li>'
        } else {
            # Inline fallback.
            $insertion = $newTag
        }
    } else {
        # If the next character is a new tag on the same line, insert inline.
        # Otherwise insert on the following line with the same indent as the anchor.
        # Same-line only when the next tag is immediately adjacent (no newline).
        if ($after -match '^[ \t]*<') {
            $insertion = $newTag
        } else {
            $lineStart = $Text.LastIndexOf("`n", [Math]::Max(0, $anchor.Index - 1))
            if ($lineStart -lt 0) { $lineStart = -1 }
            $indent = ''
            $slice = $Text.Substring($lineStart + 1, [Math]::Max(0, $anchor.Index - ($lineStart + 1)))
            $im = [regex]::Match($slice, '^[ \t]*')
            if ($im.Success) { $indent = $im.Value }
            $insertion = $NewLine + $indent + $newTag
        }
    }

    $newText = $Text.Substring(0, $insertAt) + $insertion + $Text.Substring($insertAt)
    return @{ Text = $newText; Added = 1 }
}

function Update-FileText {
    param(
        [string]$Path,
        [string]$Text
    )
    $nl = Get-NewLine $Text
    $spanish = Test-IsSpanishContext $Path $Text
    $useAnchor = -not (Test-UsesLinkComponent $Text)
    $changes = New-Object System.Collections.Generic.List[string]
    $heroAdded = 0
    $deskAdded = 0
    $mobAdded = 0
    $footAdded = 0

    $hero = Set-HeroLinks -Text $Text -UseAnchor $useAnchor
    $Text = $hero.Text
    $heroAdded = [int]$hero.Count
    if ($heroAdded -gt 0) { $changes.Add("hero x$heroAdded") }

    $d = Add-InsuranceInKind -Text $Text -Kind Desktop -Spanish $spanish -NewLine $nl
    $Text = $d.Text
    $deskAdded = [int]$d.Added
    if ($deskAdded -gt 0) { $changes.Add('desktop Services') }

    $m = Add-InsuranceInKind -Text $Text -Kind Mobile -Spanish $spanish -NewLine $nl
    $Text = $m.Text
    $mobAdded = [int]$m.Added
    if ($mobAdded -gt 0) { $changes.Add('mobile Services') }

    $f = Add-InsuranceInKind -Text $Text -Kind Footer -Spanish $spanish -NewLine $nl
    $Text = $f.Text
    $footAdded = [int]$f.Added
    if ($footAdded -gt 0) { $changes.Add('footer Services') }

    $importAdded = $false
    if (($heroAdded -gt 0 -or $deskAdded -gt 0 -or $mobAdded -gt 0 -or $footAdded -gt 0) -and -not $useAnchor) {
        $beforeImport = $Text
        $Text = Add-LinkImport $Text $nl
        if ($Text -ne $beforeImport) {
            $importAdded = $true
            $changes.Add('Link import')
        }
    }

    return @{
        Text        = $Text
        Changes     = $changes
        Hero        = $heroAdded
        Desktop     = $deskAdded
        Mobile      = $mobAdded
        Footer      = $footAdded
        ImportAdded = $importAdded
    }
}

function Get-SearchRoots([string]$RootPath) {
    $resolved = (Resolve-Path -LiteralPath $RootPath).Path
    $candidates = @(
        (Join-Path $resolved 'src'),
        (Join-Path $resolved 'app'),
        $resolved
    )
    foreach ($c in $candidates) {
        if (Test-Path -LiteralPath $c) {
            $hasTsx = Get-ChildItem -LiteralPath $c -Filter *.tsx -Recurse -File -ErrorAction SilentlyContinue |
                Select-Object -First 1
            if ($hasTsx) { return $c }
        }
    }
    return $null
}

# --- Main ------------------------------------------------------------------

$hablamosHint = Get-HablamosExample
Write-Host "Rewired Ketamine site updates"
Write-Host ("  1. Hero '{0}' -> /es" -f $hablamosHint)
Write-Host "  2. Add Insurance / Seguro Medico to Services menus"
Write-Host ""

if (-not $WhatIfPreference) {
    Write-Host "Changed files can be undone with:  git checkout -- ."
    Write-Host ""
} else {
    Write-Host "DRY RUN (-WhatIf / -DryRun): no files will be written."
    Write-Host ""
}

$allFiles = New-Object System.Collections.Generic.List[string]
foreach ($r in $Root) {
    if (-not (Test-Path -LiteralPath $r)) {
        Write-Error "Root not found: $r"
        continue
    }
    $search = Get-SearchRoots $r
    if (-not $search) {
        Write-Error "No .tsx files found under '$r'. Run this from the repo root (the folder that contains src\app), or pass -Root."
        continue
    }
    Write-Host "Scanning: $search"
    Get-ChildItem -LiteralPath $search -Filter *.tsx -Recurse -File |
        Where-Object { $_.FullName -notmatch '[\\/]node_modules[\\/]' } |
        ForEach-Object { $allFiles.Add($_.FullName) }
}

$filesChanged = 0
$heroTotal = 0
$deskTotal = 0
$mobTotal = 0
$footTotal = 0
$relRoot = (Get-Location).Path

foreach ($full in ($allFiles | Select-Object -Unique)) {
    $original = Read-Utf8NoBom $full
    $result = Update-FileText -Path $full -Text $original
    if ($result.Text -eq $original) { continue }

    $rel = $full
    foreach ($base in @($relRoot) + @($Root)) {
        try {
            $baseFull = [System.IO.Path]::GetFullPath((Resolve-Path -LiteralPath $base).Path)
            $fullNorm = [System.IO.Path]::GetFullPath($full)
            $prefix = $baseFull.TrimEnd('\', '/') + [System.IO.Path]::DirectorySeparatorChar
            if ($fullNorm.StartsWith($prefix, [System.StringComparison]::OrdinalIgnoreCase)) {
                $rel = $fullNorm.Substring($prefix.Length) -replace '\\', '/'
                break
            }
        } catch { }
    }

    $summary = ($result.Changes -join ', ')
    if ($WhatIfPreference) {
        Write-Host ("Would change: {0}  ({1})" -f $rel, $summary)
    } else {
        Write-Utf8NoBom $full $result.Text
        Write-Host ("Changed: {0}  ({1})" -f $rel, $summary)
    }
    $filesChanged++
    $heroTotal += $result.Hero
    $deskTotal += $result.Desktop
    $mobTotal  += $result.Mobile
    $footTotal += $result.Footer
}

Write-Host ""
$verb = if ($WhatIfPreference) { 'Would change' } else { 'Changed' }
Write-Host ("{0} {1} file(s)." -f $verb, $filesChanged)
Write-Host ("  Hero badges linked:              {0}" -f $heroTotal)
Write-Host ("  Desktop Services links added:    {0}" -f $deskTotal)
Write-Host ("  Mobile Services links added:     {0}" -f $mobTotal)
Write-Host ("  Footer Services links added:     {0}" -f $footTotal)
