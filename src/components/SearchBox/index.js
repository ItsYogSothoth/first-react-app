import React, {useState} from 'react';
import './style.scss';

const SearchBox = function({searchValue, onChangeHandler}){
  return(
    <div className="inputSearch" >
      <input placeholder="Wyszukaj" value={searchValue} onChange={e => onChangeHandler( e.target.value )}/>
    </div>
  )
}

export default SearchBox;
