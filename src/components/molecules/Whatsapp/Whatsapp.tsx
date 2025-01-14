import React, { useEffect, useState } from 'react'
import './Whatsapp.scss'

export interface WhatsappProps {
  children?: React.ReactNode
}

const Whatsapp: React.FC<WhatsappProps> = () => {
  const [stateWtsp, setStateWtsp] = useState(false);
  const [hour, setHour] = useState("");

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
    window.open("https://api.whatsapp.com/send?phone=56956732668&text=Hola%20!", "_blank");
  }

  return (
    <>
      {stateWtsp == true ? (
        <div className="float-chat">

          <div className="header-whatsapp">
            <div className="box-a">
              <div>
                <img src="" alt="" className="avatar-whatsapp" />
              </div>
              <div style={{ marginLeft: "10px" }}>
                <p className="nombre-whatsapp">SUAJES M.C.</p>
                <p className="estado-whatsapp">En línea</p>
              </div>
              <div style={{ marginLeft: "140px" }} className="content-icon-wtsp" onClick={() => closeChat()}>
                <i className="bi bi-x x-icon-wtsp"></i>
              </div>
            </div>
          </div>

          <div className="msg-whatsapp">
            <p style={{ fontSize: "0.9rem", fontWeight: "600" }}>SUAJES M.C.</p>
            <p style={{ fontSize: "0.9rem", marginBottom: "0px" }}>Hola 👋</p>
            <p style={{ fontSize: "0.9rem", marginTop: "0px", marginBottom: "0px" }}>¿Cuál es tu consulta?</p>
            <p style={{ fontSize: "0.7rem", marginTop: "1px", marginLeft: "135px" }}>{hour}</p>
          </div>

          <div className="footer-whatsapp text-center">
            <div className="btn-wtsp">
              <p onClick={() => enviarWtsp()} className="txt-btn-wtsp" style={{ color: "white", marginTop: "0px" }}><i className="fa fa-whatsapp"></i> Iniciar</p>
            </div>
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




















