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
import { useBookmarkStore } from "@/store/useBookmarkStore"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchMetaData } from "@/helpers/fetchMetaData"
import { useDebounce } from 'use-debounce';
import { SpinnerText } from "./SpinnerText"
import { Badge } from "./ui/badge"
import { CircleAlert } from "lucide-react"

export function NewBookmarkForm() {
  const [websiteImage, setWebsiteImage] = useState('');
  const [description, setDescription] = useState('')
  const { addBookmark } = useBookmarkStore();

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<NewBookmarkInput, any, NewBookmarkOutput>({
    resolver: zodResolver(NewBookmarkSchema),
    mode: 'onBlur'
  });

  const watchedUrl = watch('websiteUrl');
  const [debouncedUrl] = useDebounce(watchedUrl, 2000);

  const descriptionValue = watch('description')

  const { data: fetchedWebsiteData, error: websiteDataFetchError, isLoading: isFetchingWebsiteData } = useQuery({
    queryKey: ['website_data', debouncedUrl],
    queryFn: () => fetchMetaData(debouncedUrl),
    enabled: !!debouncedUrl && debouncedUrl.length > 7 && debouncedUrl.startsWith('http')
  });




  function createNewBookmark(data: NewBookmarkOutput) {
    if (fetchedWebsiteData.image) setWebsiteImage(fetchedWebsiteData.image);
    if (!descriptionValue && fetchedWebsiteData.description) setDescription(fetchedWebsiteData.description);

    console.log(data, fetchedWebsiteData, websiteDataFetchError, isFetchingWebsiteData)
    
    addBookmark(data.websiteUrl, websiteImage, data.title, description, data.tags );
  }
  return (


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
    </form>
  )
}
