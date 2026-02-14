"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown } from "lucide-react"

export function Sorter() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hover:cursor-pointer w-fit px-3" >
        <Button variant="outline">
          <ArrowUpDown />
          <p>Sort by</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 gap-4" align='end'>
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Recently Added</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Recently visited</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Most visited</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
