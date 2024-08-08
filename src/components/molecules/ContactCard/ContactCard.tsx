// ContactCard.tsx
import React from 'react';
import './ContactCard.scss';

interface ContactCardProps {
  name: string;
  department: string;
  email: string;
  phone: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, department, email, phone }) => {
  return (
    <div className="contact-card">

      <div className="icon">
        <i className="fa fa-briefcase"></i> {/* Icono de maletín */}
      </div>

      <div className="contact-info">
        <h3>{name}</h3>
        <p>{department}</p>

        <div className="email">
          <i className="fa fa-envelope"></i> {/* Icono de correo */}
          <span>{email}</span>
        </div>

        <div className="phone">
          <i className="fa fa-phone"></i> {/* Icono de teléfono */}
          <span>{phone}</span>
        </div>
        
      </div>
    </div>
  );
};

export default ContactCard;
