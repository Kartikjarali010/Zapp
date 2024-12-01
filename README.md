# **Agoric Asset Chatbot**

Agoric Asset Chatbot is a decentralized application (Dapp) powered by the **Agoric smart contract platform**. It enables users to interact with a chatbot to seamlessly **buy** or **sell assets** in a decentralized marketplace. The chatbot provides an intuitive interface for asset trading, guiding users through transactions and ensuring secure, blockchain-backed trades.

![Agoric Asset Chatbot](https://docs.agoric.com/assets/new_002_small2.DgAL2zV8.png)

---

## **Features**
- **Chatbot Interface:** Intuitive chatbot for asset trading.
- **Buy and Sell Assets:** Interact directly with the marketplace to buy or sell items.
- **Smart Contract-Driven Transactions:** Ensure secure and automated trades.
- **Decentralized and Transparent:** Built on the Agoric blockchain platform for trustless operations.
- **IST Support:** Transactions are conducted in [IST](https://agoric.com/blog/getting-started/ist).

---

## **Getting Started**

### **Prerequisites**
Before starting, ensure the following tools are installed on your machine:
- [Node.js (v18.12 or v20.9)](https://nodejs.org/)  
- [Yarn](https://yarnpkg.com/getting-started/install)  
- [Docker](https://www.docker.com/)  
- [Keplr Wallet](https://www.keplr.app/)  

Alternatively, use **GitHub Codespaces** for a cloud-based setup (except for Keplr, which you’ll need to install locally).

---

### **Setup Instructions**

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd agoric-asset-chatbot
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```
   > *Note: This may take several minutes as dependencies for both the UI and smart contract are installed.*

3. Start a local Agoric blockchain:
   ```bash
   yarn start:docker
   ```

4. Check the blockchain logs:
   ```bash
   yarn docker:logs
   ```
   Wait until the logs resemble:
   ```
   demo-agd-1  | 2023-12-27T04:08:06.384Z block-manager: block 1003 begin
   demo-agd-1  | 2023-12-27T04:08:06.386Z block-manager: block 1003 commit
   demo-agd-1  | 2023-12-27T04:08:07.396Z block-manager: block 1004 begin
   demo-agd-1  | 2023-12-27T04:08:07.398Z block-manager: block 1004 commit
   ```

5. **For GitHub Codespaces Users:**  
   - Go to the `PORTS` section in the bottom-right panel.
   - Make all listed ports **public** by right-clicking and selecting `Port Visibility`.

6. Deploy the smart contract:
   ```bash
   yarn start:contract
   ```

7. Start the user interface:
   ```bash
   yarn start:ui
   ```
   Use the provided URL in the terminal to access the chatbot in your browser.

---

## **Usage**

1. **Buy Assets:**
   - Interact with the chatbot to browse available assets.
   - Select the assets you wish to purchase.
   - Confirm the transaction to finalize the trade.

2. **Sell Assets:**
   - Provide details about the asset you wish to sell.
   - The chatbot will list the asset in the marketplace.
   - Confirm the transaction to list your asset.

---

## **Testing**

### Unit Tests:
Run the following command to execute unit tests:
```bash
yarn test
```

### End-to-End (E2E) Tests:
To run E2E tests in Chrome (recommended browser):
```bash
yarn test:e2e --browser chrome
```

---

## **Contributing**

We welcome contributions to improve Agoric Asset Chatbot. Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute.

---

## **Troubleshooting**

For troubleshooting and detailed setup instructions, refer to the [Agoric Getting Started Guide](https://docs.agoric.com/guides/getting-started/).

---

## **License**

This project is licensed under the [MIT License](./LICENSE).

---
