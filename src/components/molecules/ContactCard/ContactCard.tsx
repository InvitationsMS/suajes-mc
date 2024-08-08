// ContactCard.tsx
import React from 'react';
import './ContactCard.scss';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

interface ContactCardProps {
  name: string;
  department: string;
  email: string;
  phone: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, department, email, phone }) => {
  return (
    <div className="contact-card">

        <BusinessCenterOutlinedIcon
          sx={{ color: '#2C5975', fontSize: '75px' }}
        />

      <div className="contact-info">
        <h3>{name}</h3>
        <p>{department}</p>

        <div className="email">
          <i className="fa fa-envelope"></i> 
          <span>{email}</span>
        </div>

        <div className="phone">
          <i className="fa fa-phone"></i> 
          <span>{phone}</span>
        </div>

      </div>
    </div>
  );
};

export default ContactCard;
