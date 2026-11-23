#Requires -Version 5.1
<#
.SYNOPSIS
  Gives every English page (src\app\(main)) the same header, menus and footer, matching the Spanish pages.

.DESCRIPTION
  Run from the repo root (C:\Users\jsilv\rewired-ketamine).

  It writes two shared components:
    src\components\SiteHeader.tsx  (skip link, top bar, nav, dropdowns, mobile menu)
    src\components\SiteFooter.tsx  (footer)
  and on every page under src\app\(main) it replaces the inline skip link +
  top bar + <header> with <SiteHeader /> and the inline <footer> with <SiteFooter />.
  Menu state, imports and "use client" are removed only when nothing else in
  the page still uses them. Page body text is not changed, except:
    - pages with no skip-link target get id="main-content" on the first
      section after the header, and
    - the ketamine-integration-aventura blog page gets a component name
      (fixes a lint error; no visible change).
  Files are written as UTF-8 without a BOM; line endings are preserved.
  Safe to run more than once: a second run changes nothing.
  Undo before committing with:  git checkout -- .

.PARAMETER DryRun
  Show what would change without writing any files.
#>
[CmdletBinding()]
param(
    [string]$Root = '.',
    [switch]$DryRun
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$HeaderB64 = @'
InVzZSBjbGllbnQiOwoKaW1wb3J0IEltYWdlIGZyb20gIm5leHQvaW1hZ2UiOwppbXBvcnQgTGluayBmcm9tICJuZXh0L2xpbmsi
OwppbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gIm5leHQvbmF2aWdhdGlvbiI7CmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAi
cmVhY3QiOwoKLy8gU2hhcmVkIEVuZ2xpc2ggc2l0ZSBoZWFkZXI6IHNraXAgbGluaywgdG9wIGJhciwgZGVza3RvcCBuYXYgd2l0
aCBkcm9wZG93bnMKLy8gYW5kIG1vYmlsZSBtZW51LiBUaGUgRW5nbGlzaCBhbmQgU3BhbmlzaCBoZWFkZXJzIGFyZSBnZW5lcmF0
ZWQgZnJvbSBvbmUKLy8gdGVtcGxhdGUsIHNvIHRoZXkgYWx3YXlzIGhhdmUgdGhlIHNhbWUgc3RydWN0dXJlIGFuZCBjbGFzc2Vz
LgovLyBUaGUgZnVsbCBkZXNrdG9wIG1lbnUgc2hvd3MgZnJvbSB0aGUgeGwgYnJlYWtwb2ludCAoMTI4MHB4KSB1cDsgYmVsb3cg
dGhhdAovLyB0aGUgbW9iaWxlIG1lbnUgaXMgdXNlZCwgc28gdGhlIG1lbnUgbmV2ZXIgb3ZlcmZsb3dzIG9uIHRhYmxldHMuCgpj
b25zdCBNQVBTX1VSTCA9CiAgImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS9SZXdpcmVkK0tldGFtaW5lL0AyNS45
NzMwOTkzLC04MC4xNDc1NTk0LDE3ei9kYXRhPSEzbTEhNGIxITRtNiEzbTUhMXMweDg4ZDlhZDM2OTE3YjgxNmQ6MHgzNTA0NmNj
ZTkyZGFiNTU5IThtMiEzZDI1Ljk3MzA5OTMhNGQtODAuMTQ0OTg0NSExNnMlMkZnJTJGMTFzcnJoOXhnbD9lbnRyeT10dHUiOwoK
Y29uc3QgU0VSVklDRVMgPSBbCiAgeyBocmVmOiAiL3NlcnZpY2VzIiwgbGFiZWw6ICJBbGwgU2VydmljZXMiIH0sCiAgeyBocmVm
OiAiL3NlcnZpY2VzL2tldGFtaW5lLWluZnVzaW9uIiwgbGFiZWw6ICJLZXRhbWluZSBJbmZ1c2lvbiIgfSwKICB7IGhyZWY6ICIv
c2VydmljZXMvaG9tZS1rZXRhbWluZSIsIGxhYmVsOiAiSG9tZSBLZXRhbWluZSIgfSwKICB7IGhyZWY6ICIvc2VydmljZXMvc3By
YXZhdG8iLCBsYWJlbDogIlNwcmF2YXRvIiB9LAogIHsgaHJlZjogIi9zZXJ2aWNlcy9pdi1rZXRhbWluZS12cy1zcHJhdmF0byIs
IGxhYmVsOiAiSVYgdnMgU3ByYXZhdG8iIH0sCiAgeyBocmVmOiAiL3NlcnZpY2VzL2tldGFtaW5lLXRoZXJhcHktY29zdCIsIGxh
YmVsOiAiQ29zdCIgfSwKICB7IGhyZWY6ICIvc2VydmljZXMva2V0YW1pbmUtaW5zdXJhbmNlIiwgbGFiZWw6ICJJbnN1cmFuY2Ui
IH0sCiAgeyBocmVmOiAiL3NlcnZpY2VzL2Z1bmN0aW9uYWwtd2VsbG5lc3MiLCBsYWJlbDogIkZ1bmN0aW9uYWwgV2VsbG5lc3Mi
IH0sCiAgeyBocmVmOiAiL3NlcnZpY2VzL21lZGljYWwtbWFuYWdlbWVudCIsIGxhYmVsOiAiTWVkaWNhbCBNYW5hZ2VtZW50IiB9
LAogIHsgaHJlZjogIi9zZXJ2aWNlcy90YWxrLXRoZXJhcHkiLCBsYWJlbDogIlRhbGsgVGhlcmFweSIgfSwKXTsKCmNvbnN0IFRS
RUFUTUVOVFMgPSBbCiAgeyBocmVmOiAiL3RyZWF0bWVudHMiLCBsYWJlbDogIkFsbCBUcmVhdG1lbnRzIiB9LAogIHsgaHJlZjog
Ii90cmVhdG1lbnRzL2RlcHJlc3Npb24iLCBsYWJlbDogIkRlcHJlc3Npb24iIH0sCiAgeyBocmVmOiAiL3RyZWF0bWVudHMvYW54
aWV0eSIsIGxhYmVsOiAiQW54aWV0eSIgfSwKICB7IGhyZWY6ICIvdHJlYXRtZW50cy9wdHNkIiwgbGFiZWw6ICJQVFNEIiB9LAog
IHsgaHJlZjogIi90cmVhdG1lbnRzL2J1cm5vdXQiLCBsYWJlbDogIkJ1cm5vdXQiIH0sCiAgeyBocmVmOiAiL3RyZWF0bWVudHMv
bWVudGFsLWZvZ2dpbmVzcyIsIGxhYmVsOiAiTWVudGFsIEZvZ2dpbmVzcyIgfSwKICB7IGhyZWY6ICIvdHJlYXRtZW50cy9tb3Rp
dmF0aW9uIiwgbGFiZWw6ICJNb3RpdmF0aW9uIiB9LAogIHsgaHJlZjogIi90cmVhdG1lbnRzL2VhdGluZy1kaXNvcmRlciIsIGxh
YmVsOiAiRWF0aW5nIERpc29yZGVyIiB9LAogIHsgaHJlZjogIi90cmVhdG1lbnRzL3Bvc3RwYXJ0dW0tZGVwcmVzc2lvbiIsIGxh
YmVsOiAiUG9zdHBhcnR1bSBEZXByZXNzaW9uIiB9LAogIHsgaHJlZjogIi90cmVhdG1lbnRzL29jZCIsIGxhYmVsOiAiT0NEIiB9
LAogIHsgaHJlZjogIi90cmVhdG1lbnRzL2Nocm9uaWMtcGFpbiIsIGxhYmVsOiAiQ2hyb25pYyBQYWluIiB9LAogIHsgaHJlZjog
Ii90cmVhdG1lbnRzL3RlbnNpb24taGVhZGFjaGVzIiwgbGFiZWw6ICJUZW5zaW9uIEhlYWRhY2hlcyIgfSwKICB7IGhyZWY6ICIv
dHJlYXRtZW50cy9wYWxsaWF0aXZlLWNvbXBhc3Npb24tY2FyZSIsIGxhYmVsOiAiUGFsbGlhdGl2ZSAmIENvbXBhc3Npb24gQ2Fy
ZSIgfSwKXTsKCmNvbnN0IENPTlRFTlQgPSBbCiAgeyBocmVmOiAiL2NvbnRlbnQvYmxvZyIsIGxhYmVsOiAiQmxvZyIgfSwKICB7
IGhyZWY6ICIvY29udGVudC92aWRlb3MiLCBsYWJlbDogIlZpZGVvcyIgfSwKICB7IGhyZWY6ICIvY29udGVudC9rZXRhbWluZS1p
bi10aGUtbmV3cyIsIGxhYmVsOiAiS2V0YW1pbmUgaW4gdGhlIE5ld3MiIH0sCl07Cgpjb25zdCBTT0NJQUwgPSBbCiAgeyBocmVm
OiAiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9yZXdpcmVkX2tldGFtaW5lLyIsIGxhYmVsOiAiSW5zdGFncmFtIiwgZDogIk0x
MiAyLjE2M2MzLjIwNCAwIDMuNTg0LjAxMiA0Ljg1LjA3IDMuMjUyLjE0OCA0Ljc3MSAxLjY5MSA0LjkxOSA0LjkxOS4wNTggMS4y
NjUuMDY5IDEuNjQ1LjA2OSA0Ljg0OSAwIDMuMjA1LS4wMTIgMy41ODQtLjA2OSA0Ljg0OS0uMTQ5IDMuMjI1LTEuNjY0IDQuNzcx
LTQuOTE5IDQuOTE5LTEuMjY2LjA1OC0xLjY0NC4wNy00Ljg1LjA3LTMuMjA0IDAtMy41ODQtLjAxMi00Ljg0OS0uMDctMy4yNi0u
MTQ5LTQuNzcxLTEuNjk5LTQuOTE5LTQuOTItLjA1OC0xLjI2NS0uMDctMS42NDQtLjA3LTQuODQ5IDAtMy4yMDQuMDEzLTMuNTgz
LjA3LTQuODQ5LjE0OS0zLjIyNyAxLjY2NC00Ljc3MSA0LjkxOS00LjkxOSAxLjI2Ni0uMDU3IDEuNjQ1LS4wNjkgNC44NDktLjA2
OXpNMTIgMEM4Ljc0MSAwIDguMzMzLjAxNCA3LjA1My4wNzIgMi42OTUuMjcyLjI3MyAyLjY5LjA3MyA3LjA1Mi4wMTQgOC4zMzMg
MCA4Ljc0MSAwIDEyYzAgMy4yNTkuMDE0IDMuNjY4LjA3MiA0Ljk0OC4yIDQuMzU4IDIuNjE4IDYuNzggNi45OCA2Ljk4QzguMzMz
IDIzLjk4NiA4Ljc0MSAyNCAxMiAyNGMzLjI1OSAwIDMuNjY4LS4wMTQgNC45NDgtLjA3MiA0LjM1NC0uMiA2Ljc4Mi0yLjYxOCA2
Ljk3OS02Ljk4LjA1OS0xLjI4LjA3My0xLjY4OS4wNzMtNC45NDggMC0zLjI1OS0uMDE0LTMuNjY3LS4wNzItNC45NDctLjE5Ni00
LjM1NC0yLjYxNy02Ljc4LTYuOTc5LTYuOThDMTUuNjY4LjAxNCAxNS4yNTkgMCAxMiAwem0wIDUuODM4YTYuMTYyIDYuMTYyIDAg
MTAwIDEyLjMyNCA2LjE2MiA2LjE2MiAwIDAwMC0xMi4zMjR6TTEyIDE2YTQgNCAwIDExMC04IDQgNCAwIDAxMCA4em02LjQwNi0x
MS44NDVhMS40NCAxLjQ0IDAgMTAwIDIuODgxIDEuNDQgMS40NCAwIDAwMC0yLjg4MXoiIH0sCiAgeyBocmVmOiAiaHR0cHM6Ly93
d3cueW91dHViZS5jb20vQFJld2lyZWRLZXRhbWluZSIsIGxhYmVsOiAiWW91VHViZSIsIGQ6ICJNMjMuNDk4IDYuMTg2YTMuMDE2
IDMuMDE2IDAgMDAtMi4xMjItMi4xMzZDMTkuNTA1IDMuNTQ1IDEyIDMuNTQ1IDEyIDMuNTQ1cy03LjUwNSAwLTkuMzc3LjUwNUEz
LjAxNyAzLjAxNyAwIDAwLjUwMiA2LjE4NkMwIDguMDcgMCAxMiAwIDEyczAgMy45My41MDIgNS44MTRhMy4wMTYgMy4wMTYgMCAw
MDIuMTIyIDIuMTM2YzEuODcxLjUwNSA5LjM3Ni41MDUgOS4zNzYuNTA1czcuNTA1IDAgOS4zNzctLjUwNWEzLjAxNSAzLjAxNSAw
IDAwMi4xMjItMi4xMzZDMjQgMTUuOTMgMjQgMTIgMjQgMTJzMC0zLjkzLS41MDItNS44MTR6TTkuNTQ1IDE1LjU2OFY4LjQzMkwx
NS44MTggMTJsLTYuMjczIDMuNTY4eiIgfSwKICB7IGhyZWY6ICJodHRwczovL3d3dy5mYWNlYm9vay5jb20vUmV3aXJlZEtldGFt
aW5lLyIsIGxhYmVsOiAiRmFjZWJvb2siLCBkOiAiTTI0IDEyLjA3M2MwLTYuNjI3LTUuMzczLTEyLTEyLTEycy0xMiA1LjM3My0x
MiAxMmMwIDUuOTkgNC4zODggMTAuOTU0IDEwLjEyNSAxMS44NTR2LTguMzg1SDcuMDc4di0zLjQ3aDMuMDQ3VjkuNDNjMC0zLjAw
NyAxLjc5Mi00LjY2OSA0LjUzMy00LjY2OSAxLjMxMiAwIDIuNjg2LjIzNSAyLjY4Ni4yMzV2Mi45NTNIMTUuODNjLTEuNDkxIDAt
MS45NTYuOTI1LTEuOTU2IDEuODc0djIuMjVoMy4zMjhsLS41MzIgMy40N2gtMi43OTZ2OC4zODVDMTkuNjEyIDIzLjAyNyAyNCAx
OC4wNjIgMjQgMTIuMDczeiIgfSwKICB7IGhyZWY6ICJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vamFjb2Itc2lsdmVyc3Rv
bmUtOTg0MTQ1NDcvIiwgbGFiZWw6ICJMaW5rZWRJbiIsIGQ6ICJNMjAuNDQ3IDIwLjQ1MmgtMy41NTR2LTUuNTY5YzAtMS4zMjgt
LjAyNy0zLjAzNy0xLjg1Mi0zLjAzNy0xLjg1MyAwLTIuMTM2IDEuNDQ1LTIuMTM2IDIuOTM5djUuNjY3SDkuMzUxVjloMy40MTR2
MS41NjFoLjA0NmMuNDc3LS45IDEuNjM3LTEuODUgMy4zNy0xLjg1IDMuNjAxIDAgNC4yNjcgMi4zNyA0LjI2NyA1LjQ1NXY2LjI4
NnpNNS4zMzcgNy40MzNhMi4wNjIgMi4wNjIgMCAwMS0yLjA2My0yLjA2NSAyLjA2NCAyLjA2NCAwIDExMi4wNjMgMi4wNjV6bTEu
NzgyIDEzLjAxOUgzLjU1NVY5aDMuNTY0djExLjQ1MnpNMjIuMjI1IDBIMS43NzFDLjc5MiAwIDAgLjc3NCAwIDEuNzI5djIwLjU0
MkMwIDIzLjIyNy43OTIgMjQgMS43NzEgMjRoMjAuNDUxQzIzLjIgMjQgMjQgMjMuMjI3IDI0IDIyLjI3MVYxLjcyOUMyNCAuNzc0
IDIzLjIgMCAyMi4yMjIgMGguMDAzeiIgfSwKXTsKCmNvbnN0IERST1BET1dOX0xJTksgPSAiYmxvY2sgcHgtNCBweS0yLjUgaG92
ZXI6YmctWyNGOEY1RjBdIGhvdmVyOnRleHQtWyNDOUE2NkJdIHRyYW5zaXRpb24iOwpjb25zdCBOQVZfTElOSyA9ICJob3Zlcjp0
ZXh0LVsjQzlBNjZCXSB0cmFuc2l0aW9uIjsKCi8vIEVuZ2xpc2ggcGFnZXMgdGhhdCBoYXZlIGEgU3BhbmlzaCB0d2luIChnZW5l
cmF0ZWQgZnJvbSBzcmMvYXBwL2VzKS4KY29uc3QgRVNfUEFHRVMgPSBuZXcgU2V0PHN0cmluZz4oWyIvY29udGVudCIsICIvY29u
dGVudC9ibG9nIiwgIi9jb250ZW50L2tldGFtaW5lLWluLXRoZS1uZXdzIiwgIi9jb250ZW50L3ZpZGVvcyIsICIvZmFxIiwgIi9s
b2NhdGlvbiIsICIvcHJvdmlkZXJzIiwgIi9zZXJ2aWNlcyIsICIvc2VydmljZXMvZnVuY3Rpb25hbC13ZWxsbmVzcyIsICIvc2Vy
dmljZXMvaG9tZS1rZXRhbWluZSIsICIvc2VydmljZXMvaXYta2V0YW1pbmUtdnMtc3ByYXZhdG8iLCAiL3NlcnZpY2VzL2tldGFt
aW5lLWluZnVzaW9uIiwgIi9zZXJ2aWNlcy9rZXRhbWluZS1pbnN1cmFuY2UiLCAiL3NlcnZpY2VzL2tldGFtaW5lLXRoZXJhcHkt
Y29zdCIsICIvc2VydmljZXMvbWVkaWNhbC1tYW5hZ2VtZW50IiwgIi9zZXJ2aWNlcy9zcHJhdmF0byIsICIvc2VydmljZXMvdGFs
ay10aGVyYXB5IiwgIi90cmVhdG1lbnRzIiwgIi90cmVhdG1lbnRzL2FueGlldHkiLCAiL3RyZWF0bWVudHMvYnVybm91dCIsICIv
dHJlYXRtZW50cy9jaHJvbmljLXBhaW4iLCAiL3RyZWF0bWVudHMvZGVwcmVzc2lvbiIsICIvdHJlYXRtZW50cy9lYXRpbmctZGlz
b3JkZXIiLCAiL3RyZWF0bWVudHMvbWVudGFsLWZvZ2dpbmVzcyIsICIvdHJlYXRtZW50cy9tb3RpdmF0aW9uIiwgIi90cmVhdG1l
bnRzL29jZCIsICIvdHJlYXRtZW50cy9wYWxsaWF0aXZlLWNvbXBhc3Npb24tY2FyZSIsICIvdHJlYXRtZW50cy9wb3N0cGFydHVt
LWRlcHJlc3Npb24iLCAiL3RyZWF0bWVudHMvcHRzZCIsICIvdHJlYXRtZW50cy90ZW5zaW9uLWhlYWRhY2hlcyJdKTsKCi8qKiBN
YXRjaGluZyBTcGFuaXNoIFVSTCBmb3IgdGhlIGN1cnJlbnQgRW5nbGlzaCBwYWdlLCBvciAvZXMgaWYgdGhlcmUgaXMgbm9uZS4g
Ki8KZnVuY3Rpb24gYWx0TGFuZ0hyZWYocGF0aG5hbWU6IHN0cmluZyB8IG51bGwpOiBzdHJpbmcgewogIGlmICghcGF0aG5hbWUp
IHJldHVybiAiL2VzIjsKICBjb25zdCBwID0gcGF0aG5hbWUubGVuZ3RoID4gMSA/IHBhdGhuYW1lLnJlcGxhY2UoL1wvKyQvLCAi
IikgOiBwYXRobmFtZTsKICBpZiAocCA9PT0gIi8iKSByZXR1cm4gIi9lcyI7CiAgaWYgKHAuc3RhcnRzV2l0aCgiL2ZhcS8iKSkg
cmV0dXJuICIvZXMiICsgcDsKICByZXR1cm4gRVNfUEFHRVMuaGFzKHApID8gIi9lcyIgKyBwIDogIi9lcyI7Cn0KCmZ1bmN0aW9u
IENoZXZyb24oeyBjbGFzc05hbWUgPSAidy00IGgtNCIgfTogeyBjbGFzc05hbWU/OiBzdHJpbmcgfSkgewogIHJldHVybiAoCiAg
ICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50
Q29sb3IiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlTGluZWNhcD0icm91bmQiIHN0cm9rZUxpbmVqb2luPSJyb3Vu
ZCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9Ik0xOSA5bC03IDctNy03IiAvPjwvc3ZnPgogICk7Cn0KCmZ1bmN0aW9uIFNvY2lhbEljb25z
KCkgewogIHJldHVybiAoCiAgICA8PgogICAgICB7U09DSUFMLm1hcCgocykgPT4gKAogICAgICAgIDxhIGtleT17cy5sYWJlbH0g
aHJlZj17cy5ocmVmfSB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBjbGFzc05hbWU9e05BVl9MSU5L
fSBhcmlhLWxhYmVsPXtzLmxhYmVsfT4KICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzTmFtZT0iaC01IHct
NSIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9e3MuZH0gLz48L3N2Zz4KICAgICAgICA8
L2E+CiAgICAgICkpfQogICAgPC8+CiAgKTsKfQoKZnVuY3Rpb24gRGVza3RvcERyb3Bkb3duKHsgbGFiZWwsIGl0ZW1zLCB3aWR0
aCwgc2Nyb2xsIH06IHsgbGFiZWw6IHN0cmluZzsgaXRlbXM6IHsgaHJlZjogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXTsgd2lk
dGg6IHN0cmluZzsgc2Nyb2xsPzogYm9vbGVhbiB9KSB7CiAgcmV0dXJuICgKICAgIDxkaXYgY2xhc3NOYW1lPSJyZWxhdGl2ZSBn
cm91cCI+CiAgICAgIDxidXR0b24gY2xhc3NOYW1lPSJob3Zlcjp0ZXh0LVsjQzlBNjZCXSB0cmFuc2l0aW9uIGZsZXggaXRlbXMt
Y2VudGVyIGdhcC0xIj4KICAgICAgICB7bGFiZWx9CiAgICAgICAgPENoZXZyb24gLz4KICAgICAgPC9idXR0b24+CiAgICAgIDxk
aXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgbGVmdC0wIHRvcC1mdWxsIG10LTIgJHt3aWR0aH0gYmctd2hpdGUgdGV4dC1bIzBCMUQz
Nl0gcm91bmRlZC1sZyBzaGFkb3ctbGcgb3BhY2l0eS0wIGludmlzaWJsZSBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCBncm91cC1o
b3Zlcjp2aXNpYmxlIGdyb3VwLWZvY3VzLXdpdGhpbjpvcGFjaXR5LTEwMCBncm91cC1mb2N1cy13aXRoaW46dmlzaWJsZSB0cmFu
c2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgei01MGB9PgogICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzY3JvbGwgPyAicHktMiBtYXgt
aC04MCBvdmVyZmxvdy15LWF1dG8iIDogInB5LTIifT4KICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+ICgKICAgICAgICAg
ICAgPExpbmsga2V5PXtpdGVtLmhyZWZ9IGhyZWY9e2l0ZW0uaHJlZn0gY2xhc3NOYW1lPXtEUk9QRE9XTl9MSU5LfT57aXRlbS5s
YWJlbH08L0xpbms+CiAgICAgICAgICApKX0KICAgICAgICA8L2Rpdj4KICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KICApOwp9Cgpm
dW5jdGlvbiBNb2JpbGVHcm91cCh7IGxhYmVsLCBpdGVtcywgb3Blbiwgb25Ub2dnbGUsIG9uTmF2aWdhdGUgfTogeyBsYWJlbDog
c3RyaW5nOyBpdGVtczogeyBocmVmOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdOyBvcGVuOiBib29sZWFuOyBvblRvZ2dsZTog
KCkgPT4gdm9pZDsgb25OYXZpZ2F0ZTogKCkgPT4gdm9pZCB9KSB7CiAgcmV0dXJuICgKICAgIDxkaXY+CiAgICAgIDxidXR0b24g
b25DbGljaz17b25Ub2dnbGV9IGNsYXNzTmFtZT0iZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBob3Zl
cjp0ZXh0LVsjQzlBNjZCXSB0cmFuc2l0aW9uIiBhcmlhLWV4cGFuZGVkPXtvcGVufT4KICAgICAgICA8c3Bhbj57bGFiZWx9PC9z
cGFuPgogICAgICAgIDxDaGV2cm9uIGNsYXNzTmFtZT17YHctNCBoLTQgdHJhbnNpdGlvbi10cmFuc2Zvcm0gJHtvcGVuID8gInJv
dGF0ZS0xODAiIDogIiJ9YH0gLz4KICAgICAgPC9idXR0b24+CiAgICAgIHtvcGVuICYmICgKICAgICAgICA8ZGl2IGNsYXNzTmFt
ZT0icGwtNCBtdC0zIGZsZXggZmxleC1jb2wgc3BhY2UteS0zIHRleHQtc20iPgogICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkg
PT4gKAogICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uaHJlZn0gaHJlZj17aXRlbS5ocmVmfSBjbGFzc05hbWU9e05BVl9MSU5L
fSBvbkNsaWNrPXtvbk5hdmlnYXRlfT57aXRlbS5sYWJlbH08L0xpbms+CiAgICAgICAgICApKX0KICAgICAgICA8L2Rpdj4KICAg
ICAgKX0KICAgIDwvZGl2PgogICk7Cn0KCmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpdGVIZWFkZXIoeyBzcGFuaXNoSHJlZjog
YWx0T3ZlcnJpZGUgfTogeyBzcGFuaXNoSHJlZj86IHN0cmluZyB9ID0ge30pIHsKICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhu
YW1lKCk7CiAgY29uc3QgYWx0SHJlZiA9IGFsdE92ZXJyaWRlID8/IGFsdExhbmdIcmVmKHBhdGhuYW1lKTsKICBjb25zdCBbaXNN
ZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7CiAgY29uc3QgW2lzU2VydmljZXNPcGVuLCBzZXRJc1Nl
cnZpY2VzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7CiAgY29uc3QgW2lzVHJlYXRtZW50c09wZW4sIHNldElzVHJlYXRtZW50c09w
ZW5dID0gdXNlU3RhdGUoZmFsc2UpOwogIGNvbnN0IFtpc0NvbnRlbnRPcGVuLCBzZXRJc0NvbnRlbnRPcGVuXSA9IHVzZVN0YXRl
KGZhbHNlKTsKICBjb25zdCBjbG9zZU1lbnUgPSAoKSA9PiBzZXRJc01lbnVPcGVuKGZhbHNlKTsKCiAgcmV0dXJuICgKICAgIDw+
CiAgICAgIHsvKiBTa2lwIHRvIGNvbnRlbnQgKi99CiAgICAgIDxhCiAgICAgICAgaHJlZj0iI21haW4tY29udGVudCIKICAgICAg
ICBjbGFzc05hbWU9InNyLW9ubHkgZm9jdXM6bm90LXNyLW9ubHkgZm9jdXM6YWJzb2x1dGUgZm9jdXM6dG9wLTQgZm9jdXM6bGVm
dC00IGZvY3VzOnotWzEwMF0gZm9jdXM6YmctWyNDOUE2NkJdIGZvY3VzOnRleHQtWyMwQjFEMzZdIGZvY3VzOnB4LTQgZm9jdXM6
cHktMiBmb2N1czpyb3VuZGVkIGZvY3VzOmZvbnQtc2VtaWJvbGQiCiAgICAgID4KICAgICAgICBTa2lwIHRvIG1haW4gY29udGVu
dAogICAgICA8L2E+CgogICAgICB7LyogPT09PT0gVE9QIEJBUiA9PT09PSAqL30KICAgICAgPGRpdiBjbGFzc05hbWU9ImJnLXdo
aXRlIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCI+CiAgICAgICAgPGRpdiBjbGFzc05hbWU9Im1heC13LTd4bCBteC1hdXRvIHB4
LTYgcHktNCBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTQiPgogICAg
ICAgICAgPExpbmsgaHJlZj0iLyIgY2xhc3NOYW1lPSJmbGV4LXNocmluay0wIj4KICAgICAgICAgICAgPEltYWdlCiAgICAgICAg
ICAgICAgc3JjPSIvbG9nby5wbmciCiAgICAgICAgICAgICAgYWx0PSJSZXdpcmVkIEtldGFtaW5lIgogICAgICAgICAgICAgIHdp
ZHRoPXs2MDB9CiAgICAgICAgICAgICAgaGVpZ2h0PXsxODB9CiAgICAgICAgICAgICAgY2xhc3NOYW1lPSJoLTE2IG1kOmgtMjAg
dy1hdXRvIgogICAgICAgICAgICAgIHByaW9yaXR5CiAgICAgICAgICAgIC8+CiAgICAgICAgICA8L0xpbms+CgogICAgICAgICAg
PGRpdiBjbGFzc05hbWU9ImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAteC02IGdhcC15LTIg
dGV4dC1zbSB0ZXh0LVsjMEIxRDM2XSI+CiAgICAgICAgICAgIDxhIGhyZWY9e01BUFNfVVJMfSB0YXJnZXQ9Il9ibGFuayIgcmVs
PSJub29wZW5lciBub3JlZmVycmVyIiBjbGFzc05hbWU9ImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGhvdmVyOnRleHQtWyNDOUE2
NkJdIHRyYW5zaXRpb24iPgogICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIHhtbG5zPSJodHRwOi8vd3d3Lncz
Lm9yZy8yMDAwL3N2ZyIgY2xhc3NOYW1lPSJoLTQgdy00IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0i
Y3VycmVudENvbG9yIj4KICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0i
cm91bmQiIHN0cm9rZVdpZHRoPXsyfSBkPSJNMTcuNjU3IDE2LjY1N0wxMy40MTQgMjAuOWExLjk5OCAxLjk5OCAwIDAxLTIuODI3
IDBsLTQuMjQ0LTQuMjQzYTggOCAwIDExMTEuMzE0IDB6IiAvPgogICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD0i
cm91bmQiIHN0cm9rZUxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9Ik0xNSAxMWEzIDMgMCAxMS02IDAgMyAzIDAg
MDE2IDB6IiAvPgogICAgICAgICAgICAgIDwvc3ZnPgogICAgICAgICAgICAgIDI4MjAgTkUgMjE0dGggU3QgIzEwMDIsIEF2ZW50
dXJhLCBGTCAzMzE4MAogICAgICAgICAgICA8L2E+CiAgICAgICAgICAgIDxhIGhyZWY9Im1haWx0bzppbmZvQHJld2lyZWRrZXRh
bWluZS5jb20iIGNsYXNzTmFtZT0iZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgaG92ZXI6dGV4dC1bI0M5QTY2Ql0gdHJhbnNpdGlv
biI+CiAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3Zn
IiBjbGFzc05hbWU9ImgtNCB3LTQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3Ii
PgogICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD0icm91bmQiIHN0cm9rZUxpbmVqb2luPSJyb3VuZCIgc3Ryb2tl
V2lkdGg9ezJ9IGQ9Ik0zIDhsNy44OSA1LjI2YTIgMiAwIDAwMi4yMiAwTDIxIDhNNSAxOWgxNGEyIDIgMCAwMDItMlY3YTIgMiAw
IDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMnoiIC8+CiAgICAgICAgICAgICAgPC9zdmc+CiAgICAgICAgICAg
ICAgaW5mb0ByZXdpcmVka2V0YW1pbmUuY29tCiAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgPGEgaHJlZj0idGVsOisxMzA1
Njc2NjA3MCIgY2xhc3NOYW1lPSJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtWyNDOUE2
NkJdIHRyYW5zaXRpb24iPgogICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIHhtbG5zPSJodHRwOi8vd3d3Lncz
Lm9yZy8yMDAwL3N2ZyIgY2xhc3NOYW1lPSJoLTQgdy00IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0i
Y3VycmVudENvbG9yIj4KICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0i
cm91bmQiIHN0cm9rZVdpZHRoPXsyfSBkPSJNMyA1YTIgMiAwIDAxMi0yaDMuMjhhMSAxIDAgMDEuOTQ4LjY4NGwxLjQ5OCA0LjQ5
M2ExIDEgMCAwMS0uNTAyIDEuMjFsLTIuMjU3IDEuMTNhMTEuMDQyIDExLjA0MiAwIDAwNS41MTYgNS41MTZsMS4xMy0yLjI1N2Ex
IDEgMCAwMTEuMjEtLjUwMmw0LjQ5MyAxLjQ5OGExIDEgMCAwMS42ODQuOTQ5VjE5YTIgMiAwIDAxLTIgMmgtMUM5LjcxNiAyMSAz
IDE0LjI4NCAzIDZWNXoiIC8+CiAgICAgICAgICAgICAgPC9zdmc+CiAgICAgICAgICAgICAgKDMwNSkgNjc2LTYwNzAKICAgICAg
ICAgICAgPC9hPgogICAgICAgICAgICA8TGluayBocmVmPXthbHRIcmVmfSBocmVmTGFuZz0iZXMiIGxhbmc9ImVzIiBjbGFzc05h
bWU9InRleHQtWyNDOUE2NkJdIGZvbnQtc2VtaWJvbGQgaG92ZXI6dW5kZXJsaW5lIj5Fc3Bhw7FvbDwvTGluaz4KICAgICAgICAg
IDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KCiAgICAgIHsvKiBNQUlOIE5BVklHQVRJT04gKi99CiAgICAgIDxo
ZWFkZXIgY2xhc3NOYW1lPSJiZy1bIzBCMUQzNl0gdGV4dC13aGl0ZSBzdGlja3kgdG9wLTAgei01MCI+CiAgICAgICAgPGRpdiBj
bGFzc05hbWU9Im1heC13LTd4bCBteC1hdXRvIHB4LTYgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4iPgog
ICAgICAgICAgPG5hdiBjbGFzc05hbWU9ImhpZGRlbiB4bDpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNiB0ZXh0LVsxNXB4XSBmb250
LW1lZGl1bSB3aGl0ZXNwYWNlLW5vd3JhcCI+CiAgICAgICAgICAgIDxMaW5rIGhyZWY9Ii8iIGNsYXNzTmFtZT17TkFWX0xJTkt9
PkhvbWU8L0xpbms+CiAgICAgICAgICAgIDxEZXNrdG9wRHJvcGRvd24gbGFiZWw9Ik91ciBTZXJ2aWNlcyIgaXRlbXM9e1NFUlZJ
Q0VTfSB3aWR0aD0idy01NiIgLz4KICAgICAgICAgICAgPERlc2t0b3BEcm9wZG93biBsYWJlbD0iVHJlYXRtZW50cyIgaXRlbXM9
e1RSRUFUTUVOVFN9IHdpZHRoPSJ3LTY0IiBzY3JvbGwgLz4KICAgICAgICAgICAgPExpbmsgaHJlZj0iL3Byb3ZpZGVycyIgY2xh
c3NOYW1lPXtOQVZfTElOS30+UHJvdmlkZXJzPC9MaW5rPgogICAgICAgICAgICA8RGVza3RvcERyb3Bkb3duIGxhYmVsPSJDb250
ZW50IiBpdGVtcz17Q09OVEVOVH0gd2lkdGg9InctNTYiIC8+CiAgICAgICAgICAgIDxMaW5rIGhyZWY9Ii9sb2NhdGlvbiIgY2xh
c3NOYW1lPXtOQVZfTElOS30+TG9jYXRpb248L0xpbms+CiAgICAgICAgICAgIDxMaW5rIGhyZWY9Ii9mYXEiIGNsYXNzTmFtZT17
TkFWX0xJTkt9PkZBUTwvTGluaz4KICAgICAgICAgICAgPExpbmsgaHJlZj0iLyNjb250YWN0IiBjbGFzc05hbWU9e05BVl9MSU5L
fT5Db250YWN0PC9MaW5rPgogICAgICAgICAgPC9uYXY+CgogICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9InhsOmhpZGRlbiBw
LTIiIG9uQ2xpY2s9eygpID0+IHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pfSBhcmlhLWxhYmVsPXtpc01lbnVPcGVuID8gIkNs
b3NlIG1lbnUiIDogIk9wZW4gbWVudSJ9IGFyaWEtZXhwYW5kZWQ9e2lzTWVudU9wZW59PgogICAgICAgICAgICB7aXNNZW51T3Bl
biA/ICgKICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzc05hbWU9ImgtNiB3LTYiIGZpbGw9Im5vbmUi
IHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiPjxwYXRoIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJv
a2VMaW5lam9pbj0icm91bmQiIHN0cm9rZVdpZHRoPXsyfSBkPSJNNiAxOEwxOCA2TTYgNmwxMiAxMiIgLz48L3N2Zz4KICAgICAg
ICAgICAgKSA6ICgKICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzc05hbWU9ImgtNiB3LTYiIGZpbGw9
Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiPjxwYXRoIHN0cm9rZUxpbmVjYXA9InJvdW5k
IiBzdHJva2VMaW5lam9pbj0icm91bmQiIHN0cm9rZVdpZHRoPXsyfSBkPSJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNiIgLz48L3N2
Zz4KICAgICAgICAgICAgKX0KICAgICAgICAgIDwvYnV0dG9uPgoKICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSJoaWRkZW4geGw6
ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTUiPgogICAgICAgICAgICA8U29jaWFsSWNvbnMgLz4KICAgICAgICAgICAgPExpbmsgaHJl
Zj0iLyNjb250YWN0IiBjbGFzc05hbWU9ImJnLVsjQzlBNjZCXSB0ZXh0LVsjMEIxRDM2XSB0ZXh0LXNtIGZvbnQtYm9sZCBweC02
IHB5LTIuNSByb3VuZGVkIGhvdmVyOmJnLXdoaXRlIHRyYW5zaXRpb24gd2hpdGVzcGFjZS1ub3dyYXAiPgogICAgICAgICAgICAg
IEZSRUUgQ09OU1VMVEFUSU9OCiAgICAgICAgICAgIDwvTGluaz4KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgoKICAg
ICAgICB7aXNNZW51T3BlbiAmJiAoCiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ieGw6aGlkZGVuIGJnLVsjMEIxRDM2XSBib3Jk
ZXItdCBib3JkZXItd2hpdGUvMTAiPgogICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0iZmxleCBmbGV4LWNvbCBweC02IHB5LTQg
c3BhY2UteS00Ij4KICAgICAgICAgICAgICA8TGluayBocmVmPSIvIiBjbGFzc05hbWU9e05BVl9MSU5LfSBvbkNsaWNrPXtjbG9z
ZU1lbnV9PkhvbWU8L0xpbms+CiAgICAgICAgICAgICAgPE1vYmlsZUdyb3VwIGxhYmVsPSJPdXIgU2VydmljZXMiIGl0ZW1zPXtT
RVJWSUNFU30gb3Blbj17aXNTZXJ2aWNlc09wZW59IG9uVG9nZ2xlPXsoKSA9PiBzZXRJc1NlcnZpY2VzT3BlbighaXNTZXJ2aWNl
c09wZW4pfSBvbk5hdmlnYXRlPXtjbG9zZU1lbnV9IC8+CiAgICAgICAgICAgICAgPE1vYmlsZUdyb3VwIGxhYmVsPSJUcmVhdG1l
bnRzIiBpdGVtcz17VFJFQVRNRU5UU30gb3Blbj17aXNUcmVhdG1lbnRzT3Blbn0gb25Ub2dnbGU9eygpID0+IHNldElzVHJlYXRt
ZW50c09wZW4oIWlzVHJlYXRtZW50c09wZW4pfSBvbk5hdmlnYXRlPXtjbG9zZU1lbnV9IC8+CiAgICAgICAgICAgICAgPExpbmsg
aHJlZj0iL3Byb3ZpZGVycyIgY2xhc3NOYW1lPXtOQVZfTElOS30gb25DbGljaz17Y2xvc2VNZW51fT5Qcm92aWRlcnM8L0xpbms+
CiAgICAgICAgICAgICAgPE1vYmlsZUdyb3VwIGxhYmVsPSJDb250ZW50IiBpdGVtcz17Q09OVEVOVH0gb3Blbj17aXNDb250ZW50
T3Blbn0gb25Ub2dnbGU9eygpID0+IHNldElzQ29udGVudE9wZW4oIWlzQ29udGVudE9wZW4pfSBvbk5hdmlnYXRlPXtjbG9zZU1l
bnV9IC8+CiAgICAgICAgICAgICAgPExpbmsgaHJlZj0iL2xvY2F0aW9uIiBjbGFzc05hbWU9e05BVl9MSU5LfSBvbkNsaWNrPXtj
bG9zZU1lbnV9PkxvY2F0aW9uPC9MaW5rPgogICAgICAgICAgICAgIDxMaW5rIGhyZWY9Ii9mYXEiIGNsYXNzTmFtZT17TkFWX0xJ
Tkt9IG9uQ2xpY2s9e2Nsb3NlTWVudX0+RkFRPC9MaW5rPgogICAgICAgICAgICAgIDxMaW5rIGhyZWY9Ii8jY29udGFjdCIgY2xh
c3NOYW1lPXtOQVZfTElOS30gb25DbGljaz17Y2xvc2VNZW51fT5Db250YWN0PC9MaW5rPgogICAgICAgICAgICAgIDxMaW5rIGhy
ZWY9e2FsdEhyZWZ9IGhyZWZMYW5nPSJlcyIgbGFuZz0iZXMiIGNsYXNzTmFtZT0idGV4dC1bI0M5QTY2Ql0gZm9udC1zZW1pYm9s
ZCIgb25DbGljaz17Y2xvc2VNZW51fT5Fc3Bhw7FvbDwvTGluaz4KCiAgICAgICAgICAgICAgPExpbmsgaHJlZj0iLyNjb250YWN0
IiBjbGFzc05hbWU9ImJnLVsjQzlBNjZCXSB0ZXh0LVsjMEIxRDM2XSB0ZXh0LWNlbnRlciBmb250LWJvbGQgcHgtNiBweS0zIHJv
dW5kZWQgbXQtMiIgb25DbGljaz17Y2xvc2VNZW51fT4KICAgICAgICAgICAgICAgIEZSRUUgQ09OU1VMVEFUSU9OCiAgICAgICAg
ICAgICAgPC9MaW5rPgoKICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0iZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50
ZXIgZ2FwLTYgcHQtNCBib3JkZXItdCBib3JkZXItd2hpdGUvMTAgbXQtMiI+CiAgICAgICAgICAgICAgICA8U29jaWFsSWNvbnMg
Lz4KICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC9uYXY+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICApfQogICAg
ICA8L2hlYWRlcj4KICAgIDwvPgogICk7Cn0K
'@

$FooterB64 = @'
aW1wb3J0IEltYWdlIGZyb20gIm5leHQvaW1hZ2UiOwppbXBvcnQgTGluayBmcm9tICJuZXh0L2xpbmsiOwoKLy8gU2hhcmVkIEVu
Z2xpc2ggc2l0ZSBmb290ZXIuIFRoZSBFbmdsaXNoIGFuZCBTcGFuaXNoIGZvb3RlcnMgYXJlIGdlbmVyYXRlZAovLyBmcm9tIG9u
ZSB0ZW1wbGF0ZSwgc28gdGhleSBhbHdheXMgaGF2ZSB0aGUgc2FtZSBzdHJ1Y3R1cmUgYW5kIGNsYXNzZXMuCgpjb25zdCBNQVBT
X1VSTCA9CiAgImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS9SZXdpcmVkK0tldGFtaW5lL0AyNS45NzMwOTkzLC04
MC4xNDc1NTk0LDE3ei9kYXRhPSEzbTEhNGIxITRtNiEzbTUhMXMweDg4ZDlhZDM2OTE3YjgxNmQ6MHgzNTA0NmNjZTkyZGFiNTU5
IThtMiEzZDI1Ljk3MzA5OTMhNGQtODAuMTQ0OTg0NSExNnMlMkZnJTJGMTFzcnJoOXhnbD9lbnRyeT10dHUiOwoKY29uc3QgU09D
SUFMID0gWwogIHsgaHJlZjogImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcmV3aXJlZF9rZXRhbWluZS8iLCBsYWJlbDogIklu
c3RhZ3JhbSIsIGQ6ICJNMTIgMi4xNjNjMy4yMDQgMCAzLjU4NC4wMTIgNC44NS4wNyAzLjI1Mi4xNDggNC43NzEgMS42OTEgNC45
MTkgNC45MTkuMDU4IDEuMjY1LjA2OSAxLjY0NS4wNjkgNC44NDkgMCAzLjIwNS0uMDEyIDMuNTg0LS4wNjkgNC44NDktLjE0OSAz
LjIyNS0xLjY2NCA0Ljc3MS00LjkxOSA0LjkxOS0xLjI2Ni4wNTgtMS42NDQuMDctNC44NS4wNy0zLjIwNCAwLTMuNTg0LS4wMTIt
NC44NDktLjA3LTMuMjYtLjE0OS00Ljc3MS0xLjY5OS00LjkxOS00LjkyLS4wNTgtMS4yNjUtLjA3LTEuNjQ0LS4wNy00Ljg0OSAw
LTMuMjA0LjAxMy0zLjU4My4wNy00Ljg0OS4xNDktMy4yMjcgMS42NjQtNC43NzEgNC45MTktNC45MTkgMS4yNjYtLjA1NyAxLjY0
NS0uMDY5IDQuODQ5LS4wNjl6TTEyIDBDOC43NDEgMCA4LjMzMy4wMTQgNy4wNTMuMDcyIDIuNjk1LjI3Mi4yNzMgMi42OS4wNzMg
Ny4wNTIuMDE0IDguMzMzIDAgOC43NDEgMCAxMmMwIDMuMjU5LjAxNCAzLjY2OC4wNzIgNC45NDguMiA0LjM1OCAyLjYxOCA2Ljc4
IDYuOTggNi45OEM4LjMzMyAyMy45ODYgOC43NDEgMjQgMTIgMjRjMy4yNTkgMCAzLjY2OC0uMDE0IDQuOTQ4LS4wNzIgNC4zNTQt
LjIgNi43ODItMi42MTggNi45NzktNi45OC4wNTktMS4yOC4wNzMtMS42ODkuMDczLTQuOTQ4IDAtMy4yNTktLjAxNC0zLjY2Ny0u
MDcyLTQuOTQ3LS4xOTYtNC4zNTQtMi42MTctNi43OC02Ljk3OS02Ljk4QzE1LjY2OC4wMTQgMTUuMjU5IDAgMTIgMHptMCA1Ljgz
OGE2LjE2MiA2LjE2MiAwIDEwMCAxMi4zMjQgNi4xNjIgNi4xNjIgMCAwMDAtMTIuMzI0ek0xMiAxNmE0IDQgMCAxMTAtOCA0IDQg
MCAwMTAgOHptNi40MDYtMTEuODQ1YTEuNDQgMS40NCAwIDEwMCAyLjg4MSAxLjQ0IDEuNDQgMCAwMDAtMi44ODF6IiB9LAogIHsg
aHJlZjogImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL0BSZXdpcmVkS2V0YW1pbmUiLCBsYWJlbDogIllvdVR1YmUiLCBkOiAiTTIz
LjQ5OCA2LjE4NmEzLjAxNiAzLjAxNiAwIDAwLTIuMTIyLTIuMTM2QzE5LjUwNSAzLjU0NSAxMiAzLjU0NSAxMiAzLjU0NXMtNy41
MDUgMC05LjM3Ny41MDVBMy4wMTcgMy4wMTcgMCAwMC41MDIgNi4xODZDMCA4LjA3IDAgMTIgMCAxMnMwIDMuOTMuNTAyIDUuODE0
YTMuMDE2IDMuMDE2IDAgMDAyLjEyMiAyLjEzNmMxLjg3MS41MDUgOS4zNzYuNTA1IDkuMzc2LjUwNXM3LjUwNSAwIDkuMzc3LS41
MDVhMy4wMTUgMy4wMTUgMCAwMDIuMTIyLTIuMTM2QzI0IDE1LjkzIDI0IDEyIDI0IDEyczAtMy45My0uNTAyLTUuODE0ek05LjU0
NSAxNS41NjhWOC40MzJMMTUuODE4IDEybC02LjI3MyAzLjU2OHoiIH0sCiAgeyBocmVmOiAiaHR0cHM6Ly93d3cuZmFjZWJvb2su
Y29tL1Jld2lyZWRLZXRhbWluZS8iLCBsYWJlbDogIkZhY2Vib29rIiwgZDogIk0yNCAxMi4wNzNjMC02LjYyNy01LjM3My0xMi0x
Mi0xMnMtMTIgNS4zNzMtMTIgMTJjMCA1Ljk5IDQuMzg4IDEwLjk1NCAxMC4xMjUgMTEuODU0di04LjM4NUg3LjA3OHYtMy40N2gz
LjA0N1Y5LjQzYzAtMy4wMDcgMS43OTItNC42NjkgNC41MzMtNC42NjkgMS4zMTIgMCAyLjY4Ni4yMzUgMi42ODYuMjM1djIuOTUz
SDE1LjgzYy0xLjQ5MSAwLTEuOTU2LjkyNS0xLjk1NiAxLjg3NHYyLjI1aDMuMzI4bC0uNTMyIDMuNDdoLTIuNzk2djguMzg1QzE5
LjYxMiAyMy4wMjcgMjQgMTguMDYyIDI0IDEyLjA3M3oiIH0sCiAgeyBocmVmOiAiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2lu
L2phY29iLXNpbHZlcnN0b25lLTk4NDE0NTQ3LyIsIGxhYmVsOiAiTGlua2VkSW4iLCBkOiAiTTIwLjQ0NyAyMC40NTJoLTMuNTU0
di01LjU2OWMwLTEuMzI4LS4wMjctMy4wMzctMS44NTItMy4wMzctMS44NTMgMC0yLjEzNiAxLjQ0NS0yLjEzNiAyLjkzOXY1LjY2
N0g5LjM1MVY5aDMuNDE0djEuNTYxaC4wNDZjLjQ3Ny0uOSAxLjYzNy0xLjg1IDMuMzctMS44NSAzLjYwMSAwIDQuMjY3IDIuMzcg
NC4yNjcgNS40NTV2Ni4yODZ6TTUuMzM3IDcuNDMzYTIuMDYyIDIuMDYyIDAgMDEtMi4wNjMtMi4wNjUgMi4wNjQgMi4wNjQgMCAx
MTIuMDYzIDIuMDY1em0xLjc4MiAxMy4wMTlIMy41NTVWOWgzLjU2NHYxMS40NTJ6TTIyLjIyNSAwSDEuNzcxQy43OTIgMCAwIC43
NzQgMCAxLjcyOXYyMC41NDJDMCAyMy4yMjcuNzkyIDI0IDEuNzcxIDI0aDIwLjQ1MUMyMy4yIDI0IDI0IDIzLjIyNyAyNCAyMi4y
NzFWMS43MjlDMjQgLjc3NCAyMy4yIDAgMjIuMjIyIDBoLjAwM3oiIH0sCl07Cgpjb25zdCBRVUlDS19MSU5LUyA9IFsKICB7IGhy
ZWY6ICIvIiwgbGFiZWw6ICJIb21lIiB9LAogIHsgaHJlZjogIi9zZXJ2aWNlcyIsIGxhYmVsOiAiT3VyIFNlcnZpY2VzIiB9LAog
IHsgaHJlZjogIi8jaG93LXdlLWhlbHAiLCBsYWJlbDogIkhvdyBXZSBIZWxwIiB9LAogIHsgaHJlZjogIi8jZXhwZXJpZW5jZSIs
IGxhYmVsOiAiVGhlIEV4cGVyaWVuY2UiIH0sCiAgeyBocmVmOiAiLyNjb250YWN0IiwgbGFiZWw6ICJDb250YWN0IiB9LAogIHsg
aHJlZjogIi8jY29udGFjdCIsIGxhYmVsOiAiRnJlZSBDb25zdWx0YXRpb24iIH0sCl07CgpleHBvcnQgZGVmYXVsdCBmdW5jdGlv
biBTaXRlRm9vdGVyKCkgewogIHJldHVybiAoCiAgICA8Zm9vdGVyIGNsYXNzTmFtZT0iYmctWyMwODE1MjVdIHRleHQtd2hpdGUg
cHQtMTYgcGItOCI+CiAgICAgIDxkaXYgY2xhc3NOYW1lPSJtYXgtdy03eGwgbXgtYXV0byBweC02Ij4KICAgICAgICA8ZGl2IGNs
YXNzTmFtZT0iZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtMTIgbWItMTIiPgoKICAgICAgICAgIDxkaXY+CiAg
ICAgICAgICAgIDxoMyBjbGFzc05hbWU9ImZvbnQtc2VtaWJvbGQgdGV4dC1sZyBtYi01IHRleHQtWyNDOUE2NkJdIj5Db250YWN0
IFVzPC9oMz4KICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0ic3BhY2UteS0zIHRleHQtd2hpdGUvODAgdGV4dC1zbSI+CiAgICAg
ICAgICAgICAgPGxpPk9wZW46IE1vbmRheSAtIEZyaWRheTwvbGk+CiAgICAgICAgICAgICAgPGxpPjk6MDBBTSAtIDU6MDBQTTwv
bGk+CiAgICAgICAgICAgICAgPGxpPgogICAgICAgICAgICAgICAgPGEgaHJlZj0idGVsOisxMzA1Njc2NjA3MCIgY2xhc3NOYW1l
PSJob3Zlcjp0ZXh0LVsjQzlBNjZCXSB0cmFuc2l0aW9uIj5QaG9uZTogKDMwNSkgNjc2LTYwNzA8L2E+CiAgICAgICAgICAgICAg
PC9saT4KICAgICAgICAgICAgICA8bGk+CiAgICAgICAgICAgICAgICA8YSBocmVmPXtNQVBTX1VSTH0gdGFyZ2V0PSJfYmxhbmsi
IHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgY2xhc3NOYW1lPSJob3Zlcjp0ZXh0LVsjQzlBNjZCXSB0cmFuc2l0aW9uIj4KICAg
ICAgICAgICAgICAgICAgMjgyMCBORSAyMTR0aCBTdCAjMTAwMjxiciAvPkF2ZW50dXJhLCBGTCAzMzE4MAogICAgICAgICAgICAg
ICAgPC9hPgogICAgICAgICAgICAgIDwvbGk+CiAgICAgICAgICAgICAgPGxpPgogICAgICAgICAgICAgICAgPGEgaHJlZj0ibWFp
bHRvOmluZm9AcmV3aXJlZGtldGFtaW5lLmNvbSIgY2xhc3NOYW1lPSJob3Zlcjp0ZXh0LVsjQzlBNjZCXSB0cmFuc2l0aW9uIj5p
bmZvQHJld2lyZWRrZXRhbWluZS5jb208L2E+CiAgICAgICAgICAgICAgPC9saT4KICAgICAgICAgICAgPC91bD4KICAgICAgICAg
IDwvZGl2PgoKICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciI+
CiAgICAgICAgICAgIDxJbWFnZQogICAgICAgICAgICAgIHNyYz0iL2xvZ28ucG5nIgogICAgICAgICAgICAgIGFsdD0iUmV3aXJl
ZCBLZXRhbWluZSIKICAgICAgICAgICAgICB3aWR0aD17MjAwfQogICAgICAgICAgICAgIGhlaWdodD17NjB9CiAgICAgICAgICAg
ICAgY2xhc3NOYW1lPSJoLTE0IHctYXV0byBtYi02IgogICAgICAgICAgICAvPgoKICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9
ImZsZXggZ2FwLTQgbWItNiI+CiAgICAgICAgICAgICAge1NPQ0lBTC5tYXAoKHMpID0+ICgKICAgICAgICAgICAgICAgIDxhIGtl
eT17cy5sYWJlbH0gaHJlZj17cy5ocmVmfSB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBjbGFzc05h
bWU9ImhvdmVyOnRleHQtWyNDOUE2NkJdIHRyYW5zaXRpb24iIGFyaWEtbGFiZWw9e3MubGFiZWx9PgogICAgICAgICAgICAgICAg
ICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzc05hbWU9ImgtNSB3LTUiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0i
MCAwIDI0IDI0Ij48cGF0aCBkPXtzLmR9IC8+PC9zdmc+CiAgICAgICAgICAgICAgICA8L2E+CiAgICAgICAgICAgICAgKSl9CiAg
ICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL3d3dy5sZWdpdHNjcmlw
dC5jb20vd2Vic2l0ZXMvP2NoZWNrZXJfa2V5d29yZHM9cmV3aXJlZGtldGFtaW5lLmNvbSIKICAgICAgICAgICAgICB0YXJnZXQ9
Il9ibGFuayIKICAgICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICAgICAgY2xhc3NOYW1lPSJp
bmxpbmUtYmxvY2siCiAgICAgICAgICAgID4KICAgICAgICAgICAgICA8SW1hZ2UKICAgICAgICAgICAgICAgIHNyYz0iL2xlZ2l0
c2NyaXB0LnBuZyIKICAgICAgICAgICAgICAgIGFsdD0iTGVnaXRTY3JpcHQgQ2VydGlmaWVkIgogICAgICAgICAgICAgICAgd2lk
dGg9ezE1MH0KICAgICAgICAgICAgICAgIGhlaWdodD17NzV9CiAgICAgICAgICAgICAgICBjbGFzc05hbWU9ImgtMTYgdy1hdXRv
IgogICAgICAgICAgICAgIC8+CiAgICAgICAgICAgIDwvYT4KICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgIDxkaXY+CiAgICAg
ICAgICAgIDxoMyBjbGFzc05hbWU9ImZvbnQtc2VtaWJvbGQgdGV4dC1sZyBtYi01IHRleHQtWyNDOUE2NkJdIj5RdWljayBMaW5r
czwvaDM+CiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9InNwYWNlLXktMyB0ZXh0LXdoaXRlLzgwIHRleHQtc20iPgogICAgICAg
ICAgICAgIHtRVUlDS19MSU5LUy5tYXAoKGwpID0+ICgKICAgICAgICAgICAgICAgIDxsaSBrZXk9e2wubGFiZWx9PjxMaW5rIGhy
ZWY9e2wuaHJlZn0gY2xhc3NOYW1lPSJob3Zlcjp0ZXh0LVsjQzlBNjZCXSB0cmFuc2l0aW9uIj57bC5sYWJlbH08L0xpbms+PC9s
aT4KICAgICAgICAgICAgICApKX0KICAgICAgICAgICAgPC91bD4KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgoKICAg
ICAgICA8ZGl2IGNsYXNzTmFtZT0iYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzEwIHB0LTggdGV4dC1jZW50ZXIgdGV4dC13aGl0ZS81
MCB0ZXh0LXNtIj4KICAgICAgICAgIDxwIGNsYXNzTmFtZT0ibWItNCBtYXgtdy00eGwgbXgtYXV0byI+CiAgICAgICAgICAgIFRo
ZSBpbmZvcm1hdGlvbiBvbiB0aGlzIHNpdGUgaXMgbm90IGludGVuZGVkIG9yIGltcGxpZWQgdG8gYmUgYSBzdWJzdGl0dXRlIGZv
ciBwcm9mZXNzaW9uYWwgbWVkaWNhbCBhZHZpY2UsIGRpYWdub3Npcywgb3IgdHJlYXRtZW50LiBBbGwgY29udGVudCBpcyBmb3Ig
Z2VuZXJhbCBpbmZvcm1hdGlvbiBwdXJwb3NlcyBvbmx5LgogICAgICAgICAgPC9wPgogICAgICAgICAgwqkge25ldyBEYXRlKCku
Z2V0RnVsbFllYXIoKX0gUmV3aXJlZCBLZXRhbWluZSDCtyBBdmVudHVyYSwgRmxvcmlkYSDCtyBBbGwgUmlnaHRzIFJlc2VydmVk
CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgogICAgPC9mb290ZXI+CiAgKTsKfQo=
'@

# Text fixes: file|base64(old)|base64(new). Applied only where the old text is still present.
$TextFixes = @(
    'src/app/(main)/content/blog/ketamine-integration-aventura/page.tsx|ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkgew==|ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gS2V0YW1pbmVJbnRlZ3JhdGlvbkF2ZW50dXJhUGFnZSgpIHs='
)


function Read-Utf8NoBom([string]$Path) {
    $utf8 = New-Object System.Text.UTF8Encoding $false
    return [System.IO.File]::ReadAllText($Path, $utf8)
}

function Write-Utf8NoBom([string]$Path, [string]$Text) {
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllText($Path, $Text, $utf8)
}

function ConvertFrom-B64Text([string]$B64) {
    $bytes = [Convert]::FromBase64String(($B64 -replace '\s', ''))
    return (New-Object System.Text.UTF8Encoding $false).GetString($bytes)
}

function Get-NewLine([string]$Text) {
    if ($Text.Contains("`r`n")) { return "`r`n" }
    return "`n"
}

# Index just past the '>' that closes the tag starting at $Start.
# Skips over {...} expressions and quoted strings so "=>" inside attributes is safe.
function Get-TagClose([string]$Text, [int]$Start) {
    $depth = 0
    $quote = [char]0
    for ($i = $Start + 1; $i -lt $Text.Length; $i++) {
        $c = $Text[$i]
        if ($quote -ne [char]0) {
            if ($c -eq $quote) { $quote = [char]0 }
            continue
        }
        if ($c -eq '"' -or $c -eq "'" -or $c -eq '`') { $quote = $c; continue }
        if ($c -eq '{') { $depth++; continue }
        if ($c -eq '}') { $depth--; continue }
        if ($c -eq '>' -and $depth -eq 0) { return ($i + 1) }
    }
    return -1
}

# End index (exclusive) of the element <$Tag ...> that starts at $Start.
function Get-ElementEnd([string]$Text, [int]$Start, [string]$Tag) {
    $re = New-Object System.Text.RegularExpressions.Regex ('<(/?)' + $Tag + '(?=[\s>/])')
    $depth = 0
    $pos = $Start
    while ($true) {
        $m = $re.Match($Text, $pos)
        if (-not $m.Success) { return -1 }
        $close = Get-TagClose $Text $m.Index
        if ($close -lt 0) { return -1 }
        if ($m.Groups[1].Value -eq '/') {
            $depth--
        } else {
            $inner = $Text.Substring($m.Index, $close - $m.Index)
            if (-not $inner.TrimEnd('>').TrimEnd().EndsWith('/')) { $depth++ }
        }
        if ($depth -eq 0) { return $close }
        $pos = $close
    }
}

function Test-OnlyFiller([string]$Text) {
    $t = [regex]::Replace($Text, '\{/\*[\s\S]*?\*/\}', '')
    return ($t.Trim().Length -eq 0)
}

# Move $Index back over whitespace and {/* comments */} that sit directly before it.
function Get-LeadingStart([string]$Text, [int]$Index) {
    $i = $Index
    while ($true) {
        $j = $i
        while ($j -gt 0 -and [char]::IsWhiteSpace($Text[$j - 1])) { $j-- }
        if ($j -ge 3 -and $Text.Substring($j - 3, 3) -eq '*/}') {
            $open = $Text.LastIndexOf('{/*', $j - 3)
            if ($open -ge 0) { $i = $open; continue }
        }
        return $i
    }
}

function Get-LineIndent([string]$Text, [int]$Index) {
    $ls = $Text.LastIndexOf("`n", [Math]::Max(0, $Index - 1))
    $ls = $ls + 1
    $prefix = $Text.Substring($ls, $Index - $ls)
    if ($prefix.Trim().Length -eq 0) { return @{ Start = $ls; Indent = $prefix } }
    return @{ Start = $Index; Indent = '' }
}

function Test-Used([string]$Text, [string]$Name) {
    return [regex]::IsMatch($Text, '(?<![\w.])' + [regex]::Escape($Name) + '(?!\w)')
}

# Stricter check for imported names: plain words in page text (e.g. "Image
# placeholder") do not count; only code-like uses such as <Image, {Image}, Image.x
function Test-CodeUsed([string]$Text, [string]$Name) {
    $n = [regex]::Escape($Name)
    if ([regex]::IsMatch($Text, '<' + $n + '(?=[\s/>])')) { return $true }
    if ([regex]::IsMatch($Text, '[={(,\[!&|?:]\s*' + $n + '(?!\w)')) { return $true }
    if ([regex]::IsMatch($Text, '(?<![\w.])' + $n + '\s*[.(<]')) { return $true }
    if ([regex]::IsMatch($Text, '(?<![\w.])' + $n + '\s*[,)}\]]')) { return $true }
    return $false
}

# Remove import names from $Module that are no longer referenced.
function Remove-UnusedImports([string]$Text, [string]$Nl) {
    $lines = [regex]::Matches($Text, '(?m)^import\s+(.+?)\s+from\s+"(react|next/image|next/link|next/navigation)";[ \t]*\r?\n')
    for ($k = $lines.Count - 1; $k -ge 0; $k--) {
        $m = $lines[$k]
        $spec = $m.Groups[1].Value
        $mod = $m.Groups[2].Value
        $rest = $Text.Remove($m.Index, $m.Length)
        $new = $null
        if ($spec -match '^\{\s*(.+?)\s*\}$') {
            $names = @($Matches[1].Split(',') | ForEach-Object { $_.Trim() } | Where-Object { $_ })
            $keep = @($names | Where-Object { Test-CodeUsed $rest (($_ -split '\s+as\s+')[-1]) })
            if ($keep.Count -eq $names.Count) { continue }
            if ($keep.Count -eq 0) { $new = '' } else { $new = 'import { ' + ($keep -join ', ') + ' } from "' + $mod + '";' + $Nl }
        } elseif ($spec -match '^[A-Za-z_]\w*$') {
            if (Test-CodeUsed $rest $spec) { continue }
            $new = ''
        } else { continue }
        $Text = $Text.Remove($m.Index, $m.Length).Insert($m.Index, $new)
    }
    return $Text
}


$HdrTag = '<SiteHeader />'
$FtrTag = '<SiteFooter />'

function Convert-Page([string]$Text, [ref]$Note) {
    $nl = Get-NewLine $Text
    $changed = $false

    # ---- header (skip link + top bar + <header>) ----
    $h = [regex]::Match($Text, '<header(?=[\s>])')
    if ($h.Success) {
        $hEnd = Get-ElementEnd $Text $h.Index 'header'
        if ($hEnd -lt 0) { $Note.Value = 'could not find the end of <header>'; return $null }
        $tb = $Text.LastIndexOf('<div className="bg-white border-b border-gray-200">', $h.Index)
        if ($tb -lt 0) { $Note.Value = 'no top bar found before <header>'; return $null }
        $tbEnd = Get-ElementEnd $Text $tb 'div'
        if ($tbEnd -lt 0 -or $tbEnd -gt $h.Index) { $Note.Value = 'top bar does not close before <header>'; return $null }
        if (-not (Test-OnlyFiller $Text.Substring($tbEnd, $h.Index - $tbEnd))) { $Note.Value = 'unexpected markup between top bar and <header>'; return $null }
        $start = Get-LeadingStart $Text $tb
        $before = $Text.Substring(0, $start)
        $sk = [regex]::Match($before, '<a\s[^>]*?href="#main-content"[\s\S]*?</a>\s*$')
        if ($sk.Success) { $start = Get-LeadingStart $Text $sk.Index }
        $li = Get-LineIndent $Text $start
        $Text = $Text.Substring(0, $li.Start) + $li.Indent + $HdrTag + $Text.Substring($hEnd)
        $changed = $true
    } elseif (-not $Text.Contains('<SiteHeader')) {
        $Note.Value = 'no <header> on this page (not a normal site page)'; return $null
    }

    # ---- footer ----
    $f = [regex]::Match($Text, '<footer(?=[\s>])')
    if ($f.Success) {
        $fEnd = Get-ElementEnd $Text $f.Index 'footer'
        if ($fEnd -lt 0) { $Note.Value = 'could not find the end of <footer>'; return $null }
        $Text = $Text.Substring(0, $f.Index) + $FtrTag + $Text.Substring($fEnd)
        $changed = $true
    } elseif (-not $Text.Contains('<SiteFooter')) {
        $Note.Value = 'no <footer> and no <SiteFooter />'; return $null
    }

    # ---- skip-link target: first element after the header ----
    if (-not $Text.Contains('id="main-content"')) {
        $hi = $Text.IndexOf($HdrTag)
        $after = $hi + $HdrTag.Length
        $m = [regex]::Match($Text.Substring($after), '^(\s|\{/\*[\s\S]*?\*/\})*<(section|div|article|main)(?=[\s>])')
        if ($m.Success) {
            $at = $after + $m.Length
            $Text = $Text.Insert($at, ' id="main-content"')
            $changed = $true
        } else {
            $Note.Value = 'NOTE: could not add id="main-content" (first element after header is not a section/div)'
        }
    }

    if (-not $changed) { return $Text }

    # ---- imports for the components ----
    $need = @()
    if ($Text.Contains('<SiteHeader') -and -not $Text.Contains('import SiteHeader ')) { $need += 'import SiteHeader from "@/components/SiteHeader";' }
    if ($Text.Contains('<SiteFooter') -and -not $Text.Contains('import SiteFooter ')) { $need += 'import SiteFooter from "@/components/SiteFooter";' }
    if ($need.Count -gt 0) {
        $imps = [regex]::Matches($Text, '(?m)^import\s[^;]*;[ \t]*\r?\n')
        if ($imps.Count -gt 0) {
            $last = $imps[$imps.Count - 1]
            $at = $last.Index + $last.Length
        } else {
            $uc = [regex]::Match($Text, '^\s*["'']use client["''];?[ \t]*\r?\n')
            if ($uc.Success) { $at = $uc.Length } else { $at = 0 }
        }
        $Text = $Text.Insert($at, (($need -join $nl) + $nl))
    }

    # ---- menu state that only the old header used ----
    foreach ($n in @('isMenuOpen', 'isServicesOpen', 'isTreatmentsOpen', 'isContentOpen')) {
        $setter = 'set' + $n.Substring(0, 1).ToUpper() + $n.Substring(1)
        $decl = [regex]::Match($Text, '(?m)^[ \t]*const \[' + $n + ', ' + $setter + '\] = useState(<boolean>)?\(false\);[ \t]*\r?\n')
        if ($decl.Success) {
            $rest = $Text.Remove($decl.Index, $decl.Length)
            if (-not (Test-Used $rest $n) -and -not (Test-Used $rest $setter)) { $Text = $rest }
        }
    }
    $pd = [regex]::Match($Text, '(?m)^[ \t]*const pathname = usePathname\(\);[ \t]*\r?\n')
    if ($pd.Success) {
        $rest = $Text.Remove($pd.Index, $pd.Length)
        if (-not (Test-Used $rest 'pathname')) { $Text = $rest }
    }

    $Text = Remove-UnusedImports $Text $nl

    # ---- "use client" only if nothing client-side is left ----
    $uc = [regex]::Match($Text, '^["'']use client["''];?[ \t]*\r?\n(\r?\n)?')
    if ($uc.Success) {
        $body = $Text.Substring($uc.Length)
        $clientish = [regex]::IsMatch($body, '\buse[A-Z]\w*\s*[(<]') -or
                     [regex]::IsMatch($body, '\bon[A-Z]\w*=\{') -or
                     [regex]::IsMatch($body, '\b(window|document|localStorage|sessionStorage|navigator)\.')
        if (-not $clientish) { $Text = $body }
    }
    return $Text
}

function Join-Parts([string]$Base, [string[]]$Parts) {
    $p = $Base
    foreach ($x in $Parts) { $p = Join-Path $p $x }
    return $p
}

# ------------------------------------------------------------------ main
$rootPath = (Resolve-Path $Root).Path
$pagesDir = Join-Parts $rootPath @('src', 'app', '(main)')
if (-not (Test-Path -LiteralPath $pagesDir)) { throw "Can't find src\app\(main) under $rootPath. Run this from C:\Users\jsilv\rewired-ketamine." }

$mode = 'APPLY'
if ($DryRun) { $mode = 'DRY RUN (no files written)' }
Write-Host "Update-EnglishHeaderFooter  [$mode]"
Write-Host ''

$changedFiles = New-Object System.Collections.ArrayList
$skipped = New-Object System.Collections.ArrayList
$notes = New-Object System.Collections.ArrayList

# 1) shared components (always brought up to the latest version)
$compDir = Join-Parts $rootPath @('src', 'components')
$components = @(
    @{ Name = 'SiteHeader.tsx'; Text = (ConvertFrom-B64Text $HeaderB64) },
    @{ Name = 'SiteFooter.tsx'; Text = (ConvertFrom-B64Text $FooterB64) }
)
foreach ($c in $components) {
    $p = Join-Path $compDir $c.Name
    $old = $null
    if (Test-Path -LiteralPath $p) { $old = Read-Utf8NoBom $p }
    $want = $c.Text
    if ($null -ne $old -and $old.Contains("`r`n")) { $want = $want.Replace("`n", "`r`n") }
    if ($old -ne $want) {
        [void]$changedFiles.Add("src/components/$($c.Name)")
        if (-not $DryRun) {
            if (-not (Test-Path -LiteralPath $compDir)) { New-Item -ItemType Directory -Path $compDir -Force | Out-Null }
            Write-Utf8NoBom $p $want
        }
    }
}

# 2) pages
$pages = Get-ChildItem -LiteralPath $pagesDir -Recurse -Filter 'page.tsx' | Sort-Object FullName
foreach ($pg in $pages) {
    $rel = $pg.FullName.Substring($rootPath.Length).TrimStart('\', '/').Replace('\', '/')
    $text = Read-Utf8NoBom $pg.FullName
    $note = ''
    $new = Convert-Page $text ([ref]$note)
    if ($null -eq $new) {
        [void]$skipped.Add("$rel  ($note)")
        continue
    }
    if ($note) { [void]$notes.Add("$rel  ($note)") }
    if ($new -ne $text) {
        [void]$changedFiles.Add($rel)
        if (-not $DryRun) { Write-Utf8NoBom $pg.FullName $new }
    }
}

# 3) small text fixes
foreach ($fx in $TextFixes) {
    $parts = $fx.Split('|')
    $path = Join-Parts $rootPath ($parts[0].Split('/'))
    if (-not (Test-Path -LiteralPath $path)) { [void]$notes.Add("$($parts[0])  (text fix skipped: file not found)"); continue }
    $old = ConvertFrom-B64Text $parts[1]
    $newText = ConvertFrom-B64Text $parts[2]
    $t = Read-Utf8NoBom $path
    if ($t.Contains($old)) {
        $t2 = $t.Replace($old, $newText)
        if (-not $changedFiles.Contains($parts[0])) { [void]$changedFiles.Add($parts[0]) }
        if (-not $DryRun) { Write-Utf8NoBom $path $t2 }
    }
}

if ($changedFiles.Count -eq 0) {
    Write-Host 'Nothing to change. Everything is already up to date.'
} else {
    if ($DryRun) { Write-Host "Would change $($changedFiles.Count) file(s):" } else { Write-Host "Changed $($changedFiles.Count) file(s):" }
    foreach ($c in $changedFiles) { Write-Host "  $c" }
}
if ($notes.Count -gt 0) {
    Write-Host ''
    foreach ($s in $notes) { Write-Host "  $s" -ForegroundColor Yellow }
}
if ($skipped.Count -gt 0) {
    Write-Host ''
    Write-Host "Left alone $($skipped.Count) page(s):" -ForegroundColor Yellow
    foreach ($s in $skipped) { Write-Host "  $s" -ForegroundColor Yellow }
}
Write-Host ''
Write-Host 'Done.'
