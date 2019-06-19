import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = (props)=>{
    return(
        <button onClick={props.handleClick}>{props.text}</button>
    )
}


const App = (props) => {
    const [selected, setSelected] = useState(0)
    let random = () => Math.floor(Math.random() * props.anecdotes.length)    
    const setToSelected = newValue => {setSelected(newValue)}
    //create votes array and set each key to 0
    const [votes,setVotes] = useState([0,0,0,0,0,0,0])
    const setToVotes = (index) => {
        const newVotes = [...votes]
        newVotes[index] = newVotes[index] + 1
        console.log(newVotes)
        setVotes(newVotes)
    }
    // //votes as an object rather than array
    // const [votesObj, setVotesObj] = useState({0:0,1:0,2:0,3:0,4:0,5:0})
    // const setToVotesObj = (key) => {
    //     const copy = { ...votesObj }
    //     copy[selected] += 1
    //     console.log(copy)
    //     setVotesObj(copy)
    // }
    
    const mostVotes = (votes)=> votes.indexOf(Math.max(...votes))
    
    return (
        <div>
            <h2>Anecdote of the day</h2>
            <div>{props.anecdotes[selected]}</div>
            <div>has {votes[selected]} votes</div>
            <Button  handleClick={()=>setToVotes(selected)} text="vote"/>
            <Button  handleClick={()=>{setToSelected(random)}} text="next anecdote" />
            
            <h2>Anecdote with the most votes</h2>
            <div>{anecdotes[mostVotes(votes)]}</div>
        </div>    
    )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));

