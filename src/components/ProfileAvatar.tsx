import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Button } from "../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { ArrowLeft, ArrowRight, ArrowRightCircle, ArrowRightSquare, Palette } from "lucide-react"
import { ThemeToggler } from "./ThemeToggler"

export default function ProfileAvatar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hover:cursor-pointer">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar size='lg'>
            <AvatarImage src="/image1.jpg" alt="shadcn" />
            <AvatarFallback>AVT</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-65 border-border" side='bottom' align='end' >
        <DropdownMenuGroup className="text-card-foreground">
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            className="pt-2 pb-3 select-text hover:cursor-text  data-highlighted:bg-popover data-highlighted:text-card-foreground"
          >
            <Avatar size='lg'>
              <AvatarImage src="/image1.jpg" alt="shadcn" />
              <AvatarFallback>AVT</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-foreground">Krypto Lily</h3>
              <p>ikryptolily@gmail.com</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            className="flex justify-between py-2 hover:cursor-text data-highlighted:bg-popover data-highlighted:text-card-foreground">
            <span className="flex items-center text-base gap-2 select-text">
              <Palette className="size-5" />
              <p>Theme</p>
            </span>
            <ThemeToggler />
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive" className="py-3 hover:cursor-pointer">
            <ArrowRightCircle className="size-5 " />
            <p>Log out</p>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
