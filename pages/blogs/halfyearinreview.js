import styled from 'styled-components';
import Link from 'next/link';

export default function Halfyearinreview(){
    const Heading = styled.span`
        font-family: 'Courier New', monospace;
    `
    const Title = styled.h1`
        font-size: 150px;
        background: linear-gradient(to right, #d24dff 0%, #36c797 100%);
	    -webkit-background-clip: text;
	    -webkit-text-fill-color: transparent;
        line-height: 100px;
    `   
    const Date = styled.span`
        color: #d24dff;
        font-size: 30px;
    `
    const Body1 = styled.p`
        color: white;
        font-size: 17px;
        font-weight: 600;
        font-family: 'Courier New', monospace;
    `
    const Websites = styled.span`
        color: blue;
        font-side: 18px;
        :hover{
            border-bottom: 2px solid;
            border-color: red;
        }
    `
    const Otherimportant = styled.span`
        color: rgb(81, 72, 163);
    `
    return(
        <div>
            <Heading>
                <Title>
                    HALF THE
                    <br />
                    YEAR IN
                    <br />
                    REVIEW
                </Title>
                <Date>
                    29 May, 2021
                </Date>
            </Heading>
            <br />
            <Body1>
                It was the 21st of January, 2021 sometime around 1:30 AM that I finished a beginner HTML and CSS course that I had started roughly about 3 hours earlier.
                I then started exploring the Web Development stream as a whole. I read a few articles on Javascript, ReactJS and a few other topics and I was encaptured by these topics.
                So I took a little time out, <Otherimportant>made myself a learning path</Otherimportant> which I would <Otherimportant>strictly follow</Otherimportant>. It's mentioned below for your reference:
                <ul>
                    <li><Link href="https://html.com/"><a><Websites>HTML</Websites></a></Link></li>
                    <li><Link href="https://www.w3.org/Style/CSS/Overview.en.html"><a><Websites>CSS</Websites></a></Link> </li>
                    <li>Work on a building a website with the tools I've learnt above</li>
                    <li><Link href="https://www.javascript.com/"><a><Websites>Javascript</Websites></a></Link> </li>
                    <li>Work on building a website with the tools I've learnt above</li>
                    <li><Link href="https://reactjs.org"><a><Websites>ReactJS</Websites></a></Link> </li>
                    <li>Build web applications with the above tools</li>
                </ul>
                I did these and then there a few updates and chanes in the plan as discussed below:
                <ul>
                    <li>Moved on <Link href="https://nextjs.org/"><a><Websites>NextJS</Websites></a></Link></li>
                    <li>Build an application using NextJS</li>
                    <li>Learn <Link href="https://www.java.com/en/"><a><Websites>Java</Websites></a></Link> for the Back-end</li>
                </ul>
            </Body1>
        </div>
    )
}