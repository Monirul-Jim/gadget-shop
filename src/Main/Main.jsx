import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import { useEffect } from "react";


const Main = () => {
    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
    
        if (currentTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, []);
      const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
    
        const currentTheme = document.documentElement.classList.contains('dark')
          ? 'dark'
          : 'light';
        localStorage.setItem('theme', currentTheme);
      };
    return (
        <div>
            <Navbar  toggleTheme={toggleTheme}></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;