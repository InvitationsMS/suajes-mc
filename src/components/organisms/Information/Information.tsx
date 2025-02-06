import { useEffect } from 'react';
import './Information.scss';
import texts from '../../../constants/texts';

const Information = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.info-card');
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
    <>
      <section className="info-container">
        <div className="containar">
          <h1>SUAJES</h1>
          {/* <h2>Sub texto aqui</h2> */}
          <div className="info__list">
            <div className="info-card">
              <div className="info__content">
                <img
                  src="images\img1.jpeg"
                  alt=""
                  className="info__img"
                  decoding="async"
                />
              </div>
              <div className="info-text">
                <h3>{texts.information.flat}</h3>
                <p>
                  Boom length of up to 191 feet and can reach a maximum
                  freestanding height of up to approximately 223 feet. If
                  additional height is required, our cranes can be top climbed.
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info__content">
                <img
                  src="images\img2.jpeg"
                  alt=""
                  className="info__img"
                  decoding="async"
                />
              </div>
              <div className="info-text">
                <h3>{texts.information.rotary}</h3>
                <p>
                  El suaje rotativo, disponible para cilindro <strong>66, 50, 38</strong> además de variantes como <strong>355</strong> cm y otros regulares. Es para cortar, troquelar, perforar o marcar materiales mediante un sistema de cilindros rotativos.  </p>
                <p>
                  Estos cilindros están equipados con navajas que cortan el material a medida que este pasa por la máquina. Se utiliza ampliamente en la fabricación de <strong>empaques, etiquetas, cartón corrugado</strong> y <strong>productos de impresión</strong>, su principal ventaja es la capacidad cortar mucho material en el menor tiempo posible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
