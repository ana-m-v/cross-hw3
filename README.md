# cross-hw3

Important: The project can be seen at

https://github.com/ana-m-v/cross-hw3

For Moodle upload i had to get rid of a couple of folders, github repo contains it all.

ios and dist folder were "generated" but removed to be able to upload to moodle.

commands

npm i @capacitor/core
npm i -D @capacitor/cli

npm i @capacitor/android @capacitor/ios
npx cap add android
npx cap add ios

npx cap sync

npx cap open ios

added to Infoplist are

<dict>
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSAllowsArbitraryLoads</key>
  <true/>
</dict>

for allowing http requests and

<key>NSLocationAlwaysUsageDescription</key>
<string>Need Location for anything</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>Need Location for anything</string>

for geolocation

for electron

npm run build
npm i @capacitor-community/electron
npx cap add @capacitor-community/electron
npx cap open @capacitor-community/electron
