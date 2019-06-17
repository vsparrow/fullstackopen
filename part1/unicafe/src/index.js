import React, {useState} from 'react';
import ReactDOM from 'react-dom';


//display heading
//buttons
//display stats
//show stats
const Heading = (props) => <h2>{props.title}</h2> 
const Button = (props) => <button onClick={props.handleClick}>{props.name}</button>
// const Statistics = (props) => <div>{props.name} {props.value}</div>
const Statistics = (props) => {
    let percent = ""
    if(props.name === "positive"){percent = "%"}
    // if(props.value === 0) {return(<div></div>)}
        // <div>{props.name} {props.value}{percent}</div>        
    return(

        <tr><td>{props.name}</td><td>{props.value}{percent}</td></tr>        
    )
}
const ShowStatistics = (props)=>{
    if(props.good === 0 && props.neutral === 0 && props.bad === 0){
        return <div>No feedback given</div>
    }
    let good = props.good
    let neutral = props.neutral
    let bad = props.bad
    return(
            <table>
                <tbody>
                    <Statistics name="good" value={good} />
                    <Statistics name="neutral" value={neutral} />
                    <Statistics name="bad" value={bad} />
                    <Statistics name="all" value={good + neutral + bad} />
                    <Statistics name="average" value={((good - bad) /(good + neutral + bad)) || 0} />
                    <Statistics name="positive" value={  (((good * 100) /(good + neutral + bad) )  || 0)} />
                </tbody>
            </table>
    )
}


const App = () => {
    //save clicks here
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
    return(
        <div>
            <Heading title="give feedback"/>
            <Button handleClick={()=>{setGood(good + 1)}} name="good" />
            <Button handleClick={()=>{setNeutral(neutral + 1)}} name="neutral" />
            <Button handleClick={()=>{setBad(bad + 1)}} name="bad" />
            <Heading title="statistics"/>
            <ShowStatistics good={good} neutral={neutral} bad={bad}/>
        </div>    
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
