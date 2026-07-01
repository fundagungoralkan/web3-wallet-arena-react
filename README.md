# 💰 Web3 Wallet Simulation Arena

This project is a **Web3 Wallet Simulation Arena** built with **React**. It simulates a battle between two randomly generated cryptocurrency portfolios, comparing their total portfolio values to determine the winning wallet.

# ✨ Features

**Random Wallet Generation:** Cryptocurrencies are randomly distributed into two wallets on every refresh

**Portfolio Comparison:** Calculates and compares the total value of each wallet

**Winner Detection:** Highlights the wallet with the higher portfolio value

**Dynamic Crypto Cards:** Displays cryptocurrency information with icons, asset IDs, and portfolio values

**Responsive Design:** Clean and responsive layout for different screen sizes

**Fallback Images:** Automatically loads a default Bitcoin icon if a cryptocurrency icon is unavailable

# 📚 Technologies Used

- React
- JavaScript (ES6+)
- CSS3
- Cryptocurrency Icons API
- JSX

# 🚀 Installation

To run this project locally, follow the steps below:

**Clone the repository:**

```bash
git clone https://github.com/your-username/web3-wallet-simulation-arena.git
```

**Navigate to the project folder:**

```bash
cd web3-wallet-simulation-arena
```

**Install dependencies:**

```bash
npm install
```

**Start the development server:**

```bash
npm start
```

The application will run at:

```
http://localhost:3000
```

# 🎮 How It Works

- A predefined list of cryptocurrencies is loaded.
- The assets are randomly divided into two wallets:
  - **Wallet Alpha**
  - **Wallet Omega**
- The total portfolio value of each wallet is calculated.
- The wallet with the higher total value is declared the winner.
- Every page refresh generates a new wallet distribution.

# 📷 Screenshot

![Web3 Wallet Simulation Arena](wallet-arena.gif)
