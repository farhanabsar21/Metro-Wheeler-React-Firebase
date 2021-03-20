import React, { useState } from 'react';
import bikes from "../../data/bikes.json";
import Map from '../Map/Map';
import "./Bikes.css";
import DatePickers from '../Calender/Calender';

const Bikes = () => {
    const [searchBtn, setSearchBtn] = useState(false);
    const handleSearch = () => {
        setSearchBtn(true)
    }
    return (
        <div className="Bikes">
            <div className="location">
                <label htmlFor="bikes">Pick from</label>
                <select name="" id="bikes">
                    <option value="mirpur" className="option">Mirpur</option>
                    <option value="kajipara">Kajipara</option>
                    <option value="taltola">Taltola</option>
                </select>
                <label htmlFor="bikes">Pick to</label>
                <select name="" id="bikes">
                    <option value="dhanmondi">Dhanmondi</option>
                    <option value="gulshan">Gulshan</option>
                    <option value="banani">Banani</option>
                </select>
                <div className="calender">
                    <DatePickers></DatePickers>
                </div>
                <button onClick={() => handleSearch()}>Search</button>
                <div className="bike-data">
                    {searchBtn && <ul>
                        {bikes.map(bike => <li>
                            <div className="bike-data-collection">
                                <p>{bike.name}</p>
                                <p>${bike.price}</p>
                                <img src={bike.image} alt="" />
                            </div>
                        </li>)}
                    </ul>}
                </div>
            </div>
            <div className="map">
                <Map></Map>
            </div>
        </div>
    );
};

export default Bikes;