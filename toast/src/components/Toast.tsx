import { FC } from 'react'

const Toast:FC = () => {
  
  return (
    <div style={{height:"2rem", width:"6rem",padding:"0.4rem", position:"absolute", top:0,right:0, backgroundColor:"red"}}>
      This is a custom toast
    </div>
  )
}

export default Toast
