import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import { Routes } from "~/routes/Routes";

const OpenAppButton = (props) => {
    const { text } = props;
    const [showDialog, setShowDialog] = useState(false);

    const toggleDialogVisibility = () => {
        setShowDialog((showDialog) => !showDialog);
    };

    const navigateToApp = () => {
        window.location.replace(
            `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_TITHONUS_URL}`
        );
    };

    return (
        <>
            <Button
                variant="contained"
                color="success"
                onClick={toggleDialogVisibility}
                endIcon={<LinkIcon />}
            >
                {text}
            </Button>
            <Dialog open={showDialog} onClose={toggleDialogVisibility}>
                <DialogTitle>You are navigating to Tithonus App.</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To use the application, it is essential that you have
                        enabled the Tithonus App for your repository. You can
                        configure the Tithonus App with your repository{" "}
                        <a
                            href={process.env.REACT_APP_TITHONUS_APP_URL}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                textDecoration: "none",
                                color: "#81c784",
                            }}
                        >
                            here
                        </a>
                        . For help, reach out to the user manual{" "}
                        <Link
                            to={Routes.Reports}
                            style={{
                                textDecoration: "none",
                                color: "#81c784",
                            }}
                            onClick={() => {
                                toggleDialogVisibility();
                            }}
                        >
                            here
                        </Link>
                        .
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={toggleDialogVisibility}>
                        Cancel
                    </Button>
                    <Button
                        color="success"
                        endIcon={<LinkIcon />}
                        onClick={() => {
                            navigateToApp();
                            toggleDialogVisibility();
                        }}
                    >
                        Go to App
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default OpenAppButton;
