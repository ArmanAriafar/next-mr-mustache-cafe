//? required
import { useEffect, useState } from "react";

//? components
import GallerySlider from "./GallerySlider";
import Gallery from "./Gallery";

//? component
export default function Footer() {
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        const screenWidth = screen.width;
        setScreenWidth(screenWidth);
    }, [screenWidth]);
    return (
        <footer className="pt-82 mt-20 w-full bg-black px-4 lg:px-0" id="Gallery">
            <div className="flex w-full items-center justify-center">
                <a
                    href="#homeSection"
                    className="rounded-b-full bg-white px-4 pt-1 pb-5 font-sans font-bold text-black"
                >
                    Back Up
                </a>
            </div>
            <h1 className="pt-10 text-center font-sans text-4xl font-bold italic text-white lg:pt-20">
                Gallery
            </h1>
            <div className="-mt-9 mb-20 lg:-mt-28">
                {screenWidth < 1024 ? <GallerySlider /> : <Gallery />}
            </div>
        </footer>
    );
}
