'use client'
import TheClans from "./TheClans";
import TheHeroes from "./TheHeroes";
import TheMarket from "./TheMarket";

const TheGameFeatures = () => {
    return (
        <div className="mx-auto w-[96%]">
            <h1 className=
                {`text-over-gray font-bold lg:text-6xl text-center my-[30px]
            text-4xl`}>
                Особенности игры</h1>
            <TheClans />
            <TheHeroes />
            <TheMarket />
        </div>

    );
}
export default TheGameFeatures