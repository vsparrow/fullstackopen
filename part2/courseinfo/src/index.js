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

const Total = (props) => {
    const getTotal = (course) => {
        let newsum = course.parts.reduce(function(accum, currentval){
            console.log(currentval)
            return accum + currentval.exercises
        },0)
        return newsum
    }
    return (
        <div>
            <p><strong>total of {getTotal(props.course)} exercises</strong></p>
        </div>
    )
    // old return 
    // <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
}


const Content = (props) => {
    const allparts = (parts) => {
        return parts.map(part => <Part key={part.name} part={part.name} exercises={part.exercises}/>)
    }
    return (
        <div>
            {allparts(props.course.parts)}
            <Total course={props.course}/>
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]    
    // const course = { 
    // name: "Half Stack application development",
    // parts: [
    //     {
    //         name:  "Fundamentals of React",
    //         exercises: 10
    //     },
    //     {
    //         name:  "Using props to pass data",
    //         exercises: 7
    //     },
    //     {
    //         name:  "State of a component",
    //         exercises: 14
    //     }
    // ]
    // }
    const allCourses = (courses)=>{
        return courses.map(course => <Course course={course}/>)
    }
    return (
        <div>    
            {allCourses(courses)}
        </div>    
    )
    
    //old return
                // <Course course={course}/>
    
            //     <Header course={course}/>
            // <Content course = {course} />
            // <Total course={course} />
}// end app

ReactDOM.render(<App />, document.getElementById('root'));
