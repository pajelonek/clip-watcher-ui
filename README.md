# CLIP WATCHER UI

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=pajelonek_clip-watcher-ui&metric=alert_status)](https://sonarcloud.io/dashboard?id=pajelonek_clip-watcher-ui)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=pajelonek_clip-watcher-ui&metric=bugs)](https://sonarcloud.io/dashboard?id=pajelonek_clip-watcher-ui)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=pajelonek_clip-watcher-ui&metric=code_smells)](https://sonarcloud.io/dashboard?id=pajelonek_clip-watcher-ui)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=pajelonek_clip-watcher-ui&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=pajelonek_clip-watcher-ui)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=pajelonek_clip-watcher-ui&metric=ncloc)](https://sonarcloud.io/dashboard?id=pajelonek_clip-watcher-ui)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=pajelonek_clip-watcher-ui&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=pajelonek_clip-watcher-ui)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=pajelonek_clip-watcher-ui&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=pajelonek_clip-watcher-ui)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=pajelonek_clip-watcher-ui&metric=security_rating)](https://sonarcloud.io/dashboard?id=pajelonek_clip-watcher-ui)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=pajelonek_clip-watcher-ui&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=pajelonek_clip-watcher-ui)

## Requirements

For building and running the application you need:

- [Node v16.8](https://nodejs.org/en/download/current/)

## About

This is frontend part of the Master’s Degree Project Clip Watcher.

The whole project is hosted publictly on:
```text
https://pajelonek.github.io/clip-watcher-ui/
```

## Running the application locally
1. You need to fill .env file in the root directory with basic authorization credentials for your clip watcher api application.

Example:
 ```text
REACT_APP_API_URL = 'http://localhost:8080'
REACT_APP_API_AUTH_USERNAME = 'admin'
REACT_APP_API_AUTH_PASSWORD = 'password'
  ```

2. Run:
```yml
yarn install
```
3. Run:
```shell
yarn start
```
It will run the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
