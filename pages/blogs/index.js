import styled from 'styled-components';

export default function Blogs(){
    const Hash = styled.span`
        color: white;
        opacity: 10%;
        :hover{
            opacity: 100%;
            border-bottom: 3px solid;
            border-color: red;
        }
    `
    const Headingofblog = styled.div`
        color: white;
        font-size: 50px;
        font-family: 'Brush Script MT', cursive;
    `
    const Word = styled.div`
        color: white;
        border-style: solid;
        border-color: white;
        border-radius: 10px;
        padding: 10px;
        :hover{
            cursor: pointer;
            margin: -1px;
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
            <Word>
                <Blogheader>
                    hhii lol
                </Blogheader>
                <br />
                hi
            </Word>
            <br />
            <Word>
                <Blogheader>
                    hi there
                </Blogheader>
            </Word>
        </Wrapper>
    )
}