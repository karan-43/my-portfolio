import { createContext, useRef } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const contactRef = useRef(null);
    const heroRef = useRef(null);
    const expertieRef = useRef(null);
    const projectRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <UserContext.Provider value={{ scrollToSection, contactRef, heroRef, expertieRef, projectRef }}>
            {children}
        </UserContext.Provider>
    );
};