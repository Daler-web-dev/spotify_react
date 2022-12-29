import React from 'react'
import { useContext } from 'react'
import BrowseAll from '../Components/Search_childs/BrowseAll'
import RecentSearches from '../Components/Search_childs/RecentSearches'
import SearchResult from '../Components/Search_childs/SearchResult'
import searchContext from '../Contexts/searchcontext'
import {Helmet} from "react-helmet";


function Seach() {

  const {lengthText} = useContext(searchContext)
  
  return (
    <>
      <Helmet>
          <title>Spotify - Search</title>
      </Helmet>
      <div className='w-full pt-[24px] px-[40px] mb-[100px]'>
        {lengthText ? <SearchResult/> : <RecentSearches/>}
        <BrowseAll/>
      </div>
    </>
  )
}

export default Seach