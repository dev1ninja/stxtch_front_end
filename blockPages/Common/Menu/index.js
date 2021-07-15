import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import facebook_icon from 'assets/images/facebook.svg'
import instagram_icon from 'assets/images/instagram.svg'
import twitter_icon from 'assets/images/twitter.svg'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import cn from 'classnames';
import _ from 'lodash';
import { headerActions } from '_redux/_actions'

const menu_items = [
  {
    title: "HOME",
    link: "/",
  },
  {
    title: "",
    link: "/",
    hidden: true
  },
  {
    title: "SEARCH",
    link: "/",
    hidden: true,
    //className: 'lg:flex'
  }
]

const Menu = (props) => {
  const router = useRouter()
  const [menus, setMenus] = useState(menu_items)
  const [about, setAbout] = useState(false)

  const customer = useSelector(state => state.customer)
  const current_story = useSelector(state => state.story.current)
  const groups = useSelector(state => state.group.groups)

  const showAbout = () => {
    setAbout(true)
  }

  useEffect(() => {
    const pagename = router.pathname.split("/")[1]
    console.log(pagename)
    const newMenu = _.cloneDeep(menus)
    switch (pagename) {
      case "groupPage":
        const groupId = router.query.id
        console.log("group", groupId, groups)
        const group = groups.find(group => group.id == groupId)
        newMenu[1] = {
          title: "#" + group?.name.toUpperCase(),
          link: "/",
          active: true,
          hidden: false,
        }
        break
      case "storyPage":
        newMenu[1] = {
          title: "#" + current_story.group?.name.toUpperCase(),
          link: "/groupPage/" + current_story.groupId,
          hidden: false
        }
        break
      default:
        newMenu[1] = menu_items[1]
        break
    }
    console.log(newMenu)
    setMenus(newMenu)
    // dispatch( headerActions.clear_header() )
  }, [router.pathname, current_story])


  return <div className={styles.Menu}>
    {about ? (
      <div className={cn(styles.About, 'bg-main')}>
        <div className={cn(styles.About_main, 'pb-24')}>
          <div className={cn(styles.About_title)}>
            about us
          </div>
          <div className={cn(styles.About_content)}>
            {customer?.description}
          </div>
          <div className={cn(styles.About_contact)}>
            contact us
          </div>
          <div className={cn(styles.About_contact_email)}>
            {customer?.email}
          </div>
        </div>
      </div>
    ) : (<div className={styles.Menu_bar}>
      {
        menus.map((item, index) => (
          <Link href={item.link} key={index}>
            <a
              className={cn(styles.Menu_item, item.hidden && "hidden", item.active && styles.active, item.className)}
              onClick={props.onMenuClicked}>
              {item.title}
            </a>
          </Link>
        )
        )
      }
      <a className={cn(styles.Menu_item, 'cursor-pointer')} onClick={() => setAbout(true)}>
        ABOUT
      </a>
    </div>
    )}
    <div className={styles.Menu_social + " absolute w-full bottom-0"}>
      <Link href={customer?.facebookUrl}>
        <img className={'cursor-pointer'} src={facebook_icon} />
      </Link>
      <Link href={customer?.instagramUrl}>
        <img className={'cursor-pointer'} src={instagram_icon} />
      </Link>
      <Link href={customer?.twitterUrl}>
        <img className={'cursor-pointer'} src={twitter_icon} />
      </Link>
    </div>
  </div>

}

export default Menu