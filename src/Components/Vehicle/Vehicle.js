import React from 'react';
import { Link } from 'react-router-dom';

const Vehicle = (props) => {
    const {id, name, image} = props.vehicle;
    return (
        <div className="Vehicle">
            <Link to={`/destination/${id}`}>
                <div className="content-info">
                    <div className="collection">
                        <h2>{name}</h2>
                        <img src={image} alt="vehicle" />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Vehicle;