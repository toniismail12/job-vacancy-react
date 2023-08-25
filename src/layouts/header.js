import LS from '../utils/LS';
import { useNavigate } from 'react-router-dom';
import {CgMenuLeft} from "react-icons/cg"
import { useContext } from "react";
import SidebarContext from "../contexts";

const Header = () => {

    const { show_sidebar, set_show_sidebar } = useContext(SidebarContext);

    const navigate = useNavigate()

    const handle_show_sidebar = (show) => () => {
        show === "yes" ? set_show_sidebar("no") : set_show_sidebar("yes");
    };

    function Logout() {
        localStorage.clear();
        navigate("/")
    }
    
    return (
        <header className="bg-blue-500 p-4 flex items-end justify-between">
            <div>
                <button onClick={handle_show_sidebar(show_sidebar)} className='text-2xl bg-white p-2 rounded-md hover:bg-slate-200'><CgMenuLeft/></button>
            </div>
            
            <div className='flex space-x-2 items-center'>
                <h3 className='text-white capitalize hidden md:block'>{LS("name")},</h3>
                <button onClick={Logout} className='px-2 py-1 bg-red-500 rounded-md text-white hover:bg-red-700'>Logout</button>
            </div>
        </header>
    );
};

export default Header;
