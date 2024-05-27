#!/bin/bash
echo "Running Package Installer.."
packages.sh
echo "Packages installer script finished! Running Symlinks Script.."
symlinks.sh
echo "Symlinks finished!"

echo "Running bitwarden.."
sudo -u "$SUDO_USER" nohup flatpak run com.bitwarden.desktop > /dev/null 2>&1 &
echo "Bitwarden running. Go crazy!"
