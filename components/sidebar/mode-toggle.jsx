"use client"

import React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator } from "../ui/dropdown-menu"

function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="berkelium">Theme</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[150px] bg-[#E3DFD9] text-[#382c38]">
                <DropdownMenuLabel>
                    Change theme
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark 
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    Follow System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ModeToggle