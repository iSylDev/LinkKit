import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { BookmarkCheck, House, Archive } from "lucide-react"
import { NavLink } from "react-router-dom"
import { TagCheckbox } from "./TagCheckbox"
import MobileUserInfo from "./DesktopUserInfo"

export function AppSidebar() {
  return (
    <Sidebar variant='sidebar' collapsible="icon">
      <SidebarHeader className="px-2">
        <div className="flex items-center gap-3 p-4 font-bold">
          <label className="p-1 rounded-lg bg-primary" >
            <BookmarkCheck className="size-6 stroke-white" />
          </label>
          <h3 className="text-2xl font-bold text-foreground">LinkKit</h3>
        </div>
        <div className="flex flex-col gap-5">
          <NavLink className="flex items-center gap-3 px-5" to='#'>
            <House />
            <p>Home</p>
          </NavLink>
          <NavLink className="flex items-center gap-3 px-5" to='#'>
            <Archive />
            <p>Archived</p>
          </NavLink>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3">
        <SidebarGroup>
          <h3 className="text-xs text-foreground mb-5 -pl-1 mt-7">TAGS</h3>
          <TagCheckbox />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <MobileUserInfo />
      </SidebarFooter>
    </Sidebar>
  )
}