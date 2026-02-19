import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerText({ text } : {text: string}) {
  return (
      <Badge variant="outline">
        <Spinner data-icon="inline-start" className="" />
        <p className="text-[10px]">{ text }</p>
      </Badge>
  )
}
