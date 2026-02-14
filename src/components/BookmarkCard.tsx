import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card"
import { CardOptionsDropDown } from "./CardOptionsDropdown";
import { badgeOptions } from "./cardOptionsData";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import StatsShowcase from "./StatsShowcase";

const BookmarkCard = () => {
  return (
    <Card className="'min-h-[280px] h-auto w-full max-w-97.5 border-border py-0 pt-5">
      <CardHeader>
        <div className="flex gap-3 items-center">
          <div>
            <img src="/image1.jpg" className="w-12 h-12 rounded-xl border border-border" alt="" />
          </div>
          <div>
            <h3 className="text-foreground">MDN Web Docs</h3>
            <p className="text-sm">developer.mozilla.org</p>
          </div>
        </div>
        <CardAction>
          <CardOptionsDropDown />
        </CardAction>
      </CardHeader>
      <div className="px-4 flex justify-center -mt-4 -mb-1">
        <Separator />
      </div>
      <CardContent className="px-4 flex-1">
        <p className="text-sm font-medium line-clamp-4 leading-6">The MDN Web Doogies including HTML, Ceb The MDN Web Doogies including HTML, Ceb The MDN Web Doogies including HTML, Ceb The MDN Web Doogies including HTML, Ceb The MDN Web Doogies including HTML, Ceb apps.</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {
            badgeOptions.map((option) => (
              <Badge variant='secondary' className="text-[#4c5c59] rounded-md">
                {option}
              </Badge>
            ))
          }
        </div>
      </CardContent>
      <div>
        <Separator className="" />
        <CardFooter className="justify-self-start w-full px-4">
          <StatsShowcase />
        </CardFooter>
      </div>
    </Card>);
}

export default BookmarkCard;