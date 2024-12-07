import { useEffect } from 'react';
import './Services.scss';
import texts from '../../../constants/texts';

const Services = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card'); 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate'); 
          }
        });
      },
      { threshold: 0.2 } 
    );

    cards.forEach((card) => observer.observe(card)); 

    return () => observer.disconnect(); 
  }, []);

  return (
    <div className='services-container' id='services'>
      <h1>{texts.services.title}</h1>

      <div className='cards-container'>
        <div className='card'>
          <img src='/images/laser-machine.png' alt='Logo' width='70' />
          <h2>{texts.services.card1.title}</h2>
          <p>{texts.services.card1.text}</p>
          <a href='#contact' className='btn-service'>{texts.services.button}</a>
        </div>

        <div className='card'>
          <img src='/images/cutting-saw.png' alt='Logo' width='70' />
          <h2>{texts.services.card2.title}</h2>
          <p>{texts.services.card2.text}</p>
          <a href='#contact' className='btn-service'>{texts.services.button}</a>
        </div>

        <div className='card'>
          <img src='/images/cutting-saw2.png' alt='Logo' width='70' />
          <h2>{texts.services.card3.title}</h2>
          <p>{texts.services.card3.text}</p>          
          <a href='#contact' className='btn-service'>{texts.services.button}</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
