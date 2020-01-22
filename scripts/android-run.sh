#!/bin/bash
JAVA_HOME=$(grep JAVA_HOME .env | cut -d '=' -f2)
ANDROID_SDK_ROOT=$(grep ANDROID_SDK_ROOT .env | cut -d '=' -f2)

rm -rf .cache
export JAVA_HOME
export ANDROID_SDK_ROOT
export PATH=${PATH}:$ANDROID_SDK_ROOT/tools:$ANDROID_SDK_ROOT/platform-tools

yarn mobile:start:android
