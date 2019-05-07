# Toy Robot
-----
This package contains the solution to the challenge described in the [problem](PROBLEM.md)

## Prerequisites
----
To run this command line application, Node v8.10 is required to be installed from [here](https://nodejs.org/download/release/v8.10.0/)

Once installed, the dependencies for the application must be installed using the command
```
npm i
```

## Build
----
The application uses ES2015 features and need to be transpiled before execution. To transpile, babel is used and is installed as a dependency. To invoke babel, run
```
npm run build
```

## Run
----
Once built, the application can be run using
```
npm run /path/to/file
```
The `/path/to/file` is the input to the application and contains commands that the robot need to execute,  separated by the newline character

## Tests
----
`Jest` is used to unit test the application. The tests can be run using
```
npm test
```
This runs all tests and produces a coverage report.