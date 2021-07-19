# React Toilet Search App
Simple React search app acting as a frontend for a Ruby on [Rails Toilets REST API](https://github.com/MenteCat/public-toilets-api).

## How to run the App
`cd` into the main app folder and run the app in the local environment on port 3000 with  with `npm start`; the React app will be available in the browser at the following address: `http://localhost:3000`.

The app consumes data from a Rails REST API backend, which has to be available on the same host, on port 8000.
Natively, both React and Rails will try to run their local servers on port 3000, so we have to change the port Rails uses in order to avoid them to overlap.
Port 8000 of the REST API is hardcoded in the React app (something to improve in the future!)

In order to run the Rails API, clone the project [here](https://github.com/MenteCat/public-toilets-api), and after installing Ruby and the required gems from the Gemfile, `cd` in the app directory and start the server with `rails s -p 8000`.

