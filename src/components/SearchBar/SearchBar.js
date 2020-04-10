import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match', 
    'Higest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
    //Creating a method:
    renderSortByOptions() {
        /* Iterate throught the object: First access the keys of the sortByOptions, then call method pass in "sortByOptions" as the argument. Iterate the using the map() method.Then pass a callback function to the map() as an arg, the parameter should called "sortByOption" */
        return Object.keys(sortByOptions).map(sortByOption => {
            //Let's store the object values:
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>
        });
    }
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a href>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;