# Get the folder where this script is located (falls back to current directory if pasted in console)
$TargetFolder = if ($PSScriptRoot) { $PSScriptRoot } else { $PWD.Path }

# Save the text file in that same folder
$OutputFile = Join-Path -Path $TargetFolder -ChildPath "DirectoryTree.txt"

# Run the tree command and pipe the output to our text file
cmd /c tree "`"$TargetFolder`"" /F /A | Out-File -FilePath $OutputFile -Encoding utf8

Write-Host "Visual directory tree saved to: $OutputFile" -ForegroundColor Green