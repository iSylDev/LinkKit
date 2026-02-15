import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Search } from "lucide-react"

export function Searchbar() {
  return (
    <InputGroup className="max-w-xs w-fit lg:w-75 ">
      <InputGroupInput className="py-2! placeholder:text-xs lg:placeholder:text-sm" placeholder="Search by title..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
    </InputGroup>
  )
}
