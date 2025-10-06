import React, { useState, useRef, useEffect } from 'react';
import plusIcon from '../open.svg';
import closeIcon from '../close.svg';
import bg2 from '../bg2.png';

const faqData = [
  {
    question: 'Есть ли мобильная версия или приложение?',
    answer: 'Пока платформа оптимизирована только для браузера на десктопе.',
  },
  {
    question: 'Когда выйдет релиз?',
    answer: 'Сейчас в стадии MVP. Первыми пригласим подписчиков.',
  },
  {
    question: 'Как быстро я увижу результаты холодного поиска?',
    answer: 'Обычно результаты приходят в течение 1–2 минут после запуска. Время зависит от количества кандидатов на вакансию.',
  },
  {
    question: 'Кто видит моих кандидатов?',
    answer: 'Только те, кому вы открыли доступ.',
  },
  {
    question: 'Как платформа обрабатывает дубликаты резюме?',
    answer: 'Мы автоматически сверяем ФИО, email и опыт работы, чтобы не показывать одинаковые профили дважды.',
  },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      if (openIdx === idx) {
        ref.style.height = ref.scrollHeight + 'px';
        ref.style.opacity = '1';
      } else {
        ref.style.height = '0px';
        ref.style.opacity = '0';
      }
    });
  }, [openIdx]);

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section">
      {/* Фон-блок */}
      <div className="faq-background" aria-hidden="true" />

      <div className="faq-container">
        <h2 className="faq-title">Остались вопросы?</h2>
        <div className="faq-list">
          {faqData.map((item, idx) => {
            const open = openIdx === idx;
            return (
              <div key={idx} className="faq-item">
                <div
                  className={`faq-question ${open ? 'open' : ''}`}
                  onClick={() => handleToggle(idx)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={open}
                  aria-controls={`faq-answer-${idx}`}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') handleToggle(idx);
                  }}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">
                    <img src={open ? closeIcon : plusIcon} alt={open ? 'Закрыть' : 'Открыть'} />
                  </span>
                </div>

                <div
                  ref={(el) => (contentRefs.current[idx] = el)}
                  className="faq-answer-wrapper"
                >
                  <div className="faq-answer">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* inline styles for demonstration, move to .css or .module.css in prod */}
      <style>{`
         .faq-section {
          position: relative;
          padding: 80px;
          overflow: hidden;
        }

        .faq-background {
          position: absolute;
          top: -300px;
          bottom: -300px;
          left: 0;
          right: 0;
          background: url(${bg2}) no-repeat center center;
          background-size: cover;
          z-index: -1;
          pointer-events: none;
        }

        .faq-container {
          position: relative;
          z-index: 1;
          max-width: 1567px;
          margin: 0 auto;
        }

        .faq-title {
          font-size: 4rem;
          font-weight: 400;
          color: #222;
          margin-bottom: 40px;
          margin-top: 0;
          text-align: center;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .faq-item {
          border-radius: 48px;
          background: #f6f6f5;
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }

        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          padding: 40px 56px;
          font-size: 36px;
          font-weight: 600;
          color: #222;
          background: #f6f6f5;
          transition: background 0.2s ease;
        }

        .faq-question.open {
          background: #f6f6f5;
        }

        .faq-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 2px solid #4a86ff;
          padding: 12px;
        }

        .faq-icon img {
          width: 20px;
          height: 20px;
        }

        .faq-answer-wrapper {
          height: 0px;
          overflow: hidden;
          opacity: 0;
          transition: height 0.5s ease, opacity 0.4s ease;
         background: #f6f6f5;
;
        }

        .faq-answer {
          padding: 0 0 40px 56px;
          font-size: 24px;
          color: #444;
          line-height: 1.6;
        }
          @media (max-width: 1035px) {
  .faq-section {
    padding: 40px 20px;
  }

  .faq-title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 32px;
  }

  .faq-question {
    padding: 24px 20px;
    font-size: 20px;
    flex-direction: row;
    gap: 16px;
  }

  .faq-icon {
    padding: 8px;
    border-width: 1.5px;
  }

  .faq-icon img {
    width: 16px;
    height: 16px;
  }

  .faq-answer {
    padding: 0 20px 24px 20px;
    font-size: 16px;
    line-height: 1.5;
  }

  .faq-item {
    border-radius: 24px;
  }
}

      `}</style>
    </section>
  );
};

export default FAQSection;
