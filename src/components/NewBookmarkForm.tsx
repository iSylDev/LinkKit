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

type NewBookmarkValues = z.infer<typeof NewBookmarkSchema >

export function NewBookmarkForm() {
  const [websiteImage, setWebsiteImage] = useState();
  const { addBookmark } = useBookmarkStore();

  const { register, handleSubmit, watch } = useForm<NewBookmarkInput, any, NewBookmarkOutput>({ resolver: zodResolver(NewBookmarkSchema) });

  const watchedUrl = watch('websiteUrl');

  useEffect(() => {
    const fetchMetaData = async () => {
      if (watchedUrl && watchedUrl.startsWith('http')){
        try {
          const response = await fetch()
          const data = await response.json()

          if (data.image){
            setWebsiteImage(data.image)
          }
        } catch (error) {
          if (error) throw new Error('Error fetching website image')
        }
      }
    }

    const timer = setTimeout(fetchMetaData, 1000)
    return () => clearTimeout(timer)
  },[watchedUrl])

  
  async function createNewBookmark(){
    // addBookmark();
  }
  return (


    <form onSubmit={() => handleSubmit}>
      <FieldGroup className="w-full bg-card" >
        <Field>
          <FieldLabel htmlFor="block-end-input">Title *</FieldLabel>
          <InputGroup className="h-auto ">
            <InputGroupInput id="block-end-input" placeholder="Google Meet" {...register('title')} />
          </InputGroup>
          <FieldDescription className="text-destructive text-sm">Title is required</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="block-end-textarea">Description *</FieldLabel>
          <InputGroup>
            <Textarea
              id="block-end-textarea"
              placeholder="A platform for my meetings..."
              className="max-h-30"
              {...register('description')}
            />
          </InputGroup>
          <div className="flex justify-between">
            <p className="text-destructive text-sm">Description is required</p>
            <InputGroupText>0/280</InputGroupText>
          </div>
        </Field>
        <Field>
          <FieldLabel htmlFor="block-end-input">Website URL *</FieldLabel>
          <InputGroup className="h-auto ">
            <InputGroupInput id="block-end-input" placeholder="https://googlemeet.com" {...register("websiteUrl")} />
          </InputGroup>
          <FieldDescription className="text-destructive text-sm">URL is required</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="block-end-input">Tags *</FieldLabel>
          <InputGroup className="h-auto ">
            <InputGroupInput id="block-end-input" placeholder="Mettings, Office, Productivity " {...register('tags')} />
          </InputGroup>
          <FieldDescription className="text-destructive text-sm">At least one tag is required</FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
