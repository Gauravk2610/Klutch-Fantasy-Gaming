import React from 'react'
import LiveMatches from './LiveMatches'
import News from './News'
import Teams from './Teams'

const Home = () => {
  return (
    <div className='flex flex-row text-white gap-6 mx-6 py-6'>
        {/* News */}
        <News />
        {/* Create Team */}
        <Teams />
        {/* Live Matches */}
        <LiveMatches />
    </div>
  )
}

export default Home