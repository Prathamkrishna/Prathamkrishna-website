import styled from "styled-components"

function Popup(){
    return(
        <div>
            <code>
                {`function PopUp() {`}
                <br />
                {`return (`}
                <br />
                <LeftSpace>
                    {`<div>`}
                    <br />
                    <LeftSpace>
                        <LeftSpace>
                        {`Hey! This is our pop-up component!`}
                        </LeftSpace>
                    </LeftSpace>
                    <br />
                    <LeftSpace>
                        <LeftSpace>
                        {`<button>x</button>`}
                        </LeftSpace>
                    </LeftSpace>
                    <br />
                    <LeftSpace>
                    {`</div>`}
                    </LeftSpace>
                </LeftSpace>
                <br />
                <LeftSpace>
                    {`);`}
                </LeftSpace>
                <br />
                {`}`}
            </code>
        </div>
    )
}

function UseStatesec(){
    return(
        <code>
            {`const [close, setClose] = useState(false)`}
            <br />
            {`useEffect(()=>{`}
            <br />
            <LeftSpace>
            {`setClose(true)`}
            </LeftSpace>
            <br />
            {`})`}
            <br />
            {`if(close) return null;`}
            <br />
            {`else{`}
            <br />
            <LeftSpace>
                    {`<div>`}
                    <br />
                    <LeftSpace>
                        <LeftSpace>
                        {`Hey! This is our pop-up component!`}
                        </LeftSpace>
                    </LeftSpace>
                    <br />
                    <LeftSpace>
                        <LeftSpace>
                        {`<button onClick=(()=>setClose(true))>x</button>`}
                        </LeftSpace>
                    </LeftSpace>
                    <br />
                    <LeftSpace>
                    {`</div>`}
                    </LeftSpace>
                </LeftSpace>
                <br />
            {`}`}
        </code>
    )
}

function SetTimer(){
    return(
        <code>
            {`const [close, setClose] = useState(false)`}
            <br />
            {`useEffect(()=>{`}
            <br />
            <LeftSpace>
                {`if (close) return;`}
            </LeftSpace>
            <br />
            <LeftSpace>
            {`else
      setTimeout(() => {setClose(true)}, 5000})`}
            </LeftSpace>
            <br />
            {`})`}
            <br />
            {`if(close) return null;`}
            <br />
            {`else{`}
            <br />
            <LeftSpace>
                    {`<div>`}
                    <br />
                    <LeftSpace>
                        <LeftSpace>
                        {`Hey! This is our pop-up component!`}
                        </LeftSpace>
                    </LeftSpace>
                    <br />
                    <LeftSpace>
                        <LeftSpace>
                        {`<button onClick=(()=>setClose(true))>x</button>`}
                        </LeftSpace>
                    </LeftSpace>
                    <br />
                    <LeftSpace>
                    {`</div>`}
                    </LeftSpace>
                </LeftSpace>
                <br />
            {`}`}
        </code>
    )
}

function LocalStore(){
    return(
        <code>
            {`const Data = {`}
            <br />
            <LeftSpace>
            {`entry: "name",`}
            </LeftSpace>
            <br />
            <LeftSpace>
            {`name: "prathamkrishna"`}
            </LeftSpace>
            <br />
            {`}`}
            <br />
            {`localStorage.setItem(Data.entry, Data.name);`}
        </code>
    )
}

const LeftSpace = styled.span`
    margin: 20px;
`

export {Popup, UseStatesec, SetTimer, LocalStore};