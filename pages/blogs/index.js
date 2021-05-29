import styled from 'styled-components';
import Link from 'next/link';
import {IoArrowForwardCircleOutline} from 'react-icons/io5'

export default function Blogs(){
    const Readmore = styled.span`
        font-size: 20px;
        opacity: 10%;
    `
    const Hash = styled.span`
        color: white;
        opacity: 10%;
        // :hover{
        //     opacity: 100%;
        //     border-bottom: 3px solid;
        //     border-color: red;
        // }
    `
    const Headingofblog = styled.div`
        color: white;
        font-size: 50px;
        font-family: 'Brush Script MT', cursive;
        :hover{
            ${Hash}{
                opacity: 100%;
                border-bottom: 3px solid;
                border-color: red;
            }
        }
    `
    const Word = styled.div`
        color: white;
        border-style: solid;
        border-color: white;
        border-radius: 10px;
        padding: 10px;
        &:hover{
            cursor: pointer;
            margin: -1px;
            color: lightblue;
            border-color: lightblue;
            ${Readmore}{
                opacity: 100%;
            }
        }
    `
    const Blogheader = styled.div`
        font-size: 30px;
    `
    const Wrapper = styled.section`
        padding: 1cm;
    `
    return(
        <Wrapper>
            <Headingofblog>
                <Hash>#</Hash> blog
            </Headingofblog>
            <br />
            <br />
            <Link href="/blogs/halfyearinreview"><a>
                <Word>
                    <Blogheader>
                        Half the year in a review
                    </Blogheader>
                    <br />
                    Pratham talks about the first 6 months of his 2021 in a glance.
                    <br />
                    Read More <Readmore><IoArrowForwardCircleOutline /></Readmore>
                </Word>
            </a></Link>
            
        </Wrapper>
    )
}