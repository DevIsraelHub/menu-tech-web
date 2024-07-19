"use-client"

import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";
import { AlignJustifyIcon } from "lucide-react";
import {nav} from './index'
const Navbar: React.FC = () => {
  

  return (
    <div className="fixed bg-[#f2f2f2]/80 w-screen px-6 pr-6 max-sm:pb-4 z-50">
      <div className="flex items-center justify-between">
        <span className="flex flex-row">
          <Image
            width={100}
            height={100}
            className="w-20 h-20"
            src="/assets/MS.png"
            alt="logo"
          />
          <Image
            width={120}
            height={120}
            className="object-contain -ml-2"
            src="/assets/watermark 1.png"
            alt="logo name" />
        </span>
        <Input
          className='hidden sm:block h-8 w-[30%] text-gray-300 pl-4 border-2 border-[#f98222]'
          type='text'
          placeholder='Search'
        />
        <ul className="flex-row items-center hidden text-sm md:text-md lg:text-lg md:hidden lg:flex lg:flex-row justify-center gap-x-20 pr-4">
          {
            nav.map((items, index) => (
              <li key={index} className="list-none text-sm hover:text-primary justify-center items-center flex">
                <Link href={items.path}>
                  {items.name}
                </Link>
              </li>
            ))
          }
        </ul>
        <div className="block lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-12 h-12 flex items-center justify-center bg-opacity-40 border-none">
              <AlignJustifyIcon size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-200 bg-opacity-90">
              {nav.map((item, index) => (
                <DropdownMenuItem key={index}>
                  <Link href={item.path}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="w-full px-4 flex items-center justify-center sm:hidden">
        <Input
          className="h-8 w-full text-gray-300 pl-4 border-2 border-primary"
          type='text'
          placeholder='Search'
        />
      </div>

    </div>
  )
}
export default Navbar;