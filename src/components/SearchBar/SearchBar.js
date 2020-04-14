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
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.sortByOptions = {
            'Best Match': 'best_match', 
            'Higest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
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
            sortBy: sortByOption
        })
    }
    
    handleTermChange(event) {
        this.setState({ term: event.target.value});
    }

    handleLocationChange(event) {
        this.setState({ location: event.target.value});
    }

    renderSortByOptions() {
        /* Iterate throught the object: First access the keys of the sortByOptions, then call method pass in "sortByOptions" as the argument. Iterate the using the map() method.Then pass a callback function to the map() as an arg, the parameter should called "sortByOption" */

        return Object.keys(this.sortByOptions).map(sortByOption => {
            //Let's store the object values:
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li 
                        className={this.getSortByClass(sortByOptionValue)}
                        key={sortByOptionValue}
                        onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}
                    </li>
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
                    <input onChange={this.handleTermChange} placeholder="Search Restaurant" />
                    <input onChange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a href="www.#.com">Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;