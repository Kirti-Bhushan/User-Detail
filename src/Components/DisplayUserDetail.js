import React from 'react'

const DisplayUserDetail = ({data,title,id}) => {
    
    return (
        <div>
            <h4>User Detail</h4>
        <div>
            {id ?<p>ToDo Id : {id}</p>:''}
            {title?<p>ToDo Title: {title}</p>:''}
            {data && data.length>0 ?<p>User Id: {data[0].id}</p>:''}
            {data && data.length>0 ?<p>Name: {data[0].name}</p>:''}
            {data && data.length>0 ?<p>User Id: {data[0].email}</p>:''}
        </div>
        </div> 
    )
}

export default DisplayUserDetail
