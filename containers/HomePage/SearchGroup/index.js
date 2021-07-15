import React, { useEffect, useState, forwardRef } from 'react';
import down_icon from "assets/images/down.svg";
import MDBBtn from 'components/MDBbtn';
import SearchItem from 'containers/HomePage/GroupImage';
import SearchBar from '../SearchBar';
import styles from './index.module.scss'
import FeaturedGroup from '../FeaturedGroup';
import debounce from 'lodash/debounce'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSelector } from 'react-redux';

const tags_fake = [
  "Tag 1", "Tag 2", "Tag 3"
]

function Filter({setSortOrder}) {

  const [selected, setSelected] = useState(0)

  const onBtnClicked = (id) => {
    setSelected(id);
    if(id == 2){
      setSortOrder(true)
    }else {
      setSortOrder(false)
    }
  }

  return (
    <div className={"pt-6 px-2 lg:flex lg:justify-center lg:pb-10 " + styles.Filter}>
      <div className="w-max-content">
        <MDBBtn color="elegant" onClick={() => onBtnClicked(0)} selected={ selected==0 } className={styles.Filter_btn + " btn-radius-40"}> View All </MDBBtn>
        <MDBBtn color="elegant" onClick={() => onBtnClicked(1)} selected={ selected==1 } className={styles.Filter_btn + " btn-radius-40"} dropdown={true}> 
          Tags
          <img src={down_icon} className="down_icon"/> 
        </MDBBtn>
        <MDBBtn color="elegant" onClick={() => onBtnClicked(2)} selected={ selected==2 } className={styles.Filter_btn + " btn-radius-40"}> By Date </MDBBtn>
      </div>

    </div>
  )
}


function SearchResult({data, fetchData, hasMore}) {
  // insert FeatureGroup in results
  let insertPos = 6;
  let data_ = [...data]
  if(data.length > 6) 
    data_.splice(insertPos, 0, "FeaturedGroup")
  return (
    <div className="pt-4">
      <InfiniteScroll
        dataLength={data_.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
      <div className="w-full flex flex-wrap">
      { 
        data_?.map( (each, index) => {
          return each == "FeaturedGroup"
          ? (
            <div key={"FeaturedGroup"} className="w-full">
              <div className="divider border-grey"/>
              <FeaturedGroup />
              <div className="divider border-grey pb-12"/>
            </div>)
          : (<SearchItem className="pt-4 px-7 lg:w-1/3 lg:px-2" key={index} {...each} />)
        } )
      } 
      </div>
      </InfiniteScroll>
    </div>
  )
}

function SearchGroup(props, ref) {
  const results_db = useSelector( state => state.group.groups )
  let [results, setResults] = useState([])
  let [query, setQuery] = useState("")
  let [sortOrder, setSortOrder] = useState(false);
  
  const filter = (item) => 
    item.name.toLowerCase().includes(query.toLowerCase())
  const filtered_db = results_db.filter( filter )
    
  let onQueryChange = debounce((query) => {
    setQuery(query)
  }, 200)

  // Filter group results as query changes
  useEffect(() => {
    let results_filter = filtered_db.slice(0, 6)
    if(sortOrder){
      results_filter.sort((a,b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      })
    }
    setResults(results_filter)
  }, [query, sortOrder])
  
  const fetchData = () => {
    if ( results.length < filtered_db.length )
      setResults(results.concat( filtered_db.slice( results.length, 6 + results.length ) ))
  }

  return (
    <div className="pb-10" ref={ref}>
      <SearchBar onQueryChange={onQueryChange}/>
      <Filter setSortOrder={setSortOrder}/>
      <SearchResult 
        data={results} 
        fetchData={fetchData} 
        hasMore={results_db.length > results.length}>
        { props.children }
      </SearchResult>
    </div>
  )
}

export default forwardRef(SearchGroup);