//? required
import Link from "next/link";
import { useRouter } from "next/router";
import { useCart } from "../Providers/CartContext";

//? component
export default function Navigation({ children }) {
    const router = useRouter();
    const { cart } = useCart();
    return (
        <>
            <nav
                className="
                    fixed bottom-0 left-0 right-0 z-[100] grid w-screen grid-cols-3 items-center
                    justify-items-center bg-black pb-4 pt-5 font-sans text-lg font-normal italic text-white antialiased 
                    lg:left-1/2 lg:max-w-xs lg:-translate-x-1/2 lg:rounded-t-2xl lg:bg-paper"
            >
                <Link href="/">
                    <a
                        className={
                            router.pathname === "/"
                                ? "font-bold not-italic"
                                : "text-lg text-white/70"
                        }
                    >
                        Home
                    </a>
                </Link>

                <Link href="/checkout">
                    <a
                        className={
                            router.pathname === "/checkout"
                                ? "font-bold not-italic"
                                : "text-lg text-white/70"
                        }
                    >
                        Orders
                        <span className="relative -top-1 -right-1 text-sm">
                            {cart.length}
                        </span>
                    </a>
                </Link>
                <Link href="/login">
                    <a
                        className={
                            router.pathname === "/login"
                                ? "font-bold not-italic"
                                : "text-lg text-white/70"
                        }
                    >
                        Login
                    </a>
                </Link>
            </nav>
            {children}
        </>
    );
}
