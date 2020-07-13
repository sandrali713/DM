import React, {useState} from 'react';

function Namepicker(props){
    const [editName, setEditName] = useState(false)
    return <div className="set-name">
      <input className="username" placeholder="Set Username"/>
        {props.text}
      <button className="ok">OK</button>
    </div>
  }
  
  export default Namepicker