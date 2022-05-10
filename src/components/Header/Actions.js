import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import LinkIcon from "@mui/icons-material/Link";

const Actions = (props) => {
    const { className } = props;
    return (
        <Container className={className}>
            <StyledLink to={Routes.Home}>
                <Button color="success">Home</Button>
            </StyledLink>
            <StyledLink to={Routes.Poster}>
                <Button color="success">Poster</Button>
            </StyledLink>
            <StyledLink to={Routes.Reports}>
                <Button color="success">Reports</Button>
            </StyledLink>
            <Button
                variant="contained"
                color="success"
                onClick={() =>
                    window.open(process.env.REACT_APP_TITHONUS_URL, "_blank")
                }
                endIcon={<LinkIcon />}
            >
                Go To Application
            </Button>
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
