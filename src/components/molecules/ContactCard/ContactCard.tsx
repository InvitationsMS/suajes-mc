import React from 'react';
import './ContactCard.scss';

import { IconType } from 'react-icons';

interface ContactCardProps {
  name: string;
  department: string;
  email: string;
  phone: string;
  IconComponent: IconType;
}

const ContactCard: React.FC<ContactCardProps> = ({ IconComponent, name, department, email, phone }) => {
  return (
    <div className="contact-card">
      <div className='contact-card-interior'>
        <IconComponent size={50} color="#244E7B" />
        <div className="contact-info">
          <div className='header'>
            <h3>{name}</h3>
            <span>{department}</span>
          </div>
          <p>
            <i className="fa-solid fa-envelope" style={{ paddingRight: '3px' }}></i>
            <a href={`mailto:${email}`} className="email-link">{email}</a>
          </p>
          <p>
            <i className="fa-solid fa-phone-flip" style={{ paddingRight: '3px' }}></i>
            {phone}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;