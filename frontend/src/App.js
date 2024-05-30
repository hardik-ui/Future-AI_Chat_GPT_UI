// src/App.js
import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import ChatHistoryPanel from "./ChatHistoryPanel";
import ConversationPanel from "./ConversationPanel";
import InputBox from "./InputBox";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import axios from "axios";

const App = () => {
  const [chats, setChats] = useState([{ title: "Chat 1", messages: [] }]);
  const [selectedChat, setSelectedChat] = useState(1);

  const handleSelectChat = (index) => {
    setSelectedChat(index + 1);
  };

  const onCreateNewChat = () => {
    const newChat = selectedChat + 1;
    const newChats = [...chats];
    newChats.push({ title: `Chat ${newChat}`, messages: [] });
    setChats(newChats);
    setSelectedChat(newChat);
  }

  const handleSendMessage = async (text) => {
    const newChats = [...chats];
    newChats[selectedChat -1].messages.push({ sender: "User", text });

    const newMessage = { message: text };

    try {
      const response = await axios.post(
        "http://localhost:8000/chat",
        newMessage
      );
      newChats[selectedChat - 1].messages.push({
        sender: "Bot",
        text: response.data.response,
      });
      setChats(newChats);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Box sx={{ width: "300px", borderRight: "1px solid #e0e0e0" }}>
          <ChatHistoryPanel chats={chats} onSelectChat={handleSelectChat} onCreateNewChat={onCreateNewChat} />
        </Box>
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <ConversationPanel messages={chats[selectedChat-1].messages} selectedChat={selectedChat} />
          <InputBox onSendMessage={handleSendMessage} onCreateNewChat={onCreateNewChat} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
