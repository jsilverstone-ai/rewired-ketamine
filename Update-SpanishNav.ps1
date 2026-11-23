#Requires -Version 5.1
<#
.SYNOPSIS
  Fix Spanish-site menus so condition and content links go to their own pages,
  fill in missing dropdown items, and wire Spanish mobile menu buttons that
  currently do nothing.

.DESCRIPTION
  Run from the repo root (the folder that contains src\app), or pass -Root.

  Site files are read and written as UTF-8 without a BOM. Line endings are
  preserved. This script does not create backup copies; if the repo is a git
  checkout, undo with:  git checkout -- .

  Running the script a second time is safe: already-correct hrefs, complete
  dropdowns, and wired mobile menus are left alone.

  This script does not touch English pages, and it does not change the hero
  "Hablamos Espanol" badges (that is Update-SpanishLinks.ps1). If Insurance
  / Seguro Medico is already in a Services menu, it is left in place; if it
  is missing, it is added with the other missing Services items.

.PARAMETER Root
  Repo root, or a folder that contains an app\ or src\ directory.
  Defaults to the current directory. May be passed more than once.

.PARAMETER DryRun
  Show what would change without writing files. Same as -WhatIf.

.EXAMPLE
  cd C:\Users\jsilv\rewired-ketamine
  powershell -NoProfile -ExecutionPolicy Bypass -File .\Update-SpanishNav.ps1 -DryRun

.EXAMPLE
  .\Update-SpanishNav.ps1
#>
[CmdletBinding(SupportsShouldProcess = $true)]
param(
    [Parameter(ValueFromRemainingArguments = $false)]
    [string[]]$Root = @('.'),

    [switch]$DryRun
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

if ($DryRun) {
    $WhatIfPreference = $true
}

function Get-U([int]$Code) { return [string][char]$Code }

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

function Test-IsSpanishPath([string]$Path) {
    $norm = $Path.Replace('\', '/')
    if ($norm -match '/es/page\.tsx$') { return $true }
    if ($norm -match '/es/') { return $true }
    return $false
}

function New-ItemObj([string]$Label, [string]$Href, [string]$Kind) {
    return [pscustomobject]@{ Label = $Label; Href = $Href; Kind = $Kind }
}

function Get-TreatmentCatalog {
    $o = Get-U 0x00F3
    return @(
        (New-ItemObj 'Todos los Tratamientos' '/es/treatments' 'index'),
        (New-ItemObj ("Depresi{0}n" -f $o) '/es/treatments/depression' 'item'),
        (New-ItemObj 'Ansiedad' '/es/treatments/anxiety' 'item'),
        (New-ItemObj 'TEPT' '/es/treatments/ptsd' 'item'),
        (New-ItemObj 'Agotamiento' '/es/treatments/burnout' 'item'),
        (New-ItemObj 'Niebla Mental' '/es/treatments/mental-fogginess' 'item'),
        (New-ItemObj ("Motivaci{0}n" -f $o) '/es/treatments/motivation' 'item'),
        (New-ItemObj 'Trastorno Alimentario' '/es/treatments/eating-disorder' 'item'),
        (New-ItemObj ("Depresi{0}n Postparto" -f $o) '/es/treatments/postpartum-depression' 'item'),
        (New-ItemObj 'TOC' '/es/treatments/ocd' 'item'),
        (New-ItemObj ("Dolor Cr{0}nico" -f $o) '/es/treatments/chronic-pain' 'item'),
        (New-ItemObj ("Cefaleas por Tensi{0}n" -f (Get-U 0x00F3)) '/es/treatments/tension-headaches' 'item'),
        (New-ItemObj ("Cuidado Paliativo y Compasi{0}n" -f $o) '/es/treatments/palliative-compassion-care' 'item')
    )
}

function Get-ServiceCatalog {
    $o = Get-U 0x00F3
    $e = Get-U 0x00E9
    $u = Get-U 0x00FA
    return @(
        (New-ItemObj 'Todos los Servicios' '/es/services' 'index'),
        (New-ItemObj ("Infusi{0}n de Ketamina" -f $u) '/es/services/ketamine-infusion' 'item'),
        (New-ItemObj 'Ketamina en Casa' '/es/services/home-ketamine' 'item'),
        (New-ItemObj 'Spravato' '/es/services/spravato' 'item'),
        (New-ItemObj 'IV vs Spravato' '/es/services/iv-ketamine-vs-spravato' 'item'),
        (New-ItemObj 'Costo' '/es/services/ketamine-therapy-cost' 'item'),
        (New-ItemObj ("Seguro M{0}dico" -f $e) '/es/services/ketamine-insurance' 'item'),
        (New-ItemObj 'Bienestar Funcional' '/es/services/functional-wellness' 'item'),
        (New-ItemObj ("Manejo M{0}dico" -f $e) '/es/services/medical-management' 'item'),
        (New-ItemObj ("Terapia de Conversaci{0}n" -f $o) '/es/services/talk-therapy' 'item')
    )
}

function Get-ContentCatalog {
    return @(
        (New-ItemObj 'Blog' '/es/content/blog' 'item'),
        (New-ItemObj 'Videos' '/es/content/videos' 'item'),
        (New-ItemObj 'Ketamina en las Noticias' '/es/content/ketamine-in-the-news' 'item')
    )
}

function Get-RetargetMap {
    $map = @{}
    foreach ($item in @((Get-TreatmentCatalog) + (Get-ServiceCatalog) + (Get-ContentCatalog))) {
        if ($item.Kind -eq 'index') { continue }
        $map[$item.Label] = $item.Href
    }
    # Card heading on the Spanish content index uses a shorter title.
    $map['En las Noticias'] = '/es/content/ketamine-in-the-news'
    return $map
}

# Labels that must keep pointing at the section index.
function Test-IsIndexLabel([string]$Label) {
    $t = $Label.Trim()
    if ($t -eq 'Todos los Tratamientos') { return $true }
    if ($t -eq 'Tratamientos') { return $true }
    if ($t -eq 'Todos los Servicios') { return $true }
    if ($t -eq 'Nuestros Servicios') { return $true }
    if ($t -eq 'Servicios') { return $true }
    if ($t -eq 'Contenido') { return $true }
    return $false
}

function Get-GenericParent([string]$Href) {
    if (-not $Href) { return $null }
    $h = $Href.TrimEnd('/')
    if ($h -eq '/es/treatments') { return '/es/treatments' }
    if ($h -eq '/es/content') { return '/es/content' }
    return $null
}

# A single <Link> or <a> opening through its matching close tag (no nesting).
$Script:TagRegex = [regex]'(?s)<(?<tag>Link|a)\s+(?<attrs>(?:=>|[^>])*)>(?<label>[^<]*)</\k<tag>>'

function Get-Href([string]$Attrs) {
    $hm = [regex]::Match($Attrs, 'href="([^"]*)"')
    if ($hm.Success) { return $hm.Groups[1].Value }
    $hm = [regex]::Match($Attrs, "href='([^']*)'")
    if ($hm.Success) { return $hm.Groups[1].Value }
    return $null
}

function Set-HrefInAttrs([string]$Attrs, [string]$Href) {
    if ($Attrs -match 'href="[^"]*"') {
        return [regex]::Replace($Attrs, 'href="[^"]*"', ('href="' + $Href + '"'), 1)
    }
    if ($Attrs -match "href='[^']*'") {
        return [regex]::Replace($Attrs, "href='[^']*'", ("href='" + $Href + "'"), 1)
    }
    return $Attrs
}

function Get-BestLabel([string]$Text, $Map) {
    # Prefer the longest label that the text starts with (after whitespace).
    $trimmed = $Text.Trim()
    if (-not $trimmed) { return $null }
    $best = $null
    $bestLen = -1
    foreach ($key in $Map.Keys) {
        if ($trimmed.StartsWith($key) -and $key.Length -gt $bestLen) {
            # Do not treat "Depresion" as a match for a longer distinct heading later.
            $best = $key
            $bestLen = $key.Length
        }
    }
    if ($best) { return $best }
    # Heading form: >Blog</h2>
    foreach ($key in $Map.Keys) {
        $esc = [regex]::Escape($key)
        if ([regex]::IsMatch($Text, ('>(\s*)' + $esc + '(\s*)</h[1-6]>'))) {
            if ($key.Length -gt $bestLen) {
                $best = $key
                $bestLen = $key.Length
            }
        }
    }
    return $best
}

function Repair-SimpleLinks {
    param([string]$Text, $Map)
    $sb = New-Object System.Text.StringBuilder
    $last = 0
    $count = 0
    foreach ($m in $Script:TagRegex.Matches($Text)) {
        $href = Get-Href $m.Groups['attrs'].Value
        $parent = Get-GenericParent $href
        if (-not $parent) { continue }
        $label = $m.Groups['label'].Value
        if (Test-IsIndexLabel $label) { continue }
        $key = Get-BestLabel $label $Map
        if (-not $key) { continue }
        $dest = $Map[$key]
        if ($href -eq $dest) { continue }
        $newAttrs = Set-HrefInAttrs $m.Groups['attrs'].Value $dest
        $newTag = '<' + $m.Groups['tag'].Value + ' ' + $newAttrs + '>' + $m.Groups['label'].Value + '</' + $m.Groups['tag'].Value + '>'
        [void]$sb.Append($Text.Substring($last, $m.Index - $last))
        [void]$sb.Append($newTag)
        $last = $m.Index + $m.Length
        $count++
    }
    [void]$sb.Append($Text.Substring($last))
    return @{ Text = $sb.ToString(); Count = $count }
}

function Repair-ObjectLiterals {
    param([string]$Text, $Map)
    $count = 0
    # Longest labels first so "Depresion Postparto" wins over "Depresion".
    $keys = @($Map.Keys | Sort-Object { $_.Length } -Descending)
    foreach ($key in $keys) {
        $dest = $Map[$key]
        $esc = [regex]::Escape($key)
        $patterns = @(
            ('title:\s*(?<q>["''])' + $esc + '\k<q>\s*,\s*href:\s*(?<q2>["''])(?<href>/es/(?:treatments|content)/?)\k<q2>'),
            ('href:\s*(?<q2>["''])(?<href>/es/(?:treatments|content)/?)\k<q2>\s*,\s*title:\s*(?<q>["''])' + $esc + '\k<q>')
        )
        foreach ($pat in $patterns) {
            $rx = [regex]$pat
            $sb = New-Object System.Text.StringBuilder
            $last = 0
            foreach ($m in $rx.Matches($Text)) {
                $href = $m.Groups['href'].Value
                $parent = Get-GenericParent $href
                $already = ($href.TrimEnd('/') -eq $dest.TrimEnd('/'))
                [void]$sb.Append($Text.Substring($last, $m.Index - $last))
                if (-not $parent -or $already) {
                    [void]$sb.Append($m.Value)
                } else {
                    if ($m.Value -match '^\s*title:') {
                        $repl = 'title: ' + $m.Groups['q'].Value + $key + $m.Groups['q'].Value + ', href: ' + $m.Groups['q2'].Value + $dest + $m.Groups['q2'].Value
                    } else {
                        $repl = 'href: ' + $m.Groups['q2'].Value + $dest + $m.Groups['q2'].Value + ', title: ' + $m.Groups['q'].Value + $key + $m.Groups['q'].Value
                    }
                    [void]$sb.Append($repl)
                    $count++
                }
                $last = $m.Index + $m.Length
            }
            [void]$sb.Append($Text.Substring($last))
            $Text = $sb.ToString()
        }
    }
    return @{ Text = $Text; Count = $count }
}

function Get-MatchingCloseIndex {
    param(
        [string]$Text,
        [int]$OpenIndex,
        [string]$Tag
    )
    # $OpenIndex is the index of '<'. Find end of opening tag, then match.
    $gt = $Text.IndexOf('>', $OpenIndex)
    if ($gt -lt 0) { return $null }
    # Self-closing
    if ($gt -gt $OpenIndex -and $Text[$gt - 1] -eq '/') { return $gt }
    $pos = $gt + 1
    $depth = 1
    $openPat = [regex]('<' + [regex]::Escape($Tag) + '(?:\s|/|>)')
    $closePat = [regex]('</' + [regex]::Escape($Tag) + '\s*>')
    while ($pos -lt $Text.Length -and $depth -gt 0) {
        $slice = $Text.Substring($pos)
        $om = $openPat.Match($slice)
        $cm = $closePat.Match($slice)
        $oAt = if ($om.Success) { $om.Index } else { [int]::MaxValue }
        $cAt = if ($cm.Success) { $cm.Index } else { [int]::MaxValue }
        if ($oAt -eq [int]::MaxValue -and $cAt -eq [int]::MaxValue) { return $null }
        if ($oAt -lt $cAt) {
            $depth++
            $pos = $pos + $om.Index + $om.Length
        } else {
            $depth--
            if ($depth -eq 0) {
                return ($pos + $cm.Index + $cm.Length - 1)
            }
            $pos = $pos + $cm.Index + $cm.Length
        }
    }
    return $null
}

function Repair-NestedCards {
    param([string]$Text, $Map)
    $openRx = [regex]'<(?<tag>Link|a)\s+(?<attrs>(?:=>|[^>])*)>'
    $sb = New-Object System.Text.StringBuilder
    $last = 0
    $count = 0
    foreach ($m in $openRx.Matches($Text)) {
        if ($m.Index -lt $last) { continue }
        $tag = $m.Groups['tag'].Value
        $attrs = $m.Groups['attrs'].Value
        $href = Get-Href $attrs
        $parent = Get-GenericParent $href
        if (-not $parent) { continue }
        # Skip simple text-only tags (already handled); only rewrite nested ones.
        $afterOpen = $m.Index + $m.Length
        if ($afterOpen -ge $Text.Length) { continue }
        $nextChunk = $Text.Substring($afterOpen, [Math]::Min(80, $Text.Length - $afterOpen))
        if ($nextChunk -notmatch '^\s*<') { continue }
        $closeEnd = Get-MatchingCloseIndex -Text $Text -OpenIndex $m.Index -Tag $tag
        if ($null -eq $closeEnd) { continue }
        # closeEnd is the last char of the closing tag. Inner is between open end and close start.
        $closeTag = '</' + $tag
        $closeStart = $Text.LastIndexOf($closeTag, $closeEnd)
        if ($closeStart -le $afterOpen) { continue }
        $inner = $Text.Substring($afterOpen, $closeStart - $afterOpen)
        $plain = [regex]::Replace($inner, '<[^>]+>', '')
        $plain = [regex]::Replace($plain, '\s+', ' ').Trim()
        if (Test-IsIndexLabel $plain) { continue }
        $key = Get-BestLabel ($plain + ' ' + $inner) $Map
        if (-not $key) {
            $key = Get-BestLabel $inner $Map
        }
        if (-not $key) { continue }
        $dest = $Map[$key]
        if ($href -eq $dest) { continue }
        $newOpen = '<' + $tag + ' ' + (Set-HrefInAttrs $attrs $dest) + '>'
        [void]$sb.Append($Text.Substring($last, $m.Index - $last))
        [void]$sb.Append($newOpen)
        $last = $m.Index + $m.Length
        $count++
    }
    [void]$sb.Append($Text.Substring($last))
    return @{ Text = $sb.ToString(); Count = $count }
}

function Add-AgotamientoToArray {
    param([string]$Text, [string]$NewLine)
    if ($Text -match 'title:\s*["'']Agotamiento["'']') {
        return @{ Text = $Text; Count = 0 }
    }
    # Only when TEPT is a treatments (not FAQ) entry.
    $rx = [regex]'\{[^{}]*title:\s*["'']TEPT["''][^{}]*href:\s*["'']/es/treatments(?:/ptsd)?["''][^{}]*\}'
    $m = $rx.Match($Text)
    if (-not $m.Success) {
        # href may come first
        $rx = [regex]'\{[^{}]*href:\s*["'']/es/treatments(?:/ptsd)?["''][^{}]*title:\s*["'']TEPT["''][^{}]*\}'
        $m = $rx.Match($Text)
    }
    if (-not $m.Success) { return @{ Text = $Text; Count = 0 } }

    $obj = $m.Value
    $indentM = $null
    $lineStart = $Text.LastIndexOf("`n", [Math]::Max(0, $m.Index - 1))
    if ($lineStart -ge 0) {
        $indentM = [regex]::Match($Text.Substring($lineStart + 1, $m.Index - ($lineStart + 1)), '^[ \t]*')
    }
    $indent = if ($indentM -and $indentM.Success) { $indentM.Value } else { '  ' }

    $o = Get-U 0x00F3
    # Reuse the trailing comma style of the TEPT object if present; always insert a comma on the new object.
    $newObj = $indent + '{ title: "Agotamiento", href: "/es/treatments/burnout", desc: "Apoyo para el agotamiento profesional y la fatiga persistente." },'

    $insertAt = $m.Index + $m.Length
    $after = if ($insertAt -lt $Text.Length) { $Text.Substring($insertAt, [Math]::Min(20, $Text.Length - $insertAt)) } else { '' }
    $comma = [regex]::Match($after, '^[ \t]*,')
    if ($comma.Success) {
        $insertAt = $insertAt + $comma.Length
    } else {
        # The TEPT object has no trailing comma; add one so the new object is valid.
        $Text = $Text.Substring(0, $insertAt) + ',' + $Text.Substring($insertAt)
        $insertAt = $insertAt + 1
    }
    $insertion = $NewLine + $newObj
    $newText = $Text.Substring(0, $insertAt) + $insertion + $Text.Substring($insertAt)
    return @{ Text = $newText; Count = 1 }
}

function New-MenuTag {
    param(
        [string]$ExampleTag,
        [string]$Href,
        [string]$Label
    )
    $m = $Script:TagRegex.Match($ExampleTag)
    if (-not $m.Success) { return $null }
    $attrs = Set-HrefInAttrs $m.Groups['attrs'].Value $Href
    return ('<' + $m.Groups['tag'].Value + ' ' + $attrs + '>' + $Label + '</' + $m.Groups['tag'].Value + '>')
}

function Get-DivContentRange {
    param([string]$Text, [int]$DivOpenIndex)
    $gt = $Text.IndexOf('>', $DivOpenIndex)
    if ($gt -lt 0) { return $null }
    $closeEnd = Get-MatchingCloseIndex -Text $Text -OpenIndex $DivOpenIndex -Tag 'div'
    if ($null -eq $closeEnd) { return $null }
    $closeTag = '</div'
    $closeStart = $Text.LastIndexOf($closeTag, $closeEnd)
    if ($closeStart -le $gt) { return $null }
    return @{ OpenEnd = ($gt + 1); CloseStart = $closeStart; CloseEnd = $closeEnd }
}

function Complete-OneDropdown {
    param(
        [string]$Text,
        [int]$ButtonIndex,
        $Catalog,
        [string]$NewLine,
        [ref]$AddedRef
    )
    # Find </button> after ButtonIndex
    $btnClose = $Text.IndexOf('</button>', $ButtonIndex)
    if ($btnClose -lt 0) { return $Text }
    $searchFrom = $btnClose + 9
    $searchTo = [Math]::Min($Text.Length, $searchFrom + 800)
    $window = $Text.Substring($searchFrom, $searchTo - $searchFrom)
    # Must be the hover dropdown that follows this button.
    $abs = [regex]::Match($window, '<div\s+className="absolute left-0 top-full')
    if (-not $abs.Success) { return $Text }
    $afterAbs = $searchFrom + $abs.Index
    $innerWinEnd = [Math]::Min($Text.Length, $afterAbs + 400)
    $innerSlice = $Text.Substring($afterAbs, $innerWinEnd - $afterAbs)
    $inner = [regex]::Match($innerSlice, '<div\s+className="py-2[^"]*"')
    if (-not $inner.Success) { return $Text }
    $divOpen = $afterAbs + $inner.Index
    $range = Get-DivContentRange -Text $Text -DivOpenIndex $divOpen
    if (-not $range) { return $Text }
    $content = $Text.Substring($range.OpenEnd, $range.CloseStart - $range.OpenEnd)
    if ($content -match '\.map\s*\(') { return $Text }

    $existing = @()
    foreach ($m in $Script:TagRegex.Matches($content)) {
        $href = Get-Href $m.Groups['attrs'].Value
        $existing += [pscustomobject]@{
            Index  = $range.OpenEnd + $m.Index
            Length = $m.Length
            Href   = $href
            Label  = $m.Groups['label'].Value.Trim()
            Value  = $m.Value
        }
    }
    if ($existing.Count -eq 0) { return $Text }

    foreach ($item in $Catalog) {
        $already = $false
        foreach ($ex in $existing) {
            if ($ex.Href -eq $item.Href) { $already = $true; break }
            if ($ex.Label -eq $item.Label) { $already = $true; break }
        }
        if ($already) { continue }

        # Find the last already-present canonical predecessor.
        $predHref = $null
        foreach ($prev in $Catalog) {
            if ($prev.Href -eq $item.Href) { break }
            $predHref = $prev.Href
        }
        $anchor = $null
        if ($predHref) {
            foreach ($ex in $existing) {
                if ($ex.Href -eq $predHref) { $anchor = $ex }
            }
        }
        if (-not $anchor) { $anchor = $existing[0] }

        $newTag = New-MenuTag -ExampleTag $anchor.Value -Href $item.Href -Label $item.Label
        if (-not $newTag) { continue }

        $insertAt = $anchor.Index + $anchor.Length
        $after = ''
        if ($insertAt -lt $Text.Length) {
            $after = $Text.Substring($insertAt, [Math]::Min(20, $Text.Length - $insertAt))
        }
        if ($after -match '^[ \t]*<') {
            $insertion = $newTag
        } else {
            $lineStart = $Text.LastIndexOf("`n", [Math]::Max(0, $anchor.Index - 1))
            if ($lineStart -lt 0) { $lineStart = -1 }
            $slice = $Text.Substring($lineStart + 1, [Math]::Max(0, $anchor.Index - ($lineStart + 1)))
            $im = [regex]::Match($slice, '^[ \t]*')
            $indent = if ($im.Success) { $im.Value } else { '                  ' }
            $insertion = $NewLine + $indent + $newTag
        }
        $Text = $Text.Substring(0, $insertAt) + $insertion + $Text.Substring($insertAt)
        $AddedRef.Value = $AddedRef.Value + 1
        # Recurse/re-run from the same button so later items see updated indexes.
        return (Complete-OneDropdown -Text $Text -ButtonIndex $ButtonIndex -Catalog $Catalog -NewLine $NewLine -AddedRef $AddedRef)
    }
    return $Text
}

function Complete-Dropdowns {
    param([string]$Text, [string]$NewLine)
    $added = 0
    $addedRef = [ref]$added
    $groups = @(
        @{ Pattern = '(?s)<button(?:=>|[^>])*>\s*Tratamientos\s*<'; Catalog = (Get-TreatmentCatalog) },
        @{ Pattern = '(?s)<button(?:=>|[^>])*>\s*Nuestros Servicios\s*<'; Catalog = (Get-ServiceCatalog) },
        @{ Pattern = '(?s)<button(?:=>|[^>])*>\s*Contenido\s*<'; Catalog = (Get-ContentCatalog) }
    )
    foreach ($g in $groups) {
        $rx = [regex]$g.Pattern
        # Collect indexes first; each completion may grow the file but keeps the button start stable
        # for earlier buttons. After a change, re-find remaining matches of this pattern.
        $guard = 0
        while ($guard -lt 20) {
            $guard++
            $before = $addedRef.Value
            $matches = @($rx.Matches($Text))
            $did = $false
            foreach ($m in $matches) {
                $newText = Complete-OneDropdown -Text $Text -ButtonIndex $m.Index -Catalog $g.Catalog -NewLine $NewLine -AddedRef $addedRef
                if ($newText -ne $Text) {
                    $Text = $newText
                    $did = $true
                    break
                }
            }
            if (-not $did) { break }
        }
    }
    return @{ Text = $Text; Count = $addedRef.Value }
}

function Test-ExportsMetadata([string]$Text) {
    if ($Text -match '(?m)^export\s+(async\s+)?function\s+generate(Metadata|StaticParams|Viewport)\b') { return $true }
    if ($Text -match '(?m)^export\s+const\s+metadata\b') { return $true }
    return $false
}

function Add-UseClient([string]$Text, [string]$NewLine) {
    if ($Text -match '(?m)^["'']use client["'']\s*;') { return $Text }
    return ('"use client";' + $NewLine + $NewLine + $Text)
}

function Add-UseStateImport([string]$Text, [string]$NewLine) {
    if ($Text -match 'useState') {
        # Already imported or used; if used but not imported, still try to add.
        if ($Text -match 'from\s+["'']react["'']') {
            if ($Text -match '\{[^}]*\buseState\b[^}]*\}\s*from\s+["'']react["'']') { return $Text }
        } else {
            # useState appears (we will add the hook) but no react import yet.
        }
    }
    # import { foo } from "react"  -> add useState
    $rx = [regex]'import\s+\{([^}]+)\}\s+from\s+["'']react["'']\s*;'
    $m = $rx.Match($Text)
    if ($m.Success) {
        $inside = $m.Groups[1].Value
        if ($inside -match '\buseState\b') { return $Text }
        $newInside = $inside.TrimEnd()
        if ($newInside -and $newInside[-1] -ne ',') {
            $newInside = $newInside + ', useState'
        } else {
            $newInside = $newInside + ' useState'
        }
        return $Text.Substring(0, $m.Groups[1].Index) + $newInside + $Text.Substring($m.Groups[1].Index + $m.Groups[1].Length)
    }
    # import React, { foo } from "react"
    $rx2 = [regex]'import\s+React\s*,\s*\{([^}]+)\}\s+from\s+["'']react["'']\s*;'
    $m2 = $rx2.Match($Text)
    if ($m2.Success) {
        $inside = $m2.Groups[1].Value
        if ($inside -match '\buseState\b') { return $Text }
        $newInside = $inside.TrimEnd().TrimEnd(',') + ', useState'
        return $Text.Substring(0, $m2.Groups[1].Index) + $newInside + $Text.Substring($m2.Groups[1].Index + $m2.Groups[1].Length)
    }
    # import React from "react"
    $rx3 = [regex]'import\s+React\s+from\s+["'']react["'']\s*;'
    $m3 = $rx3.Match($Text)
    if ($m3.Success) {
        $newImp = 'import React, { useState } from "react";'
        return $Text.Substring(0, $m3.Index) + $newImp + $Text.Substring($m3.Index + $m3.Length)
    }
    # Insert a new import after the last import or after use client.
    $importLine = 'import { useState } from "react";'
    $rxImp = [regex]'(?s)\A(?<prefix>(?:"use client";[^\S\r\n]*\r?\n(?:\r?\n)?)?(?:import[\s\S]*?;[^\S\r\n]*\r?\n)*)'
    $mi = $rxImp.Match($Text)
    if ($mi.Success -and $mi.Groups['prefix'].Length -gt 0) {
        $prefix = $mi.Groups['prefix'].Value
        if ($prefix -match '(\r?\n){2}$') {
            $insert = $prefix.TrimEnd("`r", "`n") + $NewLine + $importLine + $NewLine + $NewLine
        } else {
            $insert = $prefix + $importLine + $NewLine
        }
        return $insert + $Text.Substring($prefix.Length)
    }
    return $importLine + $NewLine + $Text
}

function Add-MenuState([string]$Text, [string]$NewLine) {
    if ($Text -match 'isMenuOpen') { return $Text }
    $rx = [regex]'export default function \w+\s*\([^)]*\)\s*\{'
    $m = $rx.Match($Text)
    if (-not $m.Success) { return $Text }
    $insertAt = $m.Index + $m.Length
    # Indent: one step past the function line.
    $lineStart = $Text.LastIndexOf("`n", [Math]::Max(0, $m.Index - 1))
    $fnIndent = ''
    if ($lineStart -ge 0) {
        $im = [regex]::Match($Text.Substring($lineStart + 1, $m.Index - ($lineStart + 1)), '^[ \t]*')
        if ($im.Success) { $fnIndent = $im.Value }
    }
    $indent = $fnIndent + '  '
    $stmt = $NewLine + $indent + 'const [isMenuOpen, setIsMenuOpen] = useState(false);'
    return $Text.Substring(0, $insertAt) + $stmt + $Text.Substring($insertAt)
}

function Get-EnglishSwitcherHref([string]$Text) {
    foreach ($m in $Script:TagRegex.Matches($Text)) {
        $label = $m.Groups['label'].Value.Trim()
        if ($label -eq 'English' -or $label -eq 'En') {
            $href = Get-Href $m.Groups['attrs'].Value
            if ($href) { return $href }
        }
    }
    return '/'
}

function Get-UbicacionLabel { return ('Ubicaci{0}n' -f (Get-U 0x00F3)) }
function Get-SeguroLabel { return ('Seguro M{0}dico' -f (Get-U 0x00E9)) }
function Get-AbrirMenuLabel { return ('Abrir men{0}' -f (Get-U 0x00FA)) }

function Add-MobilePanel {
    param([string]$Text, [string]$NewLine)
    if ($Text -match 'isMenuOpen\s*&&') { return $Text }
    $hdr = [regex]::Match($Text, '(?s)<header\b[^>]*>.*?</header>')
    if (-not $hdr.Success) { return $Text }
    $header = $hdr.Value
    $close = $header.LastIndexOf('</header>')
    if ($close -lt 0) { return $Text }
    $lineStart = $header.LastIndexOf("`n", [Math]::Max(0, $close - 1))
    $indent = '      '
    if ($lineStart -ge 0) {
        $im = [regex]::Match($header.Substring($lineStart + 1, $close - ($lineStart + 1)), '^[ \t]*')
        if ($im.Success) { $indent = $im.Value }
    }
    $inner = $indent + '  '
    $link = $inner + '    '
    # Insert at the start of the </header> line so its indent is not left behind.
    $insertAtInHeader = if ($lineStart -ge 0) { $lineStart + 1 } else { $close }
    $en = Get-EnglishSwitcherHref $Text
    $ubic = Get-UbicacionLabel
    $seguro = Get-SeguroLabel
    $lines = @(
        ($inner + '{isMenuOpen && ('),
        ($inner + '  <div className="md:hidden bg-[#0B1D36] border-t border-white/10">'),
        ($inner + '    <div className="px-6 py-4 space-y-3">'),
        ($link + '<Link href="/es" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Inicio</Link>'),
        ($link + '<Link href="/es/services" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Nuestros Servicios</Link>'),
        ($link + '<Link href="/es/services/ketamine-insurance" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>' + $seguro + '</Link>'),
        ($link + '<Link href="/es/treatments" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Tratamientos</Link>'),
        ($link + '<Link href="/es/providers" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Proveedores</Link>'),
        ($link + '<Link href="/es/content" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Contenido</Link>'),
        ($link + '<Link href="/es/location" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>' + $ubic + '</Link>'),
        ($link + '<Link href="/es/faq" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Preguntas Frecuentes</Link>'),
        ($link + '<Link href="/es/#contact" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Contacto</Link>'),
        ($link + '<Link href="' + $en + '" className="block py-2 text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>English</Link>'),
        ($inner + '    </div>'),
        ($inner + '  </div>'),
        ($inner + ')}')
    )
    $block = [string]::Join($NewLine, $lines) + $NewLine + $indent
    $newHeader = $header.Substring(0, $insertAtInHeader) + $block + $header.Substring($close)
    return $Text.Substring(0, $hdr.Index) + $newHeader + $Text.Substring($hdr.Index + $hdr.Length)
}

function Wire-Hamburger {
    param([string]$Text)
    $abrir = Get-AbrirMenuLabel
    # Button with hamburger path and no onClick, typically lg:hidden or md:hidden.
    $rx = [regex]('(?s)<button\s+(?<attrs>(?:=>|[^>])*)>(?<inner>(?:(?!</button>).)*M4 6h16M4 12h16M4 18h16(?:(?!</button>).)*)</button>')
    $m = $rx.Match($Text)
    if (-not $m.Success) { return $Text }
    $attrs = $m.Groups['attrs'].Value
    if ($attrs -match 'onClick') { return $Text }
    $newAttrs = $attrs
    if ($newAttrs -match 'lg:hidden') {
        $newAttrs = $newAttrs.Replace('lg:hidden', 'md:hidden')
    }
    if ($newAttrs -notmatch 'aria-label=') {
        $newAttrs = $newAttrs.TrimEnd() + (' aria-label="{0}"' -f $abrir)
    }
    if ($newAttrs -notmatch 'aria-expanded') {
        $newAttrs = $newAttrs.TrimEnd() + ' aria-expanded={isMenuOpen}'
    }
    $newAttrs = $newAttrs.TrimEnd() + ' onClick={() => setIsMenuOpen(!isMenuOpen)}'
    $newBtn = '<button ' + $newAttrs.Trim() + '>' + $m.Groups['inner'].Value + '</button>'
    return $Text.Substring(0, $m.Index) + $newBtn + $Text.Substring($m.Index + $m.Length)
}

function Test-HasDeadHamburger([string]$Text) {
    if ($Text -notmatch 'M4 6h16M4 12h16M4 18h16') { return $false }
    if ($Text -match 'setIsMenuOpen') { return $false }
    return $true
}

function Repair-MobileMenu {
    param([string]$Text, [string]$NewLine, [string]$Path)
    if (-not (Test-HasDeadHamburger $Text)) {
        return @{ Text = $Text; Wired = $false; Skipped = $false }
    }
    if (Test-ExportsMetadata $Text) {
        return @{ Text = $Text; Wired = $false; Skipped = $true }
    }
    $Text = Add-UseClient $Text $NewLine
    $Text = Add-UseStateImport $Text $NewLine
    $Text = Add-MenuState $Text $NewLine
    $Text = Wire-Hamburger $Text
    $Text = Add-MobilePanel -Text $Text -NewLine $NewLine
    return @{ Text = $Text; Wired = $true; Skipped = $false }
}

function Update-FileText {
    param([string]$Path, [string]$Text)
    $nl = Get-NewLine $Text
    $map = Get-RetargetMap
    $changes = New-Object System.Collections.Generic.List[string]
    $hrefCount = 0
    $objCount = 0
    $cardCount = 0
    $arrayCount = 0
    $dropCount = 0
    $wired = $false
    $skippedMobile = $false

    $simple = Repair-SimpleLinks -Text $Text -Map $map
    $Text = $simple.Text
    $hrefCount = [int]$simple.Count

    $obj = Repair-ObjectLiterals -Text $Text -Map $map
    $Text = $obj.Text
    $objCount = [int]$obj.Count

    $cards = Repair-NestedCards -Text $Text -Map $map
    $Text = $cards.Text
    $cardCount = [int]$cards.Count

    $arr = Add-AgotamientoToArray -Text $Text -NewLine $nl
    $Text = $arr.Text
    $arrayCount = [int]$arr.Count

    $drop = Complete-Dropdowns -Text $Text -NewLine $nl
    $Text = $drop.Text
    $dropCount = [int]$drop.Count

    $mob = Repair-MobileMenu -Text $Text -NewLine $nl -Path $Path
    $Text = $mob.Text
    $wired = [bool]$mob.Wired
    $skippedMobile = [bool]$mob.Skipped

    if ($hrefCount -gt 0) { $changes.Add("hrefs x$hrefCount") }
    if ($objCount -gt 0) { $changes.Add("data hrefs x$objCount") }
    if ($cardCount -gt 0) { $changes.Add("cards x$cardCount") }
    if ($arrayCount -gt 0) { $changes.Add('Agotamiento in data') }
    if ($dropCount -gt 0) { $changes.Add("dropdown +$dropCount") }
    if ($wired) { $changes.Add('mobile menu wired') }
    if ($skippedMobile) { $changes.Add('mobile skipped (has metadata export)') }

    return @{
        Text     = $Text
        Changes  = $changes
        Hrefs    = ($hrefCount + $objCount + $cardCount)
        Dropdown = $dropCount
        Array    = $arrayCount
        Mobile   = $(if ($wired) { 1 } else { 0 })
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

Write-Host "Rewired Ketamine Spanish nav fix"
Write-Host "  1. Point condition / content labels at their own /es pages"
Write-Host "  2. Add missing Treatments, Services, and Content dropdown links"
Write-Host "  3. Wire Spanish mobile menu buttons that currently do nothing"
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
        Where-Object { Test-IsSpanishPath $_.FullName } |
        ForEach-Object { $allFiles.Add($_.FullName) }
}

$filesChanged = 0
$hrefTotal = 0
$dropTotal = 0
$arrayTotal = 0
$mobTotal = 0
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
    $hrefTotal  += [int]$result.Hrefs
    $dropTotal  += [int]$result.Dropdown
    $arrayTotal += [int]$result.Array
    $mobTotal   += [int]$result.Mobile
}

Write-Host ""
$verb = if ($WhatIfPreference) { 'Would change' } else { 'Changed' }
Write-Host ("{0} {1} Spanish file(s)." -f $verb, $filesChanged)
Write-Host ("  Generic hrefs retargeted:     {0}" -f $hrefTotal)
Write-Host ("  Dropdown links added:         {0}" -f $dropTotal)
Write-Host ("  Agotamiento rows in data:     {0}" -f $arrayTotal)
Write-Host ("  Mobile menus wired:           {0}" -f $mobTotal)
