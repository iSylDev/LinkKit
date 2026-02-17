import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Button } from "../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { ArrowRightCircle, Palette } from "lucide-react"
import { ThemeToggler } from "./ThemeToggler"
import { useAuthStore } from '@/store/useAuthStore.ts';
import { useNavigate } from 'react-router-dom';

export default function ProfileAvatar() {
  const { signOut, user } = useAuthStore();
  const navigate = useNavigate();
  const userEmail = user?.email || 'isydev@gmail.com';
  const meta_data = user?.user_metadata || {}
  const username = meta_data.name || 'John Doe'
  const userImage = meta_data?.picture || meta_data?.avatar_url || '/image1.jpg'

  async function handleSignOut() {
    await signOut();
    navigate('/sign-in')
    console.log('Signed-out');

  }


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hover:cursor-pointer md:hidden">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar size='lg'>
            <AvatarImage src="/image1.jpg" alt="Avatar" />
            <AvatarFallback>AVT</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={12} className="w-65 border-border" side='bottom' align='end' >
        <DropdownMenuGroup>
          <DropdownMenuLabel
            className="pt-2 pb-3 flex gap-2"
          >
            <Avatar size='lg'>
              <AvatarImage src={userImage} alt="Avatar" />
              <AvatarFallback>AVT</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-foreground">{username}</h3>
              <p>{userEmail}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel
            className="flex justify-between py-2">
            <span className="flex items-center text-base gap-2">
              <Palette className="size-5" />
              <p>Theme</p>
            </span>
            <ThemeToggler />
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={handleSignOut} className="py-3 w-full hover:cursor-pointer">
              <ArrowRightCircle className="size-5 " />
              <p>Log out</p>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
