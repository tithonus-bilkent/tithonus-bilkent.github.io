import { Avatar, AvatarGroup, Tooltip, Typography, Box } from "@mui/material";
import React from "react";
import { deepOrange, deepPurple } from "@mui/material/colors";
import TeamCard from "./TeamCard";

export const Team = () => {
    return (
        <div>
            <Box display="flex" style={{ alignItems: "center" }}>
                <Typography variant="h4" color="primary.light">
                    Meet the team
                </Typography>
                <AvatarGroup style={{ marginLeft: "20px" }} max={7}>
                    <Tooltip title="Ziya Muktharov">
                        <Avatar src="images/ziya.jpg" />
                    </Tooltip>
                    <Tooltip title="Mokhlaroyim Raupova">
                        <Avatar src="images/mohi.jpg" />
                    </Tooltip>
                    <Tooltip title="Osama Tanveer">
                        <Avatar src="images/osama.jpg" />
                    </Tooltip>
                    <Tooltip title="Mannan Abdul">
                        <Avatar src="images/sunny.jpeg" />
                    </Tooltip>
                    <Tooltip title="Javid Baghirov">
                        <Avatar src="images/javid.jpeg" />
                    </Tooltip>
                    <Tooltip title="Eray Tüzün">
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>ET</Avatar>
                    </Tooltip>
                    <Tooltip title="Murat Ergun">
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>ME</Avatar>
                    </Tooltip>
                </AvatarGroup>
            </Box>
            <Box marginTop="10px">
                <Typography variant="h5" color="primary.light">
                    Developers
                </Typography>
                <Box
                    display="flex"
                    style={{
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <TeamCard imgSrc="images/ziya.jpg" name="Ziya Muktharov" />
                    <TeamCard
                        imgSrc="images/mohi.jpg"
                        name="Mokhlaroyim Raupova"
                    />
                    <TeamCard imgSrc="images/osama.jpg" name="Osama Tanveer" />
                    <TeamCard imgSrc="images/sunny.jpeg" name="Mannan Abdul" />
                    <TeamCard
                        imgSrc="images/javid.jpeg"
                        name="Javid Baghirov"
                    />
                </Box>
            </Box>
            <Box marginTop="10px">
                <Typography variant="h5" color="primary.light">
                    Supervisor
                </Typography>
                <Box
                    display="flex"
                    style={{
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <TeamCard
                        name="Eray Tüzün"
                        initials="ET"
                        color={deepOrange[500]}
                    />
                </Box>
            </Box>

            <Box marginTop="10px">
                <Typography variant="h5" color="primary.light">
                    Innovation Expert
                </Typography>
                <Box
                    display="flex"
                    style={{
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <TeamCard
                        name="Murat Ergun"
                        initials="ME"
                        color={deepPurple[500]}
                    />
                </Box>
            </Box>
        </div>
    );
};

export default Team;
