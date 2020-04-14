import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy:'best_match'
        };
        this.sortByOptions = {
            'Best Match': 'best_match', 
            'Higest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }
    }
    getSortByClass(sortByOption){
        if (this.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: ''
        })
    }
    //Creating a method:
    renderSortByOptions() {
        /* Iterate throught the object: First access the keys of the sortByOptions, then call method pass in "sortByOptions" as the argument. Iterate the using the map() method.Then pass a callback function to the map() as an arg, the parameter should called "sortByOption" */
        return Object.keys(this.sortByOptions).map(sortByOption => {
            //Let's store the object values:
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li className="getSortByClass(sortByOptionValue) " key={sortByOptionValue}>{sortByOption}</li>
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
                    <input placeholder="Search Restaurant" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a href="www.#.com">Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;