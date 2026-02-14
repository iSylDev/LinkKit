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
import { DropdownMenuSeparator } from "./ui/dropdown-menu";
import { badgeOptions } from "./cardOptionsData";
import { Badge } from "./ui/badge";

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
      <DropdownMenuSeparator className="-mt-4 -mb-2 mx-6" />
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
      <DropdownMenuSeparator />
      <CardFooter>
        
      </CardFooter>
    </Card>);
}

export default BookmarkCard;