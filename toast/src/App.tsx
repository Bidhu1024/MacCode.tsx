import { useState } from "react";
import "./App.css";
import Toast from "./components/Toast";

type Types = "error" | "success" | "warning" | "";
function App() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<Types>("");
  const handleClick = (msg: string, types: Types) => {
    setIsClicked(true);
    setMessage(msg);
    setType(types);
    setTimeout(() => {
      setIsClicked(false);
      setMessage("");
      setType("");
    }, 3000);
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        position: "relative",
      }}
    >
      <button
        className="buttons"
        onClick={() => handleClick("Error Exists", "error")}
      >
        error
      </button>
      <button
        className="buttons"
        onClick={() => handleClick("Warning is present", "warning")}
      >
        warning
      </button>
      <button
        className="buttons"
        onClick={() => handleClick("Success", "success")}
      >
        success
      </button>
      {isClicked && <Toast message={message} type={type} />}
    </div>
  );
}

export default App;
