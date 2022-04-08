import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const SidebarMenu = ({ route, isOpen }) => {

    const [isMenuOpen, setisMenuOpen] = useState(false);
    const toggleMenu = () => setisMenuOpen(!isMenuOpen);

    return (
        <>
        <div>
            <div className="menu" onClick={toggleMenu}>
                <div className="menu-item" key={route.name}>
                    <div className="icon" to={route.path}>{route.icon}</div>
                    {isOpen && <motion.div className="link_text" >{route.name}</motion.div>}
                </div>
                {isOpen && (
                <motion.div animate={isMenuOpen ? {rotate: -90} : {rotate: 0}}>
                    <FaAngleDown />
                </motion.div>)}
            </div>
        </div>
        {isMenuOpen && isOpen &&  (<motion.div className="menu-container">
        {route.subRoutes.map((subRoutes) => (
            <NavLink activeclassname="active" to={subRoutes.path} className="links">
            <div className="icon">{subRoutes.icon}</div>
            {isOpen && <motion.div className="link_text">{subRoutes.name}</motion.div>}
          </NavLink>
        ))}
        </motion.div>)
        }
        </>
    )
}

export default SidebarMenu
