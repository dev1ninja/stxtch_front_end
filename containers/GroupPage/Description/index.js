import React, { useEffect, useRef } from 'react';
import styles from './index.module.scss';
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux';
import { headerActions } from '_redux/_actions'
import { useRouter } from 'next/router';

function Description({ name, description }) {
  const title_ref = useRef()
  const router = useRouter()
  const dispatch = useDispatch()
  const groups = useSelector(state => state.group.groups)
  console.log("This is name", description)

  const current_story = useSelector(state => state.story.current)
  useEffect(() => {
    const onscroll = () => {

      const groupId = router.query.id
      const group = groups.find(group => group.id == groupId)
      if (!group) return

      if (!title_ref.current) return
      let offset = title_ref.current.offsetTop - 90; // title_ref.current.offsetHeight 
      if (window.pageYOffset >= offset) {
        // dispatch(headerActions.set_title("#" + group?.name))

      } else {
        dispatch(headerActions.clear_title())
      }
    }
    window.addEventListener('scroll', onscroll)
    return () => {
      window.removeEventListener('scroll', onscroll)
    }
  }, [groups, router.pathname])
  return (
    <div className={classnames(styles.Description, "pt-6 pb-10 px-4 lg:pt-20 lg:px-10")}>
      <div ref={title_ref} className={classnames("text-4xl lg:px-8 lg:text-5xl pb-4 truncate")}>
        #{name}
      </div>
      <div ref={title_ref} className={classnames("text-sm px-2 pt-2 lg:text-lg lg:px-8")}>
        {description}
      </div>
      <div className={classnames("text-sm px-2 pt-2 lg:text-lg lg:px-8")}>
        <span className={classnames("font-bold")}>Tags: </span>
        <span className={classnames("text-blue-600")}>#nurse #doctor #hospital #patient #love #life #cure #laugh</span>
      </div>
    </div>
  );
}

export default Description;