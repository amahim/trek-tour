import { useEffect, useState } from "react";
import ShowCards from "./ShowCards";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("adventure.json")
            .then((res) => res.json())
            .then((data) => setCards(data))
    }, []);

    return (
        <div className="pt-10" id="letsgo">
            <div className="text-center lg:w-2/5 md:w-[350px] mx-auto">
                <h1 className="md:text-2xl text-xl font-bold ">Experience With Us</h1>
                <p className="">Experience adventure with us.Checkout our all possible adventure catalogs </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {cards.map((card) => (
                <ShowCards key={card.id} card={card} />
            ))}
            </div>
        </div>
    );
};

export default Cards;
