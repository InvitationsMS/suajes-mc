import React, { useEffect, useState } from 'react'
import './Whatsapp.scss'
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

export interface WhatsappProps {
  children?: React.ReactNode
}

const Whatsapp: React.FC<WhatsappProps> = () => {
  const [stateWtsp, setStateWtsp] = useState(false);
  const [hour, setHour] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const now = new Date()
    const horaActual = now.toLocaleTimeString('es-CL', {
      hour: '2-digit',
      minute: '2-digit'
    })
    setHour(horaActual)
  })

  const openCloseChat = () => {
    setStateWtsp(!stateWtsp);
  }

  const closeChat = () => {
    setStateWtsp(false);
  }

  // API WHATSAPP
  const enviarWtsp = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://api.whatsapp.com/send?phone=56956732668&text=${encodedMessage}`,
      '_blank'
    );
    setMessage(''); 
  };

  return (
    <>
      {stateWtsp == true ? (
        <div className="float-chat">

          <div className="header-whatsapp">
            <div className="box-a">
              <div>
                <img src="images\whats-avatar.png" alt="" className="avatar-whatsapp" />
              </div>
              <div style={{ marginLeft: "10px" }}>
                <p className="nombre-whatsapp">SUAJES M.C</p>
                <p className="estado-whatsapp">En línea</p>
              </div>
              <div className="content-icon-wtsp" onClick={() => closeChat()}>
                <CloseIcon fontSize="small" />
              </div>
            </div>
          </div>

          <div className="msg-whatsapp">
            <p style={{ fontSize: "0.9rem", marginBottom: "0px" }}>Hola 👋</p>
            <p style={{ fontSize: "0.9rem", marginTop: "0px", marginBottom: "0px" }}>¿Cuál es tu consulta?</p>
            <p style={{ fontSize: "0.6rem", marginLeft: "144px", marginTop: "7px", color:"rgb(121, 121, 121)" }}>{hour}</p>
          </div>

          <div className="footer-whatsapp text-center">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input-wtsp"
            />
            <button onClick={enviarWtsp} className="btn-send-wtsp">
            <SendIcon fontSize="small" />
            </button>
          </div>

        </div>
      ) : (<></>)
      }

      <a className="float" onClick={() => openCloseChat()}>
        <i className="fa fa-whatsapp my-float"></i>
      </a>

    </>
  )
}

export default Whatsapp




















