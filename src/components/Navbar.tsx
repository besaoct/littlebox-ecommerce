import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
// import { Icons } from './Icons'
import NavItems from './NavItems'
import { buttonVariants } from './ui/button'
import Logo from './LogoIcon'
import Cart from './Cart'
// import { getServerSideUser } from '@/lib/payload-utils'
// import { cookies } from 'next/headers'

// import UserAccountNav from './UserAccountNav'
import MobileNav from './MobileNav'
import { User2 } from 'lucide-react'

const Navbar = async () => {
  // const nextCookies = cookies()

  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
      <header className='relative bg-white'>
        <MaxWidthWrapper>
          <div className='border-b border-gray-200'>
            <div className='flex h-16 items-center'>
              <MobileNav />

              <div className='ml-4 flex lg:ml-0'>
                <Link href='/'>
                  <Logo/>
                </Link>
              </div>

              <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
                <NavItems />
              </div>

              <div className='ml-auto flex items-center'>
                <div className='hidden lg:flex  font-thin lg:flex-1 lg:items-center lg:justify-end lg:space-x-4'>
                  {false? null : (
                    <Link
                      href='/login'
                      className={buttonVariants({
                        variant: 'ghost',
                        
                      })}>
                    <User2 width={20} />
                    </Link>
                  )}

                  {false ? null : (
                    <span
                      className='h-6 w-px bg-gray-200'
                      aria-hidden='true'
                    />
                  )}

{false ? (
                   <>
                   </>
                  ) : (
                    <Link
                      href='/register'
                      className={buttonVariants({
                        variant: 'ghost',
                      })}>
                      Create account
                    </Link>
                  )}


                  {false? (
                    <span
                      className='h-6 w-px bg-gray-200'
                      aria-hidden='true'
                    />
                  ) : null}

                  {false ? null : (
                    <div className='flex lg:ml-6'>
                      <span
                        className='h-6 w-px bg-gray-200'
                        aria-hidden='true'
                      />
                    </div>
                  )}

                </div>
                  <div className='ml-4 flow-root lg:ml-8'>
                    <Cart />
                  </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar
