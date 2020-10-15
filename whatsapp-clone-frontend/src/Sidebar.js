import React from 'react'
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
         <div className="sidebar-header">
             <Avatar src="https://scontent.fdac5-2.fna.fbcdn.net/v/t1.0-9/121172259_3975689402448163_438063878294538380_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=1CCNhlu3N5UAX_-7qFT&_nc_ht=scontent.fdac5-2.fna&oh=e1badd3aaf70bff28896bbd4fe29778b&oe=5FAAE429"/>
          <div className="sidebar-headerRight">
              <IconButton>
              <DonutLargeIcon/>
              </IconButton>
              <IconButton>
              <ChatIcon/>
              </IconButton>
              <IconButton>
              <MoreVertIcon/>
              </IconButton>
              
          </div>
         </div>
         <div className="sidebar-search">
             <div className="sidebar-searchContainer">
              <SearchOutlined/>
              <input placeholder="Search or start new chat" type="text"/>
             </div>
         </div>
         <div className="sidebar-chats">
             <SidebarChat/>
             <SidebarChat/>
             <SidebarChat/>
         </div>
        </div>
    )
}

export default Sidebar
