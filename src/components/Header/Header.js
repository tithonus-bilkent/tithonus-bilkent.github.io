import styled from "@emotion/styled";
import { Menu } from "@mui/icons-material";
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    Toolbar,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Actions from "./Actions";
import Title from "./Title";

const Header = () => {
    const [showDrawer, setShowDrawer] = useState(false);

    const theme = useTheme();
    const isTabletOrBelow = useMediaQuery(theme.breakpoints.down("md"));

    const handleDrawerToggle = () => {
        setShowDrawer((showDrawer) => !showDrawer);
    };

    return (
        <AppBar>
            <Toolbar>
                {isTabletOrBelow ? (
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleDrawerToggle}
                    >
                        <Menu />
                    </IconButton>
                ) : null}
                <div style={{ margin: isTabletOrBelow ? "auto" : "" }}>
                    <Title />
                </div>
                {!isTabletOrBelow ? <ActionsBar /> : null}
                <Drawer
                    anchor="left"
                    open={showDrawer}
                    onClose={handleDrawerToggle}
                >
                    <Box
                        style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "20px 0px 0px 15px",
                        }}
                    >
                        <Title />
                    </Box>
                    <ActionsList />
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

const ActionsList = styled(Actions)`
    flex-direction: column;
    padding: 20px;
    height: 100%;
    a {
        margin: 5px 0;
    }
    button {
        margin-top: auto;
    }
`;

const ActionsBar = styled(Actions)`
    flex-direction: row;
    button {
        margin-left: 20px;
    }
`;

export default Header;
