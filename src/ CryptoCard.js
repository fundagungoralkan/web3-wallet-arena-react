import React from "react";
import "./CryptoCard.css";

function CryptoCard({ id, name, type, exp }) {
  const imgSrc = `https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/${id}.png`;

  const isOracleType =
    type.toLowerCase() === "oracle" || type.toLowerCase() === "payment";
  const cardClass = `CryptoCard ${isOracleType ? "CryptoCard--oracle" : "CryptoCard--mini"}`;

  return (
    <div className={cardClass}>
      <div className="CryptoCard-id">{type}</div>
      <h2 className="CryptoCard-title">{name}</h2>

      <div className="CryptoCard-image-container">
        <img
          className="CryptoCard-image"
          src={imgSrc}
          alt={name}
          onError={(e) => {
            e.target.onerror = null;

            e.target.src = `https://assets.coingecko.com/coins/images/1/large/bitcoin.png`;
          }}
        />
        {isOracleType && <div className="CryptoCard-glow"></div>}
      </div>

      <div className="CryptoCard-data">
        <div className="CryptoCard-data-item">
          <span>ASSET ID</span>
          <strong>{id.toUpperCase()}</strong>
        </div>
        <div className="CryptoCard-data-item">
          <span>POWER INDEX</span>
          <strong>${exp.toLocaleString()}</strong>
        </div>
      </div>

      {isOracleType && <div className="CryptoCard-3d-shadow"></div>}
    </div>
  );
}

export default CryptoCard;
