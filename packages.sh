#!/bin/bash

function detect_distro {
    if [ -f /etc/os-release ]; then
        source /etc/os-release
        DISTRO_NAME=$NAME
        DISTRO_VERSION=$VERSION
    elif command -v lsb_release &> /dev/null; then
        DISTRO_NAME=$(lsb_release -si)
        DISTRO_VERSION=$(lsb_release -sr)
    elif [ -f /etc/issue ]; then
        DISTRO_NAME=$(cat /etc/issue | awk '{print $1}')
        DISTRO_VERSION=$(cat /etc/issue | awk '{print $2}')
    else
        DISTRO_NAME="Unknown"
        DISTRO_VERSION="Unknown"
    fi
    export DISTRO_NAME
    export DISTRO_VERSION
}

function install_generic {
	echo "Installing oh-my-zsh.."
	if [[ -d "/home/$USERNAME/.oh-my-zsh" ]]; then
		echo "oh-my-zsh already installed, skipping"
	else 
		sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended
	fi
}


# Install Pacman Packages
function install_pacman {
	echo "Installing Pacman Packages.."
	sudo pacman -Syu --noconfirm
	sudo pacman -S --needed --noconfirm - < pkglist.txtpacman
	echo "Pacman install finished"
}

function install_yay {
	echo "Installing packages from yay"
	su -u "$USERNAME" yay -S --needed - < "aur-packages.txt"
	if [ $? -eq 0 ]; then
		echo "All Packages Installed Successfully"
	else
		echo "There was an error in the install"
	fi
}

function dnf_add_repositories {
    repo_file="fedora-repos"
    while IFS= read -r repo; do
        # Skip empty lines and comments
        [[ -z "$repo" || "$repo" =~ ^# ]] && continue

        # Extract the repo name from the URL
        repo_name=$(basename "$repo" .repo)

        # Check if the repo is already added
        if sudo dnf repolist --all | grep -q "^$repo_name"; then
            echo "Repository $repo_name is already added."
        else
            echo "Adding repository: $repo"
            sudo dnf config-manager --add-repo "$repo"
        fi
    done < "$repo_file"
}

function install_dnf {
	echo "Installing dnf packages"
	dnf update -y
	bash fedora-repos.sh
	sudo dnf install -y $(grep -v '^\s*#' fedora-packages | tr '\n' ' ')
	echo "Fedora packages installed"
}

function flatpak_check {
	echo "Setting up Flatpak & Flathub"
	if ! command -v flatpak &> /dev/null; then
		echo "Flatpak isn't installed, cannot install flatpak packages"
		
		exit 1
	fi
	flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
	install_flatpak
}

function install_flatpak {
	echo "Installing Flatpak apps.."
	while IFS= read -r app ; do
		flatpak install -y flathub "$app" 
	done < flatpaklist.txt
	echo "Flatpak apps installed"
}

detect_distro

echo "Distro Detected as $DISTRO_NAME on $DISTRO_VERSION, package installs should commence after this."

if [[ "$DISTRO_NAME" == "Arch Linux" ]]; then
	echo "Arch detected, Running Arch Install "
	install_pacman
	install_yay
elif [[ "$DISTRO_NAME" == "Fedora Linux" ]]; then
	echo "Fedora Detected, Installing Fedora insall"
	dnf_add_repositories
	install_dnf
else
	echo "Your distro appears to not have a match in this script. This could be an error, or you could be inferior."
fi
flatpak_check
install_generic
echo "[ = ---------------- = ]"
echo " All Packages Installed "
echo "[ = ---------------- = ]"
echo " Debug info ........... "
echo " USERNAME $USERNAME"
echo " DISTRO_NAME $DISTRO_NAME"
echo " DISTRO_VERSION $DISTRO_VERSION"
