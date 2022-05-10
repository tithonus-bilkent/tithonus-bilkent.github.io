import React from "react";
import { Avatar, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Check, AutoGraph, TableRows } from "@mui/icons-material";

const Features = () => {
    return (
        <Container>
            <Image
                src="images/ReviewConfirmation.png"
                className="review-confirmation-image"
            />
            <TextContainer className="review-confirmation-text">
                <Avatar style={{ marginBottom: "10px" }}>
                    <Check />
                </Avatar>
                <Typography color="primary.light" align="center">
                    Confirm Reviews! Marks bugs and see if you caught all the
                    injected bugs. Re-review your review!
                </Typography>
            </TextContainer>

            <Image
                src="images/ReviewerTracking.png"
                className="reviewer-tracking-image"
            />
            <TextContainer className="reviewer-tracking-text">
                <Avatar style={{ marginBottom: "10px" }}>
                    <TableRows />
                </Avatar>
                <Typography color="primary.light" align="center">
                    Track Reviewers. Look up all your reviewers and their
                    reviews in one place!
                </Typography>
            </TextContainer>

            <Image
                src="images/PerformanceReport.png"
                className="performance-report-image"
            />
            <TextContainer className="performance-report-text">
                <Avatar style={{ marginBottom: "10px" }}>
                    <AutoGraph />
                </Avatar>
                <Typography color="primary.light" align="center">
                    Check performance history of a reviewer. See graphs for
                    their review performances.
                </Typography>
            </TextContainer>
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    column-gap: 50px;
    row-gap: 50px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    .review-confirmation-image {
        grid-row: 1;
        grid-column: 2;
    }
    .performance-report-image {
        grid-row: 3;
        grid-column: 2;
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(6, 1fr);
        row-gap: unset;
        .review-confirmation-image,
        .performance-report-image {
            grid-row: unset;
            grid-column: unset;
        }
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 500px;
`;

const TextContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default Features;
