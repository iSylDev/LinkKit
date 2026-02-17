import { BookmarkCheck } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/useAuthStore';
import { Spinner } from '@/components/ui/spinner';
import { signInData } from './SignInData';



const SignInPage = () => {
  const { isLoading, error, signInWithProvider } = useAuthStore();

  return (<section className='h-screen w-full flex justify-center items-center'>
    <div className="container bg-white p-7 lg:w-[50%] rounded-xl">
      <header>
        <div className="flex items-center gap-3 mb-9 font-bold">
          <label className="p-1 rounded-lg bg-primary" >
            <BookmarkCheck className="size-6 stroke-white" />
          </label>
          <h3 className="text-2xl font-bold text-foreground">LinkKit</h3>
        </div>
        <div>
          <h3 className='text-xl text-primary font-bold mb-2'>Ready to start stacking your kit?</h3>
          <p >Jump right in and start building your collection. One click to keep your favorite links organized, searchable, and always within reach.</p>
        </div>
      </header>

      <div className='mt-9 flex flex-col gap-3'>
        {
          signInData.map((data) => (
            <Button
              disabled={isLoading}
              onClick={() => signInWithProvider(data.provider)}
              className={data.className}
            >
              {
                !isLoading
                  ? (<div className='flex gap-2'>
                    <img src={data.img} alt="discord logo" className='w-5' />
                    <p>{data.buttonText}</p>
                  </div>)
                  : (<Spinner />)
              }
            </Button>
          ))
        }
        {error && <p className='text-destructive text-right py-3'>{error}</p>}
      </div>

    </div>
  </section>
  );
}

export default SignInPage;