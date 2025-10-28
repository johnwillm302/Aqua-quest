# 🌊 AquaQuest — Web3 Water Game Platform on Hedera

**AquaQuest** is a **play-to-earn (P2E)** Web3 game built on the **Hedera Hashgraph network**, where players explore the digital ocean, collect clean water droplets, fight pollution monsters, and earn **NFTs and tokens** as rewards.

Built for impact — combining **fun, blockchain transparency, and environmental awareness**.

---

## 💡 Overview

AquaQuest gamifies environmental conservation using Web3 technology.  
Players earn **Hedera-based tokens ($DROP)** and **NFT collectibles** by completing in-game missions like cleaning polluted zones or discovering rare ocean treasures.

Transactions, NFTs, and token rewards are **secured and verified on Hedera**, while all gameplay and wallet operations run through **HashPack Wallet** and **Mirror Node APIs**.

---

## ⚙️ Features

### 🎮 Play-to-Earn Game Mechanics
- Navigate an underwater world and collect clean water droplets.
- Battle pollution monsters to earn bonus rewards.
- Every collectible action mints token rewards (`$DROP`) or NFTs.

### 💰 Token & NFT Rewards
- Earn `$DROP` tokens (fungible HTS tokens) for gameplay milestones.
- Receive **unique NFTs** (e.g., “Ocean Guardian”, “Deep Diver”) via Hedera Token Service.
- Rewards are minted automatically and verified on-chain.

### 🔐 Web3 Authentication
- Connect using **HashPack Wallet** (`hashconnect` SDK).
- No passwords or traditional logins — wallet = identity.
- Show wallet balance and NFTs directly on dashboard.

### 🔍 On-Chain Transparency
- Integrates **Hedera Mirror Node API** for real-time transaction tracking.
- View game reward mints, NFT transfers, and token balances.
- Fetch history via:
GET /api/v1/transactions?account.id=0.0.{user}

yaml
Copy code
paste code

### 🧩 Player Dashboard
- Shows:
- Connected wallet address  
- Earned `$DROP` tokens  
- Owned NFTs  
- On-chain transaction history (Mirror Node data)

### 🏆 Leaderboard
- Global ranking of top players based on token holdings.
- Verified using on-chain data via Mirror Node.
- Interactive leaderboard animations.
