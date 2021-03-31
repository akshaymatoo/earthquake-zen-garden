# earthquake-zen-garden

React app to display earthquake data

# How to start the project

`npm install` and then `npm run start` this will start the project at port 3000. To change the port change the port in `scripts -> start` section in `package.json`.

# How to run production build

Go to the root directory and run `npm run build`. You will see a folder being created `dist` if not already present. Then run `server -s dist`. You can access the project at http://localhost:5000.

# How to run eslint

run the command `npm run lint`. Another option is if you are on Vscode enable ESLint and it keep giving erros while the code is written.

# How to test

run the command `npm run test`. This project has two basic tests done by `react-testing-library`
