import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AvatarImage } from "./ui/avatar";
import { CardOptionsDropDown } from "./CardOptionsDropdown";
import { badgeOptions } from "./cardOptionsData";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

const BookmarkCard = () => {
  return (
    <Card className="max-h-68 min-h-68 w-full max-w-97.5 border-border">
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
      <div className="px-4 flex justify-center -mt-4 -mb-3">
        <Separator />
      </div>
      <CardContent>
        <p className="text-sm font-medium">The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.</p>
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
      <Separator />
      <CardFooter>

      </CardFooter>
    </Card>);
}

export default BookmarkCard;