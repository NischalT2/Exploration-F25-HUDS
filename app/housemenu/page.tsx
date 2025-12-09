import HouseCard from "@/components/housecard";

export default function HouseMenu() {
    const houses = [
        { name: "adams", imageURL: "/adams.jpeg"},
        { name: "cabot", imageURL: "/cabot.jpeg"},
        { name: "currier", imageURL: "/currier.jpeg"},
        { name: "dunster", imageURL: "/dunster.jpeg"},
        { name: "eliot", imageURL: "/eliot.jpeg"},
        { name: "kirkland", imageURL: "/kirkland.jpeg"},
        { name: "leverett", imageURL: "/leverett.jpeg"},
        { name: "lowell", imageURL: "/lowell.jpeg"},
        { name: "mather", imageURL: "/mather.jpeg"},
        { name: "pfoho", imageURL: "/pfoho.jpeg"},
        { name: "quincy", imageURL: "/quincy.jpeg"},
        { name: "winthrop", imageURL: "/winthrop.jpeg"}
    ];
    return(
        <div className="px-8 py-6 w-full h-screen overflow-y-scroll bg-gray-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {houses.map((house) => (
                    <HouseCard
                        key={house.name} 
                        name={house.name}
                        imageURL={house.imageURL}
                    />
                ))}
            </div>
        </div>
    );
            {/*loops thru everything for houses.map*/}
            {/*if you put a /> at the end then you don't need to do </HouseCard> at the end - basically no children in between*/}
}
// Here, you will create a grid of the itemCards and you can use example items for each of the itemCards.