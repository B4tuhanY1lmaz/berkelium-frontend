"use client"

import { Button } from "../ui/button"
import { Avatar, AvatarImage } from "../ui/avatar"

function SidebarUser() {
    return (
        <Button variant="ghost" className="h-auto w-auto">
            <Avatar className="">
                <AvatarImage src="https://cdn.discordapp.com/avatars/793484594002788352/78fe8d02f9c154045fadc52924b3ef0b.png" />
            </Avatar>
            <div className="mx-2">
                <p>Some user 123</p>
            </div>
        </Button>
    )
}

export default SidebarUser