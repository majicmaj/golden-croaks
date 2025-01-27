import { useState, useEffect } from "react"
 
function LeagueChamp() {
type TData = any

const [data, setData] = useState<TData>()

const fetchChampion = async () => {
    const response = await fetch("https://ddragon.leagueoflegends.com/cdn/15.2.1/data/en_US/champion/Leblanc.json")
    const data = await response.json()
    console.log(data)
    setData(data)
    
}

const champSplashUrl = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_45.jpg"

useEffect(() => {
    fetchChampion();
  }, []);


return (
<div className="rounded-lg px-4 bg-gradient-to-r from-purple-500 via-blue-800 to-neutral-500 min-w-sm max-w-md">
  
  <div className="flex justify-between rounded bg-gradient-to-b from-purple-600 via-blue-800 to-pink-600 mb-3 relative top-3 shadow-lg" > 
    <div className="font-semibold ml-3">{data?.data?.Leblanc?.name}</div>
    <div className="font-semibold mr-10"> HP {data?.data?.Leblanc?.stats?.hp}</div>
  </div>
  
  <img className= "shadow-xl" src={champSplashUrl} />
   
  <div className="flex rounded justify-center bg-gradient-to-t from-purple-600 via-blue-800 to-pink-600 shadow-lg" > 
    <div className="font-semibold"> Mage Assassin </div>
  </div>
  
  
  <div className="text-wrap p-2 font-serif bg-gradient-to-l from-violet-400 via-violet-300 to-violet-400 shadow-lg"> 
    {data?.data?.Leblanc?.lore}
  </div>

  <div className="flex justify-end rounded bg-gradient-to-t from-purple-600 via-blue-800 to-pink-600 shadow-lg relative bottom-2" >
    <div className="mr-4"> Noxus </div>
  </div>

</div>
  );
}

export default LeagueChamp;
