import React, {useState} from 'react';
import ReactDOM from 'react-dom';


//display heading
//buttons
//display stats
//show stats
const Heading = (props) => <h2>{props.title}</h2> 
const Button = (props) => <button onClick={props.handleClick}>{props.name}</button>
const Statistic = (props) => <div>{props.name} {props.value}</div>
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
            <Statistic name="good" value={good} />
            <Statistic name="neutral" value={neutral} />
            <Statistic name="bad" value={bad} />
            <Statistic name="all" value={good + neutral + bad} />
            <Statistic name="average" value={((good - bad) /(good + neutral + bad)) || 0} />
            <Statistic name="positive" value={  (((good * 100) /(good + neutral + bad) )  || 0) + "%"} />
        </div>    
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
