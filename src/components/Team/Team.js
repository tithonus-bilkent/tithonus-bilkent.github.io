import { Avatar, AvatarGroup, Tooltip, Typography, Box } from "@mui/material";
import React from "react";
import { deepPurple } from "@mui/material/colors";
import TeamCard from "./TeamCard";

export const Team = () => {
    return (
        <div>
            <Box display="flex" style={{ alignItems: "center" }}>
                <Typography variant="h4" color="primary.light">
                    Meet the team
                </Typography>
                <AvatarGroup style={{ marginLeft: "20px" }} max={6}>
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
                        <Avatar src="images/eray.jpeg" />
                    </Tooltip>
                    <Tooltip title="Haluk Altunel">
                        <Avatar src="images/haluk.jpeg" />
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
                    <TeamCard
                        imgSrc="images/ziya.jpg"
                        name="Ziya Muktharov"
                        linkedInLink="https://www.linkedin.com/in/ziyaza/"
                        githubLink="https://github.com/ZiyaZa"
                    />
                    <TeamCard
                        imgSrc="images/mohi.jpg"
                        name="Mokhlaroyim Raupova"
                        linkedInLink="https://www.linkedin.com/in/mohlaroyim-raupova-a2a107195/"
                        githubLink="https://github.com/mohlaroyim"
                    />
                    <TeamCard
                        imgSrc="images/osama.jpg"
                        name="Osama Tanveer"
                        linkedInLink="https://www.linkedin.com/in/osama-tanveer/"
                        githubLink="https://github.com/osamatanveer"
                    />
                    <TeamCard
                        imgSrc="images/sunny.jpeg"
                        name="Mannan Abdul"
                        linkedInLink="https://www.linkedin.com/in/abdul-mannan-0601a2192/"
                        githubLink="https://github.com/abdulmannan1998"
                    />
                    <TeamCard
                        imgSrc="images/javid.jpeg"
                        name="Javid Baghirov"
                        linkedInLink="https://www.linkedin.com/in/caqqolu/"
                        githubLink="https://github.com/Jaaw1d"
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
                        imgSrc="images/eray.jpeg"
                        linkedInLink="https://www.linkedin.com/in/tuzuneray/"
                        githubLink="https://github.com/eraytuzun"
                    />
                </Box>
            </Box>

            <Box marginTop="10px">
                <Typography variant="h5" color="primary.light">
                    Technical Advisor
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
                        name="Haluk Altunel"
                        imgSrc="images/haluk.jpeg"
                        linkedInLink="https://www.linkedin.com/in/halukaltunel/"
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
                        linkedInLink="https://www.linkedin.com/in/muratergun/"
                    />
                </Box>
            </Box>
        </div>
    );
};

export default Team;
