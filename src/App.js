import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>User Details Modal</h1>
      </div>
      <div>
        <button
          style={{
            backgroundColor: "blueviolet",
            color: "white",
            padding: "8px",
            fontSize: "18px",
            borderRadius: "8px",
          }}
          onClick={() => setIsOpen(true)}
        >
          Open Form
        </button>
      </div>
      <div>{isOpen && <Modal onClose={()=>setIsOpen(false)} />}</div>
    </div>
  );
}

export default App;
