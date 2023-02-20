import React, { useEffect } from "react";
import { Modal } from "@mui/material";
import { IComponentPorps } from "../../shared/types";
interface IModalOverLayProps extends IComponentPorps {
  open: boolean;
  handleClose: () => void;
}
function ModalOverLay({ children, open, handleClose }: IModalOverLayProps) {
  return (
    <Modal open={open} onClose={handleClose}>
      <>{children}</>
    </Modal>
  );
}

export default ModalOverLay;
