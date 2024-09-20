import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Home, Wallet, Users2 } from "lucide-react";
import Image from "next/image";
import logo from "@/components/assets/Logo.png";

export default function CustomersPage() {
  const customers = [
    {
      nric: "S1234567A",
      email: "tommy@gmail.com",
      firstName: "Tommy",
      lastName: "Tan",
      policies: ["Name of Policy 1", "Name of Policy 3"],
    },
    {
      nric: "S1569877X",
      email: "abby@gmail.com",
      firstName: "Abby",
      lastName: "Tan",
      policies: ["Name of Policy 2"],
    },
    {
      nric: "S8686848B",
      email: "jack@gmail.com",
      firstName: "Jack",
      lastName: "Tan",
      policies: ["Name of Policy 6", "Name of Policy 8", "Name of Policy 9"],
    },
    {
      nric: "S7865468Z",
      email: "sarah@hotmail.com",
      firstName: "Sarah",
      lastName: "Tan",
      policies: ["Name of Policy 6", "Name of Policy 2"],
    },
    {
      nric: "S9795682P",
      email: "conan@hotmail.com",
      firstName: "Conan",
      lastName: "Tan",
      policies: ["Name of Policy 7"],
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-24 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-8 px-2 sm:py-8">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 bg-accent text-black"
                >
                  <Home className="h-5 w-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Home</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/Policies"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 bg-accent text-black"
                >
                  <Wallet className="h-5 w-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Policies</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/customers"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 bg-accent text-black"
                >
                  <Users2 className="h-5 w-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Customers</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 bg-gray-200 p-6 ml-24">
        {/* Top right account dropdown */}
        <div className="flex justify-end mb-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="rounded-full">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-300">CN</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>My Account</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Customer Table */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">Policy Holders</h1>
            <Button asChild>
              <Link href="/customers/add">Add Policy Holder</Link>
            </Button>
          </div>
          <p className="text-gray-500 mb-4">Personal details of all policy holders</p>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="pb-4">NRIC</th>
                <th className="pb-4">Email</th>
                <th className="pb-4">First Name</th>
                <th className="pb-4">Last Name</th>
                <th className="pb-4">Policies Held</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2">{customer.nric}</td>
                  <td className="py-2">{customer.email}</td>
                  <td className="py-2">{customer.firstName}</td>
                  <td className="py-2">{customer.lastName}</td>
                  <td className="py-2">
                    {customer.policies.map((policy, policyIndex) => (
                      <span
                        key={policyIndex}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                      >
                        {policy}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-gray-500">Showing 1-5 of 10 policy holders</div>
          <div className="flex justify-end mt-4 space-x-4">
            <Button variant="ghost">Prev</Button>
            <Button variant="ghost">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
