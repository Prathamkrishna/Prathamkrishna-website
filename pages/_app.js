import globals from '../styles/globals.css';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import {FaDesktop} from 'react-icons/fa';
import {IoHardwareChipOutline, IoLogoGithub, IoBookOutline} from 'react-icons/io5';


function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.body1}>
      <div className={styles.heading}>
        <div className={styles.leftheader}>
          <Link href="./"><a><meta name="description" content="Home" /><FaDesktop /></a></Link>
        </div>
        <div className={styles.rightheader}>
          <Link href="https://www.github.com/Prathamkrishna"><a><meta name="description" content="Github" /><IoLogoGithub /></a></Link>
          {" "}
          <Link href="/blogs"><a><meta name="description" content="Blogs" /><IoBookOutline /></a></Link>
          {" "}
          <Link href="https://docs.google.com/document/d/1FXJx9CgTUu2VYwuBFwcVD9CRxaa-8fqaGSiGS72anxA/edit?usp=sharing"><a><meta name="description" content="resume" /><IoHardwareChipOutline /></a></Link>
        </div>
      </div>
      <Component {...pageProps} />
  </div>
  )
}

export default MyApp
