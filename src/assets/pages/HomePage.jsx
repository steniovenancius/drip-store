import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />

        </>
    );
};

export default HomePage;