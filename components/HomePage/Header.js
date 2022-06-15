export default function Header() {
    return (
        <header
            className="grid min-h-screen w-full place-items-center bg-hero px-2"
            id="homeSection"
        >
            <div className="relative h-48 w-full max-w-md lg:max-w-2xl">
                <div
                    className="
                        absolute top-0 left-1/2 z-50 block w-11/12 -translate-x-1/2 bg-black bg-opacity-10 
                        py-10 text-center text-white backdrop-blur-sm lg:max-w-xl"
                >
                    <h1 className="font-serif text-6xl lg:text-7xl">Mr. Mustache</h1>
                    <p className="mt-2 font-serif text-2xl">Online Coffee Shop</p>
                </div>
                <img
                    src="/Images/CoffeeOnDesk.webp"
                    alt="CoffeeOnDesk"
                    className="absolute top-10 z-10 w-44 lg:-top-32 lg:-left-20 lg:w-56"
                />
                <img
                    src="/Images/HeaderCoffeeBook.webp"
                    alt="CoffeeAndBook"
                    className="absolute right-0 -top-32 w-44 lg:w-52"
                />
                <a
                    href="#menu"
                    className="
                        absolute -top-10 left-0 bg-white py-3 px-16 text-lg font-bold italic lg:-bottom-10 
                        lg:top-auto lg:left-1/2 lg:-translate-x-1/2"
                >
                    Menu
                </a>
                <a
                    href="#Gallery"
                    className="absolute -bottom-7 right-0 bg-white py-3 px-14 text-lg font-bold italic lg:-bottom-10"
                >
                    Gallery
                </a>
            </div>
        </header>
    );
}
