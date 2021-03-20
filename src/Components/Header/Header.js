import React, { useContext } from 'react';
import "./Header.css";
import logo from "../../Images/logo/logo.png";
import { Link } from 'react-router-dom';
import { userCommonData } from '../../App';

const Header = () => {
    const [userLog, setUserLog] = useContext(userCommonData);
    return (
        <div className="Header">
            <nav>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="menu">
                    <Link to="/home">Home</Link>
                    <Link to="/destination/car">Destination</Link>
                </div>
                <div className="user-info">
                    {userLog.email ? <p>{userLog.email}</p> : <p></p>}
                    {userLog.email ? <button onClick={()=> setUserLog({})}>Logout</button> 
                        : <Link to="/login"><button>Login</button></Link>}
                </div>
            </nav>
        </div>
    );
};

export default Header;