import React from "react";
import styled from "@emotion/styled";

const Poster = () => {
    return (
        <Container>
            <img
                style={{ maxWidth: "95%" }}
                src="images/Poster.png"
                alt="Poster"
            />
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    top: 100px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        display: block;
    }
`;

export default Poster;
