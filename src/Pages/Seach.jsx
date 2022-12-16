import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import BrowseAll from '../Components/Search_childs/BrowseAll'
import RecentSearches from '../Components/Search_childs/RecentSearches'
import SearchResult from '../Components/Search_childs/SearchResult'
import Searchcontext from '../Contexts/searchcontext'

// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }

function Seach() {

  const search = useContext(Searchcontext)
  
  return (
    <div className='bg-[#121212]  w-full pt-24 px-[40px] mb-[100px]'>
      {search.lengthText ? <SearchResult/> : <RecentSearches/>}
      <BrowseAll/>
    </div>
  )
}

export default Seach