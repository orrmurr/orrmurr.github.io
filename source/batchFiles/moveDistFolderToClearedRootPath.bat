for %%i in (..\..\*.*) do del %%i
for /d %%i in (..\..\*.*) do (
	if not %%i == ..\..\source (
		rd %%i /s/q
	)
)
xcopy ..\dist\* ..\.. /e/h/k && rd ..\dist /s/q