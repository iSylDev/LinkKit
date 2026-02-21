import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical } from "lucide-react"
import { getCardOptions } from "./cardOptionsData"
import { useBookmarkStore } from "@/store/useBookmarkStore"
import { useUser } from "@/hooks/useUser"
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query"

export function CardOptionsDropDown({id, url, is_pinned} :{id: string, url: string, is_pinned: boolean }) {
  const { pin, view, copy, archive } = useBookmarkStore();
  const { data: user } = useUser(); 
  const queryClient = useQueryClient()

  const pinMutation = useMutation({
    mutationFn: () => {
      if (!user) throw new Error("User not found");
      return pin(id, user.id, is_pinned)
    },
    onSuccess: () =>{
      queryClient.invalidateQueries({ queryKey: ['bookmarks'] })
      // Your Toast goes here
    },
    onError: (error) => {
      throw error
    }
  })

  const cardOptions = getCardOptions({
    id,
    url,
    actions:{
      onView: (e) => view(e, url),
      onCopy: () => copy(url),
      onPin: () => pinMutation.mutate(),
      onEdit: () => console.log('Edit'),
      onArchive: () => user && archive(id, user.id, false)
    }
  })


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="bg-card ">
        <Button variant="outline" className="p-1.5">
          <EllipsisVertical className="size-5 text-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-50 py-2 px-2" >
        {
          cardOptions.map((option) => (
            <DropdownMenuItem id={option.label} className="py-2 px-3 text-base text-foreground font-light gap-3" onClick={option.action}>
              <option.icon  />
              <p >{option.label}</p>
            </DropdownMenuItem>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
