import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NetworkInfoCard } from "@/components/network-info-card"
import { SocialLinks } from "@/components/social-links"

export default function NetworkPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Network Information</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Everything you need to connect to the SNFT testnet network
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
        <NetworkInfoCard />

        <Card>
          <CardHeader>
            <CardTitle>Resources</CardTitle>
            <CardDescription>Essential links for the SNFT testnet</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <Link
                href="https://texplorer.snft.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <div>
                  <div className="font-medium">Block Explorer</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    View transactions, blocks, and accounts
                  </div>
                </div>
                <ExternalLink className="h-4 w-4" />
              </Link>

              <Link
                href="https://thirdweb.com/snft-testnet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <div>
                  <div className="font-medium">Faucet</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Get test tokens for development</div>
                </div>
                <ExternalLink className="h-4 w-4" />
              </Link>

              <div className="rounded-lg border p-4">
                <div className="font-medium">Add to MetaMask</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Add SNFT testnet to your wallet with one click
                </div>
                <Button className="w-full">Add to MetaMask</Button>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <div className="font-medium mb-3">Social Media & Resources</div>
              <SocialLinks className="flex-wrap" />
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>How to Connect</CardTitle>
            <CardDescription>Step-by-step guide to connect to SNFT testnet</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg border">
                <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="font-medium">Install MetaMask</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Download and install the MetaMask browser extension
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg border">
                <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="font-medium">Add Network</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Add SNFT testnet to your MetaMask using the network details
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg border">
                <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="font-medium">Get Test Tokens</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Visit the faucet to get test SNFT tokens for development
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link href="/tutorials/connect-wallet">
                <Button>View Detailed Tutorial</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
