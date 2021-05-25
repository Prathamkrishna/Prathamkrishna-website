import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import {FaDesktop} from 'react-icons/fa';
import {IoHardwareChipOutline, IoLogoGithub, IoSunnyOutline, IoMoonOutline} from 'react-icons/io5';
import { useState } from 'react';

// do some work: add light + dark mode. using inlinecss

function MyApp({ Component, pageProps }) {
  const [count, setCount] = useState(0);
  function DarkLight(){
    if(count === 0){
      return(
        <IoMoonOutline onClick={()=>setCount(count + 1)} />
      )
    }
    if(count === 1){
      return(
        <IoSunnyOutline onClick={()=>setCount(count - 1)} />
      )
    }
  }
  return (
    <div className={styles.body1}>
      <div className={styles.heading}>
        <div className={styles.leftheader}>
          <Link href="./"><a><FaDesktop /></a></Link>
        </div>
        <div className={styles.rightheader}>
          <Link href="https://www.github.com/Prathamkrishna"><a><IoLogoGithub /></a></Link>
          {" "}
          <Link href="/blogs"><a><IoHardwareChipOutline /></a></Link>
          {" "}
          <span className={styles.lightdarkmode}><DarkLight /></span>
        </div>
      </div>
      <Component {...pageProps} />
  </div>
  )
}

export default MyApp
