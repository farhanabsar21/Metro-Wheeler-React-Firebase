import React, { useState } from 'react';
import "./Cars.css";
import cars from "../../data/cars.json";
import Map from '../Map/Map';
import DatePickers from '../Calender/Calender';
const Cars = () => {
    const [searchBtn, setSearchBtn] = useState(false);
    const handleSearch = () => {
        setSearchBtn(true)
    }
    return (
        <div className="Cars">
            <div className="location">
                <label htmlFor="cars">Pick from</label>
                <select name="" id="cars">
                    <option value="mirpur" className="option">Mirpur</option>
                    <option value="kajipara">Kajipara</option>
                    <option value="taltola">Taltola</option>
                </select>
                <label htmlFor="cars">Pick to</label>
                <select name="" id="cars">
                    <option value="dhanmondi">Dhanmondi</option>
                    <option value="gulshan">Gulshan</option>
                    <option value="banani">Banani</option>
                </select>
                <div className="calender">
                    <DatePickers></DatePickers>
                </div>
                <button onClick={() => handleSearch()}>Search</button>
                <div className="car-data">
                    {searchBtn && <ul>
                        {cars.map(car => <li>
                            <div className="car-data-collection">
                                <p>{car.name}</p>
                                <p>${car.price}</p>
                                <img src={car.image} alt=""/>
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

export default Cars;