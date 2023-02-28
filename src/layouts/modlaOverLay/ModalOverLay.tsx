import React, { useContext } from "react";
import { Modal } from "@mui/material";
import { IComponentPorps } from "../../shared/types";
import { DarkModeContext } from "../../contexts/darkModeContext/darkModeContext";
interface IModalOverLayProps extends IComponentPorps {
  open: boolean;
  handleClose: () => void;
}
function ModalOverLay({ children, open, handleClose }: IModalOverLayProps) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={`theme-${darkMode ? "dark" : "light"}`}
    >
      <>{children}</>
    </Modal>
  );
}

export default ModalOverLay;
