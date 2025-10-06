import React from 'react';
import JobImage1 from '../JobImage1.png';
import JobImage2 from '../JobImage2.png';
import JobImage3 from '../JobImage3.png';

const candidates = [
  {
    title: 'Frontend-разработчик',
    img: JobImage1,
    relevance: 95,
    dotColor: 'rgba(156, 255, 139, 1)',
  },
  {
    title: 'Аналитик данных',
    img: JobImage2,
    relevance: 84,
    dotColor: 'rgba(255, 210, 74, 1)',
  },
  {
    title: 'Менеджер по продажам',
    img: JobImage3,
    relevance: 68,
    dotColor: 'rgba(255, 74, 77, 1)',
  },
];

const RelevanceSection = () => {
  return (
    <section
      style={{
        minheight: '959px',
        maxWidth: '1727px',
        margin: '0 auto',
        padding: '40px 80px',
        paddingTop: '0',
        fontFamily: '"Open Sans", sans-serif',
        textAlign: 'center',
        position: 'relative',
        zIndex: 0,
      }}
    >
      <h2 style={{
        fontSize: '64px',
        fontWeight: 400,
        color: '#000',
        marginBottom: '32px',
        marginTop: '0',
        lineHeight: '120%',
        position: 'relative',
        zIndex: 0,
      }}>
        Подбирайте только подходящих <br /> кандидатов
      </h2>

      <p style={{
        fontSize: '32px',
        color: '#444',
        marginBottom: '164px',
        marginTop: '0',
        position: 'relative',
        zIndex: 0,
      }}>
        Система анализа релевантности поможет с выбором
      </p>

      <div
        className="card-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '28px',
        }}
      >
        {candidates.map((item, index) => (
          <div
            key={index}
            className="candidate-card"
          >
            <div className="card-top">
              <img
                src={item.img}
                alt={item.title}
                className="candidate-img"
              />
            </div>

            <div className="card-bottom">
              <h3 className="candidate-title">{item.title}</h3>
              <span
  className="relevance-tag"
  style={{ borderColor: 'rgba(74, 134, 255, 1)' }}
>
  <span
    className="dot"
    style={{ backgroundColor: item.dotColor }}
  ></span>
  {item.relevance}% релевантности
</span>
            </div>
          </div>
        ))}
      </div>

      {/* Стили */}
      <style>{`
        .candidate-card {
          width: 415px;
          height: 321px;
          background-color: #fff;
          border-radius: 48px;
          padding: 40px;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s ease, box-shadow 1.0s ease;
          box-shadow: 0px 0px 10px 0px rgba(74, 134, 255, 0.5);
        }

        .candidate-card:hover {
          transform: translateY(-70px);
          box-shadow: 0px 10px 50px 0px rgba(91, 141, 242, 1);
        }

        .card-top {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .card-bottom {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .candidate-img {
          width: 128px;
          height: 128px;
          border-radius: 16px;
          object-fit: cover;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .candidate-title {
          font-size: 40px;
          font-weight: 600;
          color: #000;
          margin: 0;
          line-height: 120%;
        }

        .relevance-tag {
          padding: 9px 14px;
          max-width: 170px;
          font-size: 16px;
          color: #000;
          text-align: end;
          border: 1.5px solid;
          border-radius: 24px;
          background-color: #fff;
        }

        .dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 6px;
        }

        @media (max-width: 1135px) {
          section {
            height: auto !important;
            padding: 40px 20px !important;
          }
          h2 {
            font-size: 32px !important;
          }
          p {
            font-size: 16px !important;
            margin-bottom: 110px !important;
          }
          .card-container {
            flex-direction: column !important;
            align-items: center !important;
            gap: 90px !important;
          }
          .candidate-card {
            width: 60% !important;
            max-width: 700px;
             height: auto;
             gap: 20px;
          }
          .candidate-title {
            font-size: 24px !important;
          }
             .relevance-tag {
          text-align: start;
        }
        }
      `}</style>
    </section>
  );
};

export default RelevanceSection;
