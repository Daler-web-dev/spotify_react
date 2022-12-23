import { Link, useNavigate } from "react-router-dom";

const MyPlaylist = ({id, images, name, tracks}) => {

   const navigate = useNavigate('/playlist/name')
   
   const showPlaylist = () => {
      navigate('/playlist?id=' + name, {state: tracks.href})
   }


   return (
      // <Link to={"/playlist?id=" + id} state={} >
         <div onClick={showPlaylist} className="flex rounded-md overflow-hidden bg-[#ffffff20] w-full cursor-pointer">
            <img src={images[0]?.url} className="w-[82px]" alt="" />
            <div className="px-[21px] py-{28px} flex items-center justify-center ">
               <p className="font-bold text-xl text-white truncate">{name}</p>
            </div>
         </div>
      // </Link>
   );
}

export default MyPlaylist;