# earthquake-zen-garden
React app to display earthquake data

# How project is setup
- npm init -y
- npm i react react-dom
- mkdir app
- touch app/index.js
- touch app/index.css
- npm i --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin

# How to start the project
`npm install` and then `npm run start` this will start the project at port 3000. To change the port change the port in `scripts -> start` section in `package.json`.

# How to run production build
 Go to the root directory and run `npm run build`. You will see a folder being created `dist` if not already present. Then run `server -s dist`. You can access the project at http://localhost:5000.