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
        <p className="text-sm">The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>);
}

export default BookmarkCard;