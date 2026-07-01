import React from "react";
import CryptoCard from "./ CryptoCard"; // Sonuna .js ekledik
import "./WalletArena.css";

function WalletArena({ assets, totalValue, isWinner, title }) {
  return (
    <div
      className={`WalletArena ${isWinner ? "WalletArena-winner" : "WalletArena-loser"}`}
    >
      <h2 className="WalletArena-status">
        {title} {isWinner ? "📈 HIGHER ROI (WINNER)" : "📉 LOWER ROI"}
      </h2>
      <p className="WalletArena-exp">
        Total Portfolio Value: <span>${totalValue.toLocaleString()}</span>
      </p>
      <div className="WalletArena-cards">
        {assets.map((asset) => (
          <CryptoCard
            key={asset.id}
            id={asset.id}
            name={asset.name}
            type={asset.type}
            exp={asset.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default WalletArena;
