import React, { createContext, useContext, useState } from 'react';

// Create a Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const ThemeConsumer = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

const ContextAPI = () => {
    return (
        <ThemeProvider>
            <ThemeConsumer />
        </ThemeProvider>
    );
};

export default ContextAPI;
