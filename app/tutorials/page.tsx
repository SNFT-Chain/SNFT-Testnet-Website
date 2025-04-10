import Link from "next/link"
import { ArrowRight, BookOpen, Code, Wallet } from "lucide-react"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function TutorialsPage() {
  const tutorials = [
    {
      title: "Getting Started with SNFT Testnet",
      description: "Learn the basics of the SNFT testnet network and how to set it up in your wallet.",
      icon: <BookOpen className="h-8 w-8" />,
      link: "/tutorials/getting-started",
    },
    {
      title: "Connect Your Wallet",
      description: "Step-by-step guide to connecting your wallet to the SNFT testnet network.",
      icon: <Wallet className="h-8 w-8" />,
      link: "/tutorials/connect-wallet",
    },
    {
      title: "Deploy Your First Smart Contract",
      description: "Learn how to deploy a simple smart contract on the SNFT testnet.",
      icon: <Code className="h-8 w-8" />,
      link: "/tutorials/deploy-contract",
    },
  ]

  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tutorials</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Learn how to use the SNFT testnet network with our comprehensive tutorials
          </p>
        </div>
      </div>

      <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
        {tutorials.map((tutorial, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="mb-2 w-fit rounded-full bg-gray-100 p-2 dark:bg-gray-800">{tutorial.icon}</div>
              <CardTitle>{tutorial.title}</CardTitle>
              <CardDescription>{tutorial.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto pt-4">
              <Link href={tutorial.link} className="inline-flex items-center text-sm font-medium">
                Read Tutorial
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
