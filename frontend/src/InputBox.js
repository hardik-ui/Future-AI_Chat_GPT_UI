// src/components/InputBox.js
import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";

const InputBox = ({ onSendMessage, onCreateNewChat }) => {
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "1em",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      {/* <TextField
        fullWidth
        variant="outlined"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
      />
      <Button variant="contained" color="primary" onClick={handleSendMessage}>
        Send
      </Button> */}
      <TextField
        fullWidth
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AddIcon onClick={onCreateNewChat} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSendMessage}>
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
          sx: {
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px", // Adjust this value to change the roundness of the corners
            },
          },
        }}
        placeholder="Type your message..."
      />
    </Box>
  );
};

export default InputBox;
