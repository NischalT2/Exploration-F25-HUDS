import Image from "next/image";

interface HouseCardProps {
	imageURL: string;
	name: string;
}

export default function HouseCard({imageURL, name}: HouseCardProps) {
    return(
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow p-4 flex flex-col items-center cursor-pointer">
            <div className="relative w-full h-40 mb-3 rounded-lg overflow-hidden">
                <Image
                    src={imageURL}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>

            <p className="text-lg font-semibold text-gray-800 capitalize text-center">
        {name}
      </p>
    </div>
  );
}
{/*prev code w nischal:
        <>
	        <img src={imageURL} alt="image"></img>
            <p>{name}</p> {/*<--- This is how you reference the variables inside the HTML section*/}
            {/*include src within bracket*/}
            {/*style it so its smaller - all the div/classname stuff - chatgpt styling in tailwindcss*/}
    
{/* rest of the syntax:
        </>
    )
}
*/}
// It will include the image at the top, then the name of the item.
// make sure that the card is reasonably sized so that you can create a grid of these cards in the house page.