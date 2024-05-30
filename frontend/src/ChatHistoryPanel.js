// src/components/ChatHistoryPanel.js
import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ChatHistoryPanel = ({ chats, onSelectChat, onCreateNewChat }) => {
  return (
    <div style={{ widrh: "100%", height: "100%", backgroundColor: "#f5f5f5", padding: "1em" }}>
        <Typography variant="h6" gutterBottom>
          Further AI <AddIcon sx={{paddingLeft: "10px", paddingTop: "10px"}} onClick={onCreateNewChat} />
        </Typography>
      <List>
        {chats.map((chat, index) => (
          <ListItem button key={index} onClick={() => onSelectChat(index)}>
            <ListItemText primary={chat.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ChatHistoryPanel;
