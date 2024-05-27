#!/bin/bash
echo "Running Package Installer.."
packages.sh
echo "Packages installer script finished! Running Symlinks Script.."
symlinks.sh
echo "Symlinks finished!"

echo "Running bitwarden.."
flatpak run com.bitwarden.desktop &
echo "Bitwarden running. Go crazy!"
