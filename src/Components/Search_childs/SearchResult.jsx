import React from "react";
import { useContext } from "react";
import Searchcontext from "../../Contexts/searchcontext";

function RightBlock_cild() {
  const search = useContext(Searchcontext)

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
    <div className="flex gap-[25px] w-full mb-[35px]">
      <div className="left_block w-[45%]">
        <h2 className="text-white text-3xl font-bold mb-[20px]">
          Лучший результат
        </h2>
        <div className="bg-slate-700 h-[200px] w-[100%] rounded-lg p-[20px]">
          <img src="/img/artist-img_1.svg" className="mb-[20px]" alt="" />
          <h2 className="text-white text-3xl font-bold">Chill Mix</h2>
          <p className="text-[gray] text-xl font-semibold">Lorem</p>
        </div>
      </div>
      <div className="right_block w-full">
        <h2 className="text-white text-3xl font-bold mb-[20px]">
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
