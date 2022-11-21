## Tools and Technologies used

- ReactJS
- NodeJS
- Vanilla CSS

## Naming conventions:

camelCase for variable and function names
PascalCase for Components
kebab-case for ids and classnames

## Running Frontend Server as a dev locally.

1. Clone the repository on CLI

   > git clone git@github.com:workshopapps/nftcreatures.web.git

2. Cd into frontend "v-arena" directory, and initialize git

   > git init

3. Install packages

   > npm install

4. Run the project on development mode

   > npm start

5. Create a feature branch from the development branch

   > git checkout -b feature

6. Work in the feature branch and push.

7. Create a pull request to merge to dev branch when done

If you try committing and get an error from Git:

Ensure you run npm run lint and fix all errors before trying to commit (husky will prevent you from committing otherwise).
You can run npm run lint:fix to try to automatically fix the simpler errors.
For easy formatting, you can use the vscode prettier extension to format code on save.
