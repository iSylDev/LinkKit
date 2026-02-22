import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical } from "lucide-react"
import { getCardOptions } from "./cardOptionsData"
import { useBookmarkStore } from "@/store/useBookmarkStore"
import { useUser } from "@/hooks/useUser"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { Bookmark } from "@/types"

export function CardOptionsDropDown({bookmark, id, url, is_pinned }: { bookmark: Bookmark | null, id: string, url: string, is_pinned: boolean }) {
  const { pin, view, copy, archive, setEditingBookmark } = useBookmarkStore();
  const { data: user } = useUser();
  const queryClient = useQueryClient()

  const pinMutation = useMutation({
    mutationFn: () => pin(id, user!.id, is_pinned),

    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['bookmarks'] });

      const prevBookmarks = queryClient.getQueryData<Bookmark[]>(['bookmarks']);

      // Optimistic Update Pin Icon
      queryClient.setQueryData<Bookmark[]>(["bookmarks"], (old) => {
        if (!old) return [];
        return old.map((b) =>
          b.id === id ? { ...b, is_pinned: !is_pinned } : b
        );
      });

      // Return a context object with the snapshotted value
      return { prevBookmarks };
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmarks'] })
      // Your Toast goes here
    },
    onError: (error, newTodo, context) => {
      if (context?.prevBookmarks) {
        queryClient.setQueryData(['bookmarks'], context.prevBookmarks);
      }
      throw error;
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmarks'] })
    }
  });


  // const archiveMutation = useMutation({
  //   mutationFn: () => archive(id, user!.id, is_pinned),

  //   onMutate: async () => {
  //     await queryClient.cancelQueries({ queryKey: ['bookmarks'] });

  //     const prevBookmarks = queryClient.getQueryData<Bookmark[]>(['bookmarks']);

  //     // Optimistic Update Pin Icon
  //     queryClient.setQueryData<Bookmark[]>(["bookmarks"], (old) => {
  //       if (!old) return [];
  //       return old.map((b) =>
  //         b.id === id ? { ...b, is_pinned: !is_pinned } : b
  //       );
  //     });

  //     // Return a context object with the snapshotted value
  //     return { prevBookmarks };
  //   },

  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['bookmarks'] })
  //     // Your Toast goes here
  //   },
  //   onError: (error, newTodo, context) => {
  //     if (context?.prevBookmarks) {
  //       queryClient.setQueryData(['bookmarks'], context.prevBookmarks);
  //     }
  //     throw error;
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries({ queryKey: ['bookmarks'] })
  //   }
  // })

  const cardOptions = getCardOptions({
    id,
    url,
    actions: {
      onView: (e) => view(e, url),
      onCopy: () => copy(url),
      onPin: () => pinMutation.mutate(),
      onEdit: () => {
        if (bookmark){
          setEditingBookmark(bookmark)
        }
      },
      onArchive: () => user && archive(id, user.id, false)
    }
  })


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="bg-card ">
        <Button variant="outline" className="p-1.5">
          <EllipsisVertical className="size-5 text-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-43 py-2 px-2" >
        {
          cardOptions.map((option) => (
            <DropdownMenuItem id={option.label} className="py-2 px-3 text-sm text-foreground font-light gap-3" onClick={(e) => option.action(e)}>
              <option.icon />
              <p >{option.label}</p>
            </DropdownMenuItem>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
