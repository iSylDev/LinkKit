import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { Palette, ArrowRightCircle } from "lucide-react"
import { ThemeToggler } from "./ThemeToggler"

const DesktopUserInfo = () => {
  return (
    <SidebarFooter className=" border border-border rounded-lg hidden md:flex">
      <SidebarMenu>
        {/* User Profile Section */}
        <div className="flex items-center gap-3 px-2 py-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/image1.jpg" alt="Avatar" />
            <AvatarFallback>AVT</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left">
            <span className="font-semibold text-foreground leading-tight">Krypto Lily</span>
            <span className="text-xs text-muted-foreground truncate">ikryptolily@gmail.com</span>
          </div>
        </div>

        <Separator className="my-1" />

        {/* Theme Toggle Section */}
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-2 text-sm">
            <Palette className="size-5 text-muted-foreground" />
            <span>Theme</span>
          </div>
          <ThemeToggler />
        </div>

        <Separator className="mt-1" />

        {/* Log Out Section */}
        <SidebarMenuItem>
          <SidebarMenuButton 
            variant="default" 
            className="w-full text-destructive hover:text-destructive hover:bg-destructive/10 py-0"
          >
            <ArrowRightCircle className="size-5" />
            <span className="text-sm font-medium">Log out</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  )
}

export default DesktopUserInfo;