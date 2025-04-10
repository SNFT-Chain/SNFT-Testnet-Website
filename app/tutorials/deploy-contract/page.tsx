import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DeployContractPage() {
  return (
    <div className="container py-12 max-w-3xl">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter">Deploy Your First Smart Contract</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Learn how to deploy a simple smart contract on the SNFT testnet.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2>Prerequisites</h2>
        <p>Before deploying a smart contract, make sure you have:</p>
        <ul>
          <li>Connected your wallet to SNFT testnet (see previous tutorial)</li>
          <li>Obtained test SNFT tokens from the faucet</li>
          <li>Basic understanding of Solidity (Ethereum's smart contract language)</li>
        </ul>

        <h2>Creating a Simple Smart Contract</h2>
        <p>Let's create a simple "Hello World" smart contract that stores a greeting message.</p>

        <Tabs defaultValue="remix" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="remix">Using Remix IDE</TabsTrigger>
            <TabsTrigger value="hardhat">Using Hardhat</TabsTrigger>
          </TabsList>
          <TabsContent value="remix" className="mt-4 space-y-4">
            <h3>Step 1: Open Remix IDE</h3>
            <p>
              Go to{" "}
              <a href="https://remix.ethereum.org" target="_blank" rel="noopener noreferrer">
                Remix IDE
              </a>{" "}
              in your browser.
            </p>

            <h3>Step 2: Create a New File</h3>
            <p>
              Click on the "File explorers" icon, then click the "+" icon to create a new file. Name it
              "HelloWorld.sol".
            </p>

            <h3>Step 3: Write Your Smart Contract</h3>
            <p>Copy and paste the following code into your file:</p>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string private greeting;
    
    constructor(string memory _greeting) {
        greeting = _greeting;
    }
    
    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
    
    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}`}</code>
              </pre>
            </div>

            <h3>Step 4: Compile the Contract</h3>
            <p>Click on the "Solidity compiler" icon in the left sidebar, then click "Compile HelloWorld.sol".</p>

            <h3>Step 5: Deploy the Contract</h3>
            <p>
              Click on the "Deploy & run transactions" icon in the left sidebar. In the "ENVIRONMENT" dropdown, select
              "Injected Provider - MetaMask". This will connect Remix to your MetaMask wallet.
            </p>
            <p>
              Make sure your MetaMask is connected to SNFT testnet. In the "CONTRACT" dropdown, select "HelloWorld". In
              the "DEPLOY" section, enter an initial greeting (e.g., "Hello, SNFT!"), then click "Deploy".
            </p>
            <p>MetaMask will prompt you to confirm the transaction. Click "Confirm" to deploy your contract.</p>
          </TabsContent>
          <TabsContent value="hardhat" className="mt-4 space-y-4">
            <h3>Step 1: Set Up a Hardhat Project</h3>
            <p>First, create a new directory for your project and initialize it:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <code>{`mkdir hello-snft
cd hello-snft
npm init -y
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox`}</code>
              </pre>
            </div>

            <h3>Step 2: Initialize Hardhat</h3>
            <p>Run the following command and select "Create a JavaScript project":</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <code>{`npx hardhat init`}</code>
              </pre>
            </div>

            <h3>Step 3: Create Your Smart Contract</h3>
            <p>Create a new file in the "contracts" directory named "HelloWorld.sol":</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string private greeting;
    
    constructor(string memory _greeting) {
        greeting = _greeting;
    }
    
    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
    
    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}`}</code>
              </pre>
            </div>

            <h3>Step 4: Configure Hardhat for SNFT Testnet</h3>
            <p>Update your hardhat.config.js file:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <code>{`require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    snftTestnet: {
      url: "https://trpc.snft.in",
      chainId: 98889,
      accounts: ["YOUR_PRIVATE_KEY"] // Replace with your wallet's private key
    }
  }
};`}</code>
              </pre>
            </div>
            <p className="text-red-500">
              Note: Never commit your private key to version control. Use environment variables in production.
            </p>

            <h3>Step 5: Create a Deployment Script</h3>
            <p>Create a new file in the "scripts" directory named "deploy.js":</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <code>{`async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy("Hello, SNFT!");
  
  await helloWorld.deployed();
  
  console.log("HelloWorld deployed to:", helloWorld.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });`}</code>
              </pre>
            </div>

            <h3>Step 6: Deploy Your Contract</h3>
            <p>Run the deployment script:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <code>{`npx hardhat run scripts/deploy.js --network snftTestnet`}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>

        <h2>Verifying Your Contract</h2>
        <p>
          After deployment, you'll get a contract address. You can verify your contract on the SNFT testnet block
          explorer:
        </p>
        <ol>
          <li>
            Go to{" "}
            <a href="https://texplorer.snft.in" target="_blank" rel="noopener noreferrer">
              https://texplorer.snft.in
            </a>
          </li>
          <li>Search for your contract address</li>
          <li>Click on the "Contract" tab</li>
          <li>Click "Verify & Publish" and follow the instructions</li>
        </ol>

        <h2>Interacting with Your Contract</h2>
        <p>Once deployed, you can interact with your contract through:</p>
        <ul>
          <li>Remix IDE (if you used Remix for deployment)</li>
          <li>The block explorer's "Write Contract" and "Read Contract" sections</li>
          <li>A custom frontend application</li>
          <li>Hardhat scripts</li>
        </ul>

        <div className="not-prose mt-8 flex justify-between">
          <Link href="/tutorials/connect-wallet">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Connect Your Wallet
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
