import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const TeamCard = (props) => {
    const { imgSrc, name, initials, color } = props;

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
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default TeamCard;
