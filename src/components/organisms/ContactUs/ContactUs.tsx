import React from 'react';
import ContactCard from '../../molecules/ContactCard';
import './ContactUs.scss';

interface Contact {
  name: string
  department: string
  email: string
  phone: string
}

const contacts: Contact[] = [
  {
    name: "Daniel Márquez Calvillo",
    department: "Departamento de diseño",
    email: "daniel.marquez.tec@gmail.com",
    phone: "+52 664 363 3852"
  },
  {
    name: "Daniel Márquez Calvillo",
    department: "Departamento de diseño",
    email: "daniel.marquez.tec@gmail.com",
    phone: "+52 664 363 3852"
  },
  {
    name: "Daniel Márquez Calvillo",
    department: "Departamento de diseño",
    email: "daniel.marquez.tec@gmail.com",
    phone: "+52 664 363 2323"
  }
];

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page" id='contact'>
      <h2>CONTÁCTANOS</h2>
      <div className="contact-cards">
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.name}
            department={contact.department}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    </div>
  )
}

export default ContactPage
