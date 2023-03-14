import React from 'react'
import { useNavigate } from "react-router-dom";
function AdTypeButton({action, type}) {
      const navigate  = useNavigate()
  return (
      <button
      onClick={() => navigate(`/ad/create/${action.toLowerCase()}/${type}`)}
      className="btn btn-secondary p-5 col-6"
    >
      {type}
    </button>
  )
}

export default AdTypeButton