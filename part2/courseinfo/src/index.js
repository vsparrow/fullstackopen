import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <h1>{props.course.name}</h1>        
        </div>    
    )
}

const Part = (props) => {
    return (
        <p>
          {props.part} {props.exercises}  
        </p>
    )
}

const Content = (props) => {
    const allparts = (parts) => {
        return parts.map(part => <Part part={part.name} exercises={part.exercises}/>)
    }
    return (
        <div>
            {allparts(props.course.parts)}
        </div>    
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
        </div>
    )
}

const Course = (props) => {
    return (
        <div>    
            <Header course={props.course}/>
            <Content course={props.course}/>
        </div>    
    )
}

//delete this comment
    //old return
            //     <Header course={course}/>
            // <Content course = {course} />
            // <Total course={course} />



const App = () => {
    const course = { 
    name: "Half Stack application development",
    parts: [
        {
            name:  "Fundamentals of React",
            exercises: 10
        },
        {
            name:  "Using props to pass data",
            exercises: 7
        },
        {
            name:  "State of a component",
            exercises: 14
        }
    ]
    }
    return (
        <div>    
            <Course course={course}/>
        </div>    
    )
    
    //old return
            //     <Header course={course}/>
            // <Content course = {course} />
            // <Total course={course} />
}// end app

ReactDOM.render(<App />, document.getElementById('root'));
