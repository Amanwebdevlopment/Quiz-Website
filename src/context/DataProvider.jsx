import axios from 'axios'
import React, { children, createContext, useEffect, useState } from 'react'
export const Data = createContext()
export const DataProvider= ({children}) => {
    const [quizData,setQuizData]= useState([])
    const [categoryName,setCategoryName] = useState(()=>{
        return JSON.parse(localStorage.getItem("categoryName")) || "";
    })
    console.log(categoryName)
    const [difficulty,setDifficulty]=useState('')
    useEffect(()=>{
        if(!categoryName) return;
        axios.get(`https://the-trivia-api.com/v2/questions?limit=10&categories=${categoryName}`).then((res)=>{
            setQuizData(res.data)
        }).catch((error)=>{console.log(error);
        })
    },[categoryName])
    return (
        <Data.Provider  value={{quizData,setDifficulty,difficulty,setCategoryName}}>
            {children}  
        </Data.Provider >

            )
}
