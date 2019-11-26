import React from "react"

let alertStyle = {
            padding:'10px',
            backgroundColor:'#ffa896',
            fontColor:'white',
            margin:'5px',
            borderRadius:'5px'
        }

export default function Alert(props) {
    
    alertStyle.backgroundColor = props.color;
    
    return (
        <div style={alertStyle}>
            <p>{props.message}</p>
        
        </div>
    )
}