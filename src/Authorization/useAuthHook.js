import { useState } from "react";

const useAuth = () => {
  const [authed, setAuthed] = useState(false);
  return {
    authed,
    login: () => {
      return new Promise((res) => {
        setAuthed(true);
        res();
      });
    },
    logout: () => {
      return new Promise((res) => {
        setAuthed(false);
        res();
      });
    },
  };
};

export default useAuth;
