import React, { useContext } from 'react'
import { DataContext } from '../../../context/DataContext'
import { Input } from '../../atoms/Input/Input'

export const NavBar = () => {

  const { state, setState } = useContext(DataContext)

  const logOut = () => {
    setState({ ...state, user: {}, logged: false, })
  }

  return (
    <section className="border-b-2 sticky top-0 bg-slate-50 z-50" >
      <div className="container max-w-7xl mx-auto px-5 sm:px-10 py-4 flex">

        <div>
          <h1 className="text-3xl font-bold text-zinc-400">
            DTech Inc
          </h1>
        </div>

        <div className="relative sm:ml-12 ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute mt-3 ml-2 text-zinc-400" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>

          <Input
            className="sm:h-full pl-8 rounded border-2 sm:w-48 w-32 border-purple-400 bg-slate-100 outline-none focus:ring-0 caret-purple-400 text-zinc-600 py-1 pr-2"
            type="text"
            placeholder="Buscar" />

        </div>

        <div onClick={() => logOut()} className="ml-auto my-1 hover:bg-slate-100 rounded-full h-8 w-8 p-1 rounded-full flex items-center justify-center cursor-pointer" >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>

        </div>

      </div>

    </section >
  )
}
