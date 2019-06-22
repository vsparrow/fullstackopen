import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'

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
        return courses.map(course => <Course key={course.id} course={course}/>)
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
