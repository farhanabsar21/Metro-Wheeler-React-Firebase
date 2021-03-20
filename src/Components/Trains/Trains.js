import React, { useState } from 'react';
import trains from "../../data/trains.json";
import Map from '../Map/Map';
import "./Trains.css";
import DatePickers from '../Calender/Calender';

const Trains = () => {
    const [searchBtn, setSearchBtn] = useState(false);
    const handleSearch = () => {
        setSearchBtn(true)
    }
    return (
        <div className="Trains">
            <div className="location">
                <label htmlFor="trains">Pick from</label>
                <select name="" id="trains">
                    <option value="mirpur" className="option">Mirpur</option>
                    <option value="kajipara">Kajipara</option>
                    <option value="taltola">Taltola</option>
                </select>
                <label htmlFor="trains">Pick to</label>
                <select name="" id="trains">
                    <option value="dhanmondi">Dhanmondi</option>
                    <option value="gulshan">Gulshan</option>
                    <option value="banani">Banani</option>
                </select>
                <div className="calender">
                    <DatePickers></DatePickers>
                </div>
                <button onClick={() => handleSearch()}>Search</button>
                <div className="train-data">
                    {searchBtn && <ul>
                        {trains.map(train => <li>
                            <div className="train-data-collection">
                                <p>{train.name}</p>
                                <p>${train.price}</p>
                                <img src={train.image} alt="" />
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

export default Trains;