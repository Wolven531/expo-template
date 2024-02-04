# Expo App Template

## Scripts

-   `npm i` - Install NodeJS deps
-   `npx expo prebuild --platform android` - Sync Android directory w/ Expo prebuild steps
-   `npm run android` - Launch app on running AVD or connected device

## First time run on AVD

Open Android Studio > Open project > select "android" directory from this repo. Gradle sync will run on open and will take some time (12 minutes on i7 @ 3.0 GHz)

### First, set JAVA_HOME environment variable

1. (New UI) Android Studio > File > Settings > Build, Execution, Deployment > Build Tools > Gradle
1. Click the "Gradle JDK" dropdown, select "Download JDK", select version 21, copy "Location" field, click "Download" button; after download completes, click "Apply" button, then "OK"
1. Set system environment variable `JAVA_HOME` to value copied from above - BE SURE to include the trailing slash (`\` or `/`)
1. Reopen Android Studio (to let new env vars take effect)

### Second, create and run an AVD

Tested on Medium Phone API 30 (Android 11.0, "R")

### Third, launch app

With an AVD already open and running, execute `npm run android` in the root of this repo to launch the app on the AVD (first run will take some time, subsequent runs will be much faster; 5.5 minutes on i7 @ 3.0 GHz)

## Misc

### Install ADB (CLI tool)

Follow the directions [here](https://help.esper.io/hc/en-us/articles/12657625935761-Installing-the-Android-Debug-Bridge-ADB-Tool#h_01H44HFRV3P04V2F77EZCMKW06) to download SDK files
  * Windows - Set `Android` environment variable as described, then add `%Android%` to path environment variable
