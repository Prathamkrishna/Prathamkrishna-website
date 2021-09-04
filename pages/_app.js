import globals from '../styles/globals.css';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import styled from 'styled-components'
import {FaDesktop} from 'react-icons/fa';
import {IoHardwareChipOutline, IoLogoGithub, IoBookOutline, IoLogoLinkedin, IoLogoTwitter} from 'react-icons/io5';
import { useEffect } from 'react';


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
  const Footer = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    margin-bottom: 7px;
    @media(max-width: 768px){
      display: flex;
      flex-wrap: wrap;
    }
  `
  const HeadingLinks = styled.span`
    color: white;
    margin-right: 15px;
    @media(max-width: 700px){
      margin-right: 10px;
    }
    @media(max-width: 500px){
      margin-right: 0px;
    }
    :hover{
      color: blue;
    }
  `
  useEffect(()=>{
    console.log(window.innerWidth);
  })
  return (
    <div className={styles.body1}>
      <div className={styles.heading}>
        <div className={styles.leftheader}>
          <Link href="./"><a><meta name="description" content="Home" /><FaDesktop /></a></Link>
        </div>
        <div className={styles.rightheader}>
          <Link href="https://open.spotify.com/user/eglyvn5w7g8hc2ys21tde21sg?si=67f7c905e72d4b44"><a><meta name="description" content="Pratham Krishna's spotify" /><HeadingLinks>spotify</HeadingLinks></a></Link>
          {" "}
          <Link href="/blogs"><a><meta name="description" content="Blogs" /><HeadingLinks>blogs</HeadingLinks></a></Link>
          {" "}
          <Link href="https://docs.google.com/document/d/1FXJx9CgTUu2VYwuBFwcVD9CRxaa-8fqaGSiGS72anxA/edit?usp=sharing"><a><meta name="description" content="resume" /><HeadingLinks>resume</HeadingLinks></a></Link>
          {" "}
          <Link href="https://www.github.com/Prathamkrishna"><a><meta name="description" content="Github" /><HeadingLinks>github</HeadingLinks></a></Link>
        </div>
      </div>
      <Component {...pageProps} />
      <Footer>
        Made using<Link href="https://nextjs.org/"><a><Links>NextJS</Links></a></Link>
        . {" "} Connect with me on <Link href="https://www.linkedin.com/in/pratham-krishna-2a4993145/"><a><Links>LinkedIn</Links></a></Link>. Find me on <Link href="https://twitter.com/prathamkrishna3"><a><Links>Twitter</Links></a></Link>.
        {" "} Check out my <Link href="https://prathamkrishna.hashnode.dev/"><a><Links>Hashnode</Links></a></Link>.
      </Footer>
  </div>
  )
}

// styled comps



export default MyApp
