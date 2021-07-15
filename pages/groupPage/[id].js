import React, { useEffect } from 'react';
import styles from './index.module.scss';
import SearchStory from 'containers/GroupPage/SearchStory';
import Player from 'containers/GroupPage/Player';
import Description from 'containers/GroupPage/Description';
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux';
import { groupActions, storyActions, mediaActions } from '_redux/_actions'
import { headerActions } from '_redux/_actions'
import { useRouter } from 'next/router'
import _ from 'lodash';
import Head from 'next/dist/next-server/lib/head';
import axios from 'axios'

const statistics = {
  "Stories_Told": 4234,
  "Affirmations_Given": 423
}


function GroupPage() {
  const dispatch = useDispatch()
  const router = useRouter()
  const bg = useSelector(state => state.header.bg)
  const customer = useSelector(state => state.customer)

  useEffect(() => {
    dispatch(groupActions.get())
    dispatch(headerActions.set_header({ sticky: true, white: true }))

    return () => {
      dispatch(headerActions.clear_header())
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      // if(!sticky) return
      if (window.pageYOffset >= 64) {
        dispatch(headerActions.set_whitebg())
      } else {
        dispatch(headerActions.remove_whitebg())
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const groups = useSelector(state => state.group.groups)
  console.log("groups123:", groups)

  const groupId = router.query.id
  let group = groups.find(group => group.id == groupId)
  group = group || groups[0]
  let groupVideos;
  console.log("group:", group)

  let groupCoverMedias;

  // const mediagroup = useSelector(state => state.media.media)

  if (group) {
    groupVideos = group.media.filter(media => media.type === "video" && media.groupmedias.isCover)
    groupCoverMedias = group.media.filter(media => media.type === "image" || media.type === "video" && media.groupmedias.featured)

    console.log("groupVideos:", groupVideos)

    if (groupVideos.length > 1) {
      groupVideos = groupVideos.sort((v1, v2) => {
        if (v1.groupmedias.isCover >= v2.groupmedias.isCover) {
          return 1;
        }
        return -1;
      })
    }
    if (groupCoverMedias.length > 1) {
      groupCoverMedias = groupCoverMedias.sort((v1, v2) => {
        if (v2.groupmedias.featured >= v1.groupmedias.featured) {
          return 1;
        }
        return -1;
      })
    }
  }

  let coverVideoUrl = _.get(groupVideos, [0, "url"]);
  console.log("coverVideoUrl:", coverVideoUrl)
  let coverMediaUrl = _.get(groupCoverMedias, [0, "url"]);
  let coverMediaType = _.get(groupCoverMedias, [0, "type"]);
  console.log("cover Media Type: ", coverMediaType)
  let images = [
    {
      src: coverMediaUrl,
      width: "100%",
      title: group?.headline,
      comment: "",
      mediaType: coverMediaType,
    }
  ]

  return (
    <div className={classnames("flex flex-grow 2xl:p-0 flex-col relative", styles.GroupPage)} >
      <Head>
        <title>{customer.name}</title>
        <meta
          key="description"
          name="description"
          content={customer.description}
        />
        <link rel="icon" href={customer.favicon} />
      </Head>
      <Player {...images[0]} coverVideo={coverVideoUrl} />
      <div style={{ height: "100vh", visibility: 'hidden' }}></div>
      <div className={classnames(styles.wrapper, bg ? styles.active : "")}>
        <div className={"lg:px-8"}>
          <Description name={group?.name} description={group?.description} />
          <SearchStory />
        </div>
      </div>
    </div>
  );
}

export default GroupPage;