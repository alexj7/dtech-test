import React from 'react'
import { Input } from '../../atoms/Input/Input'

export const NavBar = () => {
  return (
    <section className="border-b-2 sticky top-0 bg-slate-50 z-10" >
      <div className="container max-w-7xl mx-auto px-5 sm:px-10 py-4 flex ">

        <div>
          <h1 className="text-3xl font-bold text-zinc-400">
            DTech Inc
          </h1>
        </div>

        <div className="relative sm:ml-12 ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute mt-2 ml-2 text-zinc-400" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>

          <Input
            className="sm:h-full pl-8 rounded border-2 sm:w-48 w-32 border-purple-400 bg-slate-100 outline-none focus:ring-0 caret-purple-400 text-zinc-600 py-1 pr-2"
            type="text"
            placeholder="Buscar" />

        </div>
      </div>

    </section >
  )
}
