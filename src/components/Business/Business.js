/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDom from "react-dom";

class Business extends React.Component {
    render() {
        return (
            <div>
                <div className="image-container">
                    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
                </div>
                <h2>MarginOtto Pizzeria</h2>
                <div className="Business-Information">
                    <div class="Business-address">
                        <p>1010 Paddington Way</p>
                        <p>Bordertown</p>
                        <p>NY 10101</p>
                    </div>
                    <div class="Business-reviews">
                        <h3>ITALIAN</h3>
                        <h3 class="rating">4.5 stars</h3>
                        <p>90 reviews</p>
                    </div>     
                </div>
            </div>
        )      
    }
}

const business = {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}
 
    
