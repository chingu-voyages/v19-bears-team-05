# Welcome to the Front-End!

## Dependencies

- React
- React-Router
- Styled-Components

# API Reference

### Styled Components

All styled-components are wrapped in a global `ThemeProvider` and can access the global theme via props. See example below.

```jsx
const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.primary.bg};
    color: ${theme.primary.color};
  `}
`;
```

You can change global styles in `style/global.js`.

In general, keep styles local to your components. Unless they depend on a global theme. For example `colors` and `font-size` can be global. But, for example, `padding` could be local to that component.

### React-Router

See more documentation [here](https://reacttraining.com/react-router/web/guides/quick-start).
