// components/Cards.js
import React from "react";

const images = {
  gambling: "data:image/png;base64,...", // 🎲 сюда вставляем base64 кубики
  onlyfans: "data:image/png;base64,...", // 😉 сюда base64 девушки
  business: "data:image/png;base64,...", // 🛒 сюда base64 тележки
};

const Card = ({ title, text, img, animation }) => (
  <div className="card">
    <img src={img} className={`card-img ${animation}`} alt={title} />
    <h3>{title}</h3>
    <p>{text}</p>

    <style jsx>{`
      .card {
        background: #111;
        border: 1px solid red;
        border-radius: 12px;
        padding: 16px;
        color: #fff;
        text-align: center;
        width: 320px;
        transition: transform 0.3s;
      }
      .card:hover {
        transform: translateY(-8px) scale(1.05);
      }
      .card-img {
        width: 100%;
        border-radius: 8px;
      }

      /* 🎲 Анимация кубиков */
      .dice {
        animation: shake 1.5s infinite;
      }
      @keyframes shake {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(10deg); }
        50% { transform: rotate(-10deg); }
        75% { transform: rotate(5deg); }
      }

      /* 😉 Подмигивание */
      .wink {
        animation: winkAnim 2s infinite;
      }
      @keyframes winkAnim {
        0%, 90%, 100% { filter: brightness(1); }
        45%, 55% { filter: brightness(0.6); }
      }

      /* 🛒 Тележка качается */
      .cart {
        animation: moveCart 3s infinite;
      }
      @keyframes moveCart {
        0%, 100% { transform: translateX(0); }
        50% { transform: translateX(10px); }
      }
    `}</style>
  </div>
);

export default function Cards() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "40px",
      }}
    >
      <Card
        title="Гемблинг"
        text="Дьяволёнок кидает кости 🎲"
        img={images.gambling}
        animation="dice"
      />
      <Card
        title="OnlyFans"
        text="Дьяволица подмигивает 😉"
        img={images.onlyfans}
        animation="wink"
      />
      <Card
        title="Товарный бизнес"
        text="Дьяволёнок толкает тележку 🛒"
        img={images.business}
        animation="cart"
      />
    </div>
  );
}
