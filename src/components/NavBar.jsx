import { NavLink } from 'react-router-dom';
import home from '../images/home.svg';

const NavBar = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? '#003366' : ''
  });

  return (
    <div
      className="flex p-4 text-base md:text-xl font-semibold justify-between"
      style={{ background: '#00c5b4', color: '#ffffff' }}
    >
      <NavLink className="w-7" style={getActiveStyle} to="/">
        <img src={home} alt="home" />
      </NavLink>
      <div className="flex flex-row justify-end gap-2 md:gap-4">
        <NavLink style={getActiveStyle} to="/school">
          School
        </NavLink>
        <NavLink style={getActiveStyle} to="/students">
          Students
        </NavLink>
        <NavLink style={getActiveStyle} to="/classes">
          Classes
        </NavLink>
        <NavLink style={getActiveStyle} to="/teachers">
          Teachers
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
