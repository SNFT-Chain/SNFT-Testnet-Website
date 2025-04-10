import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BlockchainAnimation } from "@/components/blockchain-animation"
import { NetworkInfoCard } from "@/components/network-info-card"
import { SocialLinks } from "@/components/social-links"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    SNFT Testnet Network
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    A comprehensive guide to the SNFT testnet blockchain network. Get started with tutorials, network
                    information, and more.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/tutorials">
                    <Button className="px-8">
                      Explore Tutorials
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="https://texplorer.snft.in" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="px-8">
                      Visit Explorer
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="mt-6">
                  <SocialLinks />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <BlockchainAnimation />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Network Information</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Everything you need to connect to the SNFT testnet network
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
              <NetworkInfoCard />
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                  <CardDescription>Essential resources for the SNFT testnet</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <Link
                      href="https://texplorer.snft.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <div className="font-medium">Block Explorer</div>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                    <Link
                      href="https://thirdweb.com/snft-testnet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <div className="font-medium">Faucet</div>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/tutorials/connect-wallet"
                      className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <div className="font-medium">Connect Wallet Tutorial</div>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/tutorials/deploy-contract"
                      className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <div className="font-medium">Deploy Smart Contract</div>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Launch App</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Access the SNFT testnet dashboard to manage your blockchain services and assets
                </p>
              </div>
              <Link href="https://app.snft.in/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="mt-4">
                  Launch App
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="mx-auto max-w-4xl mt-10">
              <div className="rounded-lg overflow-hidden border shadow-lg">
                <Image
                  src="/images/app-screenshot.png"
                  alt="SNFT Dashboard"
                  width={1200}
                  height={800}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
