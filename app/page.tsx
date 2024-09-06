import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import logo from '@/components/assets/Logo.png'; 

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="flex flex-col bg-gray-100 w-1/5 p-4">
        <div className="flex items-center mb-8">
          <Image src={logo} alt="Logo" width={180} height={0} />
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <Button variant="ghost" className="justify-start w-full">
                <span className="mr-2">🏠</span> Home
              </Button>
            </li>
            <li className="mb-4">
              <Button variant="ghost" className="justify-start w-full">
                <span className="mr-2">📄</span> Policies
              </Button>
            </li>
            <li className="mb-4">
              <Button variant="ghost" className="justify-start w-full">
                <span className="mr-2">👥</span> Customers
              </Button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content area */}
      <div className="flex-1 bg-gray-200 p-6">
        {/* Top right account dropdown */}
        <div className="flex justify-end">
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
        {/* Content goes here */}
      </div>
    </div>
  );
};