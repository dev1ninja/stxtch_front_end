import React from 'react';
import MDBBtn from 'components/MDBbtn'
import styles from './index.module.scss'
import RoundImage from 'components/RoundImage'
import cn from 'classnames'

const data_fake = [
  {
    title: "DearMusicIn TheMaking",
    stories: 123,
    detail_text: "<div style='font-size:57px;color:#8C98EA;font-family:Tiempos Headline;margin-bottom:-29px;'>“</div>I felt more connected with myself the moment I stopped making my life a show for others.",
    image: "/images/page1/12.svg",
    play: true
  },
  {
    title: "UW-White water",
    stories: 546,
    detail_text: "I've never seen an exercise break down barriers faster than this one.",
    image: "/images/page1/13.svg"
  },
  {
    title: "UW- Parkside",
    stories: 123,
    detail_text: "I felt more connected with myself the moment I stopped making my life a show for others.",
    image: "/images/page1/14.svg",
    play: true
  }
]

const FeaturedItem = ({title, stories, detail_text, image, play}) => {
  return (
    <div className="flex flex-col lg:flex-row pr-8 lg:py-20">
      <div className="w-full lg:w-min pr-12 flex flex-col justify-center">
        <div className="py-3 w-max" style={{fontSize: 18, fontWeight: "bold"}}>
          FEATURED GROUP
        </div>
        <div className={styles.title}>
          #{title}
        </div>
        <div className={cn(styles.description, 'py-5')}>
          {stories} Stories Told
        </div>
        <MDBBtn color="elegant" className="black btn-radius-10 w-max">
          group stories
        </MDBBtn>
      </div>
      <div className={"pt-4 flex " + styles.detail}>
        <RoundImage src={image} play={play} className={cn("image-keep-orig", styles.image)}/>
        <div className={cn(styles.detail_text, "flex flex-col justify-center")} dangerouslySetInnerHTML={{__html: detail_text}}>
        </div>
      </div>

    </div>
  )
}

const FeaturedGroup = (props) => {
  let data = props.data
  if( !data ) data = data_fake
  return (
    <div className={"pt-6 pb-12 px-4 flex w-full " + styles.FeaturedGroup} style={{overflowX: "auto"}}>
      {
        data.map((each, index) => (
          <div className="flex" key={index}>
          {
            index > 0 &&
              <div className="flex flex-col justify-end lg:justify-center">
                <div className={styles.splitter}/>
              </div>
          }
            <FeaturedItem {...each}  />
          </div>
        ))
      }
    </div>
  )
}

export default FeaturedGroup;