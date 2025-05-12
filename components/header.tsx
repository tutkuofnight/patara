import { Icon } from "@/components/ui/icon"
import Image from "next/image"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Search from "@/components/search"

import { useRouter } from "next/router"
import Link from "next/link" 
import { motion } from "framer-motion"

export default function Header({ isAuthenticated }: { isAuthenticated?: boolean  }){
  const router = useRouter()
  return (
    <motion.header 
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="flex items-center justify-between"
    >
      <div className="flex items-center gap-1 sm:gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"link"} className="p-0">
              <Icon name="hamburger_menu" size={40} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="w-full h-auto">
              <Search />
            </div>
            <p className="py-4 text-secondary-foreground text-center text-sm">Render other menu items here...</p>
          </SheetContent>
        </Sheet>
        <Link href={"/"}>
          <Image src="/patara_logo.svg" width={134} height={36} alt="Patara App" />
        </Link>
      </div>

      <div className="hidden md:block flex-1 max-w-md mx-4">
        <Search />
      </div>

      <div className="flex items-center gap-2">
        <Button size={"icon"} variant={"secondary"}>
          <Icon name="BellSimple" size={24} />
        </Button>
        <Button size={"icon"} variant={"secondary"}>
          <Icon name="Gear" size={24} />
        </Button>
        { isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center justify-between p-1 bg-secondary rounded-2 cursor-pointer">
                <div className="flex items-center gap-2 mr-[8px] sm:mr-[18px]">
                  <Icon name="ProfileIcon" size={32} />
                  <p className="text-sm text-white font-semibold hidden sm:block">@patara.sui</p>
                </div>
                <Icon name="CaretDown" size={20} className="mr-2" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ): <Button onClick={() => router.push("/dashboard")}>Connect/Sign in</Button> }
      </div>
    </motion.header>
  )
}