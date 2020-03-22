import React from "react";
import './SearchBox.css'

function SearchBox(props) {
    return(
        <div className={`tc mb3`}>
            <input type={`text`} className={`pa2`} placeholder={'search robots'} onChange={props.searchProps}/>
        </div>
    )
}

export default SearchBox;
