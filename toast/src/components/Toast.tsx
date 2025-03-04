import { FC } from "react";
interface ToastP{
message:string;
type: 'error' | 'success' | 'warning' | ''
}
const Toast: FC<ToastP> = ({message,type}) => {
  return (
    <div
      style={{
        height: "2rem",
        width: "6rem",
        padding: "0.4rem",
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: type === 'error' ? "red" : type === "success" ? 'green' : "orange",
      }}
    >
      {message}
    </div>
  );
};

export default Toast;
