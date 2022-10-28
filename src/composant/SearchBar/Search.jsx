import React, { useState } from 'react';
import Button from '../Button/Button';

const SearchBar = ({event}) => {
    const [searched, setSearched]= useState("");
    
    return (
        <form
        action={`/search/${searched}`}
        >
            <input name='search' placeholder='Search a show' type="text" onChange={(e)=>setSearched(e.target.value)}/>
            <Button>
                Search
            </Button>
        </form>
    );
};

export default SearchBar;