import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
function CartNavBar() {
  const navigate = useNavigate()
  return (
    
    <div className="notificationnavbar-container">
      <div className="rapper" >
        <ArrowBackIcon onClick = {() => navigate('/')} />
        <div className="title" >
            <p>
                محتوي السلة <ShoppingCartIcon />
            </p>
        </div>
        <DeleteIcon />
      </div>
    </div>
  );
}

export default CartNavBar