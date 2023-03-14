import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdActionButton from "../../../components/buttons/AdActionButton";
import Sidebar from "../../../components/nav/Sidebar";

export default function AdCreate() {
  const [sell, setSell] = useState(false);
  const [rent, setRent] = useState(false);
  // hooks
  const navigate = useNavigate();

  const handleSell = () => {
    setSell(true);
    setRent(false);
  };

  const handleRent = () => {
    setRent(true);
    setSell(false);
  };

  return (
    <div>
      <h1 className="display-1 bg-primary text-light p-5">Ad Create</h1>
      <Sidebar />
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ marginTop: "-16%" }}
      >
<AdActionButton action='Sell' handleAction = {handleSell} showHide={sell}/>
<AdActionButton action='Rent' handleAction = {handleRent} showHide={rent}/>
      
      </div>
    </div>
  );
}
