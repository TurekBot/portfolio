## Getting Started
1. Start by running `npm install`. 

    * This will let the package manager download any odds and ends it needs.
2. To test things out locally, run `npm run dev`.
    * You can see the auto-reloading web page at http://localhost:3000


## Going Live
To make the webpage public simply
1. Run `npm run build` to build out a production-ready version of the project; it will put the static HTML files in the `\out` directory.
2. Go to the `/out` folder and run `surge . BradTurek.surge.sh` which will deploy those files to http://Bradturek.surge.sh