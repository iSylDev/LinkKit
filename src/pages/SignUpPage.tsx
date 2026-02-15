import { BookmarkCheck } from 'lucide-react'
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
const SignUpPage = () => {

  return (<div className="container bg-white p-7">
    <header>
      <div className="flex items-center gap-3 mb-9 font-bold">
        <label className="p-1 rounded-lg bg-primary" >
          <BookmarkCheck className="size-6 stroke-white" />
        </label>
        <h3 className="text-2xl font-bold text-foreground">LinkKit</h3>
      </div>
      <div>
        <h3 className='text-xl text-primary font-bold mb-2'>Create your account</h3>
        <p className='text-'>Join us and start building your kit with your favourite links. Organized, searchable, and always within reach.</p>
      </div>
    </header>


    <FieldGroup className="flex flex-col placeholder:text-xs mt-12 gap-5">
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
    </FieldGroup>

    <div className='mt-9'>
      <Button className='py-6 w-full bg-[#5D6AF2] hover:bg-[#5D6AF2]/80' variant={'outline'}>
        <img src="/discordlogo.svg" alt="discord logo" className='w-5' />
        <p className='text-white'>Sign up with Discord</p>
      </Button>
    </div>

  </div>);
}

export default SignUpPage;