import type { NextPage } from 'next'
import { useTheme } from 'next-themes'

import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [mounted , setMounted] = useState(false)
  const {theme,setTheme} = useTheme()
  useEffect(()=> setMounted(true),[])
  if(!mounted) return null
  
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h2 className='text-4xl '>Current Theme Mode: {theme}</h2>

      <button className='px-6 bg-black text-white dark:bg-white dark:text-black mt-6 py-3 rounded'
      onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Toggle To {theme === 'light' ? ' "Dark' : 'Light' }
      </button>
      
    </div>
  )
}

export default Home
