import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css";

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat-info">
                <h2>The room name</h2>
                <p>Latest message</p>
            </div>
        </div>
    )
}

export default SidebarChat
