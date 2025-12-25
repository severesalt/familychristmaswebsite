#!/bin/bash

# Script to copy photos from FamilyChristmas folder to public directory

SOURCE_DIR="./FamilyChristmas"
DEST_DIR="./public/FamilyChristmas"

# Create destination directory if it doesn't exist
mkdir -p "$DEST_DIR"

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "Error: Source directory '$SOURCE_DIR' not found!"
    echo "Please make sure your photos are in the FamilyChristmas folder."
    exit 1
fi

# Copy all JPG files
echo "Copying photos from $SOURCE_DIR to $DEST_DIR..."
cp "$SOURCE_DIR"/*.JPG "$DEST_DIR/" 2>/dev/null
cp "$SOURCE_DIR"/*.jpg "$DEST_DIR/" 2>/dev/null
cp "$SOURCE_DIR"/*.jpeg "$DEST_DIR/" 2>/dev/null
cp "$SOURCE_DIR"/*.JPEG "$DEST_DIR/" 2>/dev/null
cp "$SOURCE_DIR"/*.png "$DEST_DIR/" 2>/dev/null
cp "$SOURCE_DIR"/*.PNG "$DEST_DIR/" 2>/dev/null

# Count copied files
FILE_COUNT=$(ls -1 "$DEST_DIR"/*.{JPG,jpg,JPEG,jpeg,PNG,png} 2>/dev/null | wc -l | tr -d ' ')

if [ "$FILE_COUNT" -gt 0 ]; then
    echo "Successfully copied $FILE_COUNT photo(s)!"
    echo "You can now run 'npm run dev' to start the application."
else
    echo "Warning: No photos were copied. Please check that your photos are in the correct format."
fi

