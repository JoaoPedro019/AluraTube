import react from "react";
import React from "react";

export const ColorModeContext = react.createContext ({
    mode: "dark",
    setMode: () => {alert("Você precisa configurar")},
    toggleMode: () => { alert("Você precisa me configurar primeiro!")  },

});

export default function ColorModeProvider(props) {
    const [mode, setMode] = react.useState(props.initialMode)

    function toggleMode() {
        if(mode === "dark") setMode("light");
        if(mode === "light") setMode("dark");
    }

    return (
        <ColorModeContext.Provider value={{mode: mode, setMode: setMode, toggleMode: toggleMode }}>
           {props.children}
        </ColorModeContext.Provider>
    )
}