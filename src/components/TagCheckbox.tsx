

import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Badge } from '../components/ui/badge'

export function TagCheckbox() {
  return (
    <FieldGroup className=" w-full hover:bg-secondary  rounded-lg overflow-hidden">
      <Field orientation="horizontal" className="flex justify-between ">
        <FieldLabel htmlFor="terms-checkbox-basic" className="hover:cursor-pointer px-3">
        <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
          <p className="py-3 ">Framework</p>
          <Badge variant='outline' className="bg-secondary ml-auto border border-border ">
            1
          </Badge>
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}
