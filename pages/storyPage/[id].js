import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Description from "containers/StoryPage/Description";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { storyActions } from "_redux/_actions";
import { useRouter } from "next/router";
import StoryImage from "containers/StoryPage/StoryImage";
import { headerActions } from "_redux/_actions";
import MusicPlayer from "containers/StoryPage/MusicPlayer";
import Story from "containers/StoryPage/Story";
import RoundImage from "components/RoundImage";
import More from "containers/StoryPage/More";
import CommentWall from "containers/StoryPage/CommentWall";
import Head from 'next/head';
import _ from 'lodash';
import { GetServerSideProps } from 'next';
import axios from 'axios';

const story_fake = {
  title: "Room at the Table",
  subtitle: "Dear World,",
  author: "Zane Goodman",
  full: "Marcie crawls from the foyer to the dining room. I run to shut the blinds and lay blankets and pillows down.\n\nMarcie and I looked at each other scoffing, “Rookie.”\n\nA first-time mother had asked our birthing instructor what should you do in the case that you have to give birth on the side of the road. Seriously? That never happens.\n\nWe looked around the room at the other mothers anxiously scribbling notes in their journal logs and birth planners. I imagined a younger Marcie and I nervously sitting in our first birthing class doing the same thing, because there’s no other way to deal with the angst of having a baby for the first time than to try to prepare for everything, an impossible feat.\n\nBut this wasn’t our first rodeo. We were on baby number four and sitting in our third birthing class over the years. Despite my asking if this birthing class was really necessary, Marcie still wanted to go, and so we went.\n\nThe instructor looked at all the nervous faces staring at her after she was asked that question.\n\nHer answer went something like this:\n\nWomen have been giving birth for thousands of years without any of the medical innovations we have today. The female body knows what to do. Trust the process! Men, wait for your partner. As her body begins to push the baby out—don’t pull the baby out— be patient. Once the head is in your hands, slightly twist the shoulders so they are vertical instead of broad.  Your wife will thank you later.\n\nI look back at Zoe’s head coming out face-down. I can hear the instructors voice in my head: twist. I slightly twist her ninety degrees and she slides right onto my lap.",
  pictureUrl: "/images/groupPage/2.svg",
  summary:
    "Marcie crawls from the foyer to the dining room. I run to shut the blinds and lay blankets and pillows down.",
  groupId: 1,
  group: {
    name: "UniversityofWisconsin-WhiteWater",
  },
  nexts: [
    {
      pictureUrl: "/images/desktop/homepage/6.svg",
      title: "Nobody Wanted a Gay Homecoming Queen.",
      author: "Ciara Gazaway",
    },
    {
      title: "Snezeks Never Quit",
      author: "Susan Gallaway",
    },
    {
      title: "Snezeks Never Quit",
      author: "Susan Gallaway",
    },
  ],
};
console.log("This is story fake", story_fake)
let isScrolling;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function playScroll(onFinish) {
  console.log("Auto scroll start");
  let oldPageOffset;
  isScrolling = true;
  do {
    oldPageOffset = window.pageYOffset;
    window.scrollTo({ top: oldPageOffset + 3, behavior: "smooth" });
    await sleep(100);
  } while (isScrolling && oldPageOffset !== window.pageYOffset);
  isScrolling = false;
  onFinish();
}

function stopScroll() {
  isScrolling = false;
}

function StoryPage(props) {
  console.log("initial props:", props)
  console.log("StoryPage function started")
  const dispatch = useDispatch();
  const router = useRouter();

  const stories = useSelector((state) => state.story.stories);
  const [autoScroll, setAutoScroll] = useState(false);
  const current_story = useSelector((state) => state.story.current);
  console.log("this is current_story", current_story)

  const onPlay = () => {
    playScroll(() => setAutoScroll(false));
    setAutoScroll(true);
  };

  const onStop = () => {
    stopScroll();
    setAutoScroll(false);
  };

  const onNextStory = () => {
    let index = stories.findIndex((story) => story.id == current_story.id);
    if (index < 0 || index + 1 == stories.length) return;
    console.log(current_story);
    console.log("onNextStory", "/storyPage/" + stories[index + 1].id);
    router.push("/storyPage/" + stories[index + 1].id);
  };

  const onPrevStory = () => {
    let index = stories.findIndex((story) => story.id == current_story.id);
    if (index < 1) return;
    router.push("/storyPage/" + stories[index - 1].id);
  };

  useEffect(() => {
    dispatch(
      headerActions.set_header({ divider: false, back: true, dialog: true })
    ); //, sticky: true, bg: "white"
    window.addEventListener("wheel", onStop);
    return () => {
      onStop();
      window.removeEventListener("wheel", onStop);
      dispatch(headerActions.clear_header()); //, sticky: true, bg: "white"
    };
  }, []);

  useEffect(() => {
    const storyId = router.query.id;
    // if(!groupId) return
    dispatch(storyActions.getCurrent(storyId));
  }, [router.pathname, router.query]);

  const story = current_story;
  console.log("This is story temp for current story", story);
  let nexts = [];

  let index = 0;
  console.log(story);

  useEffect(() => {
    if (!story) return;
    console.log(story.group);
    // dispatch(headerActions.set_title("#" + story.group?.name));
  }, [story]);

  if (stories.length == 0) {
    return <div>loading...</div>;
  } else {
    index = stories.findIndex((story) => story.id == current_story.id);
    nexts = stories.slice(index + 1, index + 4);
  }
  console.log("This is current storyImage", story)

  return (
    <div style={{ backgroundColor: "#CED3E3" }}>
      <Head>
        {props.metaTags && 
          Object.entries(props.metaTags).map((entry) => (
            <meta property={entry[0]} content={entry[1]} />
          ))
        }
      </Head>
      <div className="flex bg-white">
        <div className="lg:w-4/5 flex flex-col">
          <Jumbo story={story} nexts={nexts}>
            {/* For Desktop */}
            <MusicPlayer
              className="hidden lg:block"
              isPlay={isScrolling}
              onPlay={onPlay}
              onStop={onStop}
              onNextStory={onNextStory}
              onPrevStory={onPrevStory}
            />
          </Jumbo>
          <MusicPlayer
            className="block lg:hidden"
            isPlay={isScrolling}
            onPlay={onPlay}
            onStop={onStop}
            onNextStory={onNextStory}
            onPrevStory={onPrevStory}
          />
          <div style={{ height: "100vh" }} className="hidden lg:block"></div>
          <Story story={story} />
        </div>
        <div className="hidden lg:flex lg:w-1/5 flex-col	" style={{ zIndex: 1 }}>
          <div style={{ height: "100vh" }} className="hidden lg:block"></div>
          <div className="px-6" >
            <div className="divider" style={{ margin: 0 }} />
          </div>
          <div
            className="flex flex-col lg:border-l flex-grow"

          >
            <More story={story} className="bg-common" />
            <div className="flex-grow bg-common"></div>
          </div>
        </div>
      </div>
      <CommentWall />
    </div>
  );
}

const Jumbo = ({ story, nexts, children }) => {
  console.log("this is next", nexts)
  return (
    <div
      className="flex flex-row lg:fixed lg:z-0 bg-header"
      style={{ top: 70 }}
    >
      <div className="lg:rounded-t-2xl flex flex-row  lg:pt-10 bg-common">
        <div className="lg:w-4/5">
          <div
            className={classnames(
              "flex flex-grow 2xl:p-0 flex-col lg:flex-row-reverse lg:items-start ",
              styles.StoryPage
            )}
          >
            <StoryImage story={story} />
            <Description story={story} />
          </div>
          {children}
        </div>
        <div className="hidden lg:w-1/5 pt-8 lg:flex flex-col flex-grow">
          {nexts?.length > 0 && (
            <div
              className={classnames("lg:border-l px-6 flex flex-col flex-grow")}
            >
              <RoundImage src={nexts[0].media[0]?.url} />
              <div className="text-lg lg:text-base xl:text-lg font-bold pt-4 px-2">
                UP NEXT:
                <br />
                {nexts.length > 0 && (
                  <div>
                    <div className="pt-2">{nexts[0].title}</div>
                    <div className="font-light pt-2">{nexts[0].author}</div>
                  </div>
                )}
                {nexts.length > 1 && (
                  <div>
                    <div className="text-md 2xl:text-lg pt-4">
                      <div className="pt-2 text-gray-600 font-bold">
                        {nexts[1].title}
                      </div>
                      <div className="font-light text-gray-400">
                        {nexts[1].author}
                      </div>
                    </div>
                  </div>
                )}
                {nexts.length > 2 && (
                  <div>
                    <div className="text-md 2xl:text-lg pt-4">
                      <div className="pt-2 text-gray-600 font-bold">
                        {nexts[2].title}
                      </div>
                      <div className="font-light text-gray-400">
                        {nexts[2].author}
                      </div>
                    </div>
                  </div>
                )}
                <div>
                  <div className="pt-6">TAGS:</div>
                  <div className="font-light">#nurse #doctor #hospital #patient #love #life #cure #laugh</div>
                </div>
              </div>
              <div className="flex-grow"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps(context) {
  console.log("this is context", context)
  let hostname
  let fullUrl;
  if (context.req) {
    hostname = context.req.headers.host.split(':')[0]
    fullUrl = `http://${hostname}/storyPage/${context.query.id}`;
  }
  else {
    fullUrl = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')
    hostname = location.hostname
  }
  const res = await axios.get(`/api/story/${context.query.id}`)
  console.log("this is response", res.data)
  const data = await res.data;

  const storyMediaArr = _.get(data, ["stories", "media"], []);
  const storyImageMedia = storyMediaArr.find((media) => {
    return media.type === "image"
  })
  const storyImageUrl = storyImageMedia ? storyImageMedia.url : "";

  const metaTags = {
    "og:title": data.stories.title,
    "og:url": fullUrl,
    "og:description": data.stories.summary,
    "og:type": 'website',
    "og:image": storyImageUrl,
    "twitter:title": data.stories.title,
    "twitter:domain": hostname,
    "twitter:url": fullUrl,
    "twitter:description": data.stories.summary,
    "twitter:card": 'summary_large_image',
    "twitter:image": storyImageUrl
  }
  console.log("This is story response", data);
  return {
    props: {
      metaTags,
      data,
      fullUrl,
      hostname,
    }
  }
}

export default StoryPage;
