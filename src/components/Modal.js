import { useEffect } from "react";
import "./Modal.css";
const Modal = ({ setModalOpen, contract }) => {
  const sharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.allow(address);
    setModalOpen(false);
  };
  useEffect(() => {
    const accessList = async () => {
      try {
        const addressList = await contract.shareAccess();
  
        if (Array.isArray(addressList)) {
          let select = document.querySelector("#selectNumber");
          select.innerHTML = ""; // Clear existing options
  
          for (let i = 0; i < addressList.length; i++) {
            let opt = addressList[i];
            let e1 = document.createElement("option");
            e1.textContent = opt;
            e1.value = opt;
            select.appendChild(e1);
          }
        } else {
          console.error("shareAccess did not return an array:", addressList);
        }
      } catch (error) {
        console.error("Error calling shareAccess:", error);
      }
    };
  
    contract && accessList();
  }, [contract]);
  
return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="title">Share with</div>
          <div className="body">
            <input
              type="text"
              className="address"
              placeholder="Enter Address"
            ></input>
          </div>
          <form id="myForm">
            <select id="selectNumber">
              <option className="address">People With Access</option>
            </select>
          </form>
          <div className="footer">
            <button
              onClick={() => {
                setModalOpen(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button onClick={() => sharing()}>Share</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;