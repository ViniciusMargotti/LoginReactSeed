import React from 'react'

import Routes from '../components/Routes'

import './App.css'
import ReactNotification from "react-notifications-component";

const App = () => (
    <div  className = "app-container">
     < ReactNotification/>
     <main className="App">
     <Routes/>
    </main>
    < / div >
)

export default App
