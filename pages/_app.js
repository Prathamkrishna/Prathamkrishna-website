import globals from '../styles/globals.css';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import styled from 'styled-components'
import {FaDesktop} from 'react-icons/fa';
import {IoHardwareChipOutline, IoLogoGithub, IoBookOutline, IoLogoLinkedin, IoLogoTwitter} from 'react-icons/io5';


function MyApp({ Component, pageProps }) {
  const Links = styled.span`
    color: blue;
    padding-left: 3px;
    padding-right: 3px;
    text-decoration: none;
    :hover{
      border-bottom: 2px aquamarine solid;
    }
  `
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
      <div style={{color: 'white', display: 'flex', justifyContent: 'center', marginBottom: 7 + 'px'}}>
        Made using<Link href="https://nextjs.org/"><a><Links>NextJS</Links></a></Link>
        . {" "} Connect with me on <Link href="https://www.linkedin.com/in/pratham-krishna-2a4993145/"><a><Links>LinkedIn</Links></a></Link>. Find me on <Link href="https://twitter.com/prathamkrishna3"><a><Links>Twitter</Links></a></Link>.
      </div>
  </div>
  )
}

// styled comps



export default MyApp
