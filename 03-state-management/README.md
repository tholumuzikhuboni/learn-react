
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
