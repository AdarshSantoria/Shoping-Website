"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Link from "next/link"

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div  className={cn("top-10 inset-x-0 max-w-7xl h-[5rem] mx-auto z-20 mt-10", className)}
        >
          <BackgroundGradient className="rounded-[22px] max-w-7xl h-[5rem] p-0 sm:p-0 bg-white dark:bg-zinc-900 text-lg font-semibold px-20">
        <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Menu">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/">Home</HoveredLink>
            <HoveredLink href="/Register">Register</HoveredLink>
            <HoveredLink href="/sign">Sign in</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Shoping">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Garements">Garements</HoveredLink>
            <HoveredLink href="/groceries">Groceries</HoveredLink>
            <HoveredLink href="/electricals">Electrical Products</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Others">
        </MenuItem>
      </Menu>
      </BackgroundGradient>
        </div>
    )
}

export default Navbar