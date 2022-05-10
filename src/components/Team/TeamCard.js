import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { GitHub, LinkedIn } from "@mui/icons-material";

const TeamCard = (props) => {
    const { imgSrc, name, initials, color, linkedInLink, githubLink } = props;

    return (
        <Card sx={{ width: 320, margin: "15px" }}>
            {imgSrc ? (
                <CardMedia
                    component="img"
                    height="300"
                    image={imgSrc}
                    alt={name}
                />
            ) : (
                <div
                    style={{
                        height: "300px",
                        backgroundColor: color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="h3" align="center">
                        {initials}
                    </Typography>
                </div>
            )}
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                >
                    {name}
                </Typography>
                <IconsContainer>
                    {linkedInLink ? (
                        <IconButton href={linkedInLink} target="_blank">
                            <LinkedIn />
                        </IconButton>
                    ) : null}
                    {githubLink ? (
                        <IconButton href={githubLink} target="_blank">
                            <GitHub />
                        </IconButton>
                    ) : null}
                </IconsContainer>
            </CardContent>
        </Card>
    );
};

const IconsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default TeamCard;
