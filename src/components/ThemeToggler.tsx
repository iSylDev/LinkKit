import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Moon, Sun } from "lucide-react"

export function ThemeToggler() {
  return (
    <ToggleGroup variant="outline" type="single" defaultValue="all" className="p-px bg-secondary rounded-lg" size="sm">
      <ToggleGroupItem value="light" aria-label="Toggle light" 
      className="data-[state=on]:bg-card rounded-lg bg-transparent text-accent">
        <Sun className="size-5 stroke-icons" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Toggle dark" className="data-[state=on]:bg-card bg-transparent rounded-lg text-accent">
        <Moon className="size-5 stroke-icons" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
