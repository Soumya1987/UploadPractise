import React, {Component} from 'react';
import {GoSearch} from 'react-icons/go';

class SearchBar extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(

        <div className="search-container">
            <form action="/action_page.php" className='searchForm'>
      	        <input type="text" className='searchBox'  placeholder="Search                                    < >" name="search"/>
      	        <button type="submit"><GoSearch/></button>
            </form>
        </div>
        );
    }
}

export default SearchBar;
