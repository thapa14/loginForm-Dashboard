import { FormControl, FormControlLabel, TextField } from "@mui/material";
import React from "react";

function Input(props) {
  const { id, label, name, type, userData, setUserData, ...other } = props;

  const handleFormChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  const textFieldStyle = {
    width: { xs: "18rem", sm: "20rem" },
    margin: "8px auto",
  };

  return (
    <FormControl>
      <FormControlLabel
        sx={{ margin: "0" }}
        control={
          <TextField
            id={id}
            label={label}
            name={name}
            type={type}
            sx={textFieldStyle}
            value={userData[name]}
            onChange={handleFormChange}
            size="small"
            {...other}
          />
        }
      />
    </FormControl>
  );
}

export default Input;
