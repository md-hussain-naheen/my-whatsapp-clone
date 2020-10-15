import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import "./Chat.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "./axios";


function Chat({ messages }) {
 const [input, setInput] = useState("");

 const sendMessage = async (e) =>{
    e.preventDefault();


   var tempTime= new Date().toLocaleTimeString();
   const currTime = tempTime;
    



    await axios.post('/messages/new',{
       message: input,
       name: "Naheen",
       timestamp: currTime ,
       received: true,
    });
    setInput("");
};    

    return (
        <div className='chat'>
         <div className="chat-header">
             <Avatar/>
             <div className="chat-headerInfo">
                 <h3>CHAT ROOM</h3>
                 <p>Last seen at...</p>
             </div>
             <div className="chat-headerRight">
                 <IconButton>
                  <SearchOutlined/>
                 </IconButton>
                 <IconButton>
                   <AttachFile/>  
                 </IconButton>
                 <IconButton>
                    <MoreVert/> 
                 </IconButton>
             </div>
         </div>
         <div className='chat-body'>

             {messages.map((message) => (
                 <p className={`chat-message ${message.received && "chat-receiver"}`}>
                 <span className="chat-name">{message.name}</span>  
                   {message.message}
                   <span className="chat-timestamp">
                       {message.timestamp}
                   </span>
                   </p>
             ))}

             
                
            </div>
        <div className="chat-footer">
            <InsertEmoticonIcon/>
            <form>
                <input 
                   value={input} 
                   onChange={(e) => setInput(e.target.value)}
                   placeholder="Type a messsage"
                   type="text"              
                />
                <button onClick={sendMessage}  type="submit">
                    Send a message
                </button>
            </form>
            <MicIcon/>
        </div>  
        </div>
    )
}

export default Chat
