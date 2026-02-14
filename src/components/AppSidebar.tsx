import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar variant='sidebar'  collapsible="icon">
      <SidebarHeader>
        <div className="p-4 font-bold">My App</div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
           {/* Your Menu Items Here */}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4">User Profile</div>
      </SidebarFooter>
    </Sidebar>
  )
}