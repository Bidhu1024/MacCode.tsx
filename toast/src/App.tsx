import { useState } from "react";
import "./App.css";
import Toast from "./components/Toast";
function App() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
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
      <button className="buttons" onClick={handleClick}>
        error
      </button>
      <button className="buttons">warning</button>
      <button className="buttons">success</button>
      {isClicked && <Toast />}
    </div>
  );
}

export default App;
