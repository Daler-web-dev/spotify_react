import React from "react";
import { useContext } from "react";
import searchContext from "../../Contexts/searchcontext"

function RightBlock_cild() {
  const search = useContext(searchContext)

    return(
        <div className="flex items-center justify-between w-full p-2 rounded-lg">
            <div className="flex items-center gap-[20px]">
                <img src="/img/artist-img_1.svg " width="45px" alt="" />
                <div className="flex flex-col">
                    <p className="text-white text-xl font-bold">{search.searchText}</p>
                    <span className="text-[#a2a2a2] font-semibold">Далеко</span>
                </div>
            </div>
            <div className="flex items-center gap-[10px]">
                <span className="text-[#a2a2a2] font-semibold">3:52</span>
            </div>
        </div>
    )
}


function SearchResult() {
  return (
    <div className="flex flex-col xl:flex-row gap-[25px] w-full mb-[35px]">
      <div className="left_block  xl:w-[45%] lg:w-[100%]">
        <h2 className="text-white  font-bold mb-[20px] xl:text-3xl lg:text-2xl md:text-2xl">
          Лучший результат
        </h2>
        <div className="bg-slate-700 h-[200px] w-[100%] rounded-lg p-[20px]">
          <img src="/img/artist-img_1.svg" className="mb-[20px]" alt="" />
          <h2 className="text-white  font-bold xl:text-3xl lg:text-2xl md:text-xl">Chill Mix</h2>
          <p className="text-[gray]  font-semibold xl:text-xl lg:text-[16px] md:text-xl">Lorem</p>
        </div>
      </div>
      <div className="right_block w-full">
        <h2 className="text-white font-bold mb-[20px] xl:text-3xl lg:text-2xl md:text-2xl ">
          Треки
        </h2>
        <div>
            <RightBlock_cild/>
            <RightBlock_cild/>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
