//? required
import Head from "next/head";

//? components
import Header from "../components/HomePage/Header";
import Products from "../components/HomePage/Products";
import Footer from "../components/HomePage/Footer";

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
