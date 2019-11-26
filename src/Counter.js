import React from "react"

export default function Counter(props)
{
    
    console.log(props);
    let style = {
        fontFamily:'Courier New',
        fontSize:'32px'
    }
    
    return (
        <div style={style}>
        {props.number}
        </div>
    )
}