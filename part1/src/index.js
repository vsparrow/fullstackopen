import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// const Display = ({counter}) => <div>{counter}</div>

// // const Button = (props) => { return(
// //     <button onClick={props.handleClick}>{props.text}</button>  
// // )}

// const Hello = ({name,age}) => {
//     const bornYear = () => new Date().getFullYear() - age

//     return (
//         <div>
//             <p>Hello {name}, you are {age} years old</p>
//             <p>So you were probably born {bornYear()}?</p>
//         </div>
//     )
// }

// const Footer = () => {
//     return (
//         <div>    
//             greeting app created by 
//             <a href="https://github.com/mluukkai">mluukkai</a>
//         </div>    
//     )
// }
// const Button = ({handleClick,text}) => (<button onClick={handleClick}>{text}</button> ) 
const Display = (props) => <div>::{props.value}</div>
const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.name}</button>    
    )    
}

const App = (props) => {
    const [value, setValue] = useState(0)
    // const setToValue = (newValue) => () => {setValue(newValue)}
    const setToValue = (newValue) => {
        setValue(newValue)
    }
    
    return (
        <div>
            <Display value={value}/>
            <Button handleClick={()=>{setToValue(1000)}} name="thousand"/>
            <Button handleClick={()=>{setToValue(0)}} name="reset"/>
            <Button handleClick={()=>{setToValue(value + 1)}} name="incrementer"/>
            
        </div>    
    )
    // const [value, setValue] = useState(10)
    
    // // const hello = (who) => {
    // //     const handler = () => console.log("hello ", who)
    // //     return handler
    // // }
    // const hello = (who) => () => {console.log('hello ',who)}
    
    // return (
    //     <div>
    //         {value}
    //         <button onClick={hello('world')}> button</button>
    //         <button onClick={hello('react')}> button</button>
    //         <button onClick={hello('function')}> button</button>
    //     </div>    
    // )



    // const handleClick = (input) => {
    //     if(input === "log") {console.log("clicked")}
    //     if(input === "pluss"){setValue(value+1)}
    //     if(input === "plus"){console.log(value)}
    // }

    
    // return(
    //     <div>
    //         <p>{value}</p>
    //         <button onClick={()=>{handleClick("log")}}>reset to zero </button>
    //         <button onClick={()=>{handleClick("pluss")}}>increase</button>
    //     </div>     
    // )
    // const [counter, setCounter] = useState(0)
    // const setToValue = (value) => () => {setCounter(value)}
    
    // // const increaseByOne = () => setCounter(counter + 1)
    // // const setToZero = () => setCounter(0)

    // // const handleClick = () => { console.log("clicked")}
    // // setTimeout( ()=> setCounter(counter + 1), 1000)
    // // console.log(`rendering... ${counter}`)
    // // const {counter} = props
    // const name = "Peter"
    // const age = 10
    // // Event handlers are functions ********************
    // return (
    //     <>
    //         <Display counter={counter}/>
    //         <Button 
    //             handleClick={() => setToValue(counter + 1)() }
    //             text='plus'
    //         />
    //         <Button 
    //             handleClick={() => setToValue(counter - 1)() }
    //             text = 'minus'
    //         />
    //         <Button 
    //             handleClick={() => setToValue(0)()}
    //             text = 'zero'
    //         />
    //         <h1>Greetings</h1>
    //         <Hello name="Maya" age={25 + 10}/>
    //         <Hello name={name} age={age}/>
    //         <Footer />
    //     </>
    // )
}

ReactDOM.render(<App />, document.getElementById('root'))

// let counter = 1
// const refresh = () => {
//     ReactDOM.render(<App counter={counter}/>, document.getElementById('root'))    
// }



// refresh()
// setInterval(()=>{
//     refresh()
//     counter += 1    
// },1000)
// counter += 1
// refresh()
// counter += 1
// refresh()