# React TypeScript MUI v5 - Dynamic Theme Switching

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and rewired for Webpack configuration with [Rewired](https://github.com/timarney/react-app-rewired). Is is using [MUI v5](https://github.com/mui/material-ui) (formerly Material-UI) with [Emotion](https://github.com/emotion-js/emotion) as default style library for generatin CSSmfor MUI components.

# Table of Contents

- [Quickstart](#quickstart)
- [Unit Testing and Linting](#unit-testing-and-linting)
- [Create a MUI theme](#create-a-mui-theme)
- [Building a project](#building-a-project)

## Quickstart

1/ Install dependencies

In root folder:

    pnpm i
    pnpm start

navigate to http://localhost:3000

## Create a MUI theme

Createa new file of you color choice in the theme folder (e.g. light-blue)

```
root
├── package.json
├── src
│   └── src
│        └── styles
│               └──theme
│                    └──light-blue.ts
```

- Enter the code

```
import { lightBlue } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material';

export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: lightBlue,
    secondary: lightBlue,
    divider: lightBlue[200],
    text: {
      primary: lightBlue[900],
      secondary: lightBlue[800],
    },
    background: {
      default: lightBlue[100],
      paper: lightBlue[200],
    },
  },
};
```

- Add import in ./src/styles/index.ts
- Add case in switch statement in App.ts

## Unit Testing and Linting

Run jest tests and eslint checks

    pnpm test

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Building a project

    pnpm build

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `pnpm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
