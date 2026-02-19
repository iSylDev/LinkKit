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
import { z } from 'zod'
import { useBookmarkStore } from "@/store/useBookmarkStore"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchMetaData } from "@/helpers/fetchMetaData"

type NewBookmarkValues = z.infer<typeof NewBookmarkSchema>

export function NewBookmarkForm() {
  const [websiteImage, setWebsiteImage] = useState('');
  const { addBookmark } = useBookmarkStore();

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<NewBookmarkInput, any, NewBookmarkOutput>({ 
    resolver: zodResolver(NewBookmarkSchema),
    mode: 'onBlur'
  });

  const watchedUrl = watch('websiteUrl');
  const descriptionValue = watch('description')

  // const { data: fetchedWebsiteUrl, error: websiteImageFetchError, isLoading: isFetchingWebsiteImage } = useQuery({
  //   queryKey: ['meta_Data image', watchedUrl],
  //   queryFn: () => fetchMetaData(watchedUrl),
  //   enabled: !!watchedUrl && watchedUrl.length > 7 && watchedUrl.startsWith('http')
  // });



  function createNewBookmark(data: NewBookmarkOutput) {
    // addBookmark(fetchedWebsiteUrl);
    console.log(data)

  }
  return (


    <form id="new-bookmark-form" onSubmit={handleSubmit(createNewBookmark)}>
      <FieldGroup className="w-full bg-card" >
        <Field>
          <FieldLabel
            htmlFor="block-end-input">Title *</FieldLabel>
          <InputGroup className="h-auto ">
            <InputGroupInput
              id="block-end-input"
              placeholder="Google Meet" {...register('title')}
              aria-invalid={!!errors.title}
            />
          </InputGroup>
          {errors.title?.message && <FieldDescription className="text-destructive text-sm">{errors.title.message}</FieldDescription>}
        </Field>
        <Field>
          <FieldLabel htmlFor="block-end-textarea">Description </FieldLabel>
          <InputGroup>
            <Textarea
              id="block-end-textarea"
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
          <FieldLabel htmlFor="block-end-input">Website URL *</FieldLabel>
          <InputGroup className="h-auto ">
            <InputGroupInput
              id="block-end-input"
              placeholder="https://googlemeet.com" {...register("websiteUrl")}
              aria-invalid={!!errors.websiteUrl}
            />
          </InputGroup>
          {errors.websiteUrl?.message && <FieldDescription className="text-destructive text-sm">{errors.websiteUrl.message}</FieldDescription>}
        </Field>
        <Field>
          <FieldLabel htmlFor="block-end-input">Tags *</FieldLabel>
          <InputGroup className="h-auto ">
            <InputGroupInput
              id="block-end-input"
              placeholder="Mettings, Office, Productivity " {...register('tags')}
              aria-invalid={!!errors.tags}
            />
          </InputGroup>
          {errors.tags?.message && <FieldDescription className="text-destructive text-sm">{errors.tags.message}</FieldDescription>}
        </Field>
      </FieldGroup>
    </form>
  )
}
