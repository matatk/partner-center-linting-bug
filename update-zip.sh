#!/bin/sh
ZIPNAME='demo-extension.zip'
echo "Removing existing $ZIPNAME"
rm $ZIPNAME
echo "Removing any Finder metadata"
find . -name .DS_Store -exec rm {} \;
cd extension || exit 42
zip -9r ../$ZIPNAME ./*
