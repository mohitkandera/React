import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function Movies() {
    const [data , setData] = useState([])

    const API = "https://cat-fact.herokuapp.com/facts";

    const getMovieData = async() => {
        try{
             const response = await axios.get(API);
             console.log(response.data);
             setData(response.data.seacrh);
        }catch(error){
            console.log("Error while fetching  data");
        }
    }

   useEffect(() => {
        getMovieData();
   })

  return (
    {
        data.map((curElement) => {
            return 
        })
    }
  )
}

export default Movies