#!/bin/bash

SOURCE_DIR="$(pwd)/user"
HOME_DIR="$(dirname "$(pwd)")"
CONF=$HOME_DIR/.config

echo "HOME_DIR registered as $HOME_DIR"

mkdir -p $CONF/waybar $CONF/kitty $CONF/sway/ $CONF/rofi $CONF/Nextcloud
ln -nf conf/Nextcloud/nextcloud.cfg $CONF/Nextcloud/nextcloud.cfg
ln -nf conf/waybar/config $CONF/waybar/config
ln -nf conf/waybar/style.css $CONF/waybar/style.css
ln -nf conf/kitty/kitty.conf $CONF/kitty/kitty.conf
ln -nf conf/sway/config $CONF/sway/config
ln -nf conf/rofi/config.rasi $CONF/rofi/config.rasi
ln -nf conf/.gitconfig $HOME_DIR/.gitconfig
ln -nf conf/.zshrc $HOME_DIR/.zshrc
#ln -nf conf/vesktop/settings/settings.json $conf/vesktop/settings/settings.json

echo "All files have been linked."
