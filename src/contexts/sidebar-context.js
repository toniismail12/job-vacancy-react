import { createContext } from "react";

const SidebarContext = createContext({show_sidebar: "yes", set_show_sidebar: () => {}});

export default SidebarContext;
