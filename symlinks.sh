#!/bin/bash

HOME_PATH="/home/$USER"
links=".zshrc, .gitconfig"

for file in $links; do
	ln -s "$(pwd)/$file" "$HOME_PATH/$file"
done
