// src/components/ConversationPanel.js
import React from "react";
import { Box, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import UploadIcon from "@mui/icons-material/Upload";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarIcon from "@mui/icons-material/Star";

const ConversationPanel = ({ messages, selectedChat }) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        sx={{
          height: "1195px",
          width: "2100px",
          overflowY: "auto",
          padding: "1em",
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h6" gutterBottom>
          CHAT {selectedChat}
        </Typography>
        {messages.map((message, index) => (
          <Box key={index} sx={{ marginBottom: "1em" }}>
            <Typography
              variant="body1"
              color="textPrimary"

            >
             <IconButton>
                      {message.sender === "User" ? (
                        <AccountCircleIcon />
                      ) : (
                        <StarIcon />
                      )}
                    </IconButton> {message.text}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <IconButton>
          <MoreHorizIcon color="black" sx={{paddingRight: "10px"}} />
          <UploadIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ConversationPanel;
