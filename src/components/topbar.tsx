import { Bell, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Topbar() {
  return (
    <header className="border-b bg-white px-4">
      <div className="flex h-16 items-center justify-between">
        <div className="flex w-96 items-center gap-2 rounded-lg bg-slate-50 px-4">
          <Input type="search" placeholder="Search for..." className="border-0 bg-transparent" />
          <Button size="sm" variant="ghost" className="text-slate-400">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative" size="icon">
                <Bell className="h-5 w-5" />
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  3+
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72">
              <DropdownMenuItem>New Message</DropdownMenuItem>
              <DropdownMenuItem>System Alert</DropdownMenuItem>
              <DropdownMenuItem>Settings Update</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <span className="h-8 border-l" />
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600">Douglas McGee</span>
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>DM</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}

