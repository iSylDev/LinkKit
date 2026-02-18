import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

export function NewBookmarkForm() {
  return (
    <FieldGroup className="w-full">
      <Field>
        <FieldLabel htmlFor="block-end-input">Title *</FieldLabel>
        <InputGroup className="h-auto ">
          <InputGroupInput id="block-end-input" placeholder="Google Meet" />
        </InputGroup>
        <FieldDescription className="text-destructive text-sm">Title is required</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="block-end-textarea">Textarea</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="block-end-textarea"
            placeholder="Write a comment..."
          />
        </InputGroup>
          <div className="flex justify-between">
          <p className="text-destructive text-sm">Description is required</p>
            <InputGroupText>0/280</InputGroupText>
          </div>
        <FieldDescription>
          Footer positioned below the textarea.
        </FieldDescription>
      </Field>
    </FieldGroup>
  )
}
