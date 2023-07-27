import TheFirstBlock from "@/components/TheFirstBlock";
import TheGameChat from "@/components/TheGameChat";
import TheGameFeatures from "@/components/TheGameFeatures/TheGameFeatures";
import TheMainNews from "@/components/TheMainNews";
import TheReviews from "@/components/TheReviews/TheReviews";
import TheTargetInGame from "@/components/TheTargetInGame";
import TheTypeOfTroops from "@/components/TheTypeOfTroops";


const Home = () => {
  return (
    <div className="w-screen min-h-screen">
      <div className=" py-16">
        <TheFirstBlock />
        <TheMainNews />
        <TheTargetInGame />
        <TheGameFeatures />
        <TheGameChat />
        <TheTypeOfTroops />
        <TheReviews />
      </div>
    </div>
  )
}
export default Home;