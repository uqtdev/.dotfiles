#!/bin/bash

# Define variables
DOTFILES_DIR="$HOME/.dotfiles"
SHARE_DIR="$HOME/.local/share/"
ICON_THEME_NAME="BeautySolar"
CURSOR_THEME_NAME="Bibata-Original-Ice"
ICON_THEME_DIR="$DOTFILES_DIR/themeing/icons/"
CURSOR_THEME_DIR="$DOTFILES_DIR/themeing/cursors/"

# Create destination directory if it doesn't exist
#mkdir -p "$SHARE_DIR/icons/$ICON_THEME_NAME"

#sudo ln -sfn "$CURSOR_THEME_DIR"/ "$SHARE_DIR/$CURSOR_THEME_NAME"/
sudo ln -sfn "$ICON_THEME_DIR/$ICON_THEME_NAME"/ "$SHARE_DIR/icons/$ICON_THEME_NAME"

echo "Icon set set to $ICON_THEME_NAME"
