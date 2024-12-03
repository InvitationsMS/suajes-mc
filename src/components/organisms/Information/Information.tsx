import { useEffect } from 'react';
import './Information.scss';

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
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="info-container">
        <div className="containar">
          <h1>SUAJES</h1>

          <div className="info__list">
            <div className="info-card">
              <div className="info__content">
                <img
                  src="/images/img1.jpeg"
                  alt=""
                  className="info__img"
                  decoding="async"
                />
              </div>
              <div className="info-text">
                <h3>SUAJE PLANO</h3>
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
                  src="/images/img1.jpeg"
                  alt=""
                  className="info__img"
                  decoding="async"
                />
              </div>
              <div className="info-text">
                <h3>SUAJE ROTATIVO</h3>
                <p>
                  Boom length of up to 191 feet and can reach a maximum
                  freestanding height of up to approximately 223 feet. If
                  additional height is required, our cranes can be top climbed.
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
