import { useNavigate } from 'react-router-dom'
import playlist from '../../resources/playlistImg.jpg'

const PlaylistCard = ({name, description, images, tracks}) => {
   const img = images[0]?.url

   const navigate = useNavigate('/playlist/name')
   
   const showPlaylist = () => {
      navigate('/playlist?id=' + name, {state: tracks?.href})
   }

   console.log(description);

   return (
      <div onClick={showPlaylist || playlist} className="max-sm:max-w-full max-sm:p-3 bg-[#ffffff10] p-5 rounded-lg w-full max-w-[224px]">
         <img src={img} alt="" className="w-full" />
         <div>
            <p className="max-sm:mt-3 text-white text-xl font-bold mb-2 mt-6 truncate">{name}</p>
            <span className="text-[#B3B3B3] text-lg block truncate">{description}</span>
         </div>
      </div>
   );
}

export default PlaylistCard;