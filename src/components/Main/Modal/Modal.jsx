import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalComp = ({children,showModal, setShowModal}) => {

   const modalRef = React.useRef()

  //  console.log(modalRef);
  
  const handleClose = (e) => {
        if(e.target === modalRef.current){
          setShowModal(false)
        }
  }
  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       

        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComp;
