#!/bin/bash

SOURCE_DIR="$(pwd)/user"
TARGET_DIR="$(dirname "$(pwd)")"
CONF=$TARGET_DIR/.config/

ln -nf conf/waybar $CONF/waybar/
ln -nf conf/kitty $CONF/kitty/
ln -nf conf/sway $CONF/sway/
ln -nf conf/rofi $CONF/rofi/
ln -nf conf/.gitconfig $TARGET_DIR/.gitconfig
ln -nf conf/.zshrc $TARGET_DIR/.zshrc
#ln -nf conf/vesktop/settings/settings.json $conf/vesktop/settings/settings.json

echo "All files have been linked."
