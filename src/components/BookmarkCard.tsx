import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card"
import { CardOptionsDropDown } from "./CardOptionsDropdown";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import StatsShowcase from "./StatsShowcase";
import type { Bookmark } from "@/types";

const BookmarkCard = ({ id, url, image_url, title, description, is_pinned, view_count, last_visited_at, created_at, tags }: Bookmark) => {
  return (
    <Card
      className="'min-h-[280px] h-auto w-full max-w-97.5 border-border py-0 pt-5">
      <CardHeader>
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 border border-border rounded-xl shrink-0 overflow-hidden flex items-center justify-center">
            <img src={image_url || ''} className="w-8 h-8   object-contain antialiased " alt="IMG" />
          </div>
          <div>
            <h3 className="text-foreground">{title}</h3>
            <p className="text-sm">{url}</p>
          </div>
        </div>
        <CardAction>
          <CardOptionsDropDown id={id} url={url} is_pinned={is_pinned} />
        </CardAction>
      </CardHeader>
      <div className="px-4 flex justify-center -mt-4 -mb-1">
        <Separator />
      </div>
      <CardContent className="px-4 flex-1">
        <p className="text-sm font-medium line-clamp-4 leading-6">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {
            tags?.map((option) => (
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
          <StatsShowcase view_count={view_count} last_visited_at={last_visited_at} created_at={created_at} is_pinned={is_pinned} />
        </CardFooter>
      </div>
    </Card>);
}

export default BookmarkCard;