import React from 'react'

function Review({data}) {
  return (
    <div>
    {data.map(item=>(
        <div> 
            <h6>{item.name}</h6>
            <p>date:{item.date}</p>
            <h6>Rating:{item.rating}</h6>
            <p>{item.comments}</p>
        </div>    ))}
    </div>
  )
}

export default Review