# ns-my-challenges

## Running iOS
`tns run ios --bundle`

## Running Andrid
`tns run android --bundle`

## Debuggin iOS
`tns debug ios --bundle`

## Debuggin Andrid
`tns debug android --bundle`

# When you have Errors

## Delete all and RE-install

Files and folders to remove: `webpack.config.js`, `package-lock.json`, `node_modules`, `hooks`, `platforms`

## Remove Android platform

1. First:

    `tns platform remove android`

2. Then:

    `tns platform add android`
