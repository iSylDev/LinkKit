import { FieldGroup, Field, FieldLabel } from "../ui/field";
import { Button } from "../ui/button";
import { Input } from "../ui/input";




const SignUpForm = () => {
  return (<FieldGroup className="flex flex-col placeholder:text-xs mt-7 gap-5">
    <Field>
      <FieldLabel htmlFor="full-name">Full Name *</FieldLabel>
      <Input id="full-name" className='placeholder:text-sm h-12' />
    </Field>
    <Field>
      <FieldLabel htmlFor="email">Email *</FieldLabel>
      <Input id="email" className='placeholder:text-sm h-12' />
    </Field>
    <Field>
      <FieldLabel htmlFor="Password">Password *</FieldLabel>
      <Input id="Password" className='placeholder:text-sm h-12' />
    </Field>
    <Button className='py-6'>
      Sign up
    </Button>
  </FieldGroup>);
}

export default SignUpForm;