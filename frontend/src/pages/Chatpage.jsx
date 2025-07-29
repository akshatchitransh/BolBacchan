import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Chatpage = () => {
    const [Chats,setChats] = useState([])
    const fetchChats = async()=>{
        const response = await axios.get('/api/data');
        
        console.log(response.data);
        setChats(response.data)
    }

    useEffect(()=>{
     fetchChats()
    }  ,[])
  return (
    <div>
     {Chats.map((c)=>{return <div key = {c._id}>{c.chatName}</div>})}
    </div>
  )
}

export default Chatpage
