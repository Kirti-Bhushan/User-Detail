import './App.css';
import {useState} from 'react'
import UserDetail from './Components/UserDetail';
import DisplayUserDetail from './Components/DisplayUserDetail';

function App() {
  const [data,setData]=useState([])
  const [title,setTitle]=useState([])
  const [id,setId]=useState(0)

  const displayData=(dataValue)=>{
    setData(dataValue)
  }

  const displayTitle=(titleText)=>{
    setTitle(titleText)
  }

  const displayId=(idNumber)=>{
    setId(idNumber)
  }

  return (
    <div className="App">
      <UserDetail  displayData={displayData} displayTitle={displayTitle} displayId={displayId}/>
      {data.length>0?(<DisplayUserDetail data={data} title={title} id={id}/>):null}
    </div>
  );
}

export default App;
