import styled from 'styled-components';
import Link from 'next/link';
import { MainFnImage, PopUpFn, DevTools } from '../../components/images';
import {Popup, UseStatesec, SetTimer, LocalStore} from '../../components/popup';

export default function CreatingPopUp(){
    const Heading = styled.span`
        font-family: 'Courier New', monospace;
    `
    const Title = styled.h1`
        font-size: 130px;
        background: linear-gradient(to right, #d24dff 0%, #36c797 100%);
	    -webkit-background-clip: text;
	    -webkit-text-fill-color: transparent;
        line-height: 100px;
        @media (max-width: 768px){
            font-size: 50px;
            line-height: 50px;
        }
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
        color: rgb(84, 104, 170);
        font-size: 18px;
        :hover{
            border-bottom: 2px solid;
            border-color: red;
        }
    `
    const Otherimportant = styled.span`
        color: #ff0000;
    `
    const Subheading = styled.span`
        font-size: 20px;
        color: red;
        border-bottom: 2px solid;
        border-color: blue;
    `
    const CodeSnippet = styled.div`
        background-color: #303030;
        padding: 5px;
    `
    return(
        <div>
            <Heading>
                <Title>
                Creating a Pop-up and
                <br />
                adding it to your react application!
                </Title>
                <Date>
                    6 July, 2021
                </Date>
            </Heading>
            <br />
            <Body1>
                A pretty obvious question would strike your mind, "so, what exactly is that we will be building right now?"
                <br />
                We will be building a tiny pop-up which pops up as soon as the page is loaded. This will have a sample message and a close button on it. If the user does not click on the 'close' button within 5 seconds of the loading of the page, the pop-up disappears.
                <br /><br />
                <Subheading>
                    What are the prerequisites for building this?
                </Subheading>
                <br />
                All you need to know is how to write JSX, the <Websites><Link href="https://reactjs.org/docs/hooks-state.html"><a>useState hook</a></Link></Websites>,<Websites><Link href="https://reactjs.org/docs/hooks-effect.html"><a>useEffect hook</a></Link></Websites> and the <Link href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout"><a><Websites>setTimeout function</Websites></a></Link>.
                <br /><br />
                <Subheading>
                    Let's start off right away!
                </Subheading>
                <br />
                <br />
                <Otherimportant>-</Otherimportant> We're going to create our main React Component, I will be calling it 'Main' here.
                <br />
                <CodeSnippet>
                    <code>
                        {`function Main(){`}
                        <br />
                        {' ' + `return <div>hi</div>`}
                        <br />
                        {`}`}
                    </code>
                </CodeSnippet>
                <br />
                <Otherimportant>-</Otherimportant> I'm going to add some sample text between my div(s).
                <MainFnImage />
                <br />
                <br />
                <Otherimportant>-</Otherimportant> We'll now be creating a "PopUp" component which we'll be using in our "Main" component.
                <CodeSnippet>
                    <Popup />
                </CodeSnippet>
                <br />
                <Otherimportant>-</Otherimportant> Let's also use this PopUp function that we've just created in our Main component. Let's add this line right above the closing div tag.
                <CodeSnippet>
                    <code>
                        {`<PopUp />`}
                        <br />
                        {`</div>`}
                    </code>
                </CodeSnippet>
                <br />
                You would now be able to see  something like the image below.
                <br /><Otherimportant>(Notice the addition of content from the popup function at the end of the paragraph with the button)</Otherimportant>
                <PopUpFn />
                <br />
                <br />
                <Otherimportant>-</Otherimportant> We shall now be adding state to our button. We will be using the <Otherimportant>useState hook</Otherimportant> for this.
                <br />
                We're resorting to setting the default state as 'false', so as the user clicks on the "x"(the button), the state will be updated to 'true'.
                <br />
                Now, if the state of 'default' is 'false', the pop-up box remains, but if it's true, we do not want to render to pop-up box.
                <br/>
                We have our react component "PopUp" which has to necessarily return something, in this case we are returning our pop-up box.
                <br />
                So, how do we get about this? 
                <CodeSnippet>
                    <UseStatesec />
                </CodeSnippet>
                <br/>
                <Otherimportant>-</Otherimportant> If you actually look at your application now, it works exactly how it should be!
                <br />
                We could stop here, or maaaybeeeee <Otherimportant>add a timeout to this pop-up</Otherimportant> we have created!
                <br />
                <br />
                <Otherimportant>-</Otherimportant> Let's get started!
                <br />
                To have a timeout, we will be using the 'setTimeout' function along with the 'useEffect' hook!
                How exactly will this work for us? 
                <br />
                In lay-man's words, the 'useEffect' hook will be a 'side-effect' to our pop-up function. So, as a 'side-effect' it will set a timer after which it will update the state of 'close' to 'true'. Since the state is changed, the pop-up component's value will be returned as 'null'.
                <br />
                Let's code this down now!
                <br />
                <Otherimportant>I will also be adding an if-else condition, just to double ensure the 'setTimeout' function.(it's not mandatory though)</Otherimportant>
                <CodeSnippet>
                    <SetTimer />
                </CodeSnippet>
                <br />
                Yay! Our pop-up application works!
                <br />
                You might be wondering why I didn't style, I left it upto you to style it as you like! But here's the link of a <Link href="https://codesandbox.io/s/blissful-hill-2n21c?file=/src/index.js"><a><Websites>Sandbox</Websites></a></Link> where I've styled as much as I could (don't judge me but styling bores me :/ ).
                <br />
                <br />
                <Subheading>
                    Bonus section: How to store data in the local storage?
                </Subheading>
                <br />
                Well to start off with, adding data into the local storage requires a 'key-value' pair. So we'll just get started with creating a 'key-value' pair and store it in the local storage!
                <br />
                We have to add 4 more lines of code in our 'useEffect' hook, and yay we've added data to our local storage!
                <CodeSnippet>
                    <LocalStore />
                </CodeSnippet>
                <br />
                To see where this Data is stored, open your browser's dev tools and then go to the 'storage' tab.
                <DevTools />
            </Body1>
        </div>
    )
}