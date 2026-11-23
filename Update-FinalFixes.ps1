#Requires -Version 5.1
<#
.SYNOPSIS
  Final leftover fixes: cost-and-coverage FAQ, Spanish html lang="es",
  and English burnout / postpartum mobile menus. Also adds the insurance
  and new FAQ URLs to the sitemap if they are missing.

.DESCRIPTION
  Run from the repo root (the folder that contains src\app), or pass -Root.

  Site files are read and written as UTF-8 without a BOM. Line endings are
  preserved. This script does not create backup copies; if the repo is a git
  checkout, undo with:  git checkout -- .

  Running the script a second time is safe. It is safe to run after
  Update-SpanishLinks.ps1 and Update-SpanishNav.ps1.

.PARAMETER Root
  Repo root. Defaults to the current directory.

.PARAMETER DryRun
  Show what would change without writing files. Same as -WhatIf.

.EXAMPLE
  cd C:\Users\jsilv\rewired-ketamine
  powershell -NoProfile -ExecutionPolicy Bypass -File .\Update-FinalFixes.ps1 -DryRun
#>
[CmdletBinding(SupportsShouldProcess = $true)]
param(
    [string[]]$Root = @('.'),
    [switch]$DryRun
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

if ($DryRun) { $WhatIfPreference = $true }

function Get-U([int]$Code) { return [string][char]$Code }

function Get-PaginaTratamiento {
    return ('p{0}gina de tratamiento' -f (Get-U 0x00E1))
}

function Get-Espanol {
    return ('Espa{0}ol' -f (Get-U 0x00F1))
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

function ConvertFrom-B64Text([string]$B64) {
    $clean = ($B64 -replace '\s', '')
    $bytes = [Convert]::FromBase64String($clean)
    return [System.Text.Encoding]::UTF8.GetString($bytes)
}

function Get-RepoRoot([string]$Start) {
    $resolved = (Resolve-Path -LiteralPath $Start).Path
    if (Test-Path -LiteralPath (Join-Path $resolved 'src\app')) { return $resolved }
    if (Test-Path -LiteralPath (Join-Path $resolved 'app')) { return $resolved }
    return $null
}

function Get-AppDir([string]$RepoRoot) {
    $srcApp = Join-Path $RepoRoot 'src\app'
    if (Test-Path -LiteralPath $srcApp) { return $srcApp }
    return (Join-Path $RepoRoot 'app')
}

function Get-SrcDir([string]$RepoRoot) {
    $src = Join-Path $RepoRoot 'src'
    if (Test-Path -LiteralPath $src) { return $src }
    return $RepoRoot
}

function Save-IfChanged {
    param(
        [string]$Path,
        [string]$Original,
        [string]$Updated,
        [string]$Label,
        [System.Collections.Generic.List[string]]$Report
    )
    if ($Updated -eq $Original) { return $false }
    if ($Updated.Contains([char]0)) { throw "Refusing to write a file that contains a NUL: $Path" }
    if ($WhatIfPreference) {
        $Report.Add("Would change: $Label")
    } else {
        $dir = Split-Path -Parent $Path
        if (-not (Test-Path -LiteralPath $dir)) {
            New-Item -ItemType Directory -Path $dir | Out-Null
        }
        Write-Utf8NoBom $Path $Updated
        $Report.Add("Changed: $Label")
    }
    return $true
}

$Script:FaqEntryB64 = @'
ICB7CiAgICBzbHVnOiAiY29zdC1hbmQtY292ZXJhZ2UiLAogICAgdGl0bGU6ICJDb3N0IGFuZCBJ
bnN1cmFuY2UgRkFRIHwgUmV3aXJlZCBLZXRhbWluZSBBdmVudHVyYSIsCiAgICBoMTogIkNvc3Qg
YW5kIEluc3VyYW5jZSBGQVEiLAogICAgZGVzY3JpcHRpb246ICJQcmljZXMgZm9yIElWIGtldGFt
aW5lIGF0IFJld2lyZWQgS2V0YW1pbmUgaW4gQXZlbnR1cmEsIGFuZCBob3cgU3ByYXZhdG8gaW5z
dXJhbmNlIGJpbGxpbmcgd29ya3MuIENhc2gtcGF5IElWIHNlc3Npb25zIGluY2x1ZGUgYSBzdXBl
cmJpbGwuIMKhSGFibGFtb3MgRXNwYcOxb2whIiwKICAgIHJlbGF0ZWQ6ICIvc2VydmljZXMva2V0
YW1pbmUtaW5zdXJhbmNlIiwKICAgIHJlbGF0ZWRMYWJlbDogIkluc3VyYW5jZSBwYWdlIiwKICAg
IGZhcXM6IFsKICAgICAgeyBxdWVzdGlvbjogIkhvdyBtdWNoIGRvZXMgYW4gSVYga2V0YW1pbmUg
c2Vzc2lvbiBjb3N0PyIsIGFuc3dlcjogIk91ciBwdWJsaXNoZWQgMS1ob3VyIG1lbnRhbC1oZWFs
dGggSVYgcHJvdG9jb2wgaXMgJDQ0MCBmb3IgYSBzaW5nbGUgc2Vzc2lvbiBhbmQgJDIsMzAwIGZv
ciBhIHBhY2thZ2Ugb2YgNi4gR3VpZGVkIHNlc3Npb25zLCAyLWhvdXIgb3B0aW9ucywgYW5kIG90
aGVyIHBhY2thZ2VzIGFyZSBsaXN0ZWQgb24gdGhlIGNvc3QgcGFnZS4gQSBmcmVlIGNvbnN1bHQg
aXMgcmVxdWlyZWQgYmVmb3JlIHRyZWF0bWVudC4iIH0sCiAgICAgIHsgcXVlc3Rpb246ICJEb2Vz
IGluc3VyYW5jZSBjb3ZlciBTcHJhdmF0bz8iLCBhbnN3ZXI6ICJXZSBiaWxsIFNwcmF2YXRvIGlu
LW5ldHdvcmsgd2l0aCBVbml0ZWRIZWFsdGhjYXJlLCBDaWduYSwgYW5kIEFldG5hLiBBcHByb3Zh
bCBpcyBuZXZlciBndWFyYW50ZWVkIGFuZCBkZXBlbmRzIG9uIHlvdXIgcGxhbiBhbmQgcHJpb3Ig
YXV0aG9yaXphdGlvbi4gTW9yZSBkZXRhaWwgaXMgb24gb3VyIGluc3VyYW5jZSBwYWdlLiIgfSwK
ICAgICAgeyBxdWVzdGlvbjogIklzIEJsdWUgQ3Jvc3MgQmx1ZSBTaGllbGQgb3IgRmxvcmlkYSBC
bHVlIGFjY2VwdGVkIGZvciBTcHJhdmF0bz8iLCBhbnN3ZXI6ICJCbHVlIENyb3NzIEJsdWUgU2hp
ZWxkIHBsYW5zLCBpbmNsdWRpbmcgRmxvcmlkYSBCbHVlLCBhcmUgb3V0LW9mLW5ldHdvcmsgZm9y
IFNwcmF2YXRvIGF0IFJld2lyZWQgS2V0YW1pbmUuIFNvbWUgcGxhbnMgaGF2ZSBvdXQtb2YtbmV0
d29yayBiZW5lZml0cywgYnV0IHdoYXQgdGhleSBwYXkgdmFyaWVzIGFuZCBpcyBub3QgZ3VhcmFu
dGVlZC4gV2UgY2FuIHJldmlldyB5b3VyIHBsYW4gYXQgYSBmcmVlIGNvbnN1bHQuIiB9LAogICAg
ICB7IHF1ZXN0aW9uOiAiRG9lcyBpbnN1cmFuY2UgY292ZXIgSVYga2V0YW1pbmU/IiwgYW5zd2Vy
OiAiSVYga2V0YW1pbmUgaXMgY2FzaC1wYXkuIEl0IGlzIG5vdCBGREEtYXBwcm92ZWQgZm9yIGRl
cHJlc3Npb24sIGFuZCBwbGFucyBnZW5lcmFsbHkgZG8gbm90IGNvdmVyIGl0LiBXZSBnaXZlIGNh
c2gtcGF5IHBhdGllbnRzIGEgc3VwZXJiaWxsIChhIGRldGFpbGVkIHN0YXRlbWVudCBvZiB0aGUg
c2VydmljZXMgeW91IHJlY2VpdmVkIGFuZCB3aGF0IHlvdSBwYWlkKSB0aGF0IHlvdSBtYXkgc3Vi
bWl0IHRvIHlvdXIgaW5zdXJlciBmb3IgcG9zc2libGUgb3V0LW9mLW5ldHdvcmsgcmVpbWJ1cnNl
bWVudC4gUmVpbWJ1cnNlbWVudCBpcyBub3QgZ3VhcmFudGVlZCBhbmQgZGVwZW5kcyBvbiB5b3Vy
IHBsYW4uIiB9LAogICAgICB7IHF1ZXN0aW9uOiAiV2hhdCBpcyBhIHN1cGVyYmlsbD8iLCBhbnN3
ZXI6ICJBIHN1cGVyYmlsbCBpcyBhIGRldGFpbGVkIHN0YXRlbWVudCBvZiB0aGUgc2VydmljZXMg
eW91IHJlY2VpdmVkIGFuZCB3aGF0IHlvdSBwYWlkLiBXZSBnaXZlIG9uZSB0byBldmVyeSBjYXNo
LXBheSBwYXRpZW50LiBZb3Ugc3VibWl0IHRoZSBjbGFpbTsgd2UgY2Fubm90IHByZWRpY3Qgd2hh
dCwgaWYgYW55dGhpbmcsIHlvdXIgcGxhbiB3aWxsIHBheS4iIH0sCiAgICAgIHsgcXVlc3Rpb246
ICJIb3cgZG8gSSBnZXQgc3RhcnRlZCBvciBsZWFybiBtb3JlIGFib3V0IGNvdmVyYWdlPyIsIGFu
c3dlcjogIlNlZSBvdXIgaW5zdXJhbmNlIHBhZ2UsIG9yIGJvb2sgYSBmcmVlIGNvbnN1bHQuIENh
bGwgb3IgdGV4dCAoMzA1KSA2NzYtNjA3MC4gUmV3aXJlZCBLZXRhbWluZSBpcyBhdCAyODIwIE5F
IDIxNHRoIFN0IFN1aXRlIDEwMDIsIEF2ZW50dXJhLCBGTCAzMzE4MC4gwqFIYWJsYW1vcyBFc3Bh
w7FvbCEiIH0sCiAgICBdLAogICAgZXM6IHsKICAgICAgdGl0bGU6ICJDb3N0byB5IFNlZ3VybyBN
w6lkaWNvIHwgUHJlZ3VudGFzIEZyZWN1ZW50ZXMgfCBSZXdpcmVkIEtldGFtaW5lIEF2ZW50dXJh
IiwKICAgICAgaDE6ICJDb3N0byB5IFNlZ3VybyBNw6lkaWNvIiwKICAgICAgZGVzY3JpcHRpb246
ICJQcmVjaW9zIGRlIGxhIGtldGFtaW5hIElWIGVuIFJld2lyZWQgS2V0YW1pbmUgZW4gQXZlbnR1
cmEsIHkgY8OzbW8gc2UgZmFjdHVyYSBTcHJhdmF0byBhbCBzZWd1cm8uIExhcyBzZXNpb25lcyBJ
ViBkZSBwYWdvIGVuIGVmZWN0aXZvIGluY2x1eWVuIHVuYSBzdXBlcmZhY3R1cmEuIMKhSGFibGFt
b3MgRXNwYcOxb2whIiwKICAgICAgcmVsYXRlZDogIi9lcy9zZXJ2aWNlcy9rZXRhbWluZS1pbnN1
cmFuY2UiLAogICAgICByZWxhdGVkTGFiZWw6ICJww6FnaW5hIGRlIHNlZ3VybyBtw6lkaWNvIiwK
ICAgICAgZmFxczogWwogICAgICAgIHsgcXVlc3Rpb246ICLCv0N1w6FudG8gY3Vlc3RhIHVuYSBz
ZXNpw7NuIGRlIGtldGFtaW5hIElWPyIsIGFuc3dlcjogIk51ZXN0cm8gcHJvdG9jb2xvIElWIHB1
YmxpY2FkbyBkZSBzYWx1ZCBtZW50YWwgZGUgMSBob3JhIGN1ZXN0YSAkNDQwIHBvciB1bmEgc2Vz
acOzbiBpbmRpdmlkdWFsIHkgJDIsMzAwIHBvciB1biBwYXF1ZXRlIGRlIDYuIExhcyBzZXNpb25l
cyBndWlhZGFzLCBsYXMgb3BjaW9uZXMgZGUgMiBob3JhcyB5IGxvcyBkZW3DoXMgcGFxdWV0ZXMg
ZXN0w6FuIGVuIGxhIHDDoWdpbmEgZGUgY29zdG9zLiBTZSByZXF1aWVyZSB1bmEgY29uc3VsdGEg
Z3JhdHVpdGEgYW50ZXMgZGVsIHRyYXRhbWllbnRvLiIgfSwKICAgICAgICB7IHF1ZXN0aW9uOiAi
wr9FbCBzZWd1cm8gY3VicmUgU3ByYXZhdG8/IiwgYW5zd2VyOiAiRmFjdHVyYW1vcyBTcHJhdmF0
byBkZW50cm8gZGUgbGEgcmVkIChpbi1uZXR3b3JrKSBjb24gVW5pdGVkSGVhbHRoY2FyZSwgQ2ln
bmEgeSBBZXRuYS4gTGEgYXByb2JhY2nDs24gbnVuY2EgZXN0w6EgZ2FyYW50aXphZGEgeSBkZXBl
bmRlIGRlIHN1IHBsYW4geSBkZSBsYSBhdXRvcml6YWNpw7NuIHByZXZpYS4gRW5jb250cmFyw6Eg
bcOhcyBkZXRhbGxlcyBlbiBudWVzdHJhIHDDoWdpbmEgZGUgc2VndXJvIG3DqWRpY28uIiB9LAog
ICAgICAgIHsgcXVlc3Rpb246ICLCv0FjZXB0YW4gQmx1ZSBDcm9zcyBCbHVlIFNoaWVsZCBvIEZs
b3JpZGEgQmx1ZSBwYXJhIFNwcmF2YXRvPyIsIGFuc3dlcjogIkxvcyBwbGFuZXMgZGUgQmx1ZSBD
cm9zcyBCbHVlIFNoaWVsZCwgaW5jbHVpZG8gRmxvcmlkYSBCbHVlLCBlc3TDoW4gZnVlcmEgZGUg
bGEgcmVkIChvdXQtb2YtbmV0d29yaykgcGFyYSBTcHJhdmF0byBlbiBSZXdpcmVkIEtldGFtaW5l
LiBBbGd1bm9zIHBsYW5lcyB0aWVuZW4gYmVuZWZpY2lvcyBmdWVyYSBkZSBsYSByZWQsIHBlcm8g
bG8gcXVlIHBhZ2FuIHZhcsOtYSB5IG5vIGVzdMOhIGdhcmFudGl6YWRvLiBQb2RlbW9zIHJldmlz
YXIgc3UgcGxhbiBlbiB1bmEgY29uc3VsdGEgZ3JhdHVpdGEuIiB9LAogICAgICAgIHsgcXVlc3Rp
b246ICLCv0VsIHNlZ3VybyBjdWJyZSBsYSBrZXRhbWluYSBJVj8iLCBhbnN3ZXI6ICJMYSBrZXRh
bWluYSBJViBzZSBwYWdhIGVuIGVmZWN0aXZvIChjYXNoLXBheSkuIE5vIGVzdMOhIGFwcm9iYWRh
IHBvciBsYSBGREEgcGFyYSBsYSBkZXByZXNpw7NuLCB5IGxvcyBwbGFuZXMgZ2VuZXJhbG1lbnRl
IG5vIGxhIGN1YnJlbi4gQSBsb3MgcGFjaWVudGVzIHF1ZSBwYWdhbiBlbiBlZmVjdGl2byBsZXMg
ZW50cmVnYW1vcyB1bmEgc3VwZXJmYWN0dXJhIChzdXBlcmJpbGwpIOKAlCB1biBlc3RhZG8gZGUg
Y3VlbnRhIGRldGFsbGFkbyBkZSBsb3Mgc2VydmljaW9zIHF1ZSB1c3RlZCByZWNpYmnDsyB5IGxv
IHF1ZSBwYWfDsyDigJQgcGFyYSBxdWUgbGEgcHJlc2VudGUgYSBzdSBhc2VndXJhZG9yYSB5IHNv
bGljaXRlIHVuIHBvc2libGUgcmVlbWJvbHNvIGZ1ZXJhIGRlIGxhIHJlZC4gRWwgcmVlbWJvbHNv
IG5vIGVzdMOhIGdhcmFudGl6YWRvIHkgZGVwZW5kZSBkZSBzdSBwbGFuLiIgfSwKICAgICAgICB7
IHF1ZXN0aW9uOiAiwr9RdcOpIGVzIHVuYSBzdXBlcmZhY3R1cmEgKHN1cGVyYmlsbCk/IiwgYW5z
d2VyOiAiRXMgdW4gZXN0YWRvIGRlIGN1ZW50YSBkZXRhbGxhZG8gZGUgbG9zIHNlcnZpY2lvcyBx
dWUgdXN0ZWQgcmVjaWJpw7MgeSBsbyBxdWUgcGFnw7MuIEVudHJlZ2Ftb3MgdW5hIGEgY2FkYSBw
YWNpZW50ZSBxdWUgcGFnYSBlbiBlZmVjdGl2by4gVXN0ZWQgcHJlc2VudGEgZWwgcmVjbGFtbzsg
bm9zb3Ryb3Mgbm8gcG9kZW1vcyBwcmVkZWNpciBxdcOpIHBhZ2Fyw6Egc3UgcGxhbiwgc2kgZXMg
cXVlIHBhZ2EgYWxnby4iIH0sCiAgICAgICAgeyBxdWVzdGlvbjogIsK/Q8OzbW8gZW1waWV6byBv
IGTDs25kZSBvYnRlbmdvIG3DoXMgaW5mb3JtYWNpw7NuIHNvYnJlIGxhIGNvYmVydHVyYT8iLCBh
bnN3ZXI6ICJDb25zdWx0ZSBudWVzdHJhIHDDoWdpbmEgZGUgc2VndXJvIG3DqWRpY28sIG8gcmVz
ZXJ2ZSB1bmEgY29uc3VsdGEgZ3JhdHVpdGEuIExsYW1lIG8gZW52w61lIHVuIG1lbnNhamUgZGUg
dGV4dG8gYWwgKDMwNSkgNjc2LTYwNzAuIFJld2lyZWQgS2V0YW1pbmUgZXN0w6EgZW4gMjgyMCBO
RSAyMTR0aCBTdCBTdWl0ZSAxMDAyLCBBdmVudHVyYSwgRkwgMzMxODAuIMKhSGFibGFtb3MgRXNw
YcOxb2whIiB9LAogICAgICBdLAogICAgfSwKICB9LAo=
'@

$Script:RootHtmlB64 = @'
aW1wb3J0IHsgSW50ZXIsIFBsYXlmYWlyX0Rpc3BsYXkgfSBmcm9tICJuZXh0L2ZvbnQvZ29vZ2xl
IjsKaW1wb3J0IFNjcmlwdCBmcm9tICJuZXh0L3NjcmlwdCI7CmltcG9ydCAiQC9hcHAvZ2xvYmFs
cy5jc3MiOwoKY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsibGF0aW4iXSB9KTsKY29u
c3QgcGxheWZhaXIgPSBQbGF5ZmFpcl9EaXNwbGF5KHsKICBzdWJzZXRzOiBbImxhdGluIl0sCiAg
dmFyaWFibGU6ICItLWZvbnQtc2VyaWYiLAp9KTsKCmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJv
b3RIdG1sKHsKICBsYW5nLAogIGNoaWxkcmVuLAp9OiB7CiAgbGFuZzogImVuIiB8ICJlcyI7CiAg
Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTsKfSkgewogIHJldHVybiAoCiAgICA8aHRtbCBsYW5n
PXtsYW5nfT4KICAgICAgPGhlYWQ+CiAgICAgICAgey8qIEdvb2dsZSBUYWcgTWFuYWdlciAqL30K
ICAgICAgICA8U2NyaXB0IGlkPSJndG0tc2NyaXB0IiBzdHJhdGVneT0iYWZ0ZXJJbnRlcmFjdGl2
ZSI+CiAgICAgICAgICB7YAogICAgICAgICAgICAoZnVuY3Rpb24odyxkLHMsbCxpKXt3W2xdPXdb
bF18fFtdO3dbbF0ucHVzaCh7J2d0bS5zdGFydCc6CiAgICAgICAgICAgIG5ldyBEYXRlKCkuZ2V0
VGltZSgpLGV2ZW50OidndG0uanMnfSk7dmFyIGY9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVsw
XSwKICAgICAgICAgICAgaj1kLmNyZWF0ZUVsZW1lbnQocyksZGw9bCE9J2RhdGFMYXllcic/JyZs
PScrbDonJztqLmFzeW5jPXRydWU7ai5zcmM9CiAgICAgICAgICAgICdodHRwczovL3d3dy5nb29n
bGV0YWdtYW5hZ2VyLmNvbS9ndG0uanM/aWQ9JytpK2RsO2YucGFyZW50Tm9kZS5pbnNlcnRCZWZv
cmUoaixmKTsKICAgICAgICAgICAgfSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCdkYXRhTGF5
ZXInLCdHVE0tTkxEODVTQzknKTsKICAgICAgICAgIGB9CiAgICAgICAgPC9TY3JpcHQ+CiAgICAg
ICAgPHNjcmlwdAogICAgICAgICAgZGVmZXIKICAgICAgICAgIHR5cGU9ImFwcGxpY2F0aW9uL2ph
dmFzY3JpcHQiCiAgICAgICAgICBzcmM9Imh0dHBzOi8vcHVsc2UuY2xpY2tndWFyZC5jb20vcy9h
Y2N6TkFlTGJkWjVGL2FzdEphbUxBcUlHeWUiCiAgICAgICAgLz4KICAgICAgICB7LyogRW5kIEdv
b2dsZSBUYWcgTWFuYWdlciAqL30KICAgICAgPC9oZWFkPgogICAgICA8Ym9keSBjbGFzc05hbWU9
e2Ake2ludGVyLmNsYXNzTmFtZX0gJHtwbGF5ZmFpci52YXJpYWJsZX1gfT4KICAgICAgICB7Lyog
R29vZ2xlIFRhZyBNYW5hZ2VyIChub3NjcmlwdCkgKi99CiAgICAgICAgPG5vc2NyaXB0PgogICAg
ICAgICAgPGlmcmFtZQogICAgICAgICAgICBzcmM9Imh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFn
ZXIuY29tL25zLmh0bWw/aWQ9R1RNLU5MRDg1U0M5IgogICAgICAgICAgICBoZWlnaHQ9IjAiCiAg
ICAgICAgICAgIHdpZHRoPSIwIgogICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAibm9uZSIs
IHZpc2liaWxpdHk6ICJoaWRkZW4iIH19CiAgICAgICAgICAvPgogICAgICAgIDwvbm9zY3JpcHQ+
CiAgICAgICAgey8qIEVuZCBHb29nbGUgVGFnIE1hbmFnZXIgKG5vc2NyaXB0KSAqL30KCiAgICAg
ICAge2NoaWxkcmVufQogICAgICA8L2JvZHk+CiAgICA8L2h0bWw+CiAgKTsKfQo=
'@

$Script:MainLayoutB64 = @'
aW1wb3J0IHR5cGUgeyBNZXRhZGF0YSB9IGZyb20gIm5leHQiOwppbXBvcnQgeyBOZXh0SW50bENs
aWVudFByb3ZpZGVyIH0gZnJvbSAibmV4dC1pbnRsIjsKaW1wb3J0IHsgZ2V0TWVzc2FnZXMgfSBm
cm9tICJuZXh0LWludGwvc2VydmVyIjsKaW1wb3J0IFJvb3RIdG1sIGZyb20gIkAvY29tcG9uZW50
cy9Sb290SHRtbCI7CgpleHBvcnQgY29uc3QgbWV0YWRhdGE6IE1ldGFkYXRhID0gewogIG1ldGFk
YXRhQmFzZTogbmV3IFVSTCgiaHR0cHM6Ly93d3cucmV3aXJlZGtldGFtaW5lLmNvbSIpLAogIHRp
dGxlOiB7CiAgICBkZWZhdWx0OiAiS2V0YW1pbmUgQ2xpbmljIE1pYW1pICYgQXZlbnR1cmEgfCBH
dWlkZWQgSVYgVGhlcmFweSB8IFJld2lyZWQgS2V0YW1pbmUiLAogICAgdGVtcGxhdGU6ICIlcyB8
IFJld2lyZWQgS2V0YW1pbmUgQXZlbnR1cmEiLAogIH0sCiAgZGVzY3JpcHRpb246CiAgICAiUmV3
aXJlZCBLZXRhbWluZSBpcyBhIGxlYWRpbmcga2V0YW1pbmUgY2xpbmljIE1pYW1pIHBhdGllbnRz
IHRydXN0LCBsb2NhdGVkIGluIEF2ZW50dXJhLiBGdWxseSBndWlkZWQgc2Vzc2lvbnMgYXZhaWxh
YmxlIGZvciB0cmVhdG1lbnQtcmVzaXN0YW50IGRlcHJlc3Npb24sIGFueGlldHksIFBUU0QsIGFu
ZCBjaHJvbmljIHBhaW4uIFNlcnZpbmcgTWlhbWksIEZvcnQgTGF1ZGVyZGFsZSAmIFNvdXRoIEZs
b3JpZGEuIMKhSGFibGFtb3MgRXNwYcOxb2whIiwKICBrZXl3b3JkczogWwogICAgImtldGFtaW5l
IHRoZXJhcHkgTWlhbWkiLAogICAgImtldGFtaW5lIGNsaW5pYyBNaWFtaSIsCiAgICAia2V0YW1p
bmUgdGhlcmFweSBBdmVudHVyYSIsCiAgICAia2V0YW1pbmUgaW5mdXNpb24gU291dGggRmxvcmlk
YSIsCiAgICAidHJlYXRtZW50IHJlc2lzdGFudCBkZXByZXNzaW9uIEF2ZW50dXJhIiwKICAgICJr
ZXRhbWluZSBmb3IgYW54aWV0eSBGb3J0IExhdWRlcmRhbGUiLAogICAgImxvY2FsbHkgb3duZWQg
a2V0YW1pbmUgY2xpbmljIiwKICAgICJoYWJsYW1vcyBlc3Bhw7FvbCBrZXRhbWluZSIsCiAgXSwK
ICBhdXRob3JzOiBbeyBuYW1lOiAiUmV3aXJlZCBLZXRhbWluZSIgfV0sCiAgaWNvbnM6IHsKICAg
IGljb246IFsKICAgICAgeyB1cmw6ICIvZmF2aWNvbi5pY28iIH0sCiAgICAgIHsgdXJsOiAiL2Zh
dmljb24tOTZ4OTYucG5nIiwgc2l6ZXM6ICI5Nng5NiIsIHR5cGU6ICJpbWFnZS9wbmciIH0sCiAg
ICBdLAogICAgYXBwbGU6ICIvYXBwbGUtdG91Y2gtaWNvbi5wbmciLAogIH0sCiAgb3BlbkdyYXBo
OiB7CiAgICB0aXRsZTogIlJld2lyZWQgS2V0YW1pbmUgfCBLZXRhbWluZSBUaGVyYXB5IGluIEF2
ZW50dXJhLCBTb3V0aCBGbG9yaWRhIiwKICAgIGRlc2NyaXB0aW9uOgogICAgICAiTG9jYWxseSBv
d25lZCBrZXRhbWluZSBjbGluaWMgaW4gQXZlbnR1cmEgb2ZmZXJpbmcgZnVsbHkgZ3VpZGVkIHNl
c3Npb25zIGZvciBkZXByZXNzaW9uLCBhbnhpZXR5LCBQVFNEIGFuZCBjaHJvbmljIHBhaW4uIFNl
cnZpbmcgTWlhbWkgJiBGb3J0IExhdWRlcmRhbGUuIMKhSGFibGFtb3MgRXNwYcOxb2whIiwKICAg
IHVybDogImh0dHBzOi8vd3d3LnJld2lyZWRrZXRhbWluZS5jb20iLAogICAgc2l0ZU5hbWU6ICJS
ZXdpcmVkIEtldGFtaW5lIiwKICAgIGxvY2FsZTogImVuX1VTIiwKICAgIHR5cGU6ICJ3ZWJzaXRl
IiwKICB9LAogIHR3aXR0ZXI6IHsKICAgIGNhcmQ6ICJzdW1tYXJ5X2xhcmdlX2ltYWdlIiwKICAg
IHRpdGxlOiAiUmV3aXJlZCBLZXRhbWluZSB8IEtldGFtaW5lIFRoZXJhcHkgaW4gQXZlbnR1cmEi
LAogICAgZGVzY3JpcHRpb246CiAgICAgICJMb2NhbGx5IG93bmVkIGtldGFtaW5lIGNsaW5pYyBp
biBBdmVudHVyYSwgRkwuIEZ1bGx5IGd1aWRlZCBzZXNzaW9ucyBhdmFpbGFibGUuIMKhSGFibGFt
b3MgRXNwYcOxb2whIiwKICB9LAogIHJvYm90czogewogICAgaW5kZXg6IHRydWUsCiAgICBmb2xs
b3c6IHRydWUsCiAgfSwKICBhbHRlcm5hdGVzOiB7CiAgICBjYW5vbmljYWw6ICJodHRwczovL3d3
dy5yZXdpcmVka2V0YW1pbmUuY29tIiwKICB9LAp9OwoKZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVu
Y3Rpb24gTWFpbkxheW91dCh7CiAgY2hpbGRyZW4sCn06IHsKICBjaGlsZHJlbjogUmVhY3QuUmVh
Y3ROb2RlOwp9KSB7CiAgY29uc3QgbWVzc2FnZXMgPSBhd2FpdCBnZXRNZXNzYWdlcygpOwoKICBy
ZXR1cm4gKAogICAgPFJvb3RIdG1sIGxhbmc9ImVuIj4KICAgICAgPE5leHRJbnRsQ2xpZW50UHJv
dmlkZXIgbWVzc2FnZXM9e21lc3NhZ2VzfT4KICAgICAgICB7Y2hpbGRyZW59CiAgICAgIDwvTmV4
dEludGxDbGllbnRQcm92aWRlcj4KICAgIDwvUm9vdEh0bWw+CiAgKTsKfQo=
'@

function Get-FaqEntry([string]$NewLine) {
    $t = (ConvertFrom-B64Text $Script:FaqEntryB64).TrimEnd() + $NewLine
    if ($NewLine -eq "`r`n") { $t = $t -replace '(?<!\r)\n', "`r`n" }
    return $t
}

function Get-RootHtml([string]$NewLine) {
    $t = (ConvertFrom-B64Text $Script:RootHtmlB64).TrimEnd() + $NewLine
    if ($NewLine -eq "`r`n") { $t = $t -replace '(?<!\r)\n', "`r`n" }
    return $t
}

function Get-MainLayout([string]$NewLine) {
    $t = (ConvertFrom-B64Text $Script:MainLayoutB64).TrimEnd() + $NewLine
    if ($NewLine -eq "`r`n") { $t = $t -replace '(?<!\r)\n', "`r`n" }
    return $t
}

function Update-FaqTypes([string]$Text, [string]$NewLine) {
    if ($Text -match 'relatedLabel\??\s*:' -and $Text -match '(?m)^\s*es\??\s*:') { return $Text }
    $old = "export type FAQPage = {" + $NewLine + "  slug: string;" + $NewLine + "  title: string;" + $NewLine + "  description: string;" + $NewLine + "  h1: string;" + $NewLine + "  related?: string;" + $NewLine + "  faqs: FAQItem[];" + $NewLine + "};"
    $new = @(
        "export type FAQLocaleCopy = {",
        "  title: string;",
        "  description: string;",
        "  h1: string;",
        "  related?: string;",
        "  relatedLabel?: string;",
        "  faqs: FAQItem[];",
        "};",
        "",
        "export type FAQPage = {",
        "  slug: string;",
        "  title: string;",
        "  description: string;",
        "  h1: string;",
        "  related?: string;",
        "  relatedLabel?: string;",
        "  es?: FAQLocaleCopy;",
        "  faqs: FAQItem[];",
        "};"
    ) -join $NewLine
    if ($Text.Contains($old)) { return $Text.Replace($old, $new) }
    # Fallback: normalize newlines and try again
    $textN = $Text -replace "`r`n", "`n"
    $oldN = $old -replace "`r`n", "`n"
    $newN = $new -replace "`r`n", "`n"
    if ($textN.Contains($oldN)) {
        $textN = $textN.Replace($oldN, $newN)
        if ($NewLine -eq "`r`n") { return ($textN -replace "`n", "`r`n") }
        return $textN
    }
    return $Text
}

function Add-FaqEntry([string]$Text, [string]$NewLine) {
    if ($Text -match 'slug:\s*"cost-and-coverage"') { return $Text }
    $entry = Get-FaqEntry $NewLine
    $idx = $Text.LastIndexOf('];')
    if ($idx -lt 0) { return $Text }
    return $Text.Substring(0, $idx) + $entry + $Text.Substring($idx)
}

function Add-StrongSlug([string]$Text, [string]$NewLine) {
    if ($Text -match '"cost-and-coverage"') { return $Text }
    $rx = [regex]'const strongSlugs = \[([^\]]*)\]'
    $m = $rx.Match($Text)
    if (-not $m.Success) { return $Text }
    $inside = $m.Groups[1].Value.TrimEnd()
    if ($inside -and $inside[-1] -ne ',') { $inside = $inside + ',' }
    $newInside = $inside + $NewLine + '  "cost-and-coverage",' + $NewLine
    return $Text.Substring(0, $m.Groups[1].Index) + $newInside + $Text.Substring($m.Groups[1].Index + $m.Groups[1].Length)
}

function Update-EnglishFaqSlugPage([string]$Text) {
    return $Text.Replace(
        'Related: <Link href={page.related} className="text-[#C9A66B] font-semibold hover:underline">treatment page</Link>',
        'Related: <Link href={page.related} className="text-[#C9A66B] font-semibold hover:underline">{page.relatedLabel ?? "treatment page"}</Link>'
    )
}

function Update-SpanishFaqSlugPage([string]$Text, [string]$NewLine) {
    $updated = $Text
    $pagina = Get-PaginaTratamiento
    if ($updated -notmatch 'const copy =') {
        $needle = '  if (!page) return notFound();'
        $insert = @(
            '  if (!page) return notFound();',
            '',
            '  const copy = page.es ?? {',
            '    title: page.title,',
            '    description: page.description,',
            '    h1: page.h1,',
            '    related: page.related,',
            '    relatedLabel: page.relatedLabel,',
            '    faqs: page.faqs,',
            '  };'
        ) -join $NewLine
        if ($updated.Contains($needle)) {
            $updated = $updated.Replace($needle, $insert)
        }
    }
    $updated = $updated.Replace('{page.h1}', '{copy.h1}')
    $updated = $updated.Replace('{page.description}', '{copy.description}')
    $updated = $updated.Replace('{page.faqs.map', '{copy.faqs.map')
    $updated = $updated.Replace('{page.related &&', '{copy.related &&')
    $updated = $updated.Replace(
        'Relacionado: <Link href={page.related.startsWith("/es") ? page.related : `/es${page.related}`}',
        'Relacionado: <Link href={copy.related.startsWith("/es") ? copy.related : `/es${copy.related}`}'
    )
    $oldClose = 'className="text-[#C9A66B] font-semibold hover:underline">' + $pagina + '</Link>'
    $newClose = 'className="text-[#C9A66B] font-semibold hover:underline">{copy.relatedLabel ?? "' + $pagina + '"}</Link>'
    $updated = $updated.Replace($oldClose, $newClose)
    return $updated
}

function Update-SpanishFaqLayout([string]$Text, [string]$NewLine) {
    $updated = $Text
    if ($updated -notmatch 'page\?\.es') {
        $updated = $updated.Replace(
            'title: page?.title ?? "Preguntas Frecuentes",',
            'title: page?.es?.title ?? page?.title ?? "Preguntas Frecuentes",'
        )
        $updated = $updated.Replace(
            'description: page?.description ?? "",',
            'description: page?.es?.description ?? page?.description ?? "",'
        )
    }
    return (Add-StrongSlug $updated $NewLine)
}

function Add-SitemapUrl {
    param(
        [string]$Text,
        [string]$UrlExpr,
        [string]$AfterNeedle,
        [string]$Priority
    )
    if ($Text.Contains($UrlExpr)) { return $Text }
    $line = '    { url: ' + $UrlExpr + ', lastModified, changeFrequency: "monthly", priority: ' + $Priority + ' },'
    $idx = $Text.IndexOf($AfterNeedle)
    if ($idx -lt 0) { return $Text }
    $end = $Text.IndexOf("`n", $idx)
    if ($end -lt 0) { $end = $Text.Length }
    $nl = Get-NewLine $Text
    return $Text.Substring(0, $end + 1) + $line + $nl + $Text.Substring($end + 1)
}

function Update-Sitemap([string]$Text) {
    $updated = $Text
    $updated = Add-SitemapUrl $updated '`${baseUrl}/services/ketamine-insurance`' '`${baseUrl}/services/ketamine-therapy-cost`' '0.8'
    $updated = Add-SitemapUrl $updated '`${baseUrl}/es/services/ketamine-insurance`' '`${baseUrl}/es/services/ketamine-therapy-cost`' '0.8'
    $updated = Add-SitemapUrl $updated '`${baseUrl}/faq/cost-and-coverage`' '`${baseUrl}/faq`' '0.6'
    $updated = Add-SitemapUrl $updated '`${baseUrl}/es/faq/cost-and-coverage`' '`${baseUrl}/es/faq`' '0.6'
    return $updated
}

function Add-UseClient([string]$Text, [string]$NewLine) {
    if ($Text -match '(?m)^["'']use client["'']\s*;') { return $Text }
    return ('"use client";' + $NewLine + $NewLine + $Text)
}

function Add-UseStateImport([string]$Text, [string]$NewLine) {
    if ($Text -match '\{[^}]*\buseState\b[^}]*\}\s*from\s+["'']react["'']') { return $Text }
    $rx = [regex]'import\s+\{([^}]+)\}\s+from\s+["'']react["'']\s*;'
    $m = $rx.Match($Text)
    if ($m.Success) {
        $inside = $m.Groups[1].Value
        $newInside = $inside.TrimEnd().TrimEnd(',') + ', useState'
        return $Text.Substring(0, $m.Groups[1].Index) + $newInside + $Text.Substring($m.Groups[1].Index + $m.Groups[1].Length)
    }
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

function Wire-EnglishHamburger([string]$Text) {
    $rx = [regex]'(?s)<button\s+(?<attrs>(?:=>|[^>])*)>(?<inner>(?:(?!</button>).)*M4 6h16M4 12h16M4 18h16(?:(?!</button>).)*)</button>'
    $m = $rx.Match($Text)
    if (-not $m.Success) { return $Text }
    $attrs = $m.Groups['attrs'].Value
    if ($attrs -match 'onClick') { return $Text }
    $newAttrs = $attrs
    if ($newAttrs -match 'lg:hidden') { $newAttrs = $newAttrs.Replace('lg:hidden', 'md:hidden') }
    if ($newAttrs -notmatch 'aria-label=') {
        $newAttrs = $newAttrs.TrimEnd() + ' aria-label="Open menu"'
    }
    if ($newAttrs -notmatch 'aria-expanded') {
        $newAttrs = $newAttrs.TrimEnd() + ' aria-expanded={isMenuOpen}'
    }
    $newAttrs = $newAttrs.TrimEnd() + ' onClick={() => setIsMenuOpen(!isMenuOpen)}'
    $newBtn = '<button ' + $newAttrs.Trim() + '>' + $m.Groups['inner'].Value + '</button>'
    return $Text.Substring(0, $m.Index) + $newBtn + $Text.Substring($m.Index + $m.Length)
}

function Add-EnglishMobilePanel {
    param([string]$Text, [string]$NewLine)
    if ($Text -match 'isMenuOpen\s*&&') { return $Text }
    $hdr = [regex]::Match($Text, '(?s)<header\b[^>]*>.*?</header>')
    if (-not $hdr.Success) { return $Text }
    $header = $hdr.Value
    $close = $header.LastIndexOf('</header>')
    if ($close -lt 0) { return $Text }
    $lineStart = $header.LastIndexOf("`n", [Math]::Max(0, $close - 1))
    $indent = '        '
    if ($lineStart -ge 0) {
        $im = [regex]::Match($header.Substring($lineStart + 1, $close - ($lineStart + 1)), '^[ \t]*')
        if ($im.Success) { $indent = $im.Value }
    }
    $inner = $indent + '  '
    $link = $inner + '    '
    $insertAtInHeader = if ($lineStart -ge 0) { $lineStart + 1 } else { $close }
    $espanol = Get-Espanol
    $lines = @(
        ($inner + '{isMenuOpen && ('),
        ($inner + '  <div className="md:hidden bg-[#0B1D36] border-t border-white/10">'),
        ($inner + '    <div className="px-6 py-4 space-y-3">'),
        ($link + '<Link href="/" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Home</Link>'),
        ($link + '<Link href="/services" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Our Services</Link>'),
        ($link + '<Link href="/services/ketamine-insurance" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Insurance</Link>'),
        ($link + '<Link href="/treatments" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Treatments</Link>'),
        ($link + '<Link href="/providers" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Providers</Link>'),
        ($link + '<Link href="/location" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Location</Link>'),
        ($link + '<Link href="/faq" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>FAQ</Link>'),
        ($link + '<Link href="/#contact" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Contact</Link>'),
        ($link + '<Link href="/es" className="block py-2 text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>' + $espanol + '</Link>'),
        ($inner + '    </div>'),
        ($inner + '  </div>'),
        ($inner + ')}')
    )
    $block = [string]::Join($NewLine, $lines) + $NewLine + $indent
    $newHeader = $header.Substring(0, $insertAtInHeader) + $block + $header.Substring($close)
    return $Text.Substring(0, $hdr.Index) + $newHeader + $Text.Substring($hdr.Index + $hdr.Length)
}

function Repair-EnglishMobile {
    param([string]$Text, [string]$NewLine)
    if ($Text -match 'setIsMenuOpen') { return $Text }
    if ($Text -notmatch 'M4 6h16M4 12h16M4 18h16') { return $Text }
    if ($Text -match '(?m)^export\s+(async\s+)?function\s+generate(Metadata|StaticParams|Viewport)\b') { return $Text }
    if ($Text -match '(?m)^export\s+const\s+metadata\b') { return $Text }
    $Text = Add-UseClient $Text $NewLine
    $Text = Add-UseStateImport $Text $NewLine
    $Text = Add-MenuState $Text $NewLine
    $Text = Wire-EnglishHamburger $Text
    $Text = Add-EnglishMobilePanel -Text $Text -NewLine $NewLine
    return $Text
}

function Update-EsLayout([string]$Text, [string]$NewLine) {
    $updated = $Text
    if ($updated -notmatch 'from\s+["'']@/components/RootHtml["'']') {
        $imp = 'import RootHtml from "@/components/RootHtml";'
        if ($updated -match '(?m)^import type \{ Metadata \} from ["'']next["''];') {
            $updated = [regex]::Replace($updated, '(?m)^import type \{ Metadata \} from ["'']next["''];', { param($m) $m.Value + $NewLine + $imp }, 1)
        } else {
            $updated = $imp + $NewLine + $updated
        }
    }
    if ($updated -notmatch 'metadataBase') {
        $updated = [regex]::Replace($updated, 'export const metadata: Metadata = \{', ('export const metadata: Metadata = {' + $NewLine + '  metadataBase: new URL("https://www.rewiredketamine.com"),'), 1)
    }
    if ($updated -notmatch 'RootHtml lang="es"') {
        $updated = $updated.Replace('return children;', 'return <RootHtml lang="es">{children}</RootHtml>;')
    }
    return $updated
}

Write-Host "Rewired Ketamine final leftover fixes"
Write-Host "  1. Add a cost-and-coverage FAQ in English and Spanish"
Write-Host "  2. Render /es pages with html lang=es (English stays lang=en)"
Write-Host "  3. Wire the English burnout and postpartum mobile menus"
Write-Host "  4. Add insurance and FAQ URLs to the sitemap if they are missing"
Write-Host ""

if ($WhatIfPreference) {
    Write-Host "DRY RUN (-WhatIf / -DryRun): no files will be written."
    Write-Host ""
} else {
    Write-Host "Changed files can be undone with:  git checkout -- ."
    Write-Host ""
}

$totalChanged = 0

foreach ($r in $Root) {
    if (-not (Test-Path -LiteralPath $r)) { Write-Error "Root not found: $r"; continue }
    $repo = Get-RepoRoot $r
    if (-not $repo) { Write-Error "Could not find src\app under '$r'."; continue }
    $app = Get-AppDir $repo
    $src = Get-SrcDir $repo
    Write-Host "Repo: $repo"
    $report = New-Object System.Collections.Generic.List[string]

    $faqsPath = Join-Path $src 'data\faqs.ts'
    if (Test-Path -LiteralPath $faqsPath) {
        $orig = Read-Utf8NoBom $faqsPath
        $nl = Get-NewLine $orig
        $upd = Update-FaqTypes $orig $nl
        $upd = Add-FaqEntry $upd $nl
        if (Save-IfChanged $faqsPath $orig $upd "src/data/faqs.ts (cost-and-coverage FAQ)" $report) { $totalChanged++ }
    }

    $enSlugCandidates = @(
        (Join-Path $app '(main)\faq\[slug]\page.tsx'),
        (Join-Path $app 'faq\[slug]\page.tsx')
    )
    foreach ($enSlug in $enSlugCandidates) {
        if (-not (Test-Path -LiteralPath $enSlug)) { continue }
        $orig = Read-Utf8NoBom $enSlug
        $upd = Update-EnglishFaqSlugPage $orig
        if (Save-IfChanged $enSlug $orig $upd "English FAQ slug page (relatedLabel)" $report) { $totalChanged++ }
        break
    }

    $esSlug = Join-Path $app 'es\faq\[slug]\page.tsx'
    if (Test-Path -LiteralPath $esSlug) {
        $orig = Read-Utf8NoBom $esSlug
        $nl = Get-NewLine $orig
        $upd = Update-SpanishFaqSlugPage $orig $nl
        if (Save-IfChanged $esSlug $orig $upd "Spanish FAQ slug page (usted copy + relatedLabel)" $report) { $totalChanged++ }
    }

    $layoutRels = @(
        '(main)\faq\[slug]\layout.tsx',
        'faq\[slug]\layout.tsx',
        'es\faq\[slug]\layout.tsx'
    )
    foreach ($layRel in $layoutRels) {
        $lay = Join-Path $app $layRel
        if (-not (Test-Path -LiteralPath $lay)) { continue }
        $orig = Read-Utf8NoBom $lay
        $nl = Get-NewLine $orig
        if ($layRel -match 'es\\faq') {
            $upd = Update-SpanishFaqLayout $orig $nl
        } else {
            $upd = Add-StrongSlug $orig $nl
        }
        $label = $layRel.Replace('\', '/') + " (index cost-and-coverage)"
        if (Save-IfChanged $lay $orig $upd $label $report) { $totalChanged++ }
    }

    $sm = Join-Path $app 'sitemap.ts'
    if (Test-Path -LiteralPath $sm) {
        $orig = Read-Utf8NoBom $sm
        $upd = Update-Sitemap $orig
        if (Save-IfChanged $sm $orig $upd "app/sitemap.ts (insurance + cost-and-coverage FAQ)" $report) { $totalChanged++ }
    }

    $rootHtmlPath = Join-Path $src 'components\RootHtml.tsx'
    $sampleNl = "`n"
    $oldRoot = Join-Path $app 'layout.tsx'
    if (Test-Path -LiteralPath $oldRoot) { $sampleNl = Get-NewLine (Read-Utf8NoBom $oldRoot) }
    $origRh = if (Test-Path -LiteralPath $rootHtmlPath) { Read-Utf8NoBom $rootHtmlPath } else { '' }
    if ($origRh -notmatch 'lang: "en" \| "es"' -and $origRh -notmatch "lang: 'en' \| 'es'") {
        $updRh = Get-RootHtml $sampleNl
        if (Save-IfChanged $rootHtmlPath $origRh $updRh "src/components/RootHtml.tsx" $report) { $totalChanged++ }
    }

    $mainLay = Join-Path $app '(main)\layout.tsx'
    if (Test-Path -LiteralPath $mainLay) {
        $orig = Read-Utf8NoBom $mainLay
        if ($orig -notmatch 'RootHtml lang="en"') {
            $nl = Get-NewLine $orig
            $upd = Get-MainLayout $nl
            if (Save-IfChanged $mainLay $orig $upd "src/app/(main)/layout.tsx (English root, lang=en)" $report) { $totalChanged++ }
        }
    }

    $esLay = Join-Path $app 'es\layout.tsx'
    if (Test-Path -LiteralPath $esLay) {
        $orig = Read-Utf8NoBom $esLay
        $nl = Get-NewLine $orig
        $upd = Update-EsLayout $orig $nl
        if (Save-IfChanged $esLay $orig $upd "src/app/es/layout.tsx (Spanish root, lang=es)" $report) { $totalChanged++ }
    }

    $oldSeo = Join-Path $app 'seo'
    $newSeo = Join-Path $app '(main)\seo'
    if ((Test-Path -LiteralPath $oldSeo) -and -not (Test-Path -LiteralPath $newSeo)) {
        if ($WhatIfPreference) {
            $report.Add("Would move: src/app/seo -> src/app/(main)/seo (URL stays /seo)")
            $totalChanged++
        } else {
            Move-Item -LiteralPath $oldSeo -Destination $newSeo
            $report.Add("Moved: src/app/seo -> src/app/(main)/seo (URL stays /seo)")
            $totalChanged++
        }
    }

    if (Test-Path -LiteralPath $oldRoot) {
        $okMain = $false
        $okEs = $false
        if ($WhatIfPreference) {
            $okMain = $true
            $okEs = $true
        } else {
            if (Test-Path -LiteralPath $mainLay) {
                $okMain = ((Read-Utf8NoBom $mainLay) -match 'RootHtml lang="en"')
            }
            if (Test-Path -LiteralPath $esLay) {
                $okEs = ((Read-Utf8NoBom $esLay) -match 'RootHtml lang="es"')
            }
        }
        if ($okMain -and $okEs) {
            if ($WhatIfPreference) {
                $report.Add("Would remove: src/app/layout.tsx (replaced by the (main) and es root layouts)")
                $totalChanged++
            } else {
                Remove-Item -LiteralPath $oldRoot
                $report.Add("Removed: src/app/layout.tsx (replaced by the (main) and es root layouts)")
                $totalChanged++
            }
        } else {
            $report.Add("Skipped removing src/app/layout.tsx (new root layouts were not both in place)")
        }
    }

    $targets = @(
        (Join-Path $app '(main)\treatments\burnout\page.tsx'),
        (Join-Path $app '(main)\treatments\postpartum-depression\page.tsx'),
        (Join-Path $app 'treatments\burnout\page.tsx'),
        (Join-Path $app 'treatments\postpartum-depression\page.tsx')
    )
    foreach ($tp in $targets) {
        if (-not (Test-Path -LiteralPath $tp)) { continue }
        $norm = $tp.Replace('\', '/')
        if ($norm -match '/es/') { continue }
        $orig = Read-Utf8NoBom $tp
        $nl = Get-NewLine $orig
        $upd = Repair-EnglishMobile -Text $orig -NewLine $nl
        $name = if ($norm -match 'postpartum') { 'English postpartum-depression mobile menu' } else { 'English burnout mobile menu' }
        if (Save-IfChanged $tp $orig $upd $name $report) { $totalChanged++ }
    }

    foreach ($line in $report) { Write-Host $line }
}

Write-Host ""
$verb = if ($WhatIfPreference) { 'Would change' } else { 'Changed' }
Write-Host ("{0} {1} item(s)." -f $verb, $totalChanged)
