import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical } from "lucide-react"
import { cardOptions } from "./cardOptionsData"

export function CardOptionsDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild >
        <Button variant="outline" className="p-1.5">
          <EllipsisVertical className="size-5 text-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-50" >
        {
          cardOptions.map((option) => (
            <DropdownMenuItem id={option.label} className="py-2 px-3 text-base text-foreground font-light gap-3" onClick={option.action}>
              <option.icon  />
              <p className="font-medium">{option.label}</p>
            </DropdownMenuItem>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
