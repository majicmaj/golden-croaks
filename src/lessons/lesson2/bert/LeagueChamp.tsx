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
   <div> hi </div>
  );
}

export default LeagueChamp;
