import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from 'lucide-react'
import { NewBookmarkForm } from "./NewBookmarkForm"

export function NewBookmarkModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='flex gap-2 p-2 lg:p-5 '>
          <Plus className='size-5' />
          <p className='hidden md:block'>Add Bookmark</p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a Bookmark</DialogTitle>
          <DialogDescription>
            Save a link with details to keep your collection organized.
          </DialogDescription>
        </DialogHeader>
        <NewBookmarkForm />
        <DialogFooter className="flex flex-row justify-end">
          <DialogClose asChild >
            <Button variant='outline' className="px-3">Cancel</Button>
          </DialogClose>
            <Button className="px-3" form="new-bookmark-form" >Add Bookmark</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
