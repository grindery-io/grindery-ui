Grindery UI is a reusable ReactJS components library for Grindery projects, based on [Material UI](https://mui.com/).

## How to use

### Install library

```js static
yarn add grindery-ui
```

or

```js static
npm install grindery-ui
```

### Add components to your React app

Add Theme Provider at the highest level possible.

Learn more about [theme provider here](#themeprovider).

Example:

```jsx static
import { ThemeProvider } from "grindery-ui";

const App = () => {
  return (
    <ThemeProvider>
      <RestOfTheApp />
    </ThemeProvider>
  );
};
```

Then you can import and use the rest of the components inside your app:

```jsx static
import { CircularProgress } from "grindery-ui";

const RestOfTheApp = () => {
  return <CircularProgress />;
};
```
