import React from "react";
import styled from "@emotion/styled";
import {
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
    Card,
    CardContent,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import IFrameCard from "../../components/PdfViewer/PdfViewer";

const ITEMS = [
    { title: "User Manual", reportName: "userManual" },
    { title: "Final Report", reportName: "final" },
    { title: "Low Level Design", reportName: "lowLevelDesign" },
    { title: "High Level Design", reportName: "highLevelDesign" },
    { title: "Analysis", reportName: "analysis" },
    { title: "Specifications", reportName: "specifications" },
];

export default function Reports() {
    return (
        <Container>
            <Card>
                <CardContent>
                    {ITEMS.map((item) => (
                        <Accordion key={item.reportName}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{item.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <IFrameCard reportName={item.reportName} />
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </CardContent>
            </Card>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    top: 100px;
    height: 100%;
    width: 100%;
    padding: 20px;
`;
