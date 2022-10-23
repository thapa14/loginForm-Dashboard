import AuthLayout from "./Layout/AuthLayout";
import AuthType from "./Layout/AuthType";
import LoginNavbar from "./Layout/LoginNavbar";
import Navbar from "./Layout/Navbar";
import Modal from "./Layout/Modal";

function layoutContainer() {
  return {
    AuthLayout,
    AuthType,
    LoginNavbar,
    Navbar,
    Modal,
  };
}

export default layoutContainer;
export { AuthLayout, AuthType, LoginNavbar, Navbar, Modal };
