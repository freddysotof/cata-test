import { NavLink } from "react-router-dom";
import { buildMenuItem } from ".."
import { useTheme } from "../../hooks";

export const createNavMenuItem = (id,label,icon,path,children)=>{
    const {colorInfo}= useTheme()
    return buildMenuItem(id,label ,
    (<NavLink
        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
        to={path}
    >
        {icon}
    </NavLink>),colorInfo,children);
}