import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'

function Header() {
  return (
    <div className='flex justify-between items-center p-8 w-full'>
        <div>
            <h1 className='text-2xl font-bold'>Prep Exam</h1>
        </div>
        <div>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton />
                <SignUpButton />
            </SignedOut>
        </div>

    </div>
  )
}

export default Header