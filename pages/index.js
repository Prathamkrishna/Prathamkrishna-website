import styles from '../styles/Home.module.css';
import {FaLaughBeam, FaDesktop} from 'react-icons/fa';
import {IoHardwareChipOutline, IoLogoGithub} from 'react-icons/io5';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip'

export default function Home() {
  return (
    <div className={styles.body1}>
      <div className={styles.heading}>
        <div className={styles.leftheader}>
          <Link href="./"><a><FaDesktop /></a></Link>
        </div>
        <div className={styles.rightheader}>
          <Link href="https://www.github.com/Prathamkrishna"><a><IoLogoGithub /></a></Link>
          {" "}
          <Link href="./about"><a><IoHardwareChipOutline /></a></Link>
        </div>
      </div>
      <br />
      <div className={styles.bodysection}>
        <span className={styles.bodyheader}>Hey there, my name is Pratham Krishna! <FaLaughBeam /> </span>
        <br />
        I am a developer from India, primarily working on <strong className={styles.strongtext}>React and Next</strong> along with their libraries. I also love working with <strong className={styles.strongtext}>C++, Java and MongoDB.</strong> Apart from my work life, I love exploring new music from a variety of genres; I have multiple organised playlists on Spotify! I also love travelling on my motorcycle whenever I need a break/time off.
        <br /><br /><br />
        I am currently a freshman studying at <Link href="https://www.lpu.in"><a><strong className={styles.otherlinks}>Lovely Professional University</strong></a></Link>, India pursuing a bachelors degree of honours in Computer Science Engineering. 
        <br /><br /><br />
        A couple things that I frequently work with:
        <ul>
          <li><span className={styles.bulletedhead}><Link href="https://reactjs.org/"><a>ReactJS</a></Link>:</span> My favorite javascript library, love working with it! Powerful, efficient, a very good compatibility with other frameworks and libraries along with a very strong community support makes this a very beautiful language to work with.</li>
          <br />
          <li><span className={styles.bulletedhead}><Link href="https://code.visualstudio.com/"><a>VSCode</a></Link>:</span> My all time favorite editor for any language! The interface, extensions, collaborative development and the community as an overall makes VSCode beautiful.</li>
          <br />
          <li><span className={styles.bulletedhead}><Link href="https://prettier.io/"><a>Prettier</a></Link>:</span> I like a visually appealing code which is easy to read and Prettier does that for me thereby in a way helping me reduce time in proof-reading the code! </li>
          <br />
          <li><span className={styles.bulletedhead}><Link href="https://visualstudio.microsoft.com/vs/"><a>Visual Studio 2019</a></Link>:</span> I love Visual Studio 2019 even though it is a very heavy application but it is very helpful when I have to make either C++ or Java applications to keep a tab on the memory used and other production tools.</li>
          <br />
          <li><span className={styles.bulletedhead}><Link href="https://nextjs.org/"><a>NextJS</a></Link>:</span> NextJS is one beautiful React framework, reduces quite a bit of workload for me and makes the development easier!</li>
          <br />
        </ul>
      </div>
    </div>
  )
}
