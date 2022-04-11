import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaHome, FaUsers, FaUserTie, FaBars } from "react-icons/fa";
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

const routes = [
  {
    path: "/Dashboard",
    name: "Dashborad",
    icon: <FaHome />
  },
  {
    path: "/Users",
    name: "User",
    icon: <FaUsers />,
    subRoutes: [
      {
        path: "/Users/Adduser",
        name: "Add User",
        icon: <FaUsers />
      },
      {
        path: "/Users/Userlist",
        name: "User List",
        icon: <FaUsers />
      }
    ]
  },
  {
    path: "/Customer",
    name: "Customer",
    icon: <FaUserTie />
  }
]


const Sidebar = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div className='main-container'>
      <motion.div animate={{
        width: isOpen ? "200px" : "40px", transition: {
          duration: 0.5,
          type: "spring",
          damping: 10
        }
      }}
        className="sidebar">
        <div className="top_section">
          {isOpen && <h3 className="logo">Sidebar</h3>}
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <section className="routes">
          {routes.map((route) => {

            if (route.subRoutes) {
              return <SidebarMenu isOpen={isOpen} route={route} key={route.name} />
            }

            return (
              <NavLink activeclassname="active" to={route.path} key={route.name} className="link">
                <div className="icon">{route.icon}</div>
                {isOpen && <motion.div className="link_text">{route.name}</motion.div>}
              </NavLink>
            )
          })}
        </section>
      </motion.div>
      <main>
        <div >
        <div className="main">
        <Header />
        {children}
        </div>
        <Footer />
        </div>
      </main>
    </div>
  )
}

export default Sidebar
