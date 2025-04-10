"use client"

import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

export function NetworkInfoCard() {
  const networkInfo = {
    chainName: "SNFT testnet",
    chainId: "98889",
    nativeToken: "SNFT (SNFT)",
    rpc: "https://trpc.snft.in",
    explorer: "https://texplorer.snft.in",
    faucet: "https://thirdweb.com/snft-testnet",
  }

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Network Details</CardTitle>
        <CardDescription>Connect to the SNFT testnet with these parameters</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Chain Name:</span>
            <div className="flex items-center gap-2">
              <span className="text-sm">{networkInfo.chainName}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => copyToClipboard(networkInfo.chainName, "Chain name")}
              >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy chain name</span>
              </Button>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">Chain ID:</span>
            <div className="flex items-center gap-2">
              <span className="text-sm">{networkInfo.chainId}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => copyToClipboard(networkInfo.chainId, "Chain ID")}
              >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy chain ID</span>
              </Button>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">Native Token:</span>
            <div className="flex items-center gap-2">
              <span className="text-sm">{networkInfo.nativeToken}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => copyToClipboard(networkInfo.nativeToken, "Native token")}
              >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy native token</span>
              </Button>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">RPC URL:</span>
            <div className="flex items-center gap-2">
              <span className="text-sm">{networkInfo.rpc}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => copyToClipboard(networkInfo.rpc, "RPC URL")}
              >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy RPC URL</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
