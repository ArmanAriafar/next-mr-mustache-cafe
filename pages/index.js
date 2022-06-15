//? required
import Head from "next/head";

//? components
import Header from "../Components/HomePage/Header";
import Products from "../Components/HomePage/Products";
import Footer from "../Components/HomePage/Footer";

//? component
export default function HomePage() {
    return (
        <>
            <Head>
                <title>Mr. WhiteHat || Online CoffeeShop</title>
            </Head>
            <Header />
            <main className="flex w-full flex-col items-center justify-center bg-white">
                <Products />
                <Footer />
            </main>
        </>
    );
}
