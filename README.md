# Portfolio

## Run the app

You can either run the app in development mode or build and run the docker image for production mode.

For running in development mode, first you need to install all dependencies with `npm i` or `yarn` and then just run `npm start` or `yarn start`.

If you want to use the docker image instead run the following commands in the terminal.

- `docker build . -t portfolio`
- `docker run -p 8080:80 portfolio`

Once is running you can go to your browser to your [localhost:8080](http://localhost:8080)
