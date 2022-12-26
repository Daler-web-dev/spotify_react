import React, { useEffect } from 'react'
import { useContext } from 'react'
import BrowseAll from '../Components/Search_childs/BrowseAll'
import RecentSearches from '../Components/Search_childs/RecentSearches'
import SearchResult from '../Components/Search_childs/SearchResult'
import searchContext from '../Contexts/searchcontext'
import {Helmet} from "react-helmet";


// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }

function Seach() {

  const search = useContext(searchContext)
  
  return (
    <>
      <Helmet>
          <title>Spotify - Search</title>
      </Helmet>
      <div className='w-full pt-[24px] px-[40px] mb-[100px]'>
        {search.lengthText ? <SearchResult/> : <RecentSearches/>}
        <BrowseAll/>
      </div>
    </>
  )
}

export default Seach