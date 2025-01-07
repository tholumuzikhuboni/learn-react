
# Components

React components are the building blocks of a React application. They allow us to split our user interface into smaller, reusable pieces, which makes the code more manageable.

## Types of Components

There are two types of components in React:

1. **Functional Components**: These are simple JavaScript functions that return JSX. They can accept `props` and are generally used for presentational purposes.

   Example:
   ```javascript
   const Button = ({ label }) => <button>{label}</button>;
   ```

2. **Class Components**: These are ES6 classes that extend from `React.Component`. They have lifecycle methods and are used for more complex components that need internal state or other features.

   Example:
   ```javascript
   class Button extends React.Component {
       render() {
           return <button>{this.props.label}</button>;
       }
   }
   ```

## Reusable Components

One of the main advantages of React is the ability to create reusable components. The `Button` and `Header` components are simple examples of reusable UI elements.

### Button Component

This component accepts a `label` and `onClick` as props, making it reusable with different labels and behaviors.

```javascript
const Button = ({ label, onClick }) => {
    return <button onClick={onClick}>{label}</button>;
};
```

### Header Component

The `Header` component accepts a `title` prop, making it reusable for different headers.

```javascript
const Header = ({ title }) => {
    return <h1>{title}</h1>;
};
```

By using reusable components like these, you can maintain a clean and efficient React codebase.

## Conclusion

By using reusable components like these, you can maintain a clean and efficient React codebase. React components allow for better organization, code reusability, and easier maintenance, making it easier to scale your application.
