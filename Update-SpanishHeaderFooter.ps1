#Requires -Version 5.1
<#
.SYNOPSIS
  Gives every Spanish page (src\app\es) the same header, menus and footer, built from the same design as the English pages.

.DESCRIPTION
  Run from the repo root (C:\Users\jsilv\rewired-ketamine).

  It writes two shared components:
    src\components\es\SiteHeaderEs.tsx  (skip link, top bar, nav, dropdowns, mobile menu)
    src\components\es\SiteFooterEs.tsx  (footer)
  and on every page under src\app\es it replaces the inline skip link +
  top bar + <header> with <SiteHeaderEs /> and the inline <footer> with <SiteFooterEs />.
  Menu state, imports and "use client" are removed only when nothing else in
  the page still uses them. Page body text is not changed, except:
    - pages with no skip-link target get id="main-content" on the first
      section after the header, and
    - the Spanish Spravato page (and its meta description) is switched
      from "tu" to "usted" wording.
  Works whether or not an earlier version of this script was already run.
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
cmVhY3QiOwoKLy8gU2hhcmVkIFNwYW5pc2ggc2l0ZSBoZWFkZXI6IHNraXAgbGluaywgdG9wIGJhciwgZGVza3RvcCBuYXYgd2l0
aCBkcm9wZG93bnMKLy8gYW5kIG1vYmlsZSBtZW51LiBUaGUgRW5nbGlzaCBhbmQgU3BhbmlzaCBoZWFkZXJzIGFyZSBnZW5lcmF0
ZWQgZnJvbSBvbmUKLy8gdGVtcGxhdGUsIHNvIHRoZXkgYWx3YXlzIGhhdmUgdGhlIHNhbWUgc3RydWN0dXJlIGFuZCBjbGFzc2Vz
LgovLyBUaGUgZnVsbCBkZXNrdG9wIG1lbnUgc2hvd3MgZnJvbSB0aGUgeGwgYnJlYWtwb2ludCAoMTI4MHB4KSB1cDsgYmVsb3cg
dGhhdAovLyB0aGUgbW9iaWxlIG1lbnUgaXMgdXNlZCwgc28gdGhlIG1lbnUgbmV2ZXIgb3ZlcmZsb3dzIG9uIHRhYmxldHMuCgpj
b25zdCBNQVBTX1VSTCA9CiAgImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS9SZXdpcmVkK0tldGFtaW5lL0AyNS45
NzMwOTkzLC04MC4xNDc1NTk0LDE3ei9kYXRhPSEzbTEhNGIxITRtNiEzbTUhMXMweDg4ZDlhZDM2OTE3YjgxNmQ6MHgzNTA0NmNj
ZTkyZGFiNTU5IThtMiEzZDI1Ljk3MzA5OTMhNGQtODAuMTQ0OTg0NSExNnMlMkZnJTJGMTFzcnJoOXhnbD9lbnRyeT10dHUiOwoK
Y29uc3QgU0VSVklDRVMgPSBbCiAgeyBocmVmOiAiL2VzL3NlcnZpY2VzIiwgbGFiZWw6ICJUb2RvcyBsb3MgU2VydmljaW9zIiB9
LAogIHsgaHJlZjogIi9lcy9zZXJ2aWNlcy9rZXRhbWluZS1pbmZ1c2lvbiIsIGxhYmVsOiAiSW5mdXNpw7NuIGRlIEtldGFtaW5h
IiB9LAogIHsgaHJlZjogIi9lcy9zZXJ2aWNlcy9ob21lLWtldGFtaW5lIiwgbGFiZWw6ICJLZXRhbWluYSBlbiBDYXNhIiB9LAog
IHsgaHJlZjogIi9lcy9zZXJ2aWNlcy9zcHJhdmF0byIsIGxhYmVsOiAiU3ByYXZhdG8iIH0sCiAgeyBocmVmOiAiL2VzL3NlcnZp
Y2VzL2l2LWtldGFtaW5lLXZzLXNwcmF2YXRvIiwgbGFiZWw6ICJJViB2cyBTcHJhdmF0byIgfSwKICB7IGhyZWY6ICIvZXMvc2Vy
dmljZXMva2V0YW1pbmUtdGhlcmFweS1jb3N0IiwgbGFiZWw6ICJDb3N0byIgfSwKICB7IGhyZWY6ICIvZXMvc2VydmljZXMva2V0
YW1pbmUtaW5zdXJhbmNlIiwgbGFiZWw6ICJTZWd1cm8gTcOpZGljbyIgfSwKICB7IGhyZWY6ICIvZXMvc2VydmljZXMvZnVuY3Rp
b25hbC13ZWxsbmVzcyIsIGxhYmVsOiAiQmllbmVzdGFyIEZ1bmNpb25hbCIgfSwKICB7IGhyZWY6ICIvZXMvc2VydmljZXMvbWVk
aWNhbC1tYW5hZ2VtZW50IiwgbGFiZWw6ICJNYW5lam8gTcOpZGljbyIgfSwKICB7IGhyZWY6ICIvZXMvc2VydmljZXMvdGFsay10
aGVyYXB5IiwgbGFiZWw6ICJUZXJhcGlhIGRlIENvbnZlcnNhY2nDs24iIH0sCl07Cgpjb25zdCBUUkVBVE1FTlRTID0gWwogIHsg
aHJlZjogIi9lcy90cmVhdG1lbnRzIiwgbGFiZWw6ICJUb2RvcyBsb3MgVHJhdGFtaWVudG9zIiB9LAogIHsgaHJlZjogIi9lcy90
cmVhdG1lbnRzL2RlcHJlc3Npb24iLCBsYWJlbDogIkRlcHJlc2nDs24iIH0sCiAgeyBocmVmOiAiL2VzL3RyZWF0bWVudHMvYW54
aWV0eSIsIGxhYmVsOiAiQW5zaWVkYWQiIH0sCiAgeyBocmVmOiAiL2VzL3RyZWF0bWVudHMvcHRzZCIsIGxhYmVsOiAiVEVQVCIg
fSwKICB7IGhyZWY6ICIvZXMvdHJlYXRtZW50cy9idXJub3V0IiwgbGFiZWw6ICJBZ290YW1pZW50byIgfSwKICB7IGhyZWY6ICIv
ZXMvdHJlYXRtZW50cy9tZW50YWwtZm9nZ2luZXNzIiwgbGFiZWw6ICJOaWVibGEgTWVudGFsIiB9LAogIHsgaHJlZjogIi9lcy90
cmVhdG1lbnRzL21vdGl2YXRpb24iLCBsYWJlbDogIk1vdGl2YWNpw7NuIiB9LAogIHsgaHJlZjogIi9lcy90cmVhdG1lbnRzL2Vh
dGluZy1kaXNvcmRlciIsIGxhYmVsOiAiVHJhc3Rvcm5vIEFsaW1lbnRhcmlvIiB9LAogIHsgaHJlZjogIi9lcy90cmVhdG1lbnRz
L3Bvc3RwYXJ0dW0tZGVwcmVzc2lvbiIsIGxhYmVsOiAiRGVwcmVzacOzbiBQb3N0cGFydG8iIH0sCiAgeyBocmVmOiAiL2VzL3Ry
ZWF0bWVudHMvb2NkIiwgbGFiZWw6ICJUT0MiIH0sCiAgeyBocmVmOiAiL2VzL3RyZWF0bWVudHMvY2hyb25pYy1wYWluIiwgbGFi
ZWw6ICJEb2xvciBDcsOzbmljbyIgfSwKICB7IGhyZWY6ICIvZXMvdHJlYXRtZW50cy90ZW5zaW9uLWhlYWRhY2hlcyIsIGxhYmVs
OiAiQ2VmYWxlYXMgcG9yIFRlbnNpw7NuIiB9LAogIHsgaHJlZjogIi9lcy90cmVhdG1lbnRzL3BhbGxpYXRpdmUtY29tcGFzc2lv
bi1jYXJlIiwgbGFiZWw6ICJDdWlkYWRvIFBhbGlhdGl2byB5IENvbXBhc2nDs24iIH0sCl07Cgpjb25zdCBDT05URU5UID0gWwog
IHsgaHJlZjogIi9lcy9jb250ZW50L2Jsb2ciLCBsYWJlbDogIkJsb2ciIH0sCiAgeyBocmVmOiAiL2VzL2NvbnRlbnQvdmlkZW9z
IiwgbGFiZWw6ICJWaWRlb3MiIH0sCiAgeyBocmVmOiAiL2VzL2NvbnRlbnQva2V0YW1pbmUtaW4tdGhlLW5ld3MiLCBsYWJlbDog
IktldGFtaW5hIGVuIGxhcyBOb3RpY2lhcyIgfSwKXTsKCmNvbnN0IFNPQ0lBTCA9IFsKICB7IGhyZWY6ICJodHRwczovL3d3dy5p
bnN0YWdyYW0uY29tL3Jld2lyZWRfa2V0YW1pbmUvIiwgbGFiZWw6ICJJbnN0YWdyYW0iLCBkOiAiTTEyIDIuMTYzYzMuMjA0IDAg
My41ODQuMDEyIDQuODUuMDcgMy4yNTIuMTQ4IDQuNzcxIDEuNjkxIDQuOTE5IDQuOTE5LjA1OCAxLjI2NS4wNjkgMS42NDUuMDY5
IDQuODQ5IDAgMy4yMDUtLjAxMiAzLjU4NC0uMDY5IDQuODQ5LS4xNDkgMy4yMjUtMS42NjQgNC43NzEtNC45MTkgNC45MTktMS4y
NjYuMDU4LTEuNjQ0LjA3LTQuODUuMDctMy4yMDQgMC0zLjU4NC0uMDEyLTQuODQ5LS4wNy0zLjI2LS4xNDktNC43NzEtMS42OTkt
NC45MTktNC45Mi0uMDU4LTEuMjY1LS4wNy0xLjY0NC0uMDctNC44NDkgMC0zLjIwNC4wMTMtMy41ODMuMDctNC44NDkuMTQ5LTMu
MjI3IDEuNjY0LTQuNzcxIDQuOTE5LTQuOTE5IDEuMjY2LS4wNTcgMS42NDUtLjA2OSA0Ljg0OS0uMDY5ek0xMiAwQzguNzQxIDAg
OC4zMzMuMDE0IDcuMDUzLjA3MiAyLjY5NS4yNzIuMjczIDIuNjkuMDczIDcuMDUyLjAxNCA4LjMzMyAwIDguNzQxIDAgMTJjMCAz
LjI1OS4wMTQgMy42NjguMDcyIDQuOTQ4LjIgNC4zNTggMi42MTggNi43OCA2Ljk4IDYuOThDOC4zMzMgMjMuOTg2IDguNzQxIDI0
IDEyIDI0YzMuMjU5IDAgMy42NjgtLjAxNCA0Ljk0OC0uMDcyIDQuMzU0LS4yIDYuNzgyLTIuNjE4IDYuOTc5LTYuOTguMDU5LTEu
MjguMDczLTEuNjg5LjA3My00Ljk0OCAwLTMuMjU5LS4wMTQtMy42NjctLjA3Mi00Ljk0Ny0uMTk2LTQuMzU0LTIuNjE3LTYuNzgt
Ni45NzktNi45OEMxNS42NjguMDE0IDE1LjI1OSAwIDEyIDB6bTAgNS44MzhhNi4xNjIgNi4xNjIgMCAxMDAgMTIuMzI0IDYuMTYy
IDYuMTYyIDAgMDAwLTEyLjMyNHpNMTIgMTZhNCA0IDAgMTEwLTggNCA0IDAgMDEwIDh6bTYuNDA2LTExLjg0NWExLjQ0IDEuNDQg
MCAxMDAgMi44ODEgMS40NCAxLjQ0IDAgMDAwLTIuODgxeiIgfSwKICB7IGhyZWY6ICJodHRwczovL3d3dy55b3V0dWJlLmNvbS9A
UmV3aXJlZEtldGFtaW5lIiwgbGFiZWw6ICJZb3VUdWJlIiwgZDogIk0yMy40OTggNi4xODZhMy4wMTYgMy4wMTYgMCAwMC0yLjEy
Mi0yLjEzNkMxOS41MDUgMy41NDUgMTIgMy41NDUgMTIgMy41NDVzLTcuNTA1IDAtOS4zNzcuNTA1QTMuMDE3IDMuMDE3IDAgMDAu
NTAyIDYuMTg2QzAgOC4wNyAwIDEyIDAgMTJzMCAzLjkzLjUwMiA1LjgxNGEzLjAxNiAzLjAxNiAwIDAwMi4xMjIgMi4xMzZjMS44
NzEuNTA1IDkuMzc2LjUwNSA5LjM3Ni41MDVzNy41MDUgMCA5LjM3Ny0uNTA1YTMuMDE1IDMuMDE1IDAgMDAyLjEyMi0yLjEzNkMy
NCAxNS45MyAyNCAxMiAyNCAxMnMwLTMuOTMtLjUwMi01LjgxNHpNOS41NDUgMTUuNTY4VjguNDMyTDE1LjgxOCAxMmwtNi4yNzMg
My41Njh6IiB9LAogIHsgaHJlZjogImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9SZXdpcmVkS2V0YW1pbmUvIiwgbGFiZWw6ICJG
YWNlYm9vayIsIGQ6ICJNMjQgMTIuMDczYzAtNi42MjctNS4zNzMtMTItMTItMTJzLTEyIDUuMzczLTEyIDEyYzAgNS45OSA0LjM4
OCAxMC45NTQgMTAuMTI1IDExLjg1NHYtOC4zODVINy4wNzh2LTMuNDdoMy4wNDdWOS40M2MwLTMuMDA3IDEuNzkyLTQuNjY5IDQu
NTMzLTQuNjY5IDEuMzEyIDAgMi42ODYuMjM1IDIuNjg2LjIzNXYyLjk1M0gxNS44M2MtMS40OTEgMC0xLjk1Ni45MjUtMS45NTYg
MS44NzR2Mi4yNWgzLjMyOGwtLjUzMiAzLjQ3aC0yLjc5NnY4LjM4NUMxOS42MTIgMjMuMDI3IDI0IDE4LjA2MiAyNCAxMi4wNzN6
IiB9LAogIHsgaHJlZjogImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9qYWNvYi1zaWx2ZXJzdG9uZS05ODQxNDU0Ny8iLCBs
YWJlbDogIkxpbmtlZEluIiwgZDogIk0yMC40NDcgMjAuNDUyaC0zLjU1NHYtNS41NjljMC0xLjMyOC0uMDI3LTMuMDM3LTEuODUy
LTMuMDM3LTEuODUzIDAtMi4xMzYgMS40NDUtMi4xMzYgMi45Mzl2NS42NjdIOS4zNTFWOWgzLjQxNHYxLjU2MWguMDQ2Yy40Nzct
LjkgMS42MzctMS44NSAzLjM3LTEuODUgMy42MDEgMCA0LjI2NyAyLjM3IDQuMjY3IDUuNDU1djYuMjg2ek01LjMzNyA3LjQzM2Ey
LjA2MiAyLjA2MiAwIDAxLTIuMDYzLTIuMDY1IDIuMDY0IDIuMDY0IDAgMTEyLjA2MyAyLjA2NXptMS43ODIgMTMuMDE5SDMuNTU1
VjloMy41NjR2MTEuNDUyek0yMi4yMjUgMEgxLjc3MUMuNzkyIDAgMCAuNzc0IDAgMS43Mjl2MjAuNTQyQzAgMjMuMjI3Ljc5MiAy
NCAxLjc3MSAyNGgyMC40NTFDMjMuMiAyNCAyNCAyMy4yMjcgMjQgMjIuMjcxVjEuNzI5QzI0IC43NzQgMjMuMiAwIDIyLjIyMiAw
aC4wMDN6IiB9LApdOwoKY29uc3QgRFJPUERPV05fTElOSyA9ICJibG9jayBweC00IHB5LTIuNSBob3ZlcjpiZy1bI0Y4RjVGMF0g
aG92ZXI6dGV4dC1bI0M5QTY2Ql0gdHJhbnNpdGlvbiI7CmNvbnN0IE5BVl9MSU5LID0gImhvdmVyOnRleHQtWyNDOUE2NkJdIHRy
YW5zaXRpb24iOwoKLyoqIE1hdGNoaW5nIEVuZ2xpc2ggVVJMIGZvciB0aGUgY3VycmVudCBTcGFuaXNoIHBhZ2U6IC9lcy94IC0+
IC94LCAvZXMgLT4gLy4gKi8KZnVuY3Rpb24gYWx0TGFuZ0hyZWYocGF0aG5hbWU6IHN0cmluZyB8IG51bGwpOiBzdHJpbmcgewog
IGlmICghcGF0aG5hbWUpIHJldHVybiAiLyI7CiAgY29uc3Qgc3RyaXBwZWQgPSBwYXRobmFtZS5yZXBsYWNlKC9eXC9lcyg/PVwv
fCQpLywgIiIpOwogIHJldHVybiBzdHJpcHBlZCA9PT0gIiIgPyAiLyIgOiBzdHJpcHBlZDsKfQoKZnVuY3Rpb24gQ2hldnJvbih7
IGNsYXNzTmFtZSA9ICJ3LTQgaC00IiB9OiB7IGNsYXNzTmFtZT86IHN0cmluZyB9KSB7CiAgcmV0dXJuICgKICAgIDxzdmcgYXJp
YS1oaWRkZW49InRydWUiIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgdmll
d0JveD0iMCAwIDI0IDI0Ij48cGF0aCBzdHJva2VMaW5lY2FwPSJyb3VuZCIgc3Ryb2tlTGluZWpvaW49InJvdW5kIiBzdHJva2VX
aWR0aD17Mn0gZD0iTTE5IDlsLTcgNy03LTciIC8+PC9zdmc+CiAgKTsKfQoKZnVuY3Rpb24gU29jaWFsSWNvbnMoKSB7CiAgcmV0
dXJuICgKICAgIDw+CiAgICAgIHtTT0NJQUwubWFwKChzKSA9PiAoCiAgICAgICAgPGEga2V5PXtzLmxhYmVsfSBocmVmPXtzLmhy
ZWZ9IHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiIGNsYXNzTmFtZT17TkFWX0xJTkt9IGFyaWEtbGFi
ZWw9e3MubGFiZWx9PgogICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3NOYW1lPSJoLTUgdy01IiBmaWxsPSJj
dXJyZW50Q29sb3IiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD17cy5kfSAvPjwvc3ZnPgogICAgICAgIDwvYT4KICAgICAg
KSl9CiAgICA8Lz4KICApOwp9CgpmdW5jdGlvbiBEZXNrdG9wRHJvcGRvd24oeyBsYWJlbCwgaXRlbXMsIHdpZHRoLCBzY3JvbGwg
fTogeyBsYWJlbDogc3RyaW5nOyBpdGVtczogeyBocmVmOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdOyB3aWR0aDogc3RyaW5n
OyBzY3JvbGw/OiBib29sZWFuIH0pIHsKICByZXR1cm4gKAogICAgPGRpdiBjbGFzc05hbWU9InJlbGF0aXZlIGdyb3VwIj4KICAg
ICAgPGJ1dHRvbiBjbGFzc05hbWU9ImhvdmVyOnRleHQtWyNDOUE2NkJdIHRyYW5zaXRpb24gZmxleCBpdGVtcy1jZW50ZXIgZ2Fw
LTEiPgogICAgICAgIHtsYWJlbH0KICAgICAgICA8Q2hldnJvbiAvPgogICAgICA8L2J1dHRvbj4KICAgICAgPGRpdiBjbGFzc05h
bWU9e2BhYnNvbHV0ZSBsZWZ0LTAgdG9wLWZ1bGwgbXQtMiAke3dpZHRofSBiZy13aGl0ZSB0ZXh0LVsjMEIxRDM2XSByb3VuZGVk
LWxnIHNoYWRvdy1sZyBvcGFjaXR5LTAgaW52aXNpYmxlIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIGdyb3VwLWhvdmVyOnZpc2li
bGUgZ3JvdXAtZm9jdXMtd2l0aGluOm9wYWNpdHktMTAwIGdyb3VwLWZvY3VzLXdpdGhpbjp2aXNpYmxlIHRyYW5zaXRpb24tYWxs
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
PC9kaXY+CiAgKTsKfQoKZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2l0ZUhlYWRlckVzKHsgZW5nbGlzaEhyZWY6IGFsdE92ZXJy
aWRlIH06IHsgZW5nbGlzaEhyZWY/OiBzdHJpbmcgfSA9IHt9KSB7CiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpOwog
IGNvbnN0IGFsdEhyZWYgPSBhbHRPdmVycmlkZSA/PyBhbHRMYW5nSHJlZihwYXRobmFtZSk7CiAgY29uc3QgW2lzTWVudU9wZW4s
IHNldElzTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpOwogIGNvbnN0IFtpc1NlcnZpY2VzT3Blbiwgc2V0SXNTZXJ2aWNlc09w
ZW5dID0gdXNlU3RhdGUoZmFsc2UpOwogIGNvbnN0IFtpc1RyZWF0bWVudHNPcGVuLCBzZXRJc1RyZWF0bWVudHNPcGVuXSA9IHVz
ZVN0YXRlKGZhbHNlKTsKICBjb25zdCBbaXNDb250ZW50T3Blbiwgc2V0SXNDb250ZW50T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7
CiAgY29uc3QgY2xvc2VNZW51ID0gKCkgPT4gc2V0SXNNZW51T3BlbihmYWxzZSk7CgogIHJldHVybiAoCiAgICA8PgogICAgICB7
LyogU2tpcCB0byBjb250ZW50ICovfQogICAgICA8YQogICAgICAgIGhyZWY9IiNtYWluLWNvbnRlbnQiCiAgICAgICAgY2xhc3NO
YW1lPSJzci1vbmx5IGZvY3VzOm5vdC1zci1vbmx5IGZvY3VzOmFic29sdXRlIGZvY3VzOnRvcC00IGZvY3VzOmxlZnQtNCBmb2N1
czp6LVsxMDBdIGZvY3VzOmJnLVsjQzlBNjZCXSBmb2N1czp0ZXh0LVsjMEIxRDM2XSBmb2N1czpweC00IGZvY3VzOnB5LTIgZm9j
dXM6cm91bmRlZCBmb2N1czpmb250LXNlbWlib2xkIgogICAgICA+CiAgICAgICAgU2FsdGFyIGFsIGNvbnRlbmlkbyBwcmluY2lw
YWwKICAgICAgPC9hPgoKICAgICAgey8qID09PT09IFRPUCBCQVIgPT09PT0gKi99CiAgICAgIDxkaXYgY2xhc3NOYW1lPSJiZy13
aGl0ZSBib3JkZXItYiBib3JkZXItZ3JheS0yMDAiPgogICAgICAgIDxkaXYgY2xhc3NOYW1lPSJtYXgtdy03eGwgbXgtYXV0byBw
eC02IHB5LTQgZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00Ij4KICAg
ICAgICAgIDxMaW5rIGhyZWY9Ii9lcyIgY2xhc3NOYW1lPSJmbGV4LXNocmluay0wIj4KICAgICAgICAgICAgPEltYWdlCiAgICAg
ICAgICAgICAgc3JjPSIvbG9nby5wbmciCiAgICAgICAgICAgICAgYWx0PSJSZXdpcmVkIEtldGFtaW5lIgogICAgICAgICAgICAg
IHdpZHRoPXs2MDB9CiAgICAgICAgICAgICAgaGVpZ2h0PXsxODB9CiAgICAgICAgICAgICAgY2xhc3NOYW1lPSJoLTE2IG1kOmgt
MjAgdy1hdXRvIgogICAgICAgICAgICAgIHByaW9yaXR5CiAgICAgICAgICAgIC8+CiAgICAgICAgICA8L0xpbms+CgogICAgICAg
ICAgPGRpdiBjbGFzc05hbWU9ImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAteC02IGdhcC15
LTIgdGV4dC1zbSB0ZXh0LVsjMEIxRDM2XSI+CiAgICAgICAgICAgIDxhIGhyZWY9e01BUFNfVVJMfSB0YXJnZXQ9Il9ibGFuayIg
cmVsPSJub29wZW5lciBub3JlZmVycmVyIiBjbGFzc05hbWU9ImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGhvdmVyOnRleHQtWyND
OUE2NkJdIHRyYW5zaXRpb24iPgogICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIHhtbG5zPSJodHRwOi8vd3d3
LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3NOYW1lPSJoLTQgdy00IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9r
ZT0iY3VycmVudENvbG9yIj4KICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9p
bj0icm91bmQiIHN0cm9rZVdpZHRoPXsyfSBkPSJNMTcuNjU3IDE2LjY1N0wxMy40MTQgMjAuOWExLjk5OCAxLjk5OCAwIDAxLTIu
ODI3IDBsLTQuMjQ0LTQuMjQzYTggOCAwIDExMTEuMzE0IDB6IiAvPgogICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNh
cD0icm91bmQiIHN0cm9rZUxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9Ik0xNSAxMWEzIDMgMCAxMS02IDAgMyAz
IDAgMDE2IDB6IiAvPgogICAgICAgICAgICAgIDwvc3ZnPgogICAgICAgICAgICAgIDI4MjAgTkUgMjE0dGggU3QgIzEwMDIsIEF2
ZW50dXJhLCBGTCAzMzE4MAogICAgICAgICAgICA8L2E+CiAgICAgICAgICAgIDxhIGhyZWY9Im1haWx0bzppbmZvQHJld2lyZWRr
ZXRhbWluZS5jb20iIGNsYXNzTmFtZT0iZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgaG92ZXI6dGV4dC1bI0M5QTY2Ql0gdHJhbnNp
dGlvbiI+CiAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAv
c3ZnIiBjbGFzc05hbWU9ImgtNCB3LTQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJjdXJyZW50Q29s
b3IiPgogICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD0icm91bmQiIHN0cm9rZUxpbmVqb2luPSJyb3VuZCIgc3Ry
b2tlV2lkdGg9ezJ9IGQ9Ik0zIDhsNy44OSA1LjI2YTIgMiAwIDAwMi4yMiAwTDIxIDhNNSAxOWgxNGEyIDIgMCAwMDItMlY3YTIg
MiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMnoiIC8+CiAgICAgICAgICAgICAgPC9zdmc+CiAgICAgICAg
ICAgICAgaW5mb0ByZXdpcmVka2V0YW1pbmUuY29tCiAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgPGEgaHJlZj0idGVsOisx
MzA1Njc2NjA3MCIgY2xhc3NOYW1lPSJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtWyND
OUE2NkJdIHRyYW5zaXRpb24iPgogICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIHhtbG5zPSJodHRwOi8vd3d3
LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3NOYW1lPSJoLTQgdy00IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9r
ZT0iY3VycmVudENvbG9yIj4KICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9p
bj0icm91bmQiIHN0cm9rZVdpZHRoPXsyfSBkPSJNMyA1YTIgMiAwIDAxMi0yaDMuMjhhMSAxIDAgMDEuOTQ4LjY4NGwxLjQ5OCA0
LjQ5M2ExIDEgMCAwMS0uNTAyIDEuMjFsLTIuMjU3IDEuMTNhMTEuMDQyIDExLjA0MiAwIDAwNS41MTYgNS41MTZsMS4xMy0yLjI1
N2ExIDEgMCAwMTEuMjEtLjUwMmw0LjQ5MyAxLjQ5OGExIDEgMCAwMS42ODQuOTQ5VjE5YTIgMiAwIDAxLTIgMmgtMUM5LjcxNiAy
MSAzIDE0LjI4NCAzIDZWNXoiIC8+CiAgICAgICAgICAgICAgPC9zdmc+CiAgICAgICAgICAgICAgKDMwNSkgNjc2LTYwNzAKICAg
ICAgICAgICAgPC9hPgogICAgICAgICAgICA8TGluayBocmVmPXthbHRIcmVmfSBocmVmTGFuZz0iZW4iIGxhbmc9ImVuIiBjbGFz
c05hbWU9InRleHQtWyNDOUE2NkJdIGZvbnQtc2VtaWJvbGQgaG92ZXI6dW5kZXJsaW5lIj5FbmdsaXNoPC9MaW5rPgogICAgICAg
ICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgoKICAgICAgey8qIE1BSU4gTkFWSUdBVElPTiAqL30KICAgICAg
PGhlYWRlciBjbGFzc05hbWU9ImJnLVsjMEIxRDM2XSB0ZXh0LXdoaXRlIHN0aWNreSB0b3AtMCB6LTUwIj4KICAgICAgICA8ZGl2
IGNsYXNzTmFtZT0ibWF4LXctN3hsIG14LWF1dG8gcHgtNiBweS0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiI+
CiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0iaGlkZGVuIHhsOmZsZXggaXRlbXMtY2VudGVyIGdhcC02IHRleHQtWzE1cHhdIGZv
bnQtbWVkaXVtIHdoaXRlc3BhY2Utbm93cmFwIj4KICAgICAgICAgICAgPExpbmsgaHJlZj0iL2VzIiBjbGFzc05hbWU9e05BVl9M
SU5LfT5JbmljaW88L0xpbms+CiAgICAgICAgICAgIDxEZXNrdG9wRHJvcGRvd24gbGFiZWw9Ik51ZXN0cm9zIFNlcnZpY2lvcyIg
aXRlbXM9e1NFUlZJQ0VTfSB3aWR0aD0idy01NiIgLz4KICAgICAgICAgICAgPERlc2t0b3BEcm9wZG93biBsYWJlbD0iVHJhdGFt
aWVudG9zIiBpdGVtcz17VFJFQVRNRU5UU30gd2lkdGg9InctNjQiIHNjcm9sbCAvPgogICAgICAgICAgICA8TGluayBocmVmPSIv
ZXMvcHJvdmlkZXJzIiBjbGFzc05hbWU9e05BVl9MSU5LfT5Qcm92ZWVkb3JlczwvTGluaz4KICAgICAgICAgICAgPERlc2t0b3BE
cm9wZG93biBsYWJlbD0iQ29udGVuaWRvIiBpdGVtcz17Q09OVEVOVH0gd2lkdGg9InctNTYiIC8+CiAgICAgICAgICAgIDxMaW5r
IGhyZWY9Ii9lcy9sb2NhdGlvbiIgY2xhc3NOYW1lPXtOQVZfTElOS30+VWJpY2FjacOzbjwvTGluaz4KICAgICAgICAgICAgPExp
bmsgaHJlZj0iL2VzL2ZhcSIgY2xhc3NOYW1lPXtOQVZfTElOS30+RkFRPC9MaW5rPgogICAgICAgICAgICA8TGluayBocmVmPSIv
ZXMjY29udGFjdCIgY2xhc3NOYW1lPXtOQVZfTElOS30+Q29udGFjdG88L0xpbms+CiAgICAgICAgICA8L25hdj4KCiAgICAgICAg
ICA8YnV0dG9uIGNsYXNzTmFtZT0ieGw6aGlkZGVuIHAtMiIgb25DbGljaz17KCkgPT4gc2V0SXNNZW51T3BlbighaXNNZW51T3Bl
bil9IGFyaWEtbGFiZWw9e2lzTWVudU9wZW4gPyAiQ2VycmFyIG1lbsO6IiA6ICJBYnJpciBtZW7DuiJ9IGFyaWEtZXhwYW5kZWQ9
e2lzTWVudU9wZW59PgogICAgICAgICAgICB7aXNNZW51T3BlbiA/ICgKICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0
cnVlIiBjbGFzc05hbWU9ImgtNiB3LTYiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJjdXJyZW50Q29s
b3IiPjxwYXRoIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0icm91bmQiIHN0cm9rZVdpZHRoPXsyfSBkPSJN
NiAxOEwxOCA2TTYgNmwxMiAxMiIgLz48L3N2Zz4KICAgICAgICAgICAgKSA6ICgKICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlk
ZGVuPSJ0cnVlIiBjbGFzc05hbWU9ImgtNiB3LTYiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJjdXJy
ZW50Q29sb3IiPjxwYXRoIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0icm91bmQiIHN0cm9rZVdpZHRoPXsy
fSBkPSJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNiIgLz48L3N2Zz4KICAgICAgICAgICAgKX0KICAgICAgICAgIDwvYnV0dG9uPgoK
ICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSJoaWRkZW4geGw6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTUiPgogICAgICAgICAgICA8
U29jaWFsSWNvbnMgLz4KICAgICAgICAgICAgPExpbmsgaHJlZj0iL2VzI2NvbnRhY3QiIGNsYXNzTmFtZT0iYmctWyNDOUE2NkJd
IHRleHQtWyMwQjFEMzZdIHRleHQtc20gZm9udC1ib2xkIHB4LTYgcHktMi41IHJvdW5kZWQgaG92ZXI6Ymctd2hpdGUgdHJhbnNp
dGlvbiB3aGl0ZXNwYWNlLW5vd3JhcCI+CiAgICAgICAgICAgICAgQ09OU1VMVEEgR1JBVFVJVEEKICAgICAgICAgICAgPC9MaW5r
PgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CgogICAgICAgIHtpc01lbnVPcGVuICYmICgKICAgICAgICAgIDxkaXYg
Y2xhc3NOYW1lPSJ4bDpoaWRkZW4gYmctWyMwQjFEMzZdIGJvcmRlci10IGJvcmRlci13aGl0ZS8xMCI+CiAgICAgICAgICAgIDxu
YXYgY2xhc3NOYW1lPSJmbGV4IGZsZXgtY29sIHB4LTYgcHktNCBzcGFjZS15LTQiPgogICAgICAgICAgICAgIDxMaW5rIGhyZWY9
Ii9lcyIgY2xhc3NOYW1lPXtOQVZfTElOS30gb25DbGljaz17Y2xvc2VNZW51fT5JbmljaW88L0xpbms+CiAgICAgICAgICAgICAg
PE1vYmlsZUdyb3VwIGxhYmVsPSJOdWVzdHJvcyBTZXJ2aWNpb3MiIGl0ZW1zPXtTRVJWSUNFU30gb3Blbj17aXNTZXJ2aWNlc09w
ZW59IG9uVG9nZ2xlPXsoKSA9PiBzZXRJc1NlcnZpY2VzT3BlbighaXNTZXJ2aWNlc09wZW4pfSBvbk5hdmlnYXRlPXtjbG9zZU1l
bnV9IC8+CiAgICAgICAgICAgICAgPE1vYmlsZUdyb3VwIGxhYmVsPSJUcmF0YW1pZW50b3MiIGl0ZW1zPXtUUkVBVE1FTlRTfSBv
cGVuPXtpc1RyZWF0bWVudHNPcGVufSBvblRvZ2dsZT17KCkgPT4gc2V0SXNUcmVhdG1lbnRzT3BlbighaXNUcmVhdG1lbnRzT3Bl
bil9IG9uTmF2aWdhdGU9e2Nsb3NlTWVudX0gLz4KICAgICAgICAgICAgICA8TGluayBocmVmPSIvZXMvcHJvdmlkZXJzIiBjbGFz
c05hbWU9e05BVl9MSU5LfSBvbkNsaWNrPXtjbG9zZU1lbnV9PlByb3ZlZWRvcmVzPC9MaW5rPgogICAgICAgICAgICAgIDxNb2Jp
bGVHcm91cCBsYWJlbD0iQ29udGVuaWRvIiBpdGVtcz17Q09OVEVOVH0gb3Blbj17aXNDb250ZW50T3Blbn0gb25Ub2dnbGU9eygp
ID0+IHNldElzQ29udGVudE9wZW4oIWlzQ29udGVudE9wZW4pfSBvbk5hdmlnYXRlPXtjbG9zZU1lbnV9IC8+CiAgICAgICAgICAg
ICAgPExpbmsgaHJlZj0iL2VzL2xvY2F0aW9uIiBjbGFzc05hbWU9e05BVl9MSU5LfSBvbkNsaWNrPXtjbG9zZU1lbnV9PlViaWNh
Y2nDs248L0xpbms+CiAgICAgICAgICAgICAgPExpbmsgaHJlZj0iL2VzL2ZhcSIgY2xhc3NOYW1lPXtOQVZfTElOS30gb25DbGlj
az17Y2xvc2VNZW51fT5QcmVndW50YXMgRnJlY3VlbnRlczwvTGluaz4KICAgICAgICAgICAgICA8TGluayBocmVmPSIvZXMjY29u
dGFjdCIgY2xhc3NOYW1lPXtOQVZfTElOS30gb25DbGljaz17Y2xvc2VNZW51fT5Db250YWN0bzwvTGluaz4KICAgICAgICAgICAg
ICA8TGluayBocmVmPXthbHRIcmVmfSBocmVmTGFuZz0iZW4iIGxhbmc9ImVuIiBjbGFzc05hbWU9InRleHQtWyNDOUE2NkJdIGZv
bnQtc2VtaWJvbGQiIG9uQ2xpY2s9e2Nsb3NlTWVudX0+RW5nbGlzaDwvTGluaz4KCiAgICAgICAgICAgICAgPExpbmsgaHJlZj0i
L2VzI2NvbnRhY3QiIGNsYXNzTmFtZT0iYmctWyNDOUE2NkJdIHRleHQtWyMwQjFEMzZdIHRleHQtY2VudGVyIGZvbnQtYm9sZCBw
eC02IHB5LTMgcm91bmRlZCBtdC0yIiBvbkNsaWNrPXtjbG9zZU1lbnV9PgogICAgICAgICAgICAgICAgQ09OU1VMVEEgR1JBVFVJ
VEEKICAgICAgICAgICAgICA8L0xpbms+CgogICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSJmbGV4IGl0ZW1zLWNlbnRlciBq
dXN0aWZ5LWNlbnRlciBnYXAtNiBwdC00IGJvcmRlci10IGJvcmRlci13aGl0ZS8xMCBtdC0yIj4KICAgICAgICAgICAgICAgIDxT
b2NpYWxJY29ucyAvPgogICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L25hdj4KICAgICAgICAgIDwvZGl2PgogICAg
ICAgICl9CiAgICAgIDwvaGVhZGVyPgogICAgPC8+CiAgKTsKfQo=
'@

$FooterB64 = @'
aW1wb3J0IEltYWdlIGZyb20gIm5leHQvaW1hZ2UiOwppbXBvcnQgTGluayBmcm9tICJuZXh0L2xpbmsiOwoKLy8gU2hhcmVkIFNw
YW5pc2ggc2l0ZSBmb290ZXIuIFRoZSBFbmdsaXNoIGFuZCBTcGFuaXNoIGZvb3RlcnMgYXJlIGdlbmVyYXRlZAovLyBmcm9tIG9u
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
ZWY6ICIvZXMiLCBsYWJlbDogIkluaWNpbyIgfSwKICB7IGhyZWY6ICIvZXMvc2VydmljZXMiLCBsYWJlbDogIk51ZXN0cm9zIFNl
cnZpY2lvcyIgfSwKICB7IGhyZWY6ICIvZXMjaG93LXdlLWhlbHAiLCBsYWJlbDogIkPDs21vIEF5dWRhbW9zIiB9LAogIHsgaHJl
ZjogIi9lcyNleHBlcmllbmNlIiwgbGFiZWw6ICJMYSBFeHBlcmllbmNpYSIgfSwKICB7IGhyZWY6ICIvZXMjY29udGFjdCIsIGxh
YmVsOiAiQ29udGFjdG8iIH0sCiAgeyBocmVmOiAiL2VzI2NvbnRhY3QiLCBsYWJlbDogIkNvbnN1bHRhIEdyYXR1aXRhIiB9LApd
OwoKZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2l0ZUZvb3RlckVzKCkgewogIHJldHVybiAoCiAgICA8Zm9vdGVyIGNsYXNzTmFt
ZT0iYmctWyMwODE1MjVdIHRleHQtd2hpdGUgcHQtMTYgcGItOCI+CiAgICAgIDxkaXYgY2xhc3NOYW1lPSJtYXgtdy03eGwgbXgt
YXV0byBweC02Ij4KICAgICAgICA8ZGl2IGNsYXNzTmFtZT0iZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtMTIg
bWItMTIiPgoKICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9ImZvbnQtc2VtaWJvbGQgdGV4dC1sZyBt
Yi01IHRleHQtWyNDOUE2NkJdIj5Db250w6FjdGVub3M8L2gzPgogICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSJzcGFjZS15LTMg
dGV4dC13aGl0ZS84MCB0ZXh0LXNtIj4KICAgICAgICAgICAgICA8bGk+QWJpZXJ0bzogTHVuZXMgLSBWaWVybmVzPC9saT4KICAg
ICAgICAgICAgICA8bGk+OTowMEFNIC0gNTowMFBNPC9saT4KICAgICAgICAgICAgICA8bGk+CiAgICAgICAgICAgICAgICA8YSBo
cmVmPSJ0ZWw6KzEzMDU2NzY2MDcwIiBjbGFzc05hbWU9ImhvdmVyOnRleHQtWyNDOUE2NkJdIHRyYW5zaXRpb24iPlRlbMOpZm9u
bzogKDMwNSkgNjc2LTYwNzA8L2E+CiAgICAgICAgICAgICAgPC9saT4KICAgICAgICAgICAgICA8bGk+CiAgICAgICAgICAgICAg
ICA8YSBocmVmPXtNQVBTX1VSTH0gdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgY2xhc3NOYW1lPSJo
b3Zlcjp0ZXh0LVsjQzlBNjZCXSB0cmFuc2l0aW9uIj4KICAgICAgICAgICAgICAgICAgMjgyMCBORSAyMTR0aCBTdCAjMTAwMjxi
ciAvPkF2ZW50dXJhLCBGTCAzMzE4MAogICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgIDwvbGk+CiAgICAgICAgICAg
ICAgPGxpPgogICAgICAgICAgICAgICAgPGEgaHJlZj0ibWFpbHRvOmluZm9AcmV3aXJlZGtldGFtaW5lLmNvbSIgY2xhc3NOYW1l
PSJob3Zlcjp0ZXh0LVsjQzlBNjZCXSB0cmFuc2l0aW9uIj5pbmZvQHJld2lyZWRrZXRhbWluZS5jb208L2E+CiAgICAgICAgICAg
ICAgPC9saT4KICAgICAgICAgICAgPC91bD4KICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSJmbGV4
IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciI+CiAgICAgICAgICAgIDxJbWFnZQogICAgICAgICAgICAgIHNyYz0i
L2xvZ28ucG5nIgogICAgICAgICAgICAgIGFsdD0iUmV3aXJlZCBLZXRhbWluZSIKICAgICAgICAgICAgICB3aWR0aD17MjAwfQog
ICAgICAgICAgICAgIGhlaWdodD17NjB9CiAgICAgICAgICAgICAgY2xhc3NOYW1lPSJoLTE0IHctYXV0byBtYi02IgogICAgICAg
ICAgICAvPgoKICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9ImZsZXggZ2FwLTQgbWItNiI+CiAgICAgICAgICAgICAge1NPQ0lB
TC5tYXAoKHMpID0+ICgKICAgICAgICAgICAgICAgIDxhIGtleT17cy5sYWJlbH0gaHJlZj17cy5ocmVmfSB0YXJnZXQ9Il9ibGFu
ayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBjbGFzc05hbWU9ImhvdmVyOnRleHQtWyNDOUE2NkJdIHRyYW5zaXRpb24iIGFy
aWEtbGFiZWw9e3MubGFiZWx9PgogICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzc05hbWU9Imgt
NSB3LTUiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPXtzLmR9IC8+PC9zdmc+CiAgICAg
ICAgICAgICAgICA8L2E+CiAgICAgICAgICAgICAgKSl9CiAgICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgICAgPGEKICAgICAg
ICAgICAgICBocmVmPSJodHRwczovL3d3dy5sZWdpdHNjcmlwdC5jb20vd2Vic2l0ZXMvP2NoZWNrZXJfa2V5d29yZHM9cmV3aXJl
ZGtldGFtaW5lLmNvbSIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5v
cmVmZXJyZXIiCiAgICAgICAgICAgICAgY2xhc3NOYW1lPSJpbmxpbmUtYmxvY2siCiAgICAgICAgICAgID4KICAgICAgICAgICAg
ICA8SW1hZ2UKICAgICAgICAgICAgICAgIHNyYz0iL2xlZ2l0c2NyaXB0LnBuZyIKICAgICAgICAgICAgICAgIGFsdD0iTGVnaXRT
Y3JpcHQgQ2VydGlmaWVkIgogICAgICAgICAgICAgICAgd2lkdGg9ezE1MH0KICAgICAgICAgICAgICAgIGhlaWdodD17NzV9CiAg
ICAgICAgICAgICAgICBjbGFzc05hbWU9ImgtMTYgdy1hdXRvIgogICAgICAgICAgICAgIC8+CiAgICAgICAgICAgIDwvYT4KICAg
ICAgICAgIDwvZGl2PgoKICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9ImZvbnQtc2VtaWJvbGQgdGV4
dC1sZyBtYi01IHRleHQtWyNDOUE2NkJdIj5FbmxhY2VzIFLDoXBpZG9zPC9oMz4KICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0i
c3BhY2UteS0zIHRleHQtd2hpdGUvODAgdGV4dC1zbSI+CiAgICAgICAgICAgICAge1FVSUNLX0xJTktTLm1hcCgobCkgPT4gKAog
ICAgICAgICAgICAgICAgPGxpIGtleT17bC5sYWJlbH0+PExpbmsgaHJlZj17bC5ocmVmfSBjbGFzc05hbWU9ImhvdmVyOnRleHQt
WyNDOUE2NkJdIHRyYW5zaXRpb24iPntsLmxhYmVsfTwvTGluaz48L2xpPgogICAgICAgICAgICAgICkpfQogICAgICAgICAgICA8
L3VsPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CgogICAgICAgIDxkaXYgY2xhc3NOYW1lPSJib3JkZXItdCBib3Jk
ZXItd2hpdGUvMTAgcHQtOCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlLzUwIHRleHQtc20iPgogICAgICAgICAgPHAgY2xhc3NOYW1l
PSJtYi00IG1heC13LTR4bCBteC1hdXRvIj4KICAgICAgICAgICAgTGEgaW5mb3JtYWNpw7NuIGVuIGVzdGUgc2l0aW8gbm8gZXN0
w6EgZGVzdGluYWRhIG5pIGltcGxpY2Egc2VyIHVuIHN1c3RpdHV0byBkZWwgY29uc2VqbywgZGlhZ27Ds3N0aWNvIG8gdHJhdGFt
aWVudG8gbcOpZGljbyBwcm9mZXNpb25hbC4gVG9kbyBlbCBjb250ZW5pZG8gZXMgc29sbyBwYXJhIGZpbmVzIGRlIGluZm9ybWFj
acOzbiBnZW5lcmFsLgogICAgICAgICAgPC9wPgogICAgICAgICAgwqkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gUmV3aXJl
ZCBLZXRhbWluZSDCtyBBdmVudHVyYSwgRmxvcmlkYSDCtyBUb2RvcyBsb3MgRGVyZWNob3MgUmVzZXJ2YWRvcwogICAgICAgIDwv
ZGl2PgogICAgICA8L2Rpdj4KICAgIDwvZm9vdGVyPgogICk7Cn0K
'@

# Text fixes: file|base64(old)|base64(new). Applied only where the old text is still present.
$TextFixes = @(
    'src/app/es/services/spravato/page.tsx|ZGVwZW5kZSBkZSB0dSBldmFsdWFjacOzbiBtw6lkaWNh|ZGVwZW5kZSBkZSBzdSBldmFsdWFjacOzbiBtw6lkaWNh',
    'src/app/es/services/spravato/page.tsx|VHUgY2zDrW5pY28gY29uZmlybWEgbGEgZG9zaXMu|U3UgY2zDrW5pY28gY29uZmlybWEgbGEgZG9zaXMu',
    'src/app/es/services/spravato/page.tsx|c2Vnw7puIHR1cyBuZWNlc2lkYWRlcw==|c2Vnw7puIHN1cyBuZWNlc2lkYWRlcw==',
    'src/app/es/services/spravato/page.tsx|UmVjb3BpbGFtb3MgbG8gcXVlIHR1IHBsYW4gc29saWNpdGEu|UmVjb3BpbGFtb3MgbG8gcXVlIHN1IHBsYW4gc29saWNpdGEu',
    'src/app/es/services/spravato/page.tsx|ZXN0YWJsZWNpZG9zIHBvciB0dSBww7NsaXph|ZXN0YWJsZWNpZG9zIHBvciBzdSBww7NsaXph',
    'src/app/es/services/spravato/page.tsx|VGUgZGlyZW1vcyBzaSBTcHJhdmF0byBlcyB1bmEgb3BjacOzbiB5IHF1w6kgbmVjZXNpdGEgdHUgcGxhbi4=|TGUgZGlyZW1vcyBzaSBTcHJhdmF0byBlcyB1bmEgb3BjacOzbiB5IHF1w6kgbmVjZXNpdGEgc3UgcGxhbi4=',
    'src/app/es/services/spravato/layout.tsx|TGEgY29iZXJ0dXJhIGRlcGVuZGUgZGUgdHUgcGxhbi4=|TGEgY29iZXJ0dXJhIGRlcGVuZGUgZGUgc3UgcGxhbi4='
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


$HdrTag = '<SiteHeaderEs />'
$FtrTag = '<SiteFooterEs />'

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
    } elseif (-not $Text.Contains('<SiteHeaderEs')) {
        $Note.Value = 'no <header> on this page (not a normal site page)'; return $null
    }

    # ---- footer ----
    $f = [regex]::Match($Text, '<footer(?=[\s>])')
    if ($f.Success) {
        $fEnd = Get-ElementEnd $Text $f.Index 'footer'
        if ($fEnd -lt 0) { $Note.Value = 'could not find the end of <footer>'; return $null }
        $Text = $Text.Substring(0, $f.Index) + $FtrTag + $Text.Substring($fEnd)
        $changed = $true
    } elseif (-not $Text.Contains('<SiteFooterEs')) {
        $Note.Value = 'no <footer> and no <SiteFooterEs />'; return $null
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

function Join-Parts([string]$Base, [string[]]$Parts) {
    $p = $Base
    foreach ($x in $Parts) { $p = Join-Path $p $x }
    return $p
}

# ------------------------------------------------------------------ main
$rootPath = (Resolve-Path $Root).Path
$pagesDir = Join-Parts $rootPath @('src', 'app', 'es')
if (-not (Test-Path -LiteralPath $pagesDir)) { throw "Can't find src\app\es under $rootPath. Run this from C:\Users\jsilv\rewired-ketamine." }

$mode = 'APPLY'
if ($DryRun) { $mode = 'DRY RUN (no files written)' }
Write-Host "Update-SpanishHeaderFooter  [$mode]"
Write-Host ''

$changedFiles = New-Object System.Collections.ArrayList
$skipped = New-Object System.Collections.ArrayList
$notes = New-Object System.Collections.ArrayList

# 1) shared components (always brought up to the latest version)
$compDir = Join-Parts $rootPath @('src', 'components', 'es')
$components = @(
    @{ Name = 'SiteHeaderEs.tsx'; Text = (ConvertFrom-B64Text $HeaderB64) },
    @{ Name = 'SiteFooterEs.tsx'; Text = (ConvertFrom-B64Text $FooterB64) }
)
foreach ($c in $components) {
    $p = Join-Path $compDir $c.Name
    $old = $null
    if (Test-Path -LiteralPath $p) { $old = Read-Utf8NoBom $p }
    $want = $c.Text
    if ($null -ne $old -and $old.Contains("`r`n")) { $want = $want.Replace("`n", "`r`n") }
    if ($old -ne $want) {
        [void]$changedFiles.Add("src/components/es/$($c.Name)")
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
