import React from 'react';
import "./Home.css";
import vehicleData from "../../data/vehicleData.json";
import Vehicle from '../Vehicle/Vehicle';

const Home = () => {
    return (
        <div className="Home">
            <div className="content">
                {vehicleData.map(vehicle => <Vehicle vehicle={vehicle}></Vehicle>)}
            </div>
        </div>
    );
};

export default Home;