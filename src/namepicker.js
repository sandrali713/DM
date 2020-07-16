import React, {useState, useEffect} from 'react';
import {FiEdit, FiSave} from 'react-icons/fi'

function Namepicker(props){
  const [name,setName] = useState('')
  const [editing,setEditing] = useState(false)
  useEffect(()=>{
    const n = localStorage.getItem('name')
    if(n) {
      setName(name)
      props.saveName(name)
    }
  }, [])
  return <div className="set-name">
    {editing && <>
      <input className="username" placeholder="Set Username" value={name} 
        onChange={e=> setName(e.target.value)}
      />
      <FiSave size={20} color="white" 
        onClick={()=> {
          setEditing(!editing)
          props.saveName(name)
          localStorage.setItem('name',name)
        }}
      />
    </>}

    {!editing && <>
      <span>{name}</span>
      <FiEdit size={20} color="white" 
        onClick={()=> setEditing(!editing)}
      />
    </>}
  </div>
  }
  
  export default Namepicker