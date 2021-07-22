import React,{ useState, createContext, useEffect } from 'react';


import axios from 'axios';

export const CartProvider = ({children}) => {
    const [token, setToken] = useState(false);

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async() => {
                const res = await axios.get('/user/refresh_token')

                setToken(res.data.accesstoken)

                setTimeout(() => {
                    refreshToken()
                }, 10* 60 * 1000 )
            } 
            refreshToken()
        }
    },[])
}