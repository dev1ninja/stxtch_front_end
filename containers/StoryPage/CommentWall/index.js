import React, { useState, useEffect } from 'react';
import MDBBtn from 'components/MDBbtn'
import styles from './index.module.scss'
import RoundImage from 'components/RoundImage'
import classnames from 'classnames'
import svg_comment from 'assets/images/storyPage/comment.svg'
import svg_enter from 'assets/images/storyPage/enter.svg'
import { useRouter } from 'next/router'

const data_fake = [
  {
    title: "This is Exactly My World",
    stories: 123,
    detail_text: "I can’t believe you caught the baby! This one goes down in history books.",
    image: "/images/groupPage/featuredStory1.svg",
    author: {
      name: "Malaika Myers",
      spec: "Marketing",
    },
    play: true
  }
]

const SearchBar = ({}) => {
  return (
    <div className="px-4">
      <div className="h-20 w-full flex border-b-2">
        <input className="pl-2 text-4xl flex-grow bg-transparent outline-none" placeholder="Type Something..."/>
        <div className="flex flex-col pb-2 justify-end cursor-pointer">
          <img src={svg_comment}/>
        </div>
      </div>
      <div className="flex justify-end pt-4">
        <div className="flex text-lg">
          press Enter
          <img src={svg_enter} className="pl-2"/>
        </div>
      </div>
    </div>

  )
}

const FeaturedItem = ({active, right, title, stories, detail_text, image, play, author}) => {
  return (
    <div className={classnames("flex flex-col lg:flex-row pr-8 lg:py-10 lg:px-8", !active && "opacity-30", right && "justify-end")}>
      <div className={"pt-4 flex flex-col " + styles.detail}>
        <div className="pl-2 text-7xl font-bold text-indigo-400" style={{fontFamily: "Tiempos Headline"}}>
          “
        </div>
        <div className={classnames(styles.detail_text, "flex flex-col justify-center text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl")} dangerouslySetInnerHTML={{__html: detail_text}}>
        </div>
        <div className="pt-6 flex flex-row items-center">
          <div className="rounded-full pr-4 lg:pr-8"> 
            <img src="/images/storyPage/5.svg" className="w-24 h-24"/>
          </div>
          <div className="font-bold text-lg text-gray-600 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            {author.name},
            <div className="font-light font-italic">
              {author.spec}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

const CommentWall = (props) => {
  const router = useRouter()
  let data = props.data
  if( !data ) data = data_fake
  const [viewAll, setViewAll] = useState(false)
  useEffect(() => {
    setViewAll(false)
  }, [router.query])
  return (
    <div className={"flex flex-col pt-6 pb-24 px-4 flex relative " + styles.CommentWall}>
      <div className="uppercase pl-6 font-bold md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
      Send an Affirmation
      </div>
      <SearchBar />
      <div className={classnames("flex w-full lg:overflow-hidden", viewAll && "flex-col")}>
        <FeaturedItem {...data_fake[0]}  active={true}/>
        <FeaturedItem {...data_fake[0]}  right={true} active={viewAll}/>
        <FeaturedItem {...data_fake[0]}  active={viewAll}/>
      </div>
      <div className="pb-14 pt-6 flex justify-center">
        <MDBBtn color="elegant" className={classnames("black btn-radius-10", viewAll && "hidden")} onClick={ () => setViewAll(true) }>
            view all
        </MDBBtn>
      </div>
    </div>
  )
}

export default CommentWall;