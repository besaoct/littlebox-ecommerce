'use client'
import { TQueryValidator } from '@/lib/validators/query-validator'
import Link from 'next/link'
import ProductListing from './ProductListing';

interface ProductReelProps {
  title: string
  subtitle?: string
  href?: string
  query: TQueryValidator
}

const FALLBACK_LIMIT = 4

const staticProducts: Product[] = [
    {
      id: "1",
      name: 'High Waist Pleated Pants With Tailored Vest Style Top In Black',
      price: 19.99,
      orpr: 23.99,
      // category: 'Merch',
      images: [
        { image: '/pro/1p.webp' },
        { image: '/pro/1p0.webp' },
        { image: '/pro/1p1.jpeg' },
        // Add more image objects as needed
      ],
    },
    {
      id: "2",
      name: 'Matching Set of Vest Coat and Trousers in Cappuccino',
      price: 29.99,
      orpr: 33.99,
      // category: 'Merch',
      images: [
        { image: '/pro/2p.webp' },
        { image: '/pro/2p3.jpeg' },
        { image: '/pro/2p0.webp' },
        { image: '/pro/2p1.webp' },
        { image: '/pro/2p2.webp' },
        { image: '/pro/2p4.webp' },
        { image: '/pro/2p5.webp' },
        
      ],
    },   
    
    {
      id: "3",
      name: 'High Waist Pleated Pants With Tailored Vest Style Top In Black',
      price: 29.99,
      orpr: 33.99,
      // category: 'Used',
      images: [
        { image: '/pro/1p.webp' },
        { image: '/pro/1p0.webp' },
        { image: '/pro/1p1.jpeg' },
        // Add more image objects as needed
      ],
    },   {
      id: "4",
      name: 'Matching Set of Vest Coat and Trousers in Cappuccino',
      price: 29.99,
      orpr: 23.99,
      images: [
        { image: '/pro/2p.webp' },
        { image: '/pro/2p3.jpeg' },
        { image: '/pro/2p0.webp' },
        { image: '/pro/2p1.webp' },
        { image: '/pro/2p2.webp' },
        { image: '/pro/2p4.webp' },
        { image: '/pro/2p5.webp' },
        
      ],
    },

  ];
  
  

const ProductReel = (props: ProductReelProps) => {
  const { title, subtitle, href, query } = props

const products = staticProducts;

let map: (Product | null)[] = [];
  if (products && products.length) {
    map = products;
  } else {
    map = new Array<null>(query.limit ?? FALLBACK_LIMIT).fill(null);
  }

  return (
    <section className='py-12 px-2'>
      <div className='md:flex md:items-center md:justify-between mb-4'>
        <div className='max-w-2xl lg:max-w-4xl '>
          {title ? (
            <h1 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
              {title}
            </h1>
          ) : null}
          {subtitle ? (
            <p className='mt-2 text-sm text-muted-foreground'>
              {subtitle}
            </p>
          ) : null}
        </div>

        {href ? (
          <Link
            href={href}
            className='hidden text-sm font-medium text-zinc-800 hover:opacity-70 md:block'>
            Show more{' '}
            <span aria-hidden='true'>&rarr;</span>
          </Link>
        ) : null}
      </div>

      <div className='relative'>
        <div className='mt-6 flex items-center  w-full'>
          <div className='w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8'>
            {map.map((product, i) => (
              <ProductListing
                key={`product-${i}`}
                product={product}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
     {href ? (
          <Link
            href={href}
            className='block text-sm mt-6 font-medium text-zinc-800 hover:opacity-70 md:hidden'>
            Show more{' '}
            <span aria-hidden='true'>&rarr;</span>
          </Link>
        ) : null}
    </section>
  )
}

export default ProductReel