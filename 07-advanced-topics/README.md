# Advanced Topics

This section covers advanced topics like Context API and the `useReducer` hook to manage state effectively in React.

## Context API

The Context API is a powerful feature in React used for managing global state. It eliminates the need to pass props down through multiple layers of components.

### Key Components:
1. **Context**: Created using `createContext`.
2. **Provider**: Supplies the context value to child components.
3. **Consumer**: Accesses the context value within a component.

### Example:
Refer to `ContextAPI.js` for an implementation of a theme toggle using Context API.

---

## useReducer Hook

The `useReducer` hook is an alternative to `useState` for managing state. It is particularly useful for complex state logic or when the next state depends on the previous state.

### Key Components:
1. **Initial State**: Defines the starting state of the component.
2. **Reducer Function**: Contains the logic for updating the state based on actions.
3. **Dispatch Function**: Triggers state updates by dispatching actions.

### Example:
Refer to `useReducer.js` for an implementation of a counter with `useReducer`.

---

## Conclusion

These advanced features allow you to manage state and context efficiently, making your React applications more scalable and maintainable.
