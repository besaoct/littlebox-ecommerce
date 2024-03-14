'use client'

import { usePathname } from 'next/navigation'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'




const against = [
  {
    name: 'Over Production',
    Icon: '/against/op.png',
    description:
      'Experience lightning-fast shipping on all your orders with us.',
  },

  {
    name: 'Unfair Labour Practices',
    Icon: '/against/ul.png',
    description:
      "Stay ahead of the curve with our constantly updated selection of the newest trends.",
  },
  {
  name: 'Pollution',
  Icon: '/against/pol.png',
  description:
    "Discover your perfect fit with our comprehensive size options and hassle-free returns.",
},


]
const Footer = () => {


  const pathname = usePathname()
  const pathsToMinimize = [
    '/verify-email',
    '/sign-up',
    '/sign-in',
  ]

  return (
    <footer className='bg-white flex-grow-0'>
      <MaxWidthWrapper>
        <div className='border-t border-gray-200'>
          {pathsToMinimize.includes(pathname) ? null : (
            <div className='pb-8 pt-16'>
              <div className='flex justify-center'>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="/lbi.avif" className='w-28' alt="" />
              </div>
            </div>
          )}

          {pathsToMinimize.includes(pathname) ? null : (
            <div>
              <div className='relative flex items-center px-6 py-6 sm:py-8 lg:mt-0'>
                <div className='absolute inset-0 overflow-hidden rounded-lg'>
                  <div
                    aria-hidden='true'
                    className='absolute bg-zinc-50 inset-0 bg-gradient-to-br bg-opacity-90'
                  />
                </div>

                <div className='text-center relative mx-auto '>
                  <h3 className='font-semibold text-gray-900'>
                   When you shop at littlebox, you stand against
                  </h3>
                  {/* <section className='border-t border-zinc-200 bg-zinc-50'> */}
     
          <div className='mt-6 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
         
         {against.map((label)=>
              <div
                key={label.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-zinc-200 text-zinc-900'>
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={label.Icon} alt="" className='rounded-[45%]' />
                    {/* {<perk.Icon className='w-1/3 h-1/3' />} */}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {label.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {label.description}
                  </p>
                </div>
              </div>
            )}
          </div>
      
        
      {/* </section> */}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='py-10 md:flex md:items-center md:justify-between'>
          <div className='text-center md:text-left'>
            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()} All Rights
              Reserved
            </p>
          </div>

          <div className='mt-4 flex items-center justify-center md:mt-0'>
            <div className='flex space-x-8'>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Terms
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Privacy Policy
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
