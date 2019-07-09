import React from 'react'

const Notification = (props)=>{
  const notificationStyle = {
    color: "green",
    backgroundColor: "lightgray",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10    
  }
  
  //don't show if empty
  if(props.newNotification === null){
    return <div></div>
  }

  return (
    <div style={notificationStyle}>
        {props.newNotification}
    </div>
  )
}

export default Notification