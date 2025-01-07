
# Understanding `useState` Hook

The `useState` hook is a fundamental React feature that allows functional components to maintain state. It is used to store and update data that affects how a component renders.

## Syntax

```javascript
const [state, setState] = useState(initialValue);
```

- `state`: The current value of the state.
- `setState`: A function to update the state.
- `initialValue`: The initial value of the state.

## Example

Here’s a basic example of a counter using `useState`:

```javascript
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
```

In this example:
- The `count` variable holds the current state value.
- The `setCount` function updates the state and re-renders the component.

# Understanding `useEffect` Hook

The `useEffect` hook is a React feature that allows you to perform side effects in functional components. Common use cases include fetching data, setting up subscriptions, and manually changing the DOM.

## Syntax

```javascript
useEffect(() => {
    // Side-effect logic
    return () => {
        // Cleanup logic (optional)
    };
}, [dependencies]);
```

## useEffect Hook Concepts

- **Side-effect logic**: Code that runs after rendering.
- **Cleanup logic**: Optional function to clean up after the effect.
- **Dependencies**: An array of values that determine when the effect should re-run.

## Example: Logging on State Change

```javascript
import React, { useState, useEffect } from 'react';

const CounterWithEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count has changed to: ${count}`);
    }, [count]); // Effect runs whenever `count` changes.

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
```

## In this example:

- The `useEffect` hook logs the `count` whenever it changes.
- The `[count]` dependency ensures the effect runs only when `count` updates.
