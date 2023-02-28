import { createContext, useState, useContext } from "react";

const Sidebar = createContext();

export function useSidebar() {
    return useContext(Sidebar);
}

export function SidebarProvider({children}) {

    const [openSidebar, setOpenSidebar] = useState(false);

    function handleOpenSidebar() {
        return setOpenSidebar(s => !s);
    }
    
    const values = {
        openSidebar,
        handleOpenSidebar,
    }

    return (
        <Sidebar.Provider value={values}>
            {children}
        </Sidebar.Provider>
    )
}