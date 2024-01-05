import React, { useState } from 'react'

const StringArea = ({text}) => {

    const [expand,setExpand] = useState(false)

    let shortText = text

    if(!expand && text.length > 250){
        shortText = text.slice(0,250) + " ...more"
    }

  return (
    <div onClick={() => setExpand(!expand)}>
        {shortText.split('\n').map((line,index) => (
            <span key={index}>
                {line} <br/>
            </span>
        ))}
    </div>
  )
}

export default StringArea