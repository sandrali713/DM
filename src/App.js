import React, {useState} from 'react';
import './App.css';
import Footer from './footer'
import Message from './message'


function App() {
  const [messages,setMessages] = useState([])
  return (
    <main className="main">
    <div className="App">
    <header>
        <span class = "title">Chatter</span>
    </header>
    {messages.map((m,i)=> <Message key={i} text={m} />)}

    <Footer
        onSend={(text)=> setMessages([...messages, text])} 
    />
      
    </div>
  );
}

export default App;
