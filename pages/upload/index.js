import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import cn from 'classnames';
import _ from 'lodash';
import Head from 'next/dist/next-server/lib/head';
import styles from './index.module.scss';
import { headerActions } from '_redux/_actions';
import { storyUploadActions } from '_redux/_actions/storyUpload.actions';
import ProgressBar from 'containers/UploadPage/ProgressBar';
import UploadContent from 'containers/UploadPage/UploadContent';
import CompleteContent from 'containers/UploadPage/CompleteContent';
import SignContent from 'containers/UploadPage/SignContent';
import SubmitContent from 'containers/UploadPage/SubmitContent';
import UserAgreeContent from 'containers/UploadPage/UserAgreeContent';

function UploadPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const customer = useSelector( state => state.customer )
  const storyUploadState = useSelector( state => state.storyUploadContent.uploadContent_ID)

  useEffect(() => {
    dispatch(headerActions.hide_header())
    dispatch(storyUploadActions.show_uploadContent(1))
  }, [])
  return (
    <div className={cn("flex flex-col relative justify-center items-center", styles.UploadPage)}>
      <Head>
        <title></title>
        <meta 
          key="upload"
          name="upload"
          content="upload"
        />
        <link rel="icon" href={customer.favicon} />
      </Head>
      <div className={styles.screen1}></div>
      <div className={cn("", styles.title)}>
        Stxtch
      </div>
      {
        (storyUploadState == 1 && (<> <UploadContent /> <ProgressBar completed={"0"} /> </>)) ||
        (storyUploadState == 2 && (<> <CompleteContent title={"Your story was uploaded!"} isStory={true} /> <ProgressBar completed={"25"} /></>) ||
        (storyUploadState == 3 && (<> <SignContent /> <ProgressBar completed={"25"} /> </>)) ||
        (storyUploadState == 4 && (<> <SubmitContent title={"What is your first name?*"} /> <ProgressBar completed={"25"} /> </>)) ||
        (storyUploadState == 5 && (<> <SubmitContent title={"What is your last name?*"} />) <ProgressBar completed={"35"} /> </>)) ||
        (storyUploadState == 6 && (<> <SubmitContent title={"What organization are you at?*"} /> <ProgressBar completed={"50"} /> </>)) ||
        (storyUploadState == 7 && (<> <SubmitContent title={"What’s your email address?*"} /> <ProgressBar completed={"65"} /> </>)) ||
        (storyUploadState == 8 && (<> <SubmitContent title={"What’s your Dear World Message?*"} /> <ProgressBar completed={"75"} /> </>)) ||
        (storyUploadState == 9 && (<> <UserAgreeContent /> <ProgressBar completed={"85"} /> </>)) ||
        (storyUploadState == 10 && (<> <CompleteContent title={"Thank you!"} isStory={false} /> <ProgressBar completed={"100"} /> </>)))
      }
      
    </div>
  ) 
}

export default UploadPage;