import { useState } from "react";
import { Modal, Box } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  color: "white",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: 10,
  boxShadow: 24,
  border: "1px solid #42714262",
  backgroundColor: "#1E1D34",
  p: 4,
};

const DirectFund = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [donateAmount, setDonateAmount] = useState();

 
 
  return (
    <div>
      <button
        className="bg-gradient-to-r from-[#6AFEB0] to-[#5CE3FB] rounded-lg px-4 py-2 text-[#111012] mr-4  text-[18px] w-[100%]"
        onClick={handleOpen}
      >
        Donate
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input
            type="text"
            // value={id}
            className="text-white rounded-lg w-[100%] p-4 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none hidden"
            
          />
          <input
            type="text"
            value={donateAmount}
            placeholder="Amount"
            // onChange={(e) => setDonateAmount(e.target.value)}
            className="text-white rounded-lg w-[100%] p-4 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none"
          />
          <button
            className="bg-gradient-to-r from-[#6AFEB0] to-[#5CE3FB] rounded-lg px-4 py-2 text-[#111012] mr-4 lg:text-[20px] md:text-[20px] text-[18px] w-[100%]"
           
          >
            Donate &rarr;
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default DirectFund;
