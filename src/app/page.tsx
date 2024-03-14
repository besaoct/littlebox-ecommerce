import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel'
// import ProductReel from '@/components/ProductReel'
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import {

  ArrowLeftRight,
 
  Smile,
  Sparkles,
  Truck,
} from 'lucide-react'
import Link from 'next/link'

const perks = [
  {
    name: 'Fast Delivery',
    Icon: Truck,
    description:
      'Experience lightning-fast shipping on all your orders with us.',
  },

  {
    name: 'New Styles',
    Icon: Sparkles,
    description:
      "Stay ahead of the curve with our constantly updated selection of the newest trends.",
  },
  {
  name: 'Best Fit',
  Icon: Smile,
  description:
    "Discover your perfect fit with our comprehensive size options and hassle-free returns.",
},

{
  name: 'Easy Exchange',
  Icon: ArrowLeftRight,
  description:
    "Seamlessly exchange your purchase if it's not exactly what you wanted.",
},
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='md:py-24 mx-auto text-center flex flex-col items-center max-w-3xl'>
         
         <p className='my-2'>
         As seen on Shark Tank India
         </p>
         
         <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-8xl'>
          #GoBeYou


            {/* <span className='text-gray-600'>
            choices
            </span> */}
            .
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
          The ultimate fashion destination for trendsetters who want the insta ready, celeb worthy looks & they want them now. With daily drops of fresh styles, fast free delivery & easy peasy returns, your best fit is right here.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link
              href='/products'
              className={`${buttonVariants()}`}>
              Browse Trending
            </Link>
            <Button variant='ghost'>
              New Arrivals &rarr;
            </Button>
          </div>
        </div>
        <ProductReel
          query={{ sort: 'desc', limit: 4 }}
          href='/products?sort=recent'
          title='New For You'
        /> 
    
      
        
    
      
      </MaxWidthWrapper>

      <section className='border-t border-zinc-200 bg-zinc-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-zinc-200 text-zinc-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
      
        </MaxWidthWrapper>
      </section>
    </>
  )
}