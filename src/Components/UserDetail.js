import React,{useState,useEffect} from 'react'
import axios from 'axios'

const UserDetail = (props) => {
    const [userList,setUserList]=useState([])
    
    const handleClick=async (id)=>{
        const data=[]
        userList.forEach(element => {
            if (element.id===id){
                element.clicked=!element.clicked
            }
        });

        await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>(response.data))
        .then((value)=>data.push(value))

        props.displayData(data)

        const toDoTitle=userList[id-1].title
        props.displayTitle(toDoTitle)

        const userId=userList[id-1].id
        props.displayId(userId)


    }

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response=>{
            response.data.forEach(element=>{
                element['clicked']=false
            })
            setUserList(response.data)
        })
        .catch(err=>console.log(err))
    },[])


    return (
        <table>
            <thead>
                <tr>
                    <th>ToDo Id</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {userList.map((users,index)=>(
                    <tr key={index}>
                        <td>{users.id}</td>
                        <td>{users.title}</td>
                        <td>{users.completed ? 'Complete':'Incomplete'}</td>
                        <td><button onClick={()=>handleClick(users.id)}>View User</button></td>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserDetail
