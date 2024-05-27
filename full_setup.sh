#!/bin/bash

if [[ $EUID -ne 0 ]]; then
	echo "                                               0               "
	echo "    -        *   ]          -     *                    .       "
	echo " r  0                                              .        r  "
	echo "     .        THIS SCRIPT MUST BE RAN AS ROOT           =      "
	echo "                                                               "
	echo "  .    0                =              -        r        [     "
	echo "              .               ]                                "
	exit 1
fi

USERNAME="$sudo_user"

export USERNAME

echo "Running Package Installer.."
sudo -E bash packages.sh
echo "Packages installer script finished! Running Symlinks Script.."
sudo -E bash symlinks.sh
echo "Symlinks finished!"

echo "Running bitwarden.."
sudo -u "$USERNAME" nohup flatpak run com.bitwarden.desktop > /dev/null 2>&1 &
echo "Bitwarden running. Go crazy!"
