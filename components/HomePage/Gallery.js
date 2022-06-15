export default function Gallery() {
    return (
        <div className="relative m-auto h-[26rem] w-full max-w-5xl">
            <img
                src="Slides/img2.png"
                alt="img2"
                className="absolute bottom-0 left-0 saturate-0 duration-200 hover:saturate-200"
            />
            <img
                src="Slides/img4.png"
                alt="img4"
                className="absolute bottom-0 left-1/4 saturate-0 duration-200 hover:saturate-200"
            />
            <img
                src="Slides/img3.png"
                alt="img3"
                className="absolute top-0 left-1/4 w-40 saturate-0 duration-200 hover:saturate-200"
            />
            <img
                src="Slides/img1.jpg"
                alt="img1"
                className="absolute top-0 left-8 w-44 saturate-0 duration-200 hover:saturate-200"
            />
            <img
                src="Slides/img7.png"
                alt="img7"
                className="absolute right-0 top-0 w-[17.6rem] contrast-125 duration-200 hover:contrast-100"
            />
            <img
                src="Slides/img5.png"
                alt="img5"
                className="absolute top-0 right-56 saturate-0 duration-200 hover:saturate-200"
            />
            <img
                src="Slides/img6.png"
                alt="img6"
                className="absolute bottom-0 right-1/4 saturate-0 duration-200 hover:saturate-200"
            />
        </div>
    );
}
