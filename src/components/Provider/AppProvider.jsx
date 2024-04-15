import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const AppStateContext = createContext({});

// eslint-disable-next-line react/prop-types
export function AppProvider() {
    const value = useState({});
    return (
        <AppStateContext.Provider value={value}>
            <Outlet />
        </AppStateContext.Provider>
    );
}
