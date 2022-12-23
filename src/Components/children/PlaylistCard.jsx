import playlist from '../../resources/playlistImg.jpg'

const PlaylistCard = () => {
   return (
      <div className="max-sm:max-w-full max-sm:p-3 bg-[#ffffff10] p-5 rounded-lg w-full max-w-[224px]">
         <img src={playlist} alt="" className="w-full" />
         <div>
            <p className="max-sm:mt-3 text-white text-xl font-bold mb-2 mt-6 truncate">Chill Mix</p>
            <span className="text-[#B3B3B3] text-lg block truncate">Julia Wolf, Khalid, ayokay and more</span>
         </div>
      </div>
   );
}

export default PlaylistCard;