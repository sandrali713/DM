import React, {useEffect} from 'react';
import './App.css';
import Footer from './footer'
import Message from './message'
import Namepicker from './namepicker'
import {initialize, useDatu} from 'datu'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  useEffect(()=>{
    const path = window.location.pathname
    if(path.length<2) window.location.pathname='/home'
  }, [])
  return <BrowserRouter>
    <Route path="/:room" component={Room} />
  </BrowserRouter>
}

function Room(props) {
  const room = props.match.params.room
  const {messages, send} = useDatu(room)
  return (
    <main className="App">
    <header>
        <span class = "title">Chatter</span>
        <Namepicker/>
    </header>
    <div className="messages">
      {messages.map((m,i)=> <Message key={i} text={m.text} />)}
    </div>

    <Footer
        onSend={(text)=> send({text, room})} 
    />
      
    </main>
  )
}

export default App;


const firebaseConfig = {
  apiKey: "AIzaSyDW7FfLse6O8gwKDYJd4GCu255jR88YdfE",
  authDomain: "chatter-hcde.firebaseapp.com",
  databaseURL: "https://chatter-hcde.firebaseio.com",
  projectId: "chatter-hcde",
  storageBucket: "chatter-hcde.appspot.com",
  messagingSenderId: "181021332323",
  appId: "1:181021332323:web:10f331694e90aa6257b956",
  measurementId: "G-WTWXHRY66R"
};
initialize(firebaseConfig)