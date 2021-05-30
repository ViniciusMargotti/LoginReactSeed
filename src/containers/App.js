import React from 'react'

import Routes from '../components/Routes'

import './App.css'
import ReactNotification from "react-notifications-component";
import {AuthProvider} from "../contexts/authContext";

const App = () => (
    <AuthProvider>
        <div className="app-container">
            < ReactNotification/>
            <main className="App">
                <Routes/>
            </main>
        </div>
    </AuthProvider>
)

export default App
