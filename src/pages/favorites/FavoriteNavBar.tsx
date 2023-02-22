import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function FavoriteNavBar() {
  const navigate = useNavigate()
  return (
    <div>
      <ArrowBackIcon onClick = {() => navigate('/')} />
      <p>
        المفضلة
      </p>
    </div>
  )
}

export default FavoriteNavBar