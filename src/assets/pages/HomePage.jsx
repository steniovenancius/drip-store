import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const main = styled.main`
    background-color: blue;
    margin: 0;
`;

const HomePage = () => {
    return (
        <main>
            <Header />
            <Footer />

        </main>
    );
};

export default HomePage;