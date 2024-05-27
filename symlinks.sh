#!/bin/bash

HOME_PATH="/home/$SUDO_USER"
links=".zshrc, .gitconfig"

echo "creating symlinks"
for file in $links; do
	ln -s "$(pwd)/$file" "$HOME_PATH/$file"
done

