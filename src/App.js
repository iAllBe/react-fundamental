import React, {useEffect, useState} from 'react';
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context/context";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsLoading(false)
    }, []);

    return (
        <div className='App'>
            <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
                <BrowserRouter>
                    <Navbar/>
                    <AppRouter/>
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    )
}

export default App;
