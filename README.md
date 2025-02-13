![Logo](ecovacs-deebot.png)

# node-red-contrib-ecovacs-deebot

Node-RED node for running Ecovacs Deebot vacuum cleaner robots

This node uses the [ecovacs-deebot.js](https://github.com/mrbungle64/ecovacs-deebot.js) library.

## Installation
- Go to Node-RED directory
- Run `npm i node-red-contrib-deebot`

## Usage

### Ecovacs account

First you have to configure the Ecovacs account:
- "Email / Ecovacs ID"
- "Password"
- "Country code" (e.g. `DE`, `UK`, `US`, `WW`)

### Available nodes

#### Ecovacs Deebot

Available options: 
- Ecovacs "Account"
- "Name" of the Device
- "Device number" (`0` for the first device)
- "Connect on startup"

#### Deebot command

Available option:
- "Command" (e.g. `Clean`, `Stop`, `GetLifeSpan`)

## Models

### Supported models

* Deebot 901
* Deebot OZMO 920
* Deebot OZMO 930
* Deebot OZMO 950

### These models should work properly or at least partially

* Deebot Slim 2
* Deebot N79 series
* Deebot M88
* Deebot 600/601/605
* Deebot 710/711/711s
* Deebot 900
* Deebot OZMO 610
* Deebot OZMO 900
* Deebot OZMO T5
* Deebot OZMO T8 series
* Deebot OZMO Slim 10
* Deebot N3 MAX
* Deebot N7
* Deebot N8 series
* Deebot U2 series

## Known issues

* There's a strange behavior of the battery value on Deebot 900/901. It's very likely that this is a firmware bug
* Some cleaning commands may not work with Deebot 710/711/711s
* "Edge" command does not work with Deebot U2 (starts auto clean instead)

## Changelog

### 0.0.1
* (mrbungle64) Initial development release

## Disclaimer

I am in no way affiliated with ECOVACS.

## License

GNU GENERAL PUBLIC LICENSE

Copyright (c) 2021 Sascha Hölzel <mrb1232@posteo.de>
