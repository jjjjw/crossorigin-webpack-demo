This project demonstrates a cross origin error thrown in a webpack chunk that has been loaded with JSONP.

To run:

Start the server with:

`npm run server`

Start the webpack server with:

`npm run webpack-server`

Navigate to `http://localhost:3030/`

Click the throw error button to throw the error.

To fix the error change `crossOriginLoading: false` to `crossOriginLoading: 'anonymous'` on line 55 of `webpack.config.dev.js` and restart the webpack-server process.
