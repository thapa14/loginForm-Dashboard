import React from "react";
import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
} from "@mui/material";

function Checkbox(props) {
  const { name, label, userData, setUserData } = props;
  const setCheckbox = () => {
    setUserData((prev) => ({ ...prev, [name]: !prev[name] }));
  };
  return (
    <FormControl sx={{ alignSelf: "flex-start" }}>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            checked={userData.Checkbox}
            onChange={setCheckbox}
          />
        }
        label={label}
      />
    </FormControl>
  );
}

export default Checkbox;
