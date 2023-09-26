import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { Web3Provider } from "@ethersproject/providers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import "./App.css";
const ethers = require("ethers");
const { ethereum } = window;

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);



  useEffect(() => {
    const loadProvider = async () => {
      if (ethereum && ethereum.isMetaMask) {
        try {
          await ethereum.request({ method: "eth_requestAccounts" });
          const provider = new Web3Provider(ethereum); // Updated usage here
          const signer = provider.getSigner();
          const address = await signer.getAddress();

          setAccount(address);

          const contractAddress = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";
          const contract = new ethers.Contract(contractAddress, Upload.abi, signer);
          setContract(contract);
          setProvider(provider);
        } catch (error) {
          console.error("Error connecting to Metamask:", error);
        }
      } else {
        console.error("Metamask is not installed or not detected.");
      }
    };

    loadProvider();
  }, []);



  return (
    <section>
      {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && <Modal setModalOpen={setModalOpen} contract={contract} />}

      <div className="App">
        <h1 style={{ color: "white" }}>Pixel Patients</h1>
        {/* Your other components and UI elements */}
        <p style={{ color: "white" }}>
          Account: {account ? account : "Not connected"}
        </p>
        <FileUpload account={account} provider={provider} contract={contract} />
        <Display contract={contract} account={account} />
      </div>
    </section>
  );
}

export default App;
