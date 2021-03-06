import React, {useEffect, useState} from 'react';
import search_icon from "assets/images/search.svg";
import cross_icon from "assets/images/cross.svg";
import styles from './index.module.scss'

function SearchBar({onQueryChange}) {

  const [query, setQuery] = useState("")
  
  const onChange = (event) => {
    let newQuery = event.target.value
    setQuery(newQuery)
  }

  useEffect(() => {
    onQueryChange(query)
  }, [query])

  return (
    <div className={styles.SearchBar}>
      <div className="flex pl-20 pr-2 pb-5 lg:flex lg:justify-center">
        <img onClick={() => setQuery("")} src={query?cross_icon:search_icon} className="pl-2"/>
        <input className={styles.searchtext} onChange={onChange} placeholder="SEARCH GROUPS" value={query}/>
      </div>
      <div className="divider" />
    </div>
  );
}

export default SearchBar