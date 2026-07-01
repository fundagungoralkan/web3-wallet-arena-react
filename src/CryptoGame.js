import React from "react";
import WalletArena from "./WalletArena";

function CryptoGame() {
  const defaultCryptoList = [
    { id: "btc", name: "Bitcoin", type: "Layer 1", base_experience: 98000 },
    { id: "eth", name: "Ethereum", type: "Layer 1", base_experience: 3400 },
    { id: "sol", name: "Solana", type: "Layer 1", base_experience: 180 },
    { id: "bnb", name: "BNB Chain", type: "Exchange", base_experience: 590 },
    { id: "xrp", name: "Ripple", type: "Payment", base_experience: 70 },
    { id: "ada", name: "Cardano", type: "Layer 1", base_experience: 45 },
    { id: "avax", name: "Avalanche", type: "DeFi", base_experience: 35 },
    { id: "link", name: "Chainlink", type: "Oracle", base_experience: 18 },
  ];

  let hand1 = [];
  let hand2 = [...defaultCryptoList];

  while (hand1.length < hand2.length) {
    let randIdx = Math.floor(Math.random() * hand2.length);
    let randCrypto = hand2.splice(randIdx, 1)[0];
    hand1.push(randCrypto);
  }

  let value1 = hand1.reduce((sum, crypto) => sum + crypto.base_experience, 0);
  let value2 = hand2.reduce((sum, crypto) => sum + crypto.base_experience, 0);

  return (
    <div>
      <WalletArena
        assets={hand1}
        totalValue={value1}
        isWinner={value1 > value2}
        title="Wallet Alpha"
      />
      <WalletArena
        assets={hand2}
        totalValue={value2}
        isWinner={value2 > value1}
        title="Wallet Omega"
      />
    </div>
  );
}

export default CryptoGame;
