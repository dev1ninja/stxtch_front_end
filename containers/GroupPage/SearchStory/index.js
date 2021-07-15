import React, { useEffect, useState } from 'react';
import down_icon from "assets/images/down.svg";
import MDBBtn from 'components/MDBbtn';
import SearchItem from '../StoryImage';
import SearchBar from '../SearchBar';
import styles from './index.module.scss'
import FeaturedStory from '../FeaturedStory';
import debounce from 'lodash/debounce'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { storyActions } from '_redux/_actions'

const tags_fake = [
  "Tag 1", "Tag 2", "Tag 3"
]

function Filter({setSortOrder}) {

  const [selected, setSelected] = useState(0)

  const onBtnClicked = (id) => {
    setSelected(id)
    if(id == 2){
      setSortOrder(true)
    }else{
      setSortOrder(false)
    }
    console.log(id)
  } 
  return (
    <div className={"pt-6 px-2 lg:flex lg:justify-center lg:pb-10 " + styles.Filter}>
      <div className="w-max-content">
        <MDBBtn color="elegant" onClick={() => onBtnClicked(0)} selected={selected == 0} className={styles.Filter_btn + " btn-radius-40"}> View All </MDBBtn>
        <MDBBtn color="elegant" onClick={() => onBtnClicked(1)} selected={selected == 1} className={styles.Filter_btn + " btn-radius-40"} dropdown={true}>
          Tags
          <img src={down_icon} className="down_icon" />
        </MDBBtn>
        <MDBBtn color="elegant" onClick={() => onBtnClicked(2)} selected={selected == 2} className={styles.Filter_btn + " btn-radius-40"}> By Date </MDBBtn>
      </div>

    </div>
  )
}

function SearchResult({ data, fetchData, hasMore, filtered_stories_featured }) {
  // insert FeatureGroup in results

  // let insertPos = 6;
  let data_ = [...data]
  let featured_index = -1;
  // if(data.length > 6) 
  //   data_.splice(insertPos, 0, "FeaturedStory")
  // for(let i = 1; i < data_.length/31; i++)
  //   data_.splice(i*31-1, 0, "FeaturedStory")

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

            data_?.map((each, index) => {
              // return each === "FeaturedStory"
              if(index > 0 && (index+1) % 31 === 0){
                featured_index++;
              }
              return (index > 0 && (index+1) % 31 === 0 && featured_index>=0)
                ? (
                  <div key={"FeaturedStory"+index} className="w-full">
                    <div className="mt-12 divider border-grey" />
                      <FeaturedStory data={filtered_stories_featured[featured_index]}/>
                    <div className="divider border-grey pb-12" />
                  </div>)
                : (<SearchItem className="pt-4 px-7 lg:w-1/3 lg:px-2" key={index} {...each} />)
            })
          }
        </div>
      </InfiniteScroll>
    </div>
  )
}


function SearchStory(props) {

  const allStories = useSelector(state => state.story.stories)
  const router = useRouter()
  const dispatch = useDispatch()

  let [results, setResults] = useState([])
  let [query, setQuery] = useState("")
  let [sortOrder, setSortOrder] = useState(false) //added search result by date by Christian

  const filter = (item) =>
    (item.title + " " + item.author).toLowerCase().includes(query.toLowerCase())

  const filter_by_Normal = (item) => { //filter by featured == 0 || get stories
    return item.featured == 0;
  }

  const filter_by_featured = (item) => { //filter by featured > 0 || get featured stories
    return item.featured > 0;
  }

  const filtered_stories = allStories.filter(filter)
  const filtered_stories_Normal = filtered_stories.filter(filter_by_Normal)
  const filtered_stories_featured = (filtered_stories.filter(filter_by_featured)).sort((a, b) => {
    return b.featured - a.featured;
  })

  let onQueryChange = debounce((query) => {
    setQuery(query)
  }, 200)

  useEffect(() => { 
    if( sortOrder ){
      console.log("sortOrder", sortOrder)
      filtered_stories_Normal.sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      })
      let results_filter = filtered_stories_Normal.slice(0, 6)
      setResults(results_filter)
      console.log("sort result", results_filter)
    } else {
      let results_filter = filtered_stories_Normal.slice(0, 6)
      setResults(results_filter)
    }
    console.log("this is normal story", filtered_stories_Normal)
    console.log("this is featured story", filtered_stories_featured)
  }, [query, filtered_stories_Normal.length, sortOrder])

  const fetchData = () => {
    if (results.length < filtered_stories_Normal.length)
      setResults(results.concat(filtered_stories_Normal.slice(results.length, 6 + results.length)))
  }

  useEffect(() => {
    const groupId = router.query.id
    // if(!groupId) return
    setResults([])
    console.log("this is the results",results)
    dispatch(storyActions.get({ groupId }))
  }, [router.pathname])

  return (
    <div className="pb-10">
      <SearchBar onQueryChange={onQueryChange} />
      <Filter setSortOrder={setSortOrder}/>
      {
        allStories.length > 0 &&
        <SearchResult
          data={results}
          fetchData={fetchData}
          hasMore={filtered_stories_Normal.length > results.length}
          filtered_stories_featured={filtered_stories_featured}>
        </SearchResult>
      }
    </div>
  )
}

export default SearchStory;