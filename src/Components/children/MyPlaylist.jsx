import songImg from '../../resources/songImg.jpg'

const MyPlaylist = () => {
   return (
      <div className="flex rounded-md overflow-hidden bg-[#ffffff20] w-full cursor-pointer">
         <img src={songImg} className="w-[82px]" alt="" />
         <div className="px-[21px] py-{28px} flex items-center justify-center ">
            <p className="font-bold text-xl text-white truncate">CHil Mix</p>
         </div>
      </div>
   );
}

export default MyPlaylist;