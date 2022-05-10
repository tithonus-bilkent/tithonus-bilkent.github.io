import React from "react";
import styled from "@emotion/styled";
import {
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
    Card,
    CardContent,
    List,
    Button,
    ListItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import IFrameCard from "../../components/PdfViewer/PdfViewer";

const ITEMS = [
    {
        title: "User Manual",
        reportName: "userManual",
        path: "UserManual.pdf",
    },
    {
        title: "Final Report",
        reportName: "final",
        path: "Final.pdf",
    },
    {
        title: "Low Level Design",
        reportName: "lowLevelDesign",
        path: "LowLevelDesign.pdf",
    },
    {
        title: "High Level Design",
        reportName: "highLevelDesign",
        path: "HighLevelDesign.pdf",
    },
    {
        title: "Analysis",
        reportName: "analysis",
        path: "Analysis.pdf",
    },
    {
        title: "Specifications",
        reportName: "specifications",
        path: "ProjectSpecifications.pdf",
    },
];

export default function Reports() {
    console.log(window.location.href);
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        return (
            <Container>
                <Card>
                    <CardContent>
                        <List>
                            {ITEMS.map((item) => {
                                return (
                                    <ListItem key={item.reportName}>
                                        <Button
                                            // href={item.path}
                                            onClick={() => {
                                                window.open(
                                                    window.location.href +
                                                        item.path,
                                                    "_blank"
                                                );
                                            }}
                                            color="success"
                                        >
                                            {item.title}
                                        </Button>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </CardContent>
                </Card>
            </Container>
        );
    }
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
