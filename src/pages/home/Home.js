import React, { useEffect, useState } from "react";
import Category from "../../components/category/Category";
import Hero from "../../components/hero/Hero";
import Product from "../../components/product/Product";
import { axiosClient } from "../../utils/axiosClient";
import "./Home.scss";
import { useSelector } from "react-redux";


function Home() {
     
    const [topProducts, setTopProducts] = useState(null);

    const categories=useSelector((state) => state.categoryReducer.categories);

    async function fetchData() {
       
        const topProductsResponse = await axiosClient.get(
            "/products?filters[istoppick][$eq]=true&populate=image"
        );

  
        setTopProducts(topProductsResponse.data.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="Home">
            <Hero />
            <section className="collection container">
                <div className="info">
                    <h2 className="heading">Shop By Categories</h2>
                    <p className="subheading">
                        Shop from the best, of our Collection.
                    </p>
                </div>
                <div className="content">
                    {categories?.map((category) => (
                        <Category key={category.id} category={category} />
                    ))}
                </div>
            </section>

            <section className="collection container">
                <div className="info">
                    <h2 className="heading">Our Top Picks</h2>
                    <p className="subheading">
                        All New Designs, Same Old Details.
                    </p>
                </div>
                <div className="content">
                    {topProducts?.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;