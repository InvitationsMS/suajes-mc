import React from 'react';
import ContactCard from '../../molecules/ContactCard';
import texts from '../../../constants/texts';
import './ContactUs.scss';
import { IconType } from 'react-icons';

import { IoDocumentTextOutline } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import { SiAffinitydesigner } from "react-icons/si";

interface Contact {
  IconComponent: IconType
  name: string
  department: string
  email: string
  phone: string
}

const contacts: Contact[] = [
  {
    IconComponent: BsBriefcase,
    name: "Daniel Márquez Calvillo",
    department: "Departamento de diseño",
    email: "daniel.marquez.tec@gmail.com",
    phone: "+52 664 363 3852"
  },
  {
    IconComponent: SiAffinitydesigner,
    name: "Daniel Márquez Calvillo",
    department: "Departamento de diseño",
    email: "daniel.marquez.tec@gmail.com",
    phone: "+52 664 363 3852"
  },
  {
    IconComponent: IoDocumentTextOutline,
    name: "Daniel Márquez Calvillo",
    department: "Departamento de diseño",
    email: "daniel.marquez.tec@gmail.com",
    phone: "+52 664 363 2323"
  }
]

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page" id='contact'>
      <h2>{texts.contact.title}</h2>
      <div className="contact-cards">
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            IconComponent={contact.IconComponent}
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
