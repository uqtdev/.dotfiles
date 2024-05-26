#!/bin/bash

# Install Pacman Packages
install_pacman() {
	echo "Installing Pacman Packages.."
	sudo pacman -Syu --noconfirm
	sudo pacman -S --needed --noconfirm - < pkglist.txtpacman
	echo "Pacman install finished"
}

install_flatpak() {
	echo "Setting up Flatpak & Flathub"
	if ! command -v flatpak &> /dev/null; then
		echo "Flatpak isn't installed, installing"
		sudo pacman -S flatpak --noconfirm
	fi
	flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
	echo "Flatpak and Flathub setup"
	echo "Installing Flatpak apps.."
	while IFS= read -r app; do
		flatpak install -y flathub "$app"
	done < flatpaklist.txt
	echo "Flatpak apps installed"
}

install_pacman
install_flatpak

echo "All Packages Installed"
