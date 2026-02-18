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

export function NewBookmarkForm() {
  return (
    <FieldGroup className="w-full bg-card">
      <Field>
        <FieldLabel htmlFor="block-end-input">Title *</FieldLabel>
        <InputGroup className="h-auto ">
          <InputGroupInput id="block-end-input" placeholder="Google Meet" />
        </InputGroup>
        <FieldDescription className="text-destructive text-sm">Title is required</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="block-end-textarea">Description *</FieldLabel>
        <InputGroup>
          <Textarea
            id="block-end-textarea"
            placeholder="A link for searching for websites..."
            className="max-h-30"
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
          <InputGroupInput id="block-end-input" placeholder="https://googlemeet.com" />
        </InputGroup>
        <FieldDescription className="text-destructive text-sm">URL is required</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="block-end-input">Tags *</FieldLabel>
        <InputGroup className="h-auto ">
          <InputGroupInput id="block-end-input" placeholder="Google Meet" />
        </InputGroup>
        <FieldDescription className="text-destructive text-sm">At least one tag is required</FieldDescription>
      </Field>
    </FieldGroup>
  )
}
