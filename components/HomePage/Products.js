//? required
import data from "../../DataBase/db";

//? components
import Product from "./Product";

//? component
export default function Products() {
    return (
        <section className="w-full max-w-md pt-10 lg:max-w-5xl" id="menu">
            <div className="grid w-full grid-rows-1 items-center justify-items-center gap-y-20 lg:grid-cols-3 lg:gap-x-10">
                {data.map((product, key) => {
                    return (
                        <Product
                            key={key}
                            name={product.name}
                            image={product.image}
                            price={product.price}
                            consume={product.consume}
                            brand={product.brand}
                            percent={product.percent}
                            product={product}
                            id={product.id}
                        />
                    );
                })}
            </div>
        </section>
    );
}
