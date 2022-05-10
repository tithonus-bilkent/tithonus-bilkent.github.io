import {
    Box,
    Button,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
} from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import ImageIcon from "@mui/icons-material/Image";
import Team from "~/components/Team/Team";
import { Routes } from "~/routes/Routes";
import ArticleIcon from "@mui/icons-material/Article";

const Landing = () => {
    return (
        <Container>
            <Box display="flex" style={{ alignItems: "center" }}>
                <Typography variant="h3" color="primary.light">
                    Tithonus
                </Typography>
                <Typography
                    variant="h5"
                    color="primary.light"
                    style={{ marginLeft: "10px", marginTop: "10px" }}
                >
                    &mdash; The Code Review Quality Checker
                </Typography>
            </Box>
            <Box marginTop="20px">
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
                <Button
                    variant="contained"
                    color="success"
                    endIcon={<ArrowForwardIosIcon />}
                    onClick={() =>
                        window.open(
                            process.env.REACT_APP_TITHONUS_URL,
                            "_blank"
                        )
                    }
                >
                    Login with GitHub Now
                </Button>
            </ButtonContainer>

            <Box marginTop="20px">
                <Typography variant="h4" color="primary.light">
                    Documents
                </Typography>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <Typography color="primary.light">
                            View Poster{" "}
                            <Link
                                to={Routes.Poster}
                                style={{
                                    textDecoration: "none",
                                    color: "#81c784",
                                }}
                            >
                                here
                            </Link>
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ArticleIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <Typography color="primary.light">
                            View Reports{" "}
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
            <Box marginTop="20px">
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
