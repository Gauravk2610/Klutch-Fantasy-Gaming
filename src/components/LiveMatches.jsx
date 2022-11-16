import { MapPinIcon } from '@heroicons/react/24/outline'
import React from 'react'

const LiveMatches = () => {
  return (
    <div className='max-w-xs w-full hidden lg:block space-y-3'>
        <img className='w-full' src="/assets/Match.png" alt="" />
        <div className='w-full rounded-lg border border-white'>
            <div className='text-lg font-semibold px-4 py-3 title border-b'>Live Matches</div>
            <div className='px-3 py-2 rounded-b-lg space-y-4 bg-[#21093d] '>
                <div className='rounded-md bg-white/30'>
                    {/* title */}
                    <div className='text-sm text-gray-200 font-semibold mx-2 py-2 border-b flex justify-between items-center'>
                        <div>SkyEsports Pro Invitational</div>
                        <div className='flex items-center justify-center flex-col'>
                            <img className='w-5 h-5 object-contain' src="/assets/valorant icon 2.png" alt="" />
                            <div className='text-white text-xs font-semibold'>Valorant</div>
                        </div>
                    </div>
                    {/* Matches */}
                    <div className='w-full py-2 pb-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <div className='w-10 h-6 bg-[#0090DE]' />
                                <div className='-ml-4 rounded-full w-14 h-14 bg-[#000235]'>
                                    <img className='p-2 w-full h-full object-contain' src="/assets/Cloud9.png" alt="" />
                                </div>
                                <div className='ml-2 text-sm font-semibold'>Cloud9</div>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-2 text-sm font-semibold'>BDS</div>
                                <div className=' z-10 -mr-4 rounded-full w-14 h-14 bg-[#000235]'>
                                    <img className='p-2 w-full h-full object-contain' src="/assets/BDS.png" alt="" />
                                </div>
                                <div className='w-10 h-6 bg-[#EC228B]' />
                            </div>
                        </div>
                        <div className='mx-auto flex items-center justify-center -mt-4'>
                            <span className='bg-[#FF323E] px-3 text-center rounded-md text-sm font-semibold'>Live</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-3 py-2 rounded-b-lg space-y-4 bg-[#21093d] '>
                <div className='rounded-md bg-white/30'>
                    {/* title */}
                    <div className='text-sm text-gray-200 font-semibold mx-2 py-2 border-b flex justify-between items-center'>
                        <div>PMPL 2022</div>
                        <div className='flex items-center justify-center flex-col'>
                            <img className='w-5 h-5 object-contain' src="/assets/pubg icon 2.png" alt="" />
                            <div className='text-white text-xs font-semibold'>PUBGM</div>
                        </div>
                    </div>
                    {/* Matches */}
                    <div className='w-full py-2 pb-6 px-3 relative'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <div className='text-md font-semibold'>MATCH 1 - Semifinals</div>
                                <div className='text-sm text-slate-400 font-semibold'>16 Teams Playing</div>
                            </div>
                        </div>
                        <div className='mx-auto flex items-center justify-center mt-2 relative'>
                            <div className='absolute left-0 flex items-center'>
                                <MapPinIcon className='w-4 h-4 text-slate-400' />
                                <span className='text-xs font-semibold text-slate-400'>Sanhok</span>
                            </div>
                            <span className='bg-[#FF323E] px-3 text-center rounded-md text-sm font-semibold'>Live</span>
                        </div>
                        <img className='absolute -right-4 -top-10 bottom-0' src="/assets/pubg card 3.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='px-3 py-2 rounded-b-lg space-y-4 bg-[#21093d] '>
                <div className='rounded-md bg-white/30'>
                    {/* title */}
                    <div className='text-sm text-gray-200 font-semibold mx-2 py-2 border-b flex justify-between items-center'>
                        <div>SkyEsports Pro Invitational</div>
                        <div className='flex items-center justify-center flex-col'>
                            <img className='w-5 h-5 object-contain' src="/assets/valorant icon 2.png" alt="" />
                            <div className='text-white text-xs font-semibold'>Valorant</div>
                        </div>
                    </div>
                    {/* Matches */}
                    <div className='w-full py-2 pb-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <div className='w-10 h-6 bg-[#0090DE]' />
                                <div className='-ml-4 rounded-full w-14 h-14 bg-[#000235]'>
                                    <img className='p-2 w-full h-full object-contain' src="/assets/Cloud9.png" alt="" />
                                </div>
                                <div className='ml-2 text-sm font-semibold'>Cloud9</div>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-2 text-sm font-semibold'>BDS</div>
                                <div className=' z-10 -mr-4 rounded-full w-14 h-14 bg-[#000235]'>
                                    <img className='p-2 w-full h-full object-contain' src="/assets/BDS.png" alt="" />
                                </div>
                                <div className='w-10 h-6 bg-[#EC228B]' />
                            </div>
                        </div>
                        <div className='mx-auto flex items-center justify-center -mt-4'>
                            <span className='bg-[#FF323E] px-3 text-center rounded-md text-sm font-semibold'>Live</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-3 py-2 rounded-b-lg space-y-4 bg-[#21093d] '>
                <div className='rounded-md bg-white/30'>
                    {/* title */}
                    <div className='text-sm text-gray-200 font-semibold mx-2 py-2 border-b flex justify-between items-center'>
                        <div>PMPL 2022</div>
                        <div className='flex items-center justify-center flex-col'>
                            <img className='w-5 h-5 object-contain' src="/assets/pubg icon 2.png" alt="" />
                            <div className='text-white text-xs font-semibold'>PUBGM</div>
                        </div>
                    </div>
                    {/* Matches */}
                    <div className='w-full py-2 pb-6 px-3 relative'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <div className='text-md font-semibold'>MATCH 1 - Semifinals</div>
                                <div className='text-sm text-slate-400 font-semibold'>16 Teams Playing</div>
                            </div>
                        </div>
                        <div className='mx-auto flex items-center justify-center mt-2 relative'>
                            <div className='absolute left-0 flex items-center'>
                                <MapPinIcon className='w-4 h-4 text-slate-400' />
                                <span className='text-xs font-semibold text-slate-400'>Sanhok</span>
                            </div>
                            <span className='bg-[#FF323E] px-3 text-center rounded-md text-sm font-semibold'>Live</span>
                        </div>
                        <img className='absolute -right-4 -top-10 bottom-0' src="/assets/pubg card 3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LiveMatches