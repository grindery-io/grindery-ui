# Grindery UI

Reusable React components library for Grindery projects.

Based on [Material UI](https://mui.com/).

Documentation: https://grindery-io.github.io/grindery-ui/

## How to use

### Install library

`yarn add grindery-ui`

or

`npm install grindery-ui`

### Add components to your React app

Add Theme Provider at the highest level possible.

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

See [documentation](https://grindery-io.github.io/grindery-ui/) for more examples.

## Development

See [DEVELOPMENT.md](https://github.com/grindery-io/grindery-ui/blob/master/DEVELOPMENT.md) file.

## License

MIT
