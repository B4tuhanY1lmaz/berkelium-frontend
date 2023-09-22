"use client"

import localFont from "next/font/local"

import ModeToggle from "./mode-toggle"
import SidebarUser from "./user-sidebar"

const redHatDisplay = localFont({
    src: "./fonts/redHatDisplay.ttf",
    display: "swap",
})

function Sidebar() {
    return (
        <div className={`flex flex-col justify-between h-screen w-[300px] py-5 px-5 bg-[#CBC6BC] ${redHatDisplay.className}`}>
            <div className="justify-center text-center">
                Hello world
            </div>
            <div className="flex flex-col gap-2 justify-center text-center">
                <ModeToggle />
                <SidebarUser />
            </div>
        </div>
    )
}

export default Sidebar;