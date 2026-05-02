# Build the project
Write-Host "Building the project..." -ForegroundColor Green
npm run build

# Check if dist folder exists
if (!(Test-Path "dist")) {
    Write-Host "Error: dist folder not found. Build failed." -ForegroundColor Red
    exit 1
}

Write-Host "Build completed successfully!" -ForegroundColor Green

# Instructions for manual deployment
Write-Host ""
Write-Host "To deploy manually:" -ForegroundColor Yellow
Write-Host "1. Commit and push all files including the 'dist' folder to your GitHub repository" -ForegroundColor White
Write-Host "2. Go to your repository settings → Pages" -ForegroundColor White
Write-Host "3. Set source to 'Deploy from a branch'" -ForegroundColor White
Write-Host "4. Select 'main' branch and '/dist' folder" -ForegroundColor White
Write-Host "5. Save and wait for deployment" -ForegroundColor White
Write-Host ""
Write-Host "Your site will be available at: https://YOUR_USERNAME.github.io/myworld/" -ForegroundColor Cyan