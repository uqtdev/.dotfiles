#!/bin/bash

SOURCE_DIR="$(pwd)/user"
TARGET_DIR="$(dirname "$(pwd)")"

create_symlinks() {
    local src_dir="$1"
    local tgt_dir="$2"

    # Recursively traverse the source directory
    find "$src_dir" -type f | while read -r src_file; do
        # Determine the relative path of the source file
        relative_path="${src_file#$src_dir/}"

        # Determine the target file path
        tgt_file="$tgt_dir/$relative_path"

        # Ensure the target directory exists
        mkdir -p "$(dirname "$tgt_file")"

        # Create the symbolic link, overwriting existing files
        ln -sf "$src_file" "$tgt_file"

        echo "Linked $src_file to $tgt_file"
    done
}

# Run the function with the user/ directory as the source
create_symlinks "$SOURCE_DIR" "$TARGET_DIR"

echo "All files have been linked."
