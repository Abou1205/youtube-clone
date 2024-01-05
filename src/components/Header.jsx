import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoSearch } from "react-icons/go";
import { AiFillBell, AiFillVideoCamera } from "react-icons/ai";

const Header = () => {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = e.target[0].value
    navigate(`/result?search_query=${text}`)
  }

  return (
    <header className='flex justify-between items-center p-4'>
        <Link to={'/'} className='flex items-center gap-[10px]'>
            <img src="/youtube.png" className='w-[50px]' />
            <h1 className='text-xl max-sm:hidden'>Youtube</h1>
        </Link>

        <form onSubmit={handleSubmit} className='flex items-center border border-gray-400 rounded-[20px]'>
            <input type="text" className='bg-black outline-none rounded-[20px] px-3 py-1 w-[600px] h-10' placeholder='Search'/>
            <button className='border-l px-2 text-xl'><GoSearch /></button>
        </form>

        <div className='flex gap-3 text-xl cursor-pointer'>
            <AiFillBell className='hover:text-gray-400'/>
            <AiFillVideoCamera className='hover:text-gray-400' />
        </div>
    </header>
  )
}

export default Header