import React from 'react'

const News = () => {
  return (
    <div className=' max-w-xs w-full hidden xl:block rounded-lg border border-white'>
        <div className='text-lg font-semibold px-4 py-3 title border-b'>News</div>
        <div className='px-4 py-4 rounded-b-lg space-y-4 bg-[#21093d] '>
            {
                [...Array(5)].map((item, index) => {
                    return (
                        <div key={index} className='relative rounded-lg border-2'>
                            <img className='rounded-lg' src="/assets/News1.png" alt="" />
                            <div className='gradient rounded-lg  absolute bottom-0 px-4 py-2 left-0 right-0 w-full'>
                                <div className='flex space-x-2'>
                                    <img className='w-5 h-5 object-contain' src="/assets/news logo.png" alt="" />
                                    <div className='text-slate-100 text-xs'>Talkesport.com</div>
                                </div>
                                <div className='text-xs'>
                                Riot underestimated interest for first international Game Changers event
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default News