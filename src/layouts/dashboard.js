import React from 'react'
import Header from './header';
import Sidebar from './sidebar';
import LS from '../utils';
import SidebarContext from '../contexts';
import { useContext } from "react";

export default function Dashboard({ children }) {

    const { show_sidebar } = useContext(SidebarContext);

    if (LS("token") === undefined || LS("token") === "" || LS("token") === null) {
        return (window.location.href = "/")
    }

    return (
        <div className="flex">
            
            {show_sidebar === "yes" ? <Sidebar /> : ""}
            
            <div className="flex-1">
                <Header />
                {children}
            </div>
        </div>
    )
}
