//? required
import toast from "react-hot-toast";
import { useCart, useCartActions } from "../../Providers/CartContext";

//? framer
import { motion } from "framer-motion";
import { useState } from "react";

//? component
export default function Product({
    id,
    name,
    image,
    price,
    consume,
    brand,
    percent,
    product,
}) {
    const { cart } = useCart();
    const dispatch = useCartActions();
    const [isActive, setIsActive] = useState(false);
    const [consumeHandler, setConsumeHandler] = useState("Nothing");
    const [brandHandler, setBrandHandler] = useState("Starbucks");
    const [percentHandler, setPercentHandler] = useState("70%/30%");

    function isThere() {
        const findIt = cart.findIndex((item) => item.id === product.id);
        return findIt;
    }

    const productInfo = {
        id,
        image,
        name,
        price,
        percentHandler,
        consumeHandler,
        brandHandler,
    };

    const vars = {
        hidden: {
            width: "12rem",
        },
        animate: {
            width: isActive ? "16.5rem" : "12rem",
            transition: {
                type: "tween",
                duration: 0.9,
            },
        },
    };
    const childVars = {
        hidden: {
            y: 50,
            opacity: 0,
        },
        animate: {
            y: isActive ? 0 : 50,
            opacity: isActive ? 1 : -1,
            transition: {
                type: "tween",
                ease: "easeInOut",
                duration: 0.9,
            },
        },
    };
    const isActiveHandler = () => {
        setIsActive(!isActive);
    };

    function addToCartHandler(productInfo) {
        dispatch({ type: "ADD_TO_CART", payload: productInfo });
        setIsActive(false);
        toast.custom((t) => (
            <div
                className={`${
                    t.visible ? "slide-fwd-center" : "slide-bck-center"
                } w-full rounded bg-white py-4 text-center text-sm text-black lg:max-w-md`}
            >
                <p>
                    <span className="text-lg font-bold italic">
                        {productInfo.name}
                    </span>{" "}
                    Added to cart!
                </p>
            </div>
        ));
    }

    return (
        <article className="sticky top-5 z-10 select-none bg-white">
            <div className="relative w-full">
                <img src={image} alt={name} />
                <motion.div
                    variants={vars}
                    initial="hidden"
                    animate="animate"
                    className="
                        absolute -right-10 -bottom-10 grid aspect-square w-full grid-cols-2 grid-rows-6 items-center 
                        justify-items-start overflow-hidden bg-black bg-opacity-90 p-4 pb-2 text-white"
                >
                    <h1 className="col-span-2 text-3xl">{name}</h1>
                    <p className="col-span-2">
                        {price.toLocaleString()}{" "}
                        <span className="font-sans text-[.6rem]">TM</span>
                    </p>
                    <motion.ul
                        variants={childVars}
                        className="
                            col-span-2 flex w-full items-center justify-start gap-x-3 border-b 
                            border-white border-opacity-20 py-2 pl-2 text-[0.9rem]"
                    >
                        {consume.map((item, key) => {
                            return (
                                <li key={key}>
                                    <button
                                        onClick={() => setConsumeHandler(item)}
                                        className={
                                            consumeHandler === item
                                                ? "font-bold underline underline-offset-4"
                                                : ""
                                        }
                                    >
                                        {item}
                                    </button>
                                </li>
                            );
                        })}
                    </motion.ul>
                    <motion.ul
                        variants={childVars}
                        className="
                            col-span-2 flex w-full items-center justify-start gap-x-3 border-b 
                            border-white border-opacity-20 py-2 pl-2 text-[0.9rem]"
                    >
                        {brand.map((item, key) => {
                            return (
                                <li key={key}>
                                    <button
                                        onClick={() => setBrandHandler(item)}
                                        className={
                                            brandHandler === item
                                                ? "font-bold underline underline-offset-4"
                                                : ""
                                        }
                                    >
                                        {item}
                                    </button>
                                </li>
                            );
                        })}
                    </motion.ul>
                    {percent && (
                        <motion.ul
                            variants={childVars}
                            className="
                                col-span-2 flex w-full items-center justify-start gap-x-3 border-b 
                                border-white border-opacity-20 py-2 pl-2 text-[0.9rem]"
                        >
                            {percent.map((item, key) => {
                                return (
                                    <li key={key}>
                                        <button
                                            onClick={() => setPercentHandler(item)}
                                            className={
                                                percentHandler === item
                                                    ? "font-bold underline underline-offset-4"
                                                    : ""
                                            }
                                        >
                                            {item}
                                        </button>
                                    </li>
                                );
                            })}
                        </motion.ul>
                    )}

                    <motion.button
                        variants={childVars}
                        className="absolute left-3 bottom-2 z-50"
                        onClick={() => addToCartHandler(productInfo)}
                    >
                        {isThere() < 0 ? "Add" : "Added"}
                    </motion.button>
                    <button
                        onClick={isActiveHandler}
                        className="absolute right-3 bottom-2 z-50"
                    >
                        {isActive ? "Close" : "More"}
                    </button>
                </motion.div>
            </div>
        </article>
    );
}
