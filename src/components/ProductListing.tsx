'use client'

import { useEffect, useState } from 'react'
import { Skeleton } from './ui/skeleton'
import Link from 'next/link'
import { cn, formatPrice } from '@/lib/utils'
// import { ALL_PRODUCTS } from '@/config'
import ImageSlider from './ImageSlider'

interface ProductListingProps {
  product: Product | null
  index: number
}

const ProductListing = ({
  product,
  index,
}: ProductListingProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 75)

    return () => clearTimeout(timer)
  }, [index])

  if (!product || !isVisible) return <ProductPlaceholder />
 

  const validUrls = product.images
    .map(({ image }) =>
      typeof image === 'string' ? image : image.url
    )
    .filter(Boolean) as string[]

  if (isVisible && product) {
    return (
      <Link
        className={cn(
          'invisible h-full w-full cursor-pointer group/main',
          {
            'visible animate-in fade-in-5': isVisible,
          }
        )}
        href={`/p/${product.id}`}>
        <div className='flex flex-col w-full  h-full border border-slate-50 shadow-sm '>
            {/* <div > */}

          <ImageSlider urls={validUrls}  />
            {/* </div> */}
           <div className='px-2 pb-2'>
           
          <p className='mt-0 bg-zinc-100 text-xs px-2 py-1 -mx-2'>New in</p> 
          {/* //store name */}
         <div className='flex  flex-col justify-evenly'>

          <h3 className='mt-2 font-medium text-sm text-gray-700'>
            {product.name}
          </h3>

          <p className='mt-1 text-xs text-zinc-500 capitalize flex gap-1'>
      
           
          </p>
          <p className='mt-1 font-medium text-sm text-gray-900'>
            {formatPrice(product.price)} 
            <del  className='ml-2'> {formatPrice(product.orpr)}</del>
          </p>
         </div>
         
           </div>
        </div>
      </Link>
    )
  }
}

const ProductPlaceholder = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-sm'>
        <Skeleton className='h-full w-full' />
      </div>
      <Skeleton className='mt-2 h-4 rounded-sm' />
      <Skeleton className='mt-2 w-2/3 h-4 rounded-sm' />
      <div className='flex gap-2'>

      <Skeleton className='mt-2 w-16 h-4 rounded-sm' />
      <Skeleton className='mt-2 w-16 h-4 rounded-sm' />
      </div>
      <Skeleton className='mt-2 w-12 h-4 rounded-sm' />
    </div>
  )
}

export default ProductListing