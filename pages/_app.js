import "../styles/globals.css";
import "../styles/Font.css";
import CartContext from "../Providers/CartContext";
import Navigation from "../components/Navigation";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
    return (
        <CartContext>
            <Toaster />
            <Navigation>
                <Component {...pageProps} />
            </Navigation>
        </CartContext>
    );
}

export default MyApp;
