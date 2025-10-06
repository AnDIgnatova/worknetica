import React, { useState } from 'react';
import firstImg from '../first.png';
import secondImg from '../second.png';
import thirdImg from '../third.png';
import num1 from '../numbers/1.png';
import num2 from '../numbers/2.png';
import num3 from '../numbers/3.png';

const steps = [
  {
    key: 'cold',
    title: 'Холодный поиск кандидатов',
    subtitle: 'без табличного ада',
    img: firstImg,
    numberImg: num1,
  },
  {
    key: 'funnel',
    title: 'Вся воронка в одном окне',
    subtitle: 'Настраивайте этапы под каждую вакансию',
    img: secondImg,
    numberImg: num2,
  },
  {
    key: 'resume',
    title: 'Анализ резюме',
    subtitle: 'Обоснование соответствия прямо в карточке кандидата',
    img: thirdImg,
    numberImg: num3,
  },
];

const SearchFlowSection = () => {
  const [active, setActive] = useState('cold');
  const [fade, setFade] = useState(false);
  const current = steps.find(step => step.key === active) || steps[0];

  const handleChange = (key) => {
    if (key === active) return;
    setFade(true);
    setTimeout(() => {
      setActive(key);
      setFade(false);
    }, 300);
  };

  return (
    <section className="search-section" id="search-flow">
      <div className="left">
        <div className={`content ${fade ? 'fade-out' : 'fade-in'}`}>
          <h2>{current.title}</h2>
          <p>{current.subtitle}</p>
          <img src={current.numberImg} alt={`Шаг ${active}`} className="big-number-img" />
        </div>

        <div className="tabs">
          {steps.map(step => (
            <div
              key={step.key}
              className={`tab ${step.key === active ? 'active' : ''}`}
              onClick={() => handleChange(step.key)}
            >
              {step.title}
            </div>
          ))}
        </div>
      </div>

      <div className="right">
        <div className={`image-wrapper ${current.key === 'resume' ? 'resume-style' : ''} ${fade ? 'fade-out' : 'fade-in'}`}>
          <img
            src={current.img}
            alt={current.title}
            className={current.key === 'resume' ? 'img-shadow' : ''}
          />
        </div>
      </div>

      <style>{`
        .fade-in {
          opacity: 1;
          transition: opacity 0.3s ease-in;
        }

        .fade-out {
          opacity: 0;
          transition: opacity 0.3s ease-out;
        }

        .search-section {
          max-width: 1567px;
          margin: 0 auto;
          padding: 96px 80px;
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          gap: 80px;
          font-family: 'Open Sans', sans-serif;
          flex-wrap: wrap;
          position: relative;
          z-index: 10;
        }

        .left {
          flex: 1;
          min-width: 200px;
          position: relative;
          padding: 56px;
        }

        .content {
          position: relative;
          margin-bottom: 395px;
        }

        .content h2 {
          font-size: 48px;
          font-weight: 600;
          color: #000;
          margin: 0 0 12px;
          line-height: 120%;
        }

        .content p {
          font-size: 32px;
          color: #101010;
          margin: 0;
          line-height: 120%;
          max-width: 600px;
        }

        .big-number-img {
          position: absolute;
          top: -40px;
          right: 0;
          height: 605px;
          user-select: none;
          z-index: -1;
        }

        .tabs {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .tab {
          padding: 24px 0;
          font-size: 24px;
          cursor: pointer;
          font-weight: 400;
          border-top: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          transition: color 0.2s ease;
          width: 100%;
          max-width: 632px;
          line-height: 130%;
        }

        .tab.active {
          font-weight: 700;
          color: #000;
          border-top: 2px solid #000;
        }

        .right {
          flex: 1;
          min-width: 200px;
          height: 100%;
          display: flex;
          justify-content: center;
        }

        .image-wrapper {
          background: #f8f8f8;
          padding: 265px 64px;
          border-radius: 48px;
          max-width: 100%;
          box-sizing: border-box;
        }

        .image-wrapper.resume-style {
          padding: 56px 56px 0 56px;
          width: 100%;
          box-sizing: border-box;
        }

        .image-wrapper img {
          width: 100%;
          border-radius: 16px;
        }

        .image-wrapper img.img-shadow {
          box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);
        }

        @media (max-width: 1135px) {
          .search-section {
            flex-direction: column;
            align-items: center;
            padding: 40px 20px;
          }

          .left {
            flex: 1;
            width: 100%;
            padding: 0;
          }

          .content {
             margin-bottom: 100px;
            text-align: center;
            margin: 0 auto;
          }

          .content h2 {
             font-size: 20px;
          }

          .content p {
           font-size: 14px;
          }

          .big-number-img {
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    height: 200px;
  }

          .tabs {
            align-items: center;
          }

          .tab {
            font-size: 18px;
            max-width: 480px;
            padding: 12px 0;
            text-align: center;
          }

          .right {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .image-wrapper,
          .image-wrapper.resume-style {
           padding: 40px 16px;
            width: 100%;
            max-width: 440px;
            margin-top: 24px;
            border-radius: 24px;
          }

          .image-wrapper img {
            width: 100%;
            max-width: 400px;
            height: auto;
            border-radius: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default SearchFlowSection;
