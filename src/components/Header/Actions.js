import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import OpenAppButton from "../OpenAppButton/OpenAppButton";

const Actions = (props) => {
    const { className, onLinkClick } = props;
    return (
        <Container className={className}>
            <StyledLink to={Routes.Home}>
                <Button color="success" onClick={() => onLinkClick?.()}>
                    Home
                </Button>
            </StyledLink>
            <StyledLink to={Routes.Reports}>
                <Button color="success" onClick={() => onLinkClick?.()}>
                    USER MANUAL
                </Button>
            </StyledLink>
            <OpenAppButton text="Login with GitHub" />
        </Container>
    );
};
const Container = styled.div`
    margin-left: auto;
    display: flex;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default Actions;
