import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ConnectWalletPage() {
  return (
    <div className="container py-12 max-w-3xl">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter">Connect Your Wallet to SNFT Testnet</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Step-by-step guide to connecting your wallet to the SNFT testnet network.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2>Setting Up MetaMask for SNFT Testnet</h2>
        <p>
          This tutorial will guide you through the process of adding the SNFT testnet network to your Met aMask wallet
          and connecting to it.
        </p>

        <h3>Step 1: Install MetaMask</h3>
        <p>
          If you haven't already, install the MetaMask extension for your browser from the
          <a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer">
            {" "}
            official website
          </a>
          .
        </p>

        <h3>Step 2: Open MetaMask and Access Network Settings</h3>
        <p>
          Click on the MetaMask icon in your browser, then click on the network dropdown at the top of the popup. Scroll
          down and click on "Add network".
        </p>

        <Card className="my-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="MetaMask network dropdown"
                width={400}
                height={300}
                className="rounded-lg border"
              />
            </div>
          </CardContent>
        </Card>

        <h3>Step 3: Add SNFT Testnet Manually</h3>
        <p>Click on "Add a network manually" and fill in the following details:</p>

        <Card className="my-6 overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-medium">Network Name</td>
                    <td className="px-4 py-2">SNFT testnet</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-medium">New RPC URL</td>
                    <td className="px-4 py-2">https://trpc.snft.in</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-medium">Chain ID</td>
                    <td className="px-4 py-2">98889</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-medium">Currency Symbol</td>
                    <td className="px-4 py-2">SNFT</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium">Block Explorer URL</td>
                    <td className="px-4 py-2">https://texplorer.snft.in</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <p>Click "Save" to add the network to your MetaMask.</p>

        <h3>Step 4: Switch to SNFT Testnet</h3>
        <p>After adding the network, select "SNFT testnet" from the network dropdown to connect to it.</p>

        <h3>Step 5: Get Test Tokens</h3>
        <p>
          To interact with the SNFT testnet, you'll need some test tokens. Visit the
          <a href="https://thirdweb.com/snft-testnet" target="_blank" rel="noopener noreferrer">
            {" "}
            SNFT faucet
          </a>
           <br/> to request test tokens.
        </p>

        <h2>Verifying Your Connection</h2>
        <p>To verify that you're connected to the SNFT testnet:</p>
        <ol>
          <li>Check that the network name in MetaMask shows "SNFT testnet"</li>
          <li>
            Visit the{" "}
            <a href="https://texplorer.snft.in" target="_blank" rel="noopener noreferrer">
              block explorer
            </a>{" "}
            and ensure you can see your wallet address and transactions
          </li>
        </ol>

        <div className="not-prose mt-8 flex justify-between">
          <Link href="/tutorials/getting-started">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Getting Started
            </Button>
          </Link>
          <Link href="/tutorials/deploy-contract">
            <Button>
              Next: Deploy Smart Contract
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
