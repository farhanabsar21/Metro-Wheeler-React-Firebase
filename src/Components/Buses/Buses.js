import React, { useState } from 'react';
import buses from "../../data/bases.json";
import Map from '../Map/Map';
import "./Buses.css";
import DatePickers from '../Calender/Calender';

const Buses = () => {
    const [searchBtn, setSearchBtn] = useState(false);
    const handleSearch = () => {
        setSearchBtn(true)
    }
    return (
        <div className="Buses">
            <div className="location">
                <label htmlFor="buses">Pick from</label>
                <select name="" id="buses">
                    <option value="mirpur" className="option">Mirpur</option>
                    <option value="kajipara">Kajipara</option>
                    <option value="taltola">Taltola</option>
                </select>
                <label htmlFor="buses">Pick to</label>
                <select name="" id="buses">
                    <option value="dhanmondi">Dhanmondi</option>
                    <option value="gulshan">Gulshan</option>
                    <option value="banani">Banani</option>
                </select>
                <div className="calender">
                    <DatePickers></DatePickers>
                </div>
                <button onClick={() => handleSearch()}>Search</button>
                <div className="bus-data">
                    {searchBtn && <ul>
                        {buses.map(bus => <li>
                            <div className="bus-data-collection">
                                <p>{bus.name}</p>
                                <p>${bus.price}</p>
                                <img src={bus.image} alt="" />
                            </div>
                        </li>)}
                    </ul>}
                </div>
            </div>
            <div className="map">
                <div className="map">
                    <Map></Map>
                </div>
            </div>
        </div>
    );
};

export default Buses;