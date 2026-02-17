import { type Provider } from "@supabase/supabase-js"

interface signInButtonProps {
  id: string;
  provider: Provider;
  className: string;
  img: string;
  alt: string;
  buttonText: string
}


export const signInData: signInButtonProps[] = [
  {
    id: 'discordSignin',
    provider: 'discord',
    className: 'bg-[#5865F2] hover:bg-[#4752C4] text-white border-none w-full h-10',
    img: '/discordlogo.svg',
    alt: 'Discord logo',
    buttonText: 'Sign in with Discord'
  },
  {
    id: 'githubSignin',
    provider: 'github',
    className: 'bg-transparent border border-[#24292F] hover:bg-[#1a1e22]/5 text-foreground w-full h-10',
    img: '/github.png',
    alt: 'Github logo',
    buttonText: 'Sign in with Github'
  },
  {
    id: 'googleSignin',
    provider: 'google',
    className: 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 w-full h-10',
    img: '/google.png',
    alt: 'Google logo',
    buttonText: 'Sign in with Google'
  }
]