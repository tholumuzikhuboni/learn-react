# React Router

React Router is a powerful library for routing in React applications. It enables navigation among views, allows dynamic rendering of components based on URL changes, and provides a seamless user experience.

## Installation

To use React Router, install it in your React project:

```bash
npm install react-router-dom
```
## Basic Routing Example

In the `App.js` example, we used `BrowserRouter`, `Route`, and `Switch` components from `react-router-dom` to set up basic routing.

- **`BrowserRouter`**: A wrapper component that uses the HTML5 history API to keep the UI in sync with the URL.
- **`Route`**: Defines a route with a path and the component to display when the path is matched.
- **`Switch`**: Renders the first matching route inside it.

# Example Routes

```jsx
<Route path="/" exact component={Home} />
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
```
This setup will render the appropriate component when the URL matches the defined paths.

## Conclusion

React Router makes it easy to handle navigation in React applications. You can build complex applications with multiple views, each representing a different page.
