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

export function CardOptionsDropDown({id, url} :{id: string, url: string }) {
  const { pin, view, copy } = useBookmarkStore()

  const option = getCardOptions({
    id,
    url,
    actions:{
      onView: (e) => view(e, url),
      onCopy: () => copy(url),
      onPin: () => 
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
