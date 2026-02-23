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
import { useBookmarkStore } from "@/store/useBookmarkStore"
import { Spinner } from "./ui/spinner"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewBookmarkSchema, type NewBookmarkInput, type NewBookmarkOutput } from "@/schema/schema"
import { useQueryClient, useQuery } from "@tanstack/react-query"
import { fetchMetaData } from "@/helpers/fetchMetaData"
import { useDebounce } from 'use-debounce';
import { SpinnerText } from "./SpinnerText"
import { Badge } from "./ui/badge"
import { CircleAlert } from "lucide-react"
import { useUser } from "@/hooks/useUser"
import { useEffect, useState } from "react"



export function NewBookmarkModal() {
  const queryClient  = useQueryClient()
  const [isOpen, setIsOpen] = useState(false);
  const { addBookmark, editingBookmark, editBookmark } = useBookmarkStore();
  const { data: user } = useUser();

  const { register, handleSubmit, watch, formState: { errors, isSubmitting }, reset, setValue } = useForm<NewBookmarkInput, any, NewBookmarkOutput>({
    resolver: zodResolver(NewBookmarkSchema),
    mode: 'onBlur'
  });

  // Debounce URL so it doesn't spam fetches
  const [debouncedUrl] = useDebounce(watch('websiteUrl'), 2000);

  // Watch if the user enters a description
  const descriptionValue = watch('description');

  // When the user enters a url, fetch the website data from that url
  const {
    data: fetchedWebsiteData,
    error: websiteDataFetchError,
    isLoading: isFetchingWebsiteData } = useQuery({
      queryKey: ['website_data', debouncedUrl],
      queryFn: () => fetchMetaData(debouncedUrl),
      enabled: !!debouncedUrl && debouncedUrl.length > 7 && debouncedUrl.startsWith('https://') && !isSubmitting,
      staleTime: 1000 * 60
    });

  useEffect(() => {
    if (editingBookmark) {
      setIsOpen(true);
      reset({
        title: editingBookmark.title,
        description: editingBookmark.description,
        websiteUrl: editingBookmark.url,
        tags: editingBookmark.tags?.join(', ') || ''
      })
    }
  }, [editingBookmark, reset]);

  useEffect(() => {
    if (fetchedWebsiteData && !editingBookmark) {
      const currentDescription = watch('description');

      if (!currentDescription) {
        setValue('description', fetchedWebsiteData.description)
      }
    }
  }, [fetchedWebsiteData, editingBookmark, setValue, watch])



  async function createNewBookmark(data: NewBookmarkOutput) {
    if (!user) {
      console.error('No user found, Please log in again')
      return
    }

    const websiteImage = fetchedWebsiteData?.icon || fetchedWebsiteData?.image || editingBookmark?.image_url || 'https://cdn-icons-png.flaticon.com/512/1243/1243933.png';


    const finalDescription = data.description || fetchedWebsiteData?.description || ''

    if (editingBookmark) {
      await editBookmark(editingBookmark.id, {
        title: data.title,
        description: finalDescription,
        url: data.websiteUrl,
        tags: data.tags
      })
    }

    await addBookmark(
      user,
      data.websiteUrl,
      websiteImage,
      data.title,
      finalDescription,
      data.tags
    );

    queryClient.invalidateQueries({ queryKey: ['bookmarks'] });
    setIsOpen(false);
    reset();
  }


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} >
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
        <form id="new-bookmark-form" onSubmit={handleSubmit(createNewBookmark)}>
          <FieldGroup className="w-full bg-card" >
            <Field>
              <FieldLabel
                htmlFor="title">Title *</FieldLabel>
              <InputGroup className="h-auto ">
                <InputGroupInput
                  id="title"
                  placeholder="Google Meet" {...register('title')}
                  aria-invalid={!!errors.title}
                />
              </InputGroup>
              {errors.title?.message && <FieldDescription className="text-destructive text-sm">{errors.title.message}</FieldDescription>}
            </Field>
            <Field>
              <div className="flex justify-between items-center">
                <FieldLabel htmlFor="description">Description </FieldLabel>

              </div>
              <InputGroup>
                <Textarea
                  id="description"
                  placeholder="A platform for my meetings..."
                  className="max-h-30"
                  {...register('description')}
                />
              </InputGroup>
              <div className="flex justify-end">
                <InputGroupText>{descriptionValue?.length}/280 </InputGroupText>
              </div>
            </Field>
            <Field>
              <div className="flex justify-between items-center">
                <FieldLabel htmlFor="url">Website URL *</FieldLabel>
                {isFetchingWebsiteData && <SpinnerText text="Fetching Website Data" />}
                {websiteDataFetchError && <Badge variant={'destructive'} className="border border-destructive bg-transparent text-destructive">
                  <CircleAlert />
                  <p>Couldn't fetch website data</p>
                </Badge>}
              </div>
              <InputGroup className="h-auto ">
                <InputGroupInput
                  id="url"
                  placeholder="https://googlemeet.com" {...register("websiteUrl")}
                  aria-invalid={!!errors.websiteUrl}
                />
              </InputGroup>
              {errors.websiteUrl?.message && <FieldDescription className="text-destructive text-sm">{errors.websiteUrl.message}</FieldDescription>}
            </Field>
            <Field>
              <FieldLabel htmlFor="tags">Tags *</FieldLabel>
              <InputGroup className="h-auto ">
                <InputGroupInput
                  id="tags"
                  placeholder="Mettings, Office, Productivity " {...register('tags')}
                  aria-invalid={!!errors.tags}
                />
              </InputGroup>
              {errors.tags?.message && <FieldDescription className="text-destructive text-sm">{errors.tags.message}</FieldDescription>}
            </Field>
            {websiteDataFetchError &&
              <p className="text-sm text-destructive">We couldn't fetch any info for the website your provided. Please enter a description manually.</p>
            }
          </FieldGroup>
          <DialogFooter className="flex flex-row justify-end mt-5">
            <DialogClose asChild >
              <Button type="button" variant='outline' className="px-3">Cancel</Button>
            </DialogClose>
            <Button disabled={isSubmitting} className="px-3"  >
              {isSubmitting && <Spinner />}
              {isSubmitting ? <p className="text-xs">Adding Bookmark</p> : <p>Add Bookmark</p>}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
