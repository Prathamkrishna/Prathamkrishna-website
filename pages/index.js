import styles from '../styles/Home.module.css';
import {FaLaughBeam} from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return(
    <div className={styles.bodysection}>
      <title>
        Pratham Krishna
      </title>
      <meta name="description" content="Hey! My name is Pratham Krishna and I'm a developer from India, primarily working on React and react native and it's frameworks like Nextjs. I also happen to work on React native, node, expressJS and MongoDB!" />
      <meta httpEquiv = "content-language" content = "en"></meta>
      <br />
      <h1 className={styles.bodyheader}>Hey there, my name is Pratham Krishna!</h1>
      <br />
      I am a developer from India, primarily working on <strong className={styles.strongtext}>React Native, Spring Boot</strong> and <strong className={styles.strongtext}>PostgreSQL</strong> and related frameworks and libraries. I also love working with <strong className={styles.strongtext}>C++, Java and the cloud.</strong> Apart from my work life, I love exploring new music from a variety of genres; I have multiple organised playlists on Spotify! I also love travelling on my motorcycle whenever I need a break/time off.

      <br /><br /><br />
      I am currently a sophomore studying at <Link href="https://www.lpu.in"><a><strong className={styles.otherlinks}>Lovely Professional University</strong></a></Link>, India pursuing a bachelors degree of honours in Computer Science Engineering. 
      <br /><br /><br />
      A couple things that I frequently work with:
      <ul>
        <li><span className={styles.bulletedhead}><Link href="https://spring.io/"><a>Spring Boot</a></Link> : </span> My favorite backend framework, based on Java! Useful for making secure, powerful backend web applications!</li>
        <br />
        <li><span className={styles.bulletedhead}><Link href="https://reactnative.dev/"><a>React Native</a></Link> : </span> A Javascript/React library to build a cross-platform UI that works on Android, IOS and most devices!</li>
        <br />
        <li><span className={styles.bulletedhead}><Link href="https://www.postgresql.org/"><a>PostgreSQL</a></Link> : </span> My fav SQL DB client!</li>
        <br />        
        <li><span className={styles.bulletedhead}><Link href="https://reactjs.org/"><a>ReactJS</a></Link> : </span> My favorite javascript library, love working with it! Powerful, efficient, a very good compatibility with other frameworks and libraries along with a very strong community support makes this a very beautiful language to work with.</li>
        <br />
        <li><span className={styles.bulletedhead}><Link href="https://reactjs.org/"><a>IntellJ Idea</a></Link> : </span> Love using this IDE for java/maven development, makes everything a whole lot easier!</li>
        <br />
        <li><span className={styles.bulletedhead}><Link href="https://code.visualstudio.com/"><a>VSCode</a></Link> : </span> My all time favorite editor for any language! The interface, extensions, collaborative development and the community as an overall makes VSCode beautiful.</li>
        <br />
        <li><span className={styles.bulletedhead}><Link href="https://prettier.io/"><a>Prettier</a></Link> : </span> I like a visually appealing code which is easy to read and Prettier does that for me thereby in a way helping me reduce time in proof-reading the code! </li>
        <br />
        <li><span className={styles.bulletedhead}><Link href="https://expressjs.com/"><a> ExpressJS</a></Link></span><span className={styles.bulletedhead}> + </span><span className={styles.bulletedhead}><Link href="https://www.mongodb.com/"><a>MongoDB</a></Link> : </span>I primarily use ExpressJS and MongoDB for my backend. When it comes to using the two tools together, i prefer using Mongo's native drivers, I found it relatively easier than using a npm package like Mongoose.</li>
        <br />
      </ul>
    </div>
  )
}
