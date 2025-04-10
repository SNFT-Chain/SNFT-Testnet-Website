import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function GettingStartedPage() {
  return (
    <div className="container py-12 max-w-3xl">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter">Getting Started with SNFT Testnet</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Learn the basics of the SNFT testnet network and how to set it up in your wallet.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2>What is SNFT Testnet?</h2>
        <p>
          SNFT testnet is a blockchain network designed for testing and development purposes. It allows developers to
          test their smart contracts and decentralized applications (dApps) without using real cryptocurrency.
        </p>

        <h2>Network Information</h2>
        <ul>
          <li>
            <strong>Chain Name:</strong> SNFT testnet
          </li>
          <li>
            <strong>Chain ID:</strong> 98889
          </li>
          <li>
            <strong>Native Token:</strong> SNFT (SNFT)
          </li>
          <li>
            <strong>RPC URL:</strong> https://trpc.snft.in
          </li>
          <li>
            <strong>Block Explorer:</strong> https://texplorer.snft.in
          </li>
          <li>
            <strong>Faucet:</strong> https://thirdweb.com/snft-testnet
          </li>
        </ul>

        <h2>Prerequisites</h2>
        <p>Before you begin, make sure you have:</p>
        <ul>
          <li>A cryptocurrency wallet (like MetaMask)</li>
          <li>Basic understanding of blockchain concepts</li>
        </ul>

        <h2>Next Steps</h2>
        <p>Now that you understand what SNFT testnet is, you can proceed to the next tutorials to learn how to:</p>
        <ul>
          <li>Connect your wallet to SNFT testnet</li>
          <li>Get test tokens from the faucet</li>
          <li>Deploy your first smart contract</li>
        </ul>

        <div className="not-prose mt-8 flex justify-between">
          <Link href="/tutorials">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Tutorials
            </Button>
          </Link>
          <Link href="/tutorials/connect-wallet">
            <Button>
              Next: Connect Your Wallet
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
