#!/bin/bash

SOURCE_DIR="$(pwd)/user"
TARGET_DIR="$(dirname "$(pwd)")"
CONF=$TARGET_DIR/.config/

ln -sf conf/waybar $CONF/waybar/
ln -sf conf/kitty $CONF/kitty/
ln -sf conf/sway $CONF/sway/
ln -sf conf/rofi $CONF/rofi/
ln -sf conf/.gitconfig $TARGET_DIR/.gitconfig
ln -sf conf/.zshrc $TARGET_DIR/.zshrc
#ln -nf conf/vesktop/settings/settings.json $conf/vesktop/settings/settings.json

echo "All files have been linked."
