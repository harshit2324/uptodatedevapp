import { client } from '@/sanity/lib/client';
import React, { Suspense } from 'react'
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/quaries';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import View from '@/components/View';
export const experimental_ppr = true;

const page = async ({params}: {params: Promise<{ id: string}>} ) => {

  const id = (await params).id;

  const post = await client.fetch(STARTUP_BY_ID_QUERY,{id})

  if (!post) return notFound();

  

  return (
    <>
    <section className='pink_container !minh-[230px]'> <p className='tag'> {formatDate(post?._createdAt)} </p>
    <h1 className='heading'>{post.title}</h1>
    <p className=' sub-heading !max-w-5xl'>{post.description}</p>
    </section>
    <section className='section_container'>
   <img src={post.image} alt="thumbnail" className='w-full h-auto rounded-xl' />
   <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
    <div className='flex-between gap-5'>
    <Link href={`/user/${post.author?.id}`} className='flex gap-2 items-center mb-3' >
    <Image src={post.author.image} alt="avatar" height={64} width={64} className='rounded-full drop-shadow-lg' />
    <div >
   <p className='text-20-medium'>{post.author.name}</p>
   <p className='text-16-medium !text-black-300'>@{post.author.username}</p>
    </div>
    </Link>
    <p className='category-tag'>{post.category}</p>
    </div>
    <h3 className='text-30-bold'>news details</h3>
    <hr className='divider' />

    <Suspense fallback={<Skeleton className='view_skeleton' />} > 
    <View id={id} />
    </Suspense>
   </div>
    </section>

    

    </>
  )
}

export default page
