import React from 'react'

const Notification = (props)=>{
  //don't show if empty
  if(props.newNotification === null){
    return <div></div>
  }

  let fontColor = "green"
  //'has already been removed from server'
  if(props.newNotification.includes('has already been removed from')){fontColor='red'}

  const notificationStyle = {
    color: fontColor,
    backgroundColor: "lightgray",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10    
  }
  
  
  return (
    <div style={notificationStyle}>
        {props.newNotification}
    </div>
  )
}

export default Notification