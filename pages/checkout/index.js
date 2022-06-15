//? required
import { useCart, useCartActions } from "../../Providers/CartContext";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

//? icons
import { BiMessageSquareAdd, BiMessageSquareMinus } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi";

const vars = {
    hidden: {
        height: 200,
    },
    animate: {
        height: "100%",
        transition: {
            duration: 1,
        },
    },
};
//? component
export default function CartPage() {
    const { cart, total } = useCart();
    const dispatch = useCartActions();

    return (
        <>
            <Head>
                <title>Checkout | Order and buy coffee, Online</title>
            </Head>
            <header className="flex min-h-screen w-full flex-col items-center justify-start bg-hero pb-36">
                <div className="flex w-full max-w-5xl flex-col items-center justify-center">
                    <div className="flex w-full items-center justify-between py-8 px-4">
                        <h1 className="font-sans text-6xl font-bold text-white">
                            Orders:
                        </h1>
                        <h6 className="font-sans text-4xl font-bold text-white">
                            {cart.length} Item
                        </h6>
                    </div>
                    <div className="w-full overflow-scroll px-4 lg:overflow-hidden">
                        <div className="w-full min-w-[900px] bg-white px-4 shadow-xl shadow-black">
                            <header
                                className="
                                    grid w-full grid-cols-[1.8fr_1fr_1fr_1fr] justify-items-center border-b-2 pt-4 pb-2 
                                    font-sans text-lg font-bold text-zinc-400"
                            >
                                <h5 className="pr-14">Product</h5>
                                <h5>Quantity</h5>
                                <h5>UnitPrice</h5>
                                <h5>UnitTotal</h5>
                            </header>
                            <motion.main
                                variants={vars}
                                initial="hidden"
                                animate="animate"
                                className="flex w-full flex-col items-center justify-center overflow-hidden"
                            >
                                {cart.length ? (
                                    cart.map((product, key) => {
                                        const totalPrice =
                                            product.price * product.quantity;
                                        return (
                                            <article
                                                key={key}
                                                className="my-3 grid w-full grid-cols-[1.8fr_1fr_1fr_1fr] items-center justify-items-center"
                                            >
                                                <div className="grid w-full grid-cols-[1fr_2fr] grid-rows-4 items-center justify-items-start gap-x-4">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="row-span-4 aspect-square w-32 items-center justify-self-center bg-zinc-200"
                                                    />
                                                    <h2 className="font-sans text-xl font-bold text-black lg:text-2xl">
                                                        {product.name}
                                                    </h2>
                                                    <p className="font-sans text-sm text-black/70 lg:text-base">
                                                        Brand: {product.brandHandler}
                                                    </p>
                                                    <p className="font-sans text-sm text-black/70 lg:text-base">
                                                        With:{" "}
                                                        {product.consumeHandler}
                                                    </p>
                                                    <p className="font-sans text-sm text-black/70 lg:text-base">
                                                        Percentage:{" "}
                                                        {product.percentHandler}
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-3 items-center justify-items-center gap-x-4">
                                                    <button
                                                        onClick={() =>
                                                            dispatch({
                                                                type: "DECREMENT",
                                                                payload: product,
                                                            })
                                                        }
                                                    >
                                                        {product.quantity > 1 ? (
                                                            <BiMessageSquareMinus className="rotate-180 rounded-md bg-zinc-100 p-1 text-3xl" />
                                                        ) : (
                                                            <HiOutlineTrash className=" rounded-md bg-red-100 p-1 text-3xl text-red-900" />
                                                        )}
                                                    </button>
                                                    <p className="translate-y-[2px] font-sans text-4xl font-bold italic">
                                                        {product.quantity}
                                                    </p>
                                                    <button
                                                        onClick={() =>
                                                            dispatch({
                                                                type: "INCREMENT",
                                                                payload: product,
                                                            })
                                                        }
                                                    >
                                                        <BiMessageSquareAdd className="rounded-md bg-zinc-100 p-1 text-3xl" />
                                                    </button>
                                                </div>
                                                <p className="font-sans text-2xl font-bold italic">
                                                    {product.price.toLocaleString()}
                                                    <span className="text-sm">
                                                        TM
                                                    </span>
                                                </p>
                                                <p className="font-sans text-2xl font-bold italic">
                                                    {totalPrice.toLocaleString()}
                                                    <span className="text-sm">
                                                        TM
                                                    </span>
                                                </p>
                                            </article>
                                        );
                                    })
                                ) : (
                                    <>
                                        <p className="pt-10 font-sans text-3xl font-bold italic text-zinc-400">
                                            {"You Haven't selected anything, YET !"}
                                        </p>
                                        <Link href="/">
                                            <a className="mt-6 pb-8 text-lg font-bold italic text-zinc-400 underline">
                                                Back to Shop
                                            </a>
                                        </Link>
                                    </>
                                )}
                            </motion.main>
                        </div>
                    </div>
                    {cart.length && (
                        <div className="mt-8 flex w-full max-w-sm flex-col items-center justify-center gap-y-4 lg:flex-row lg:gap-x-4">
                            <div className="flex w-2/3 flex-col items-center justify-center text-white lg:order-2 lg:w-1/2">
                                <div>
                                    <p className="text-sm">Total:</p>
                                    <h6 className="-mt-1 text-xl">
                                        {total.toLocaleString()}
                                        <span className="text-sm">TM</span>
                                    </h6>
                                </div>
                            </div>
                            <button className="w-2/3 bg-white py-2 font-sans text-xl font-bold italic lg:order-1 lg:w-1/2">
                                BUY
                            </button>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}
