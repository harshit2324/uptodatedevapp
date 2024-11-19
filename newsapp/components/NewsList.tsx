import { formatDate } from '@/lib/utils'
import { EyeIcon, Library } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'

const NewsList = ({ post }: { post: startuptypecard} ) => {
  const {_createdAt, views, author: {_id: authorId, name}, _id, tittle, cetegory, description, image} = post;
  return (
    <li className='startup-card group'>
      <div className='flex-between'>
     <p className='startup_card_date'>
      { formatDate(_createdAt)}
     </p>
     <div className='flex gap-1.5'>
      <EyeIcon className='size-6 text-primary'/>
      <span className='text-16-medium'>{views}</span>
     </div>
      </div>


      <div className='flex-between mt-5 gap-5' >
        <div className='flex-1'>
          <Link href={`/user/${authorId}`}>
          <p className='text-16-medium line-clamp-1'>{name}</p>
           </Link>
           <Link href={`/startup/${_id}`}>
           <h3 className='text-26-semibold line-clamp-1'>{tittle}</h3>
           </Link>
        </div>
        <Link href={`/startup/${_id}`}>
  <Image src='https://placehold.co/600x400' alt='placeholder' width={48} height={48} className='rounded-full' />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}  >
      <p>
        {description}
      </p>
      <img src={image} alt="placeholder" className='startup-card_img' />
      </Link>
      <div className='flex-between gap-3 mt-5'>
      <Link href={`/?query=${cetegory?.toLowerCase()}`}>
      <p className='text-16-medium'>{cetegory}</p>
      </Link>
      <Button className='startup-card_btn' asChild>
        <Link href={`/startup/${_id}`}>
        Details
        </Link>
      </Button>
      </div>
    </li>
  )
}

export default NewsList