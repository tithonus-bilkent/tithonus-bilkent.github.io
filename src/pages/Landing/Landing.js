import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
} from "@mui/material";
import React from "react";
import ReactPlayer from "react-player/youtube";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Team from "~/components/Team/Team";
import { Routes } from "~/routes/Routes";
import ArticleIcon from "@mui/icons-material/Article";
import Features from "~/components/Features/Features";
import OpenAppButton from "~/components/OpenAppButton/OpenAppButton";

const Landing = () => {
    return (
        <Container>
            <Box>
                <Typography variant="h3" color="primary.light">
                    Tithonus
                </Typography>
                <Typography
                    variant="h5"
                    color="primary.light"
                    style={{ marginLeft: "5px", marginTop: "10px" }}
                >
                    The Next-Gen Code Review Tool
                </Typography>
            </Box>
            <Box
                marginTop="40px"
                display="flex"
                style={{ justifyContent: "center" }}
            >
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=7xm70bfybMc"
                    controls="true"
                />
            </Box>
            <Box marginTop="40px">
                <Typography color="primary.light" align="justify">
                    Bugs in codebases can be costly in terms of the damage they
                    may do. Luckily processes like code reviews exist - that can
                    minimize the risk posed by such bugs. However, code reviews
                    can be prone to process smells such as the LGTM smell; where
                    a reviewer approves a code review without looking it through
                    properly. Tithonus is a next-gen solution that aims to
                    tackle this problem. A developer can open a pull request and
                    manually inject bugs into their proposed code changes. The
                    reviewer then has to catch these bugs while doing the
                    review. The percentage of injected bugs caught by the
                    reviewer estimates the percentage of real bugs they have
                    caught. Tithonus tests the reviewer’s attention, thereby
                    solving the LGTM smell problem.
                </Typography>
            </Box>
            <ButtonContainer>
                <OpenAppButton text="Login with GitHub Now" />
            </ButtonContainer>

            <Box marginTop="40px">
                <Typography variant="h4" color="primary.light">
                    Documents
                </Typography>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ArticleIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <Typography color="primary.light">
                            View User Manual{" "}
                            <Link
                                to={Routes.Reports}
                                style={{
                                    textDecoration: "none",
                                    color: "#81c784",
                                }}
                            >
                                here
                            </Link>
                        </Typography>
                    </ListItem>
                </List>
                <Typography color="primary.light"></Typography>
            </Box>

            <Box marginTop="40px">
                <Typography
                    variant="h4"
                    color="primary.light"
                    style={{ marginBottom: "20px" }}
                >
                    Application Features
                </Typography>
                <Features />
            </Box>

            <Box marginTop="60px">
                <Team />
            </Box>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    top: 80px;
    padding: 40px;
`;

const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

export default Landing;
