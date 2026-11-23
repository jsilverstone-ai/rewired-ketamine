#Requires -Version 5.1
<#
.SYNOPSIS
  Gives every Spanish page (src\app\es\...\page.tsx) the same header, menus
  and footer as the English site, using two shared components:
    src\components\es\SiteHeaderEs.tsx  (skip link, top bar, nav, mobile menu)
    src\components\es\SiteFooterEs.tsx  (footer)

.DESCRIPTION
  Run from the repo root (C:\Users\jsilv\rewired-ketamine).

  For each Spanish page it replaces the inline skip link + top bar + <header>
  with <SiteHeaderEs /> and the inline <footer> with <SiteFooterEs />, then
  removes menu state, imports and "use client" only when nothing else in the
  page still uses them. Page body content is not touched. English pages are
  not touched.

  Files are written as UTF-8 without a BOM; line endings are preserved.
  Running it a second time changes nothing. Undo with:  git checkout -- .

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
cmVhY3QiOwoKLy8gU2hhcmVkIFNwYW5pc2ggaGVhZGVyOiBza2lwIGxpbmssIHRvcCBiYXIsIGRlc2t0b3AgbmF2IHdpdGggZHJv
cGRvd25zLAovLyBhbmQgbW9iaWxlIG1lbnUuIE1pcnJvcnMgdGhlIEVuZ2xpc2ggaGVhZGVyIG1hcmt1cCBhbmQgY2xhc3Nlcywg
ZXhjZXB0IHRoZQovLyBkZXNrdG9wIG1lbnUgc3RhcnRzIGF0IHRoZSB4bCBicmVha3BvaW50ICgxMjgwcHgpIGluc3RlYWQgb2Yg
bWQgYW5kIHVzZXMKLy8gZ2FwLTYsIG5vd3JhcCBhbmQgYSBzaG9ydCAiRkFRIiBsYWJlbCwgYmVjYXVzZSB0aGUgU3BhbmlzaCBs
YWJlbHMgYXJlIGxvbmdlcgovLyBhbmQgdGhlIGZ1bGwgbWVudSB3b3VsZCBvdGhlcndpc2Ugd3JhcCBvciBvdmVyZmxvdy4gVGhl
IG1vYmlsZSBtZW51IHNheXMKLy8gIlByZWd1bnRhcyBGcmVjdWVudGVzIi4KCmNvbnN0IE1BUFNfVVJMID0KICAiaHR0cHM6Ly93
d3cuZ29vZ2xlLmNvbS9tYXBzL3BsYWNlL1Jld2lyZWQrS2V0YW1pbmUvQDI1Ljk3MzA5OTMsLTgwLjE0NzU1OTQsMTd6L2RhdGE9
ITNtMSE0YjEhNG02ITNtNSExczB4ODhkOWFkMzY5MTdiODE2ZDoweDM1MDQ2Y2NlOTJkYWI1NTkhOG0yITNkMjUuOTczMDk5MyE0
ZC04MC4xNDQ5ODQ1ITE2cyUyRmclMkYxMXNycmg5eGdsP2VudHJ5PXR0dSI7Cgpjb25zdCBTRVJWSUNFUyA9IFsKICB7IGhyZWY6
ICIvZXMvc2VydmljZXMiLCBsYWJlbDogIlRvZG9zIGxvcyBTZXJ2aWNpb3MiIH0sCiAgeyBocmVmOiAiL2VzL3NlcnZpY2VzL2tl
dGFtaW5lLWluZnVzaW9uIiwgbGFiZWw6ICJJbmZ1c2nDs24gZGUgS2V0YW1pbmEiIH0sCiAgeyBocmVmOiAiL2VzL3NlcnZpY2Vz
L2hvbWUta2V0YW1pbmUiLCBsYWJlbDogIktldGFtaW5hIGVuIENhc2EiIH0sCiAgeyBocmVmOiAiL2VzL3NlcnZpY2VzL3NwcmF2
YXRvIiwgbGFiZWw6ICJTcHJhdmF0byIgfSwKICB7IGhyZWY6ICIvZXMvc2VydmljZXMvaXYta2V0YW1pbmUtdnMtc3ByYXZhdG8i
LCBsYWJlbDogIklWIHZzIFNwcmF2YXRvIiB9LAogIHsgaHJlZjogIi9lcy9zZXJ2aWNlcy9rZXRhbWluZS10aGVyYXB5LWNvc3Qi
LCBsYWJlbDogIkNvc3RvIiB9LAogIHsgaHJlZjogIi9lcy9zZXJ2aWNlcy9rZXRhbWluZS1pbnN1cmFuY2UiLCBsYWJlbDogIlNl
Z3VybyBNw6lkaWNvIiB9LAogIHsgaHJlZjogIi9lcy9zZXJ2aWNlcy9mdW5jdGlvbmFsLXdlbGxuZXNzIiwgbGFiZWw6ICJCaWVu
ZXN0YXIgRnVuY2lvbmFsIiB9LAogIHsgaHJlZjogIi9lcy9zZXJ2aWNlcy9tZWRpY2FsLW1hbmFnZW1lbnQiLCBsYWJlbDogIk1h
bmVqbyBNw6lkaWNvIiB9LAogIHsgaHJlZjogIi9lcy9zZXJ2aWNlcy90YWxrLXRoZXJhcHkiLCBsYWJlbDogIlRlcmFwaWEgZGUg
Q29udmVyc2FjacOzbiIgfSwKXTsKCmNvbnN0IFRSRUFUTUVOVFMgPSBbCiAgeyBocmVmOiAiL2VzL3RyZWF0bWVudHMiLCBsYWJl
bDogIlRvZG9zIGxvcyBUcmF0YW1pZW50b3MiIH0sCiAgeyBocmVmOiAiL2VzL3RyZWF0bWVudHMvZGVwcmVzc2lvbiIsIGxhYmVs
OiAiRGVwcmVzacOzbiIgfSwKICB7IGhyZWY6ICIvZXMvdHJlYXRtZW50cy9hbnhpZXR5IiwgbGFiZWw6ICJBbnNpZWRhZCIgfSwK
ICB7IGhyZWY6ICIvZXMvdHJlYXRtZW50cy9wdHNkIiwgbGFiZWw6ICJURVBUIiB9LAogIHsgaHJlZjogIi9lcy90cmVhdG1lbnRz
L2J1cm5vdXQiLCBsYWJlbDogIkFnb3RhbWllbnRvIiB9LAogIHsgaHJlZjogIi9lcy90cmVhdG1lbnRzL21lbnRhbC1mb2dnaW5l
c3MiLCBsYWJlbDogIk5pZWJsYSBNZW50YWwiIH0sCiAgeyBocmVmOiAiL2VzL3RyZWF0bWVudHMvbW90aXZhdGlvbiIsIGxhYmVs
OiAiTW90aXZhY2nDs24iIH0sCiAgeyBocmVmOiAiL2VzL3RyZWF0bWVudHMvZWF0aW5nLWRpc29yZGVyIiwgbGFiZWw6ICJUcmFz
dG9ybm8gQWxpbWVudGFyaW8iIH0sCiAgeyBocmVmOiAiL2VzL3RyZWF0bWVudHMvcG9zdHBhcnR1bS1kZXByZXNzaW9uIiwgbGFi
ZWw6ICJEZXByZXNpw7NuIFBvc3RwYXJ0byIgfSwKICB7IGhyZWY6ICIvZXMvdHJlYXRtZW50cy9vY2QiLCBsYWJlbDogIlRPQyIg
fSwKICB7IGhyZWY6ICIvZXMvdHJlYXRtZW50cy9jaHJvbmljLXBhaW4iLCBsYWJlbDogIkRvbG9yIENyw7NuaWNvIiB9LAogIHsg
aHJlZjogIi9lcy90cmVhdG1lbnRzL3RlbnNpb24taGVhZGFjaGVzIiwgbGFiZWw6ICJDZWZhbGVhcyBwb3IgVGVuc2nDs24iIH0s
CiAgeyBocmVmOiAiL2VzL3RyZWF0bWVudHMvcGFsbGlhdGl2ZS1jb21wYXNzaW9uLWNhcmUiLCBsYWJlbDogIkN1aWRhZG8gUGFs
aWF0aXZvIHkgQ29tcGFzacOzbiIgfSwKXTsKCmNvbnN0IENPTlRFTlQgPSBbCiAgeyBocmVmOiAiL2VzL2NvbnRlbnQvYmxvZyIs
IGxhYmVsOiAiQmxvZyIgfSwKICB7IGhyZWY6ICIvZXMvY29udGVudC92aWRlb3MiLCBsYWJlbDogIlZpZGVvcyIgfSwKICB7IGhy
ZWY6ICIvZXMvY29udGVudC9rZXRhbWluZS1pbi10aGUtbmV3cyIsIGxhYmVsOiAiS2V0YW1pbmEgZW4gbGFzIE5vdGljaWFzIiB9
LApdOwoKY29uc3QgU09DSUFMID0gWwogIHsgaHJlZjogImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcmV3aXJlZF9rZXRhbWlu
ZS8iLCBsYWJlbDogIkluc3RhZ3JhbSIsIGQ6ICJNMTIgMi4xNjNjMy4yMDQgMCAzLjU4NC4wMTIgNC44NS4wNyAzLjI1Mi4xNDgg
NC43NzEgMS42OTEgNC45MTkgNC45MTkuMDU4IDEuMjY1LjA2OSAxLjY0NS4wNjkgNC44NDkgMCAzLjIwNS0uMDEyIDMuNTg0LS4w
NjkgNC44NDktLjE0OSAzLjIyNS0xLjY2NCA0Ljc3MS00LjkxOSA0LjkxOS0xLjI2Ni4wNTgtMS42NDQuMDctNC44NS4wNy0zLjIw
NCAwLTMuNTg0LS4wMTItNC44NDktLjA3LTMuMjYtLjE0OS00Ljc3MS0xLjY5OS00LjkxOS00LjkyLS4wNTgtMS4yNjUtLjA3LTEu
NjQ0LS4wNy00Ljg0OSAwLTMuMjA0LjAxMy0zLjU4My4wNy00Ljg0OS4xNDktMy4yMjcgMS42NjQtNC43NzEgNC45MTktNC45MTkg
MS4yNjYtLjA1NyAxLjY0NS0uMDY5IDQuODQ5LS4wNjl6TTEyIDBDOC43NDEgMCA4LjMzMy4wMTQgNy4wNTMuMDcyIDIuNjk1LjI3
Mi4yNzMgMi42OS4wNzMgNy4wNTIuMDE0IDguMzMzIDAgOC43NDEgMCAxMmMwIDMuMjU5LjAxNCAzLjY2OC4wNzIgNC45NDguMiA0
LjM1OCAyLjYxOCA2Ljc4IDYuOTggNi45OEM4LjMzMyAyMy45ODYgOC43NDEgMjQgMTIgMjRjMy4yNTkgMCAzLjY2OC0uMDE0IDQu
OTQ4LS4wNzIgNC4zNTQtLjIgNi43ODItMi42MTggNi45NzktNi45OC4wNTktMS4yOC4wNzMtMS42ODkuMDczLTQuOTQ4IDAtMy4y
NTktLjAxNC0zLjY2Ny0uMDcyLTQuOTQ3LS4xOTYtNC4zNTQtMi42MTctNi43OC02Ljk3OS02Ljk4QzE1LjY2OC4wMTQgMTUuMjU5
IDAgMTIgMHptMCA1LjgzOGE2LjE2MiA2LjE2MiAwIDEwMCAxMi4zMjQgNi4xNjIgNi4xNjIgMCAwMDAtMTIuMzI0ek0xMiAxNmE0
IDQgMCAxMTAtOCA0IDQgMCAwMTAgOHptNi40MDYtMTEuODQ1YTEuNDQgMS40NCAwIDEwMCAyLjg4MSAxLjQ0IDEuNDQgMCAwMDAt
Mi44ODF6IiB9LAogIHsgaHJlZjogImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL0BSZXdpcmVkS2V0YW1pbmUiLCBsYWJlbDogIllv
dVR1YmUiLCBkOiAiTTIzLjQ5OCA2LjE4NmEzLjAxNiAzLjAxNiAwIDAwLTIuMTIyLTIuMTM2QzE5LjUwNSAzLjU0NSAxMiAzLjU0
NSAxMiAzLjU0NXMtNy41MDUgMC05LjM3Ny41MDVBMy4wMTcgMy4wMTcgMCAwMC41MDIgNi4xODZDMCA4LjA3IDAgMTIgMCAxMnMw
IDMuOTMuNTAyIDUuODE0YTMuMDE2IDMuMDE2IDAgMDAyLjEyMiAyLjEzNmMxLjg3MS41MDUgOS4zNzYuNTA1IDkuMzc2LjUwNXM3
LjUwNSAwIDkuMzc3LS41MDVhMy4wMTUgMy4wMTUgMCAwMDIuMTIyLTIuMTM2QzI0IDE1LjkzIDI0IDEyIDI0IDEyczAtMy45My0u
NTAyLTUuODE0ek05LjU0NSAxNS41NjhWOC40MzJMMTUuODE4IDEybC02LjI3MyAzLjU2OHoiIH0sCiAgeyBocmVmOiAiaHR0cHM6
Ly93d3cuZmFjZWJvb2suY29tL1Jld2lyZWRLZXRhbWluZS8iLCBsYWJlbDogIkZhY2Vib29rIiwgZDogIk0yNCAxMi4wNzNjMC02
LjYyNy01LjM3My0xMi0xMi0xMnMtMTIgNS4zNzMtMTIgMTJjMCA1Ljk5IDQuMzg4IDEwLjk1NCAxMC4xMjUgMTEuODU0di04LjM4
NUg3LjA3OHYtMy40N2gzLjA0N1Y5LjQzYzAtMy4wMDcgMS43OTItNC42NjkgNC41MzMtNC42NjkgMS4zMTIgMCAyLjY4Ni4yMzUg
Mi42ODYuMjM1djIuOTUzSDE1LjgzYy0xLjQ5MSAwLTEuOTU2LjkyNS0xLjk1NiAxLjg3NHYyLjI1aDMuMzI4bC0uNTMyIDMuNDdo
LTIuNzk2djguMzg1QzE5LjYxMiAyMy4wMjcgMjQgMTguMDYyIDI0IDEyLjA3M3oiIH0sCiAgeyBocmVmOiAiaHR0cHM6Ly93d3cu
bGlua2VkaW4uY29tL2luL2phY29iLXNpbHZlcnN0b25lLTk4NDE0NTQ3LyIsIGxhYmVsOiAiTGlua2VkSW4iLCBkOiAiTTIwLjQ0
NyAyMC40NTJoLTMuNTU0di01LjU2OWMwLTEuMzI4LS4wMjctMy4wMzctMS44NTItMy4wMzctMS44NTMgMC0yLjEzNiAxLjQ0NS0y
LjEzNiAyLjkzOXY1LjY2N0g5LjM1MVY5aDMuNDE0djEuNTYxaC4wNDZjLjQ3Ny0uOSAxLjYzNy0xLjg1IDMuMzctMS44NSAzLjYw
MSAwIDQuMjY3IDIuMzcgNC4yNjcgNS40NTV2Ni4yODZ6TTUuMzM3IDcuNDMzYTIuMDYyIDIuMDYyIDAgMDEtMi4wNjMtMi4wNjUg
Mi4wNjQgMi4wNjQgMCAxMTIuMDYzIDIuMDY1em0xLjc4MiAxMy4wMTlIMy41NTVWOWgzLjU2NHYxMS40NTJ6TTIyLjIyNSAwSDEu
NzcxQy43OTIgMCAwIC43NzQgMCAxLjcyOXYyMC41NDJDMCAyMy4yMjcuNzkyIDI0IDEuNzcxIDI0aDIwLjQ1MUMyMy4yIDI0IDI0
IDIzLjIyNyAyNCAyMi4yNzFWMS43MjlDMjQgLjc3NCAyMy4yIDAgMjIuMjIyIDBoLjAwM3oiIH0sCl07Cgpjb25zdCBEUk9QRE9X
Tl9MSU5LID0gImJsb2NrIHB4LTQgcHktMi41IGhvdmVyOmJnLVsjRjhGNUYwXSBob3Zlcjp0ZXh0LVsjQzlBNjZCXSB0cmFuc2l0
aW9uIjsKY29uc3QgTkFWX0xJTksgPSAiaG92ZXI6dGV4dC1bI0M5QTY2Ql0gdHJhbnNpdGlvbiI7CgpmdW5jdGlvbiBDaGV2cm9u
KHsgY2xhc3NOYW1lID0gInctNCBoLTQiIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pIHsKICByZXR1cm4gKAogICAgPHN2ZyBj
bGFzc05hbWU9e2NsYXNzTmFtZX0gZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHZpZXdCb3g9IjAgMCAyNCAyNCI+
PHBhdGggc3Ryb2tlTGluZWNhcD0icm91bmQiIHN0cm9rZUxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9Ik0xOSA5
bC03IDctNy03IiAvPjwvc3ZnPgogICk7Cn0KCmZ1bmN0aW9uIFNvY2lhbEljb25zKCkgewogIHJldHVybiAoCiAgICA8PgogICAg
ICB7U09DSUFMLm1hcCgocykgPT4gKAogICAgICAgIDxhIGtleT17cy5sYWJlbH0gaHJlZj17cy5ocmVmfSB0YXJnZXQ9Il9ibGFu
ayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBjbGFzc05hbWU9e05BVl9MSU5LfSBhcmlhLWxhYmVsPXtzLmxhYmVsfT4KICAg
ICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzTmFtZT0iaC01IHctNSIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3
Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9e3MuZH0gLz48L3N2Zz4KICAgICAgICA8L2E+CiAgICAgICkpfQogICAgPC8+CiAgKTsK
fQoKZnVuY3Rpb24gRGVza3RvcERyb3Bkb3duKHsgbGFiZWwsIGl0ZW1zLCB3aWR0aCwgc2Nyb2xsIH06IHsgbGFiZWw6IHN0cmlu
ZzsgaXRlbXM6IHsgaHJlZjogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXTsgd2lkdGg6IHN0cmluZzsgc2Nyb2xsPzogYm9vbGVh
biB9KSB7CiAgcmV0dXJuICgKICAgIDxkaXYgY2xhc3NOYW1lPSJyZWxhdGl2ZSBncm91cCI+CiAgICAgIDxidXR0b24gY2xhc3NO
YW1lPSJob3Zlcjp0ZXh0LVsjQzlBNjZCXSB0cmFuc2l0aW9uIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xIj4KICAgICAgICB7bGFi
ZWx9CiAgICAgICAgPENoZXZyb24gLz4KICAgICAgPC9idXR0b24+CiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgbGVm
dC0wIHRvcC1mdWxsIG10LTIgJHt3aWR0aH0gYmctd2hpdGUgdGV4dC1bIzBCMUQzNl0gcm91bmRlZC1sZyBzaGFkb3ctbGcgb3Bh
Y2l0eS0wIGludmlzaWJsZSBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCBncm91cC1ob3Zlcjp2aXNpYmxlIHRyYW5zaXRpb24tYWxs
IGR1cmF0aW9uLTIwMCB6LTUwYH0+CiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Njcm9sbCA/ICJweS0yIG1heC1oLTgwIG92ZXJm
bG93LXktYXV0byIgOiAicHktMiJ9PgogICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKAogICAgICAgICAgICA8TGluayBr
ZXk9e2l0ZW0uaHJlZn0gaHJlZj17aXRlbS5ocmVmfSBjbGFzc05hbWU9e0RST1BET1dOX0xJTkt9PntpdGVtLmxhYmVsfTwvTGlu
az4KICAgICAgICAgICkpfQogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KICAgIDwvZGl2PgogICk7Cn0KCmZ1bmN0aW9uIE1v
YmlsZUdyb3VwKHsgbGFiZWwsIGl0ZW1zLCBvcGVuLCBvblRvZ2dsZSwgb25OYXZpZ2F0ZSB9OiB7IGxhYmVsOiBzdHJpbmc7IGl0
ZW1zOiB7IGhyZWY6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W107IG9wZW46IGJvb2xlYW47IG9uVG9nZ2xlOiAoKSA9PiB2b2lk
OyBvbk5hdmlnYXRlOiAoKSA9PiB2b2lkIH0pIHsKICByZXR1cm4gKAogICAgPGRpdj4KICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtv
blRvZ2dsZX0gY2xhc3NOYW1lPSJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIGhvdmVyOnRleHQtWyND
OUE2NkJdIHRyYW5zaXRpb24iIGFyaWEtZXhwYW5kZWQ9e29wZW59PgogICAgICAgIDxzcGFuPntsYWJlbH08L3NwYW4+CiAgICAg
ICAgPENoZXZyb24gY2xhc3NOYW1lPXtgdy00IGgtNCB0cmFuc2l0aW9uLXRyYW5zZm9ybSAke29wZW4gPyAicm90YXRlLTE4MCIg
OiAiIn1gfSAvPgogICAgICA8L2J1dHRvbj4KICAgICAge29wZW4gJiYgKAogICAgICAgIDxkaXYgY2xhc3NOYW1lPSJwbC00IG10
LTMgZmxleCBmbGV4LWNvbCBzcGFjZS15LTMgdGV4dC1zbSI+CiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoCiAgICAg
ICAgICAgIDxMaW5rIGtleT17aXRlbS5ocmVmfSBocmVmPXtpdGVtLmhyZWZ9IGNsYXNzTmFtZT17TkFWX0xJTkt9IG9uQ2xpY2s9
e29uTmF2aWdhdGV9PntpdGVtLmxhYmVsfTwvTGluaz4KICAgICAgICAgICkpfQogICAgICAgIDwvZGl2PgogICAgICApfQogICAg
PC9kaXY+CiAgKTsKfQoKLyoqIE1hdGNoaW5nIEVuZ2xpc2ggVVJMIGZvciB0aGUgY3VycmVudCBTcGFuaXNoIHBhZ2U6IC9lcy94
IC0+IC94LCAvZXMgLT4gLy4gKi8KZnVuY3Rpb24gZW5nbGlzaEhyZWYocGF0aG5hbWU6IHN0cmluZyB8IG51bGwpOiBzdHJpbmcg
ewogIGlmICghcGF0aG5hbWUpIHJldHVybiAiLyI7CiAgY29uc3Qgc3RyaXBwZWQgPSBwYXRobmFtZS5yZXBsYWNlKC9eXC9lcyg/
PVwvfCQpLywgIiIpOwogIHJldHVybiBzdHJpcHBlZCA9PT0gIiIgPyAiLyIgOiBzdHJpcHBlZDsKfQoKZXhwb3J0IGRlZmF1bHQg
ZnVuY3Rpb24gU2l0ZUhlYWRlckVzKHsgZW5nbGlzaEhyZWY6IGVuZ2xpc2hPdmVycmlkZSB9OiB7IGVuZ2xpc2hIcmVmPzogc3Ry
aW5nIH0gPSB7fSkgewogIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTsKICBjb25zdCBlbkhyZWYgPSBlbmdsaXNoT3Zl
cnJpZGUgPz8gZW5nbGlzaEhyZWYocGF0aG5hbWUpOwogIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRJc01lbnVPcGVuXSA9IHVzZVN0
YXRlKGZhbHNlKTsKICBjb25zdCBbaXNTZXJ2aWNlc09wZW4sIHNldElzU2VydmljZXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTsK
ICBjb25zdCBbaXNUcmVhdG1lbnRzT3Blbiwgc2V0SXNUcmVhdG1lbnRzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7CiAgY29uc3Qg
W2lzQ29udGVudE9wZW4sIHNldElzQ29udGVudE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpOwogIGNvbnN0IGNsb3NlTWVudSA9ICgp
ID0+IHNldElzTWVudU9wZW4oZmFsc2UpOwoKICByZXR1cm4gKAogICAgPD4KICAgICAgey8qIFNraXAgdG8gY29udGVudCAqL30K
ICAgICAgPGEKICAgICAgICBocmVmPSIjbWFpbi1jb250ZW50IgogICAgICAgIGNsYXNzTmFtZT0ic3Itb25seSBmb2N1czpub3Qt
c3Itb25seSBmb2N1czphYnNvbHV0ZSBmb2N1czp0b3AtNCBmb2N1czpsZWZ0LTQgZm9jdXM6ei1bMTAwXSBmb2N1czpiZy1bI0M5
QTY2Ql0gZm9jdXM6dGV4dC1bIzBCMUQzNl0gZm9jdXM6cHgtNCBmb2N1czpweS0yIGZvY3VzOnJvdW5kZWQgZm9jdXM6Zm9udC1z
ZW1pYm9sZCIKICAgICAgPgogICAgICAgIFNhbHRhciBhbCBjb250ZW5pZG8gcHJpbmNpcGFsCiAgICAgIDwvYT4KCiAgICAgIHsv
KiA9PT09PSBUT1AgQkFSID09PT09ICovfQogICAgICA8ZGl2IGNsYXNzTmFtZT0iYmctd2hpdGUgYm9yZGVyLWIgYm9yZGVyLWdy
YXktMjAwIj4KICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ibWF4LXctN3hsIG14LWF1dG8gcHgtNiBweS00IGZsZXggZmxleC1jb2wg
bGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNCI+CiAgICAgICAgICA8TGluayBocmVmPSIvZXMi
IGNsYXNzTmFtZT0iZmxleC1zaHJpbmstMCI+CiAgICAgICAgICAgIDxJbWFnZQogICAgICAgICAgICAgIHNyYz0iL2xvZ28ucG5n
IgogICAgICAgICAgICAgIGFsdD0iUmV3aXJlZCBLZXRhbWluZSIKICAgICAgICAgICAgICB3aWR0aD17NjAwfQogICAgICAgICAg
ICAgIGhlaWdodD17MTgwfQogICAgICAgICAgICAgIGNsYXNzTmFtZT0iaC0xNiBtZDpoLTIwIHctYXV0byIKICAgICAgICAgICAg
ICBwcmlvcml0eQogICAgICAgICAgICAvPgogICAgICAgICAgPC9MaW5rPgoKICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSJmbGV4
IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLXgtNiBnYXAteS0yIHRleHQtc20gdGV4dC1bIzBCMUQz
Nl0iPgogICAgICAgICAgICA8YSBocmVmPXtNQVBTX1VSTH0gdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJl
ciIgY2xhc3NOYW1lPSJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBob3Zlcjp0ZXh0LVsjQzlBNjZCXSB0cmFuc2l0aW9uIj4KICAg
ICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNz
TmFtZT0iaC00IHctNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2U9ImN1cnJlbnRDb2xvciI+CiAgICAg
ICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPSJyb3VuZCIgc3Ryb2tlTGluZWpvaW49InJvdW5kIiBzdHJva2VXaWR0aD17
Mn0gZD0iTTE3LjY1NyAxNi42NTdMMTMuNDE0IDIwLjlhMS45OTggMS45OTggMCAwMS0yLjgyNyAwbC00LjI0NC00LjI0M2E4IDgg
MCAxMTExLjMxNCAweiIgLz4KICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9p
bj0icm91bmQiIHN0cm9rZVdpZHRoPXsyfSBkPSJNMTUgMTFhMyAzIDAgMTEtNiAwIDMgMyAwIDAxNiAweiIgLz4KICAgICAgICAg
ICAgICA8L3N2Zz4KICAgICAgICAgICAgICAyODIwIE5FIDIxNHRoIFN0ICMxMDAyLCBBdmVudHVyYSwgRkwgMzMxODAKICAgICAg
ICAgICAgPC9hPgogICAgICAgICAgICA8YSBocmVmPSJtYWlsdG86aW5mb0ByZXdpcmVka2V0YW1pbmUuY29tIiBjbGFzc05hbWU9
ImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGhvdmVyOnRleHQtWyNDOUE2NkJdIHRyYW5zaXRpb24iPgogICAgICAgICAgICAgIDxz
dmcgYXJpYS1oaWRkZW49InRydWUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3NOYW1lPSJoLTQgdy00
IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0iY3VycmVudENvbG9yIj4KICAgICAgICAgICAgICAgIDxw
YXRoIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0icm91bmQiIHN0cm9rZVdpZHRoPXsyfSBkPSJNMyA4bDcu
ODkgNS4yNmEyIDIgMCAwMDIuMjIgMEwyMSA4TTUgMTloMTRhMiAyIDAgMDAyLTJWN2EyIDIgMCAwMC0yLTJINWEyIDIgMCAwMC0y
IDJ2MTBhMiAyIDAgMDAyIDJ6IiAvPgogICAgICAgICAgICAgIDwvc3ZnPgogICAgICAgICAgICAgIGluZm9AcmV3aXJlZGtldGFt
aW5lLmNvbQogICAgICAgICAgICA8L2E+CiAgICAgICAgICAgIDxhIGhyZWY9InRlbDorMTMwNTY3NjYwNzAiIGNsYXNzTmFtZT0i
ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LVsjQzlBNjZCXSB0cmFuc2l0aW9uIj4KICAg
ICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNz
TmFtZT0iaC00IHctNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2U9ImN1cnJlbnRDb2xvciI+CiAgICAg
ICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPSJyb3VuZCIgc3Ryb2tlTGluZWpvaW49InJvdW5kIiBzdHJva2VXaWR0aD17
Mn0gZD0iTTMgNWEyIDIgMCAwMTItMmgzLjI4YTEgMSAwIDAxLjk0OC42ODRsMS40OTggNC40OTNhMSAxIDAgMDEtLjUwMiAxLjIx
bC0yLjI1NyAxLjEzYTExLjA0MiAxMS4wNDIgMCAwMDUuNTE2IDUuNTE2bDEuMTMtMi4yNTdhMSAxIDAgMDExLjIxLS41MDJsNC40
OTMgMS40OThhMSAxIDAgMDEuNjg0Ljk0OVYxOWEyIDIgMCAwMS0yIDJoLTFDOS43MTYgMjEgMyAxNC4yODQgMyA2VjV6IiAvPgog
ICAgICAgICAgICAgIDwvc3ZnPgogICAgICAgICAgICAgICgzMDUpIDY3Ni02MDcwCiAgICAgICAgICAgIDwvYT4KICAgICAgICAg
ICAgPExpbmsgaHJlZj17ZW5IcmVmfSBocmVmTGFuZz0iZW4iIGxhbmc9ImVuIiBjbGFzc05hbWU9InRleHQtWyNDOUE2NkJdIGZv
bnQtc2VtaWJvbGQgaG92ZXI6dW5kZXJsaW5lIj5FbmdsaXNoPC9MaW5rPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+
CiAgICAgIDwvZGl2PgoKICAgICAgey8qIE1BSU4gTkFWSUdBVElPTiAqL30KICAgICAgPGhlYWRlciBjbGFzc05hbWU9ImJnLVsj
MEIxRDM2XSB0ZXh0LXdoaXRlIHN0aWNreSB0b3AtMCB6LTUwIj4KICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ibWF4LXctN3hsIG14
LWF1dG8gcHgtNiBweS0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiI+CiAgICAgICAgICA8bmF2IGNsYXNzTmFt
ZT0iaGlkZGVuIHhsOmZsZXggaXRlbXMtY2VudGVyIGdhcC02IHRleHQtWzE1cHhdIGZvbnQtbWVkaXVtIHdoaXRlc3BhY2Utbm93
cmFwIj4KICAgICAgICAgICAgPExpbmsgaHJlZj0iL2VzIiBjbGFzc05hbWU9e05BVl9MSU5LfT5JbmljaW88L0xpbms+CiAgICAg
ICAgICAgIDxEZXNrdG9wRHJvcGRvd24gbGFiZWw9Ik51ZXN0cm9zIFNlcnZpY2lvcyIgaXRlbXM9e1NFUlZJQ0VTfSB3aWR0aD0i
dy01NiIgLz4KICAgICAgICAgICAgPERlc2t0b3BEcm9wZG93biBsYWJlbD0iVHJhdGFtaWVudG9zIiBpdGVtcz17VFJFQVRNRU5U
U30gd2lkdGg9InctNjQiIHNjcm9sbCAvPgogICAgICAgICAgICA8TGluayBocmVmPSIvZXMvcHJvdmlkZXJzIiBjbGFzc05hbWU9
e05BVl9MSU5LfT5Qcm92ZWVkb3JlczwvTGluaz4KICAgICAgICAgICAgPERlc2t0b3BEcm9wZG93biBsYWJlbD0iQ29udGVuaWRv
IiBpdGVtcz17Q09OVEVOVH0gd2lkdGg9InctNTYiIC8+CiAgICAgICAgICAgIDxMaW5rIGhyZWY9Ii9lcy9sb2NhdGlvbiIgY2xh
c3NOYW1lPXtOQVZfTElOS30+VWJpY2FjacOzbjwvTGluaz4KICAgICAgICAgICAgPExpbmsgaHJlZj0iL2VzL2ZhcSIgY2xhc3NO
YW1lPXtOQVZfTElOS30+RkFRPC9MaW5rPgogICAgICAgICAgICA8TGluayBocmVmPSIvZXMjY29udGFjdCIgY2xhc3NOYW1lPXtO
QVZfTElOS30+Q29udGFjdG88L0xpbms+CiAgICAgICAgICA8L25hdj4KCiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ieGw6
aGlkZGVuIHAtMiIgb25DbGljaz17KCkgPT4gc2V0SXNNZW51T3BlbighaXNNZW51T3Blbil9IGFyaWEtbGFiZWw9e2lzTWVudU9w
ZW4gPyAiQ2VycmFyIG1lbsO6IiA6ICJBYnJpciBtZW7DuiJ9IGFyaWEtZXhwYW5kZWQ9e2lzTWVudU9wZW59PgogICAgICAgICAg
ICB7aXNNZW51T3BlbiA/ICgKICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzc05hbWU9ImgtNiB3LTYi
IGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiPjxwYXRoIHN0cm9rZUxpbmVjYXA9
InJvdW5kIiBzdHJva2VMaW5lam9pbj0icm91bmQiIHN0cm9rZVdpZHRoPXsyfSBkPSJNNiAxOEwxOCA2TTYgNmwxMiAxMiIgLz48
L3N2Zz4KICAgICAgICAgICAgKSA6ICgKICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzc05hbWU9Imgt
NiB3LTYiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiPjxwYXRoIHN0cm9rZUxp
bmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0icm91bmQiIHN0cm9rZVdpZHRoPXsyfSBkPSJNNCA2aDE2TTQgMTJoMTZNNCAx
OGgxNiIgLz48L3N2Zz4KICAgICAgICAgICAgKX0KICAgICAgICAgIDwvYnV0dG9uPgoKICAgICAgICAgIDxkaXYgY2xhc3NOYW1l
PSJoaWRkZW4geGw6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTUiPgogICAgICAgICAgICA8U29jaWFsSWNvbnMgLz4KICAgICAgICAg
ICAgPExpbmsgaHJlZj0iL2VzI2NvbnRhY3QiIGNsYXNzTmFtZT0iYmctWyNDOUE2NkJdIHRleHQtWyMwQjFEMzZdIHRleHQtc20g
Zm9udC1ib2xkIHB4LTYgcHktMi41IHJvdW5kZWQgaG92ZXI6Ymctd2hpdGUgdHJhbnNpdGlvbiB3aGl0ZXNwYWNlLW5vd3JhcCI+
CiAgICAgICAgICAgICAgQ09OU1VMVEEgR1JBVFVJVEEKICAgICAgICAgICAgPC9MaW5rPgogICAgICAgICAgPC9kaXY+CiAgICAg
ICAgPC9kaXY+CgogICAgICAgIHtpc01lbnVPcGVuICYmICgKICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSJ4bDpoaWRkZW4gYmct
WyMwQjFEMzZdIGJvcmRlci10IGJvcmRlci13aGl0ZS8xMCI+CiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSJmbGV4IGZsZXgt
Y29sIHB4LTYgcHktNCBzcGFjZS15LTQiPgogICAgICAgICAgICAgIDxMaW5rIGhyZWY9Ii9lcyIgY2xhc3NOYW1lPXtOQVZfTElO
S30gb25DbGljaz17Y2xvc2VNZW51fT5JbmljaW88L0xpbms+CiAgICAgICAgICAgICAgPE1vYmlsZUdyb3VwIGxhYmVsPSJOdWVz
dHJvcyBTZXJ2aWNpb3MiIGl0ZW1zPXtTRVJWSUNFU30gb3Blbj17aXNTZXJ2aWNlc09wZW59IG9uVG9nZ2xlPXsoKSA9PiBzZXRJ
c1NlcnZpY2VzT3BlbighaXNTZXJ2aWNlc09wZW4pfSBvbk5hdmlnYXRlPXtjbG9zZU1lbnV9IC8+CiAgICAgICAgICAgICAgPE1v
YmlsZUdyb3VwIGxhYmVsPSJUcmF0YW1pZW50b3MiIGl0ZW1zPXtUUkVBVE1FTlRTfSBvcGVuPXtpc1RyZWF0bWVudHNPcGVufSBv
blRvZ2dsZT17KCkgPT4gc2V0SXNUcmVhdG1lbnRzT3BlbighaXNUcmVhdG1lbnRzT3Blbil9IG9uTmF2aWdhdGU9e2Nsb3NlTWVu
dX0gLz4KICAgICAgICAgICAgICA8TGluayBocmVmPSIvZXMvcHJvdmlkZXJzIiBjbGFzc05hbWU9e05BVl9MSU5LfSBvbkNsaWNr
PXtjbG9zZU1lbnV9PlByb3ZlZWRvcmVzPC9MaW5rPgogICAgICAgICAgICAgIDxNb2JpbGVHcm91cCBsYWJlbD0iQ29udGVuaWRv
IiBpdGVtcz17Q09OVEVOVH0gb3Blbj17aXNDb250ZW50T3Blbn0gb25Ub2dnbGU9eygpID0+IHNldElzQ29udGVudE9wZW4oIWlz
Q29udGVudE9wZW4pfSBvbk5hdmlnYXRlPXtjbG9zZU1lbnV9IC8+CiAgICAgICAgICAgICAgPExpbmsgaHJlZj0iL2VzL2xvY2F0
aW9uIiBjbGFzc05hbWU9e05BVl9MSU5LfSBvbkNsaWNrPXtjbG9zZU1lbnV9PlViaWNhY2nDs248L0xpbms+CiAgICAgICAgICAg
ICAgPExpbmsgaHJlZj0iL2VzL2ZhcSIgY2xhc3NOYW1lPXtOQVZfTElOS30gb25DbGljaz17Y2xvc2VNZW51fT5QcmVndW50YXMg
RnJlY3VlbnRlczwvTGluaz4KICAgICAgICAgICAgICA8TGluayBocmVmPSIvZXMjY29udGFjdCIgY2xhc3NOYW1lPXtOQVZfTElO
S30gb25DbGljaz17Y2xvc2VNZW51fT5Db250YWN0bzwvTGluaz4KICAgICAgICAgICAgICA8TGluayBocmVmPXtlbkhyZWZ9IGhy
ZWZMYW5nPSJlbiIgbGFuZz0iZW4iIGNsYXNzTmFtZT0idGV4dC1bI0M5QTY2Ql0gZm9udC1zZW1pYm9sZCIgb25DbGljaz17Y2xv
c2VNZW51fT5FbmdsaXNoPC9MaW5rPgoKICAgICAgICAgICAgICA8YSBocmVmPSIvZXMjY29udGFjdCIgY2xhc3NOYW1lPSJiZy1b
I0M5QTY2Ql0gdGV4dC1bIzBCMUQzNl0gdGV4dC1jZW50ZXIgZm9udC1ib2xkIHB4LTYgcHktMyByb3VuZGVkIG10LTIiIG9uQ2xp
Y2s9e2Nsb3NlTWVudX0+CiAgICAgICAgICAgICAgICBDT05TVUxUQSBHUkFUVUlUQQogICAgICAgICAgICAgIDwvYT4KCiAgICAg
ICAgICAgICAgPGRpdiBjbGFzc05hbWU9ImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC02IHB0LTQgYm9yZGVy
LXQgYm9yZGVyLXdoaXRlLzEwIG10LTIiPgogICAgICAgICAgICAgICAgPFNvY2lhbEljb25zIC8+CiAgICAgICAgICAgICAgPC9k
aXY+CiAgICAgICAgICAgIDwvbmF2PgogICAgICAgICAgPC9kaXY+CiAgICAgICAgKX0KICAgICAgPC9oZWFkZXI+CiAgICA8Lz4K
ICApOwp9Cg==
'@

$FooterB64 = @'
aW1wb3J0IEltYWdlIGZyb20gIm5leHQvaW1hZ2UiOwppbXBvcnQgTGluayBmcm9tICJuZXh0L2xpbmsiOwoKLy8gU2hhcmVkIFNw
YW5pc2ggZm9vdGVyLiBNaXJyb3JzIHRoZSBFbmdsaXNoIGZvb3RlciBtYXJrdXAgYW5kIGNsYXNzZXMuCgpjb25zdCBNQVBTX1VS
TCA9CiAgImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS9SZXdpcmVkK0tldGFtaW5lL0AyNS45NzMwOTkzLC04MC4x
NDc1NTk0LDE3ei9kYXRhPSEzbTEhNGIxITRtNiEzbTUhMXMweDg4ZDlhZDM2OTE3YjgxNmQ6MHgzNTA0NmNjZTkyZGFiNTU5ITht
MiEzZDI1Ljk3MzA5OTMhNGQtODAuMTQ0OTg0NSExNnMlMkZnJTJGMTFzcnJoOXhnbD9lbnRyeT10dHUiOwoKY29uc3QgU09DSUFM
ID0gWwogIHsgaHJlZjogImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcmV3aXJlZF9rZXRhbWluZS8iLCBsYWJlbDogIkluc3Rh
Z3JhbSIsIGQ6ICJNMTIgMi4xNjNjMy4yMDQgMCAzLjU4NC4wMTIgNC44NS4wNyAzLjI1Mi4xNDggNC43NzEgMS42OTEgNC45MTkg
NC45MTkuMDU4IDEuMjY1LjA2OSAxLjY0NS4wNjkgNC44NDkgMCAzLjIwNS0uMDEyIDMuNTg0LS4wNjkgNC44NDktLjE0OSAzLjIy
NS0xLjY2NCA0Ljc3MS00LjkxOSA0LjkxOS0xLjI2Ni4wNTgtMS42NDQuMDctNC44NS4wNy0zLjIwNCAwLTMuNTg0LS4wMTItNC44
NDktLjA3LTMuMjYtLjE0OS00Ljc3MS0xLjY5OS00LjkxOS00LjkyLS4wNTgtMS4yNjUtLjA3LTEuNjQ0LS4wNy00Ljg0OSAwLTMu
MjA0LjAxMy0zLjU4My4wNy00Ljg0OS4xNDktMy4yMjcgMS42NjQtNC43NzEgNC45MTktNC45MTkgMS4yNjYtLjA1NyAxLjY0NS0u
MDY5IDQuODQ5LS4wNjl6TTEyIDBDOC43NDEgMCA4LjMzMy4wMTQgNy4wNTMuMDcyIDIuNjk1LjI3Mi4yNzMgMi42OS4wNzMgNy4w
NTIuMDE0IDguMzMzIDAgOC43NDEgMCAxMmMwIDMuMjU5LjAxNCAzLjY2OC4wNzIgNC45NDguMiA0LjM1OCAyLjYxOCA2Ljc4IDYu
OTggNi45OEM4LjMzMyAyMy45ODYgOC43NDEgMjQgMTIgMjRjMy4yNTkgMCAzLjY2OC0uMDE0IDQuOTQ4LS4wNzIgNC4zNTQtLjIg
Ni43ODItMi42MTggNi45NzktNi45OC4wNTktMS4yOC4wNzMtMS42ODkuMDczLTQuOTQ4IDAtMy4yNTktLjAxNC0zLjY2Ny0uMDcy
LTQuOTQ3LS4xOTYtNC4zNTQtMi42MTctNi43OC02Ljk3OS02Ljk4QzE1LjY2OC4wMTQgMTUuMjU5IDAgMTIgMHptMCA1LjgzOGE2
LjE2MiA2LjE2MiAwIDEwMCAxMi4zMjQgNi4xNjIgNi4xNjIgMCAwMDAtMTIuMzI0ek0xMiAxNmE0IDQgMCAxMTAtOCA0IDQgMCAw
MTAgOHptNi40MDYtMTEuODQ1YTEuNDQgMS40NCAwIDEwMCAyLjg4MSAxLjQ0IDEuNDQgMCAwMDAtMi44ODF6IiB9LAogIHsgaHJl
ZjogImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL0BSZXdpcmVkS2V0YW1pbmUiLCBsYWJlbDogIllvdVR1YmUiLCBkOiAiTTIzLjQ5
OCA2LjE4NmEzLjAxNiAzLjAxNiAwIDAwLTIuMTIyLTIuMTM2QzE5LjUwNSAzLjU0NSAxMiAzLjU0NSAxMiAzLjU0NXMtNy41MDUg
MC05LjM3Ny41MDVBMy4wMTcgMy4wMTcgMCAwMC41MDIgNi4xODZDMCA4LjA3IDAgMTIgMCAxMnMwIDMuOTMuNTAyIDUuODE0YTMu
MDE2IDMuMDE2IDAgMDAyLjEyMiAyLjEzNmMxLjg3MS41MDUgOS4zNzYuNTA1IDkuMzc2LjUwNXM3LjUwNSAwIDkuMzc3LS41MDVh
My4wMTUgMy4wMTUgMCAwMDIuMTIyLTIuMTM2QzI0IDE1LjkzIDI0IDEyIDI0IDEyczAtMy45My0uNTAyLTUuODE0ek05LjU0NSAx
NS41NjhWOC40MzJMMTUuODE4IDEybC02LjI3MyAzLjU2OHoiIH0sCiAgeyBocmVmOiAiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29t
L1Jld2lyZWRLZXRhbWluZS8iLCBsYWJlbDogIkZhY2Vib29rIiwgZDogIk0yNCAxMi4wNzNjMC02LjYyNy01LjM3My0xMi0xMi0x
MnMtMTIgNS4zNzMtMTIgMTJjMCA1Ljk5IDQuMzg4IDEwLjk1NCAxMC4xMjUgMTEuODU0di04LjM4NUg3LjA3OHYtMy40N2gzLjA0
N1Y5LjQzYzAtMy4wMDcgMS43OTItNC42NjkgNC41MzMtNC42NjkgMS4zMTIgMCAyLjY4Ni4yMzUgMi42ODYuMjM1djIuOTUzSDE1
LjgzYy0xLjQ5MSAwLTEuOTU2LjkyNS0xLjk1NiAxLjg3NHYyLjI1aDMuMzI4bC0uNTMyIDMuNDdoLTIuNzk2djguMzg1QzE5LjYx
MiAyMy4wMjcgMjQgMTguMDYyIDI0IDEyLjA3M3oiIH0sCiAgeyBocmVmOiAiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2ph
Y29iLXNpbHZlcnN0b25lLTk4NDE0NTQ3LyIsIGxhYmVsOiAiTGlua2VkSW4iLCBkOiAiTTIwLjQ0NyAyMC40NTJoLTMuNTU0di01
LjU2OWMwLTEuMzI4LS4wMjctMy4wMzctMS44NTItMy4wMzctMS44NTMgMC0yLjEzNiAxLjQ0NS0yLjEzNiAyLjkzOXY1LjY2N0g5
LjM1MVY5aDMuNDE0djEuNTYxaC4wNDZjLjQ3Ny0uOSAxLjYzNy0xLjg1IDMuMzctMS44NSAzLjYwMSAwIDQuMjY3IDIuMzcgNC4y
NjcgNS40NTV2Ni4yODZ6TTUuMzM3IDcuNDMzYTIuMDYyIDIuMDYyIDAgMDEtMi4wNjMtMi4wNjUgMi4wNjQgMi4wNjQgMCAxMTIu
MDYzIDIuMDY1em0xLjc4MiAxMy4wMTlIMy41NTVWOWgzLjU2NHYxMS40NTJ6TTIyLjIyNSAwSDEuNzcxQy43OTIgMCAwIC43NzQg
MCAxLjcyOXYyMC41NDJDMCAyMy4yMjcuNzkyIDI0IDEuNzcxIDI0aDIwLjQ1MUMyMy4yIDI0IDI0IDIzLjIyNyAyNCAyMi4yNzFW
MS43MjlDMjQgLjc3NCAyMy4yIDAgMjIuMjIyIDBoLjAwM3oiIH0sCl07Cgpjb25zdCBRVUlDS19MSU5LUyA9IFsKICB7IGhyZWY6
ICIvZXMiLCBsYWJlbDogIkluaWNpbyIgfSwKICB7IGhyZWY6ICIvZXMvc2VydmljZXMiLCBsYWJlbDogIk51ZXN0cm9zIFNlcnZp
Y2lvcyIgfSwKICB7IGhyZWY6ICIvZXMjaG93LXdlLWhlbHAiLCBsYWJlbDogIkPDs21vIEF5dWRhbW9zIiB9LAogIHsgaHJlZjog
Ii9lcyNleHBlcmllbmNlIiwgbGFiZWw6ICJMYSBFeHBlcmllbmNpYSIgfSwKICB7IGhyZWY6ICIvZXMjY29udGFjdCIsIGxhYmVs
OiAiQ29udGFjdG8iIH0sCiAgeyBocmVmOiAiL2VzI2NvbnRhY3QiLCBsYWJlbDogIkNvbnN1bHRhIEdyYXR1aXRhIiB9LApdOwoK
ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2l0ZUZvb3RlckVzKCkgewogIHJldHVybiAoCiAgICA8Zm9vdGVyIGNsYXNzTmFtZT0i
YmctWyMwODE1MjVdIHRleHQtd2hpdGUgcHQtMTYgcGItOCI+CiAgICAgIDxkaXYgY2xhc3NOYW1lPSJtYXgtdy03eGwgbXgtYXV0
byBweC02Ij4KICAgICAgICA8ZGl2IGNsYXNzTmFtZT0iZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtMTIgbWIt
MTIiPgoKICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9ImZvbnQtc2VtaWJvbGQgdGV4dC1sZyBtYi01
IHRleHQtWyNDOUE2NkJdIj5Db250w6FjdGVub3M8L2g0PgogICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSJzcGFjZS15LTMgdGV4
dC13aGl0ZS84MCB0ZXh0LXNtIj4KICAgICAgICAgICAgICA8bGk+QWJpZXJ0bzogTHVuZXMgLSBWaWVybmVzPC9saT4KICAgICAg
ICAgICAgICA8bGk+OTowMEFNIC0gNTowMFBNPC9saT4KICAgICAgICAgICAgICA8bGk+CiAgICAgICAgICAgICAgICA8YSBocmVm
PSJ0ZWw6KzEzMDU2NzY2MDcwIiBjbGFzc05hbWU9ImhvdmVyOnRleHQtWyNDOUE2NkJdIHRyYW5zaXRpb24iPlRlbMOpZm9ubzog
KDMwNSkgNjc2LTYwNzA8L2E+CiAgICAgICAgICAgICAgPC9saT4KICAgICAgICAgICAgICA8bGk+CiAgICAgICAgICAgICAgICA8
YSBocmVmPXtNQVBTX1VSTH0gdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgY2xhc3NOYW1lPSJob3Zl
cjp0ZXh0LVsjQzlBNjZCXSB0cmFuc2l0aW9uIj4KICAgICAgICAgICAgICAgICAgMjgyMCBORSAyMTR0aCBTdCAjMTAwMjxiciAv
PkF2ZW50dXJhLCBGTCAzMzE4MAogICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgIDwvbGk+CiAgICAgICAgICAgICAg
PGxpPgogICAgICAgICAgICAgICAgPGEgaHJlZj0ibWFpbHRvOmluZm9AcmV3aXJlZGtldGFtaW5lLmNvbSIgY2xhc3NOYW1lPSJo
b3Zlcjp0ZXh0LVsjQzlBNjZCXSB0cmFuc2l0aW9uIj5pbmZvQHJld2lyZWRrZXRhbWluZS5jb208L2E+CiAgICAgICAgICAgICAg
PC9saT4KICAgICAgICAgICAgPC91bD4KICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSJmbGV4IGZs
ZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciI+CiAgICAgICAgICAgIDxJbWFnZQogICAgICAgICAgICAgIHNyYz0iL2xv
Z28ucG5nIgogICAgICAgICAgICAgIGFsdD0iUmV3aXJlZCBLZXRhbWluZSIKICAgICAgICAgICAgICB3aWR0aD17MjAwfQogICAg
ICAgICAgICAgIGhlaWdodD17NjB9CiAgICAgICAgICAgICAgY2xhc3NOYW1lPSJoLTE0IHctYXV0byBtYi02IgogICAgICAgICAg
ICAvPgoKICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9ImZsZXggZ2FwLTQgbWItNiI+CiAgICAgICAgICAgICAge1NPQ0lBTC5t
YXAoKHMpID0+ICgKICAgICAgICAgICAgICAgIDxhIGtleT17cy5sYWJlbH0gaHJlZj17cy5ocmVmfSB0YXJnZXQ9Il9ibGFuayIg
cmVsPSJub29wZW5lciBub3JlZmVycmVyIiBjbGFzc05hbWU9ImhvdmVyOnRleHQtWyNDOUE2NkJdIHRyYW5zaXRpb24iIGFyaWEt
bGFiZWw9e3MubGFiZWx9PgogICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzc05hbWU9ImgtNSB3
LTUiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPXtzLmR9IC8+PC9zdmc+CiAgICAgICAg
ICAgICAgICA8L2E+CiAgICAgICAgICAgICAgKSl9CiAgICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgICAgPGEKICAgICAgICAg
ICAgICBocmVmPSJodHRwczovL3d3dy5sZWdpdHNjcmlwdC5jb20vd2Vic2l0ZXMvP2NoZWNrZXJfa2V5d29yZHM9cmV3aXJlZGtl
dGFtaW5lLmNvbSIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVm
ZXJyZXIiCiAgICAgICAgICAgICAgY2xhc3NOYW1lPSJpbmxpbmUtYmxvY2siCiAgICAgICAgICAgID4KICAgICAgICAgICAgICA8
SW1hZ2UKICAgICAgICAgICAgICAgIHNyYz0iL2xlZ2l0c2NyaXB0LnBuZyIKICAgICAgICAgICAgICAgIGFsdD0iTGVnaXRTY3Jp
cHQgQ2VydGlmaWVkIgogICAgICAgICAgICAgICAgd2lkdGg9ezE1MH0KICAgICAgICAgICAgICAgIGhlaWdodD17NzV9CiAgICAg
ICAgICAgICAgICBjbGFzc05hbWU9ImgtMTYgdy1hdXRvIgogICAgICAgICAgICAgIC8+CiAgICAgICAgICAgIDwvYT4KICAgICAg
ICAgIDwvZGl2PgoKICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9ImZvbnQtc2VtaWJvbGQgdGV4dC1s
ZyBtYi01IHRleHQtWyNDOUE2NkJdIj5FbmxhY2VzIFLDoXBpZG9zPC9oND4KICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0ic3Bh
Y2UteS0zIHRleHQtd2hpdGUvODAgdGV4dC1zbSI+CiAgICAgICAgICAgICAge1FVSUNLX0xJTktTLm1hcCgobCkgPT4gKAogICAg
ICAgICAgICAgICAgPGxpIGtleT17bC5sYWJlbH0+PExpbmsgaHJlZj17bC5ocmVmfSBjbGFzc05hbWU9ImhvdmVyOnRleHQtWyND
OUE2NkJdIHRyYW5zaXRpb24iPntsLmxhYmVsfTwvTGluaz48L2xpPgogICAgICAgICAgICAgICkpfQogICAgICAgICAgICA8L3Vs
PgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CgogICAgICAgIDxkaXYgY2xhc3NOYW1lPSJib3JkZXItdCBib3JkZXIt
d2hpdGUvMTAgcHQtOCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlLzUwIHRleHQtc20iPgogICAgICAgICAgPHAgY2xhc3NOYW1lPSJt
Yi00IG1heC13LTR4bCBteC1hdXRvIj4KICAgICAgICAgICAgTGEgaW5mb3JtYWNpw7NuIGVuIGVzdGUgc2l0aW8gbm8gZXN0w6Eg
ZGVzdGluYWRhIG5pIGltcGxpY2Egc2VyIHVuIHN1c3RpdHV0byBkZWwgY29uc2VqbywgZGlhZ27Ds3N0aWNvIG8gdHJhdGFtaWVu
dG8gbcOpZGljbyBwcm9mZXNpb25hbC4gVG9kbyBlbCBjb250ZW5pZG8gZXMgc29sbyBwYXJhIGZpbmVzIGRlIGluZm9ybWFjacOz
biBnZW5lcmFsLgogICAgICAgICAgPC9wPgogICAgICAgICAgwqkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gUmV3aXJlZCBL
ZXRhbWluZSDCtyBBdmVudHVyYSwgRmxvcmlkYSDCtyBUb2RvcyBsb3MgRGVyZWNob3MgUmVzZXJ2YWRvcwogICAgICAgIDwvZGl2
PgogICAgICA8L2Rpdj4KICAgIDwvZm9vdGVyPgogICk7Cn0K
'@

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
            $keep = @($names | Where-Object { Test-Used $rest (($_ -split '\s+as\s+')[-1]) })
            if ($keep.Count -eq $names.Count) { continue }
            if ($keep.Count -eq 0) { $new = '' } else { $new = 'import { ' + ($keep -join ', ') + ' } from "' + $mod + '";' + $Nl }
        } elseif ($spec -match '^[A-Za-z_]\w*$') {
            if (Test-Used $rest $spec) { continue }
            $new = ''
        } else { continue }
        $Text = $Text.Remove($m.Index, $m.Length).Insert($m.Index, $new)
    }
    return $Text
}

function Convert-SpanishPage([string]$Text, [ref]$Note) {
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
        # skip link directly before the top bar
        $before = $Text.Substring(0, $start)
        $sk = [regex]::Match($before, '<a\s[^>]*?href="#main-content"[\s\S]*?</a>\s*$')
        if ($sk.Success) { $start = Get-LeadingStart $Text $sk.Index }
        $li = Get-LineIndent $Text $start
        $Text = $Text.Substring(0, $li.Start) + $li.Indent + '<SiteHeaderEs />' + $Text.Substring($hEnd)
        $changed = $true
    } elseif (-not $Text.Contains('<SiteHeaderEs')) {
        $Note.Value = 'no <header> and no <SiteHeaderEs />'; return $null
    }

    # ---- footer ----
    $f = [regex]::Match($Text, '<footer(?=[\s>])')
    if ($f.Success) {
        $fEnd = Get-ElementEnd $Text $f.Index 'footer'
        if ($fEnd -lt 0) { $Note.Value = 'could not find the end of <footer>'; return $null }
        $Text = $Text.Substring(0, $f.Index) + '<SiteFooterEs />' + $Text.Substring($fEnd)
        $changed = $true
    } elseif (-not $Text.Contains('<SiteFooterEs')) {
        $Note.Value = 'no <footer> and no <SiteFooterEs />'; return $null
    }

    if (-not $changed) { return $Text }

    # ---- imports for the components ----
    $need = @()
    if ($Text.Contains('<SiteHeaderEs') -and -not $Text.Contains('import SiteHeaderEs ')) { $need += 'import SiteHeaderEs from "@/components/es/SiteHeaderEs";' }
    if ($Text.Contains('<SiteFooterEs') -and -not $Text.Contains('import SiteFooterEs ')) { $need += 'import SiteFooterEs from "@/components/es/SiteFooterEs";' }
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

# ------------------------------------------------------------------ main
$rootPath = (Resolve-Path $Root).Path
$esDir = Join-Path $rootPath 'src\app\es'
if (-not (Test-Path $esDir)) { $esDir = Join-Path $rootPath 'src/app/es' }
if (-not (Test-Path $esDir)) { throw "Can't find src\app\es under $rootPath. Run this from C:\Users\jsilv\rewired-ketamine." }

$mode = 'APPLY'
if ($DryRun) { $mode = 'DRY RUN (no files written)' }
Write-Host "Update-SpanishHeaderFooter  [$mode]"
Write-Host ''

$changedFiles = New-Object System.Collections.ArrayList
$skipped = New-Object System.Collections.ArrayList

# 1) shared components
$compDir = Join-Path (Join-Path (Join-Path $rootPath 'src') 'components') 'es'
$components = @(
    @{ Name = 'SiteHeaderEs.tsx'; Text = (ConvertFrom-B64Text $HeaderB64) },
    @{ Name = 'SiteFooterEs.tsx'; Text = (ConvertFrom-B64Text $FooterB64) }
)
foreach ($c in $components) {
    $p = Join-Path $compDir $c.Name
    $old = $null
    if (Test-Path $p) { $old = Read-Utf8NoBom $p }
    $want = $c.Text
    if ($null -ne $old -and $old.Contains("`r`n")) { $want = $want.Replace("`n", "`r`n") }
    if ($old -ne $want) {
        [void]$changedFiles.Add("src/components/es/$($c.Name)")
        if (-not $DryRun) {
            if (-not (Test-Path $compDir)) { New-Item -ItemType Directory -Path $compDir -Force | Out-Null }
            Write-Utf8NoBom $p $want
        }
    }
}

# 2) Spanish pages
$pages = Get-ChildItem -Path $esDir -Recurse -Filter 'page.tsx' | Sort-Object FullName
foreach ($pg in $pages) {
    $rel = $pg.FullName.Substring($rootPath.Length).TrimStart('\', '/').Replace('\', '/')
    $text = Read-Utf8NoBom $pg.FullName
    $note = ''
    $new = Convert-SpanishPage $text ([ref]$note)
    if ($null -eq $new) {
        [void]$skipped.Add("$rel  ($note)")
        continue
    }
    if ($new -ne $text) {
        [void]$changedFiles.Add($rel)
        if (-not $DryRun) { Write-Utf8NoBom $pg.FullName $new }
    }
}

if ($changedFiles.Count -eq 0) {
    Write-Host 'Nothing to change. Everything is already up to date.'
} else {
    if ($DryRun) { Write-Host "Would change $($changedFiles.Count) file(s):" } else { Write-Host "Changed $($changedFiles.Count) file(s):" }
    foreach ($c in $changedFiles) { Write-Host "  $c" }
}
if ($skipped.Count -gt 0) {
    Write-Host ''
    Write-Host "Skipped $($skipped.Count) page(s) (left as they were):" -ForegroundColor Yellow
    foreach ($s in $skipped) { Write-Host "  $s" -ForegroundColor Yellow }
}
Write-Host ''
Write-Host 'Done.'
