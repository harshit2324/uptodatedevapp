import React from 'react'
import Ping from './Ping'
import { constants } from 'buffer'
import { client } from '@/sanity/lib/client'
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/quaries'

const View = async ({id}: {id: string}) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

    
  return (
    <div className=' view-container '>
      <div className=' absolute-top-2 -right-2'>
     <Ping />
      </div>
      <p className='font-black'>100 views</p>
    </div>
  )
}

export default View
