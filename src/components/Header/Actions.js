import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import LinkIcon from "@mui/icons-material/Link";

const Actions = (props) => {
    const { className, onLinkClick } = props;
    return (
        <Container className={className}>
            <StyledLink to={Routes.Home}>
                <Button color="success" onClick={() => onLinkClick?.()}>
                    Home
                </Button>
            </StyledLink>
            <StyledLink to={Routes.Poster}>
                <Button color="success" onClick={() => onLinkClick?.()}>
                    Poster
                </Button>
            </StyledLink>
            <StyledLink to={Routes.Reports}>
                <Button color="success" onClick={() => onLinkClick?.()}>
                    Reports
                </Button>
            </StyledLink>
            <Button
                variant="contained"
                color="success"
                onClick={() => {
                    window.location.replace(`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_TITHONUS_URL}`);
                }}
                endIcon={<LinkIcon />}
            >
                Login with GitHub
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
