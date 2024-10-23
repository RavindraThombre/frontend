import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets"; // Ensure correct path

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const currencySymbol = '$'
    const value = { doctors, currencySymbol };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
