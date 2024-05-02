import React from "react"
import { Box, Flex } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';


import House from "../assets/house.svg";
import Report from "../assets/report.svg";
import Chat from "../assets/chat.svg";
import Buget from "../assets/buget.svg";
import Profile from "../assets/vector.svg";


const Footer: React.FC = () => {

    const [activePage, setActivePage] = React.useState(""); // State to track active page

    // Function to handle navigation click and update active page
    const handleNavigation = (path: string) => {
        setActivePage(path);
    };

    return (
        <Box className="bg-white fixed bottom-0 left-0 right-0 z-10">
            <Flex className="flex flex-col gap-0 justify-between backdrop-blur-[50px] p-0">
                <Flex className="overflow-hidden relative gap-5 justify-between items-start px-8 py-5">
                    {/* Home */}
                    <NavLink to="/" onClick={() => handleNavigation("")} className="flex relative flex-col gap-3.5 text-xs text-center whitespace-nowrap font-[450] text-neutral-300" style={{
                        color: window.location.pathname === "/" ? 'black' : 'neutral-300'
                    }} >
                        <img
                            loading="lazy"
                            src={House}
                            className="gap-0 self-center w-full aspect-[1.54] fill-neutral-300"
                        />
                        <div className="gap-0 mt-3.5 slashed-zero">Home</div>
                    </NavLink>
                    {/* Reports */}
                    <NavLink to="/report" onClick={() => handleNavigation("report")} className="flex relative flex-col gap-3.5 text-xs text-center whitespace-nowrap font-[450] text-neutral-300" style={{
                        color: window.location.pathname === "/report" ? 'black' : 'neutral-300'
                    }}>
                        <img
                            loading="lazy"
                            src={Report}
                            className="gap-0 self-center w-full aspect-[2] fill-neutral-300"
                        />
                        <div className="gap-0 mt-3.5 slashed-zero">Reports</div>
                    </NavLink>
                    {/* Chat */}
                    <NavLink  to="/chat" onClick={() => handleNavigation("chat")} className="flex relative flex-col gap-3.5 text-xs text-center text-neutral-300 whitespace-nowrap font-[450]" style={{
                        color: window.location.pathname === "/chat" ? 'black' : 'neutral-300'
                    }}>
                        <img
                            loading="lazy"
                            src={Chat}
                            className="gap-0 self-center w-20 aspect-[2]"
                        />
                        <div className="gap-0 slashed-zero">Chat</div>
                    </NavLink>
                    {/* Budget */}
                    <NavLink to="/budget" onClick={() => handleNavigation("budget")} className="flex relative flex-col gap-3.5 text-xs text-center text-neutral-300 whitespace-nowrap font-[450]" style={{
                        color: window.location.pathname === "/budget" ? 'black' : 'neutral-300'
                    }}>
                        <img
                            loading="lazy"
                            src={Buget}
                            className="gap-0 self-center w-5 aspect-[0.55] "
                        />
                        <div className="gap-0 slashed-zero ">Budget</div>
                    </NavLink>
                    {/* Profile */}
                    <NavLink to="/profile" onClick={() => handleNavigation("profile")} className="flex relative flex-col gap-3.5 text-xs text-center text-gray-500 whitespace-nowrap font-[450]" style={{
                        color: window.location.pathname === "/profile" ? 'black' : 'neutral-300'
                    }}>
                        <img
                            loading="lazy"
                            src={Profile}
                            className="gap-0 self-center w-full aspect-[1.64] fill-gray-500"
                        />
                        <div className="gap-0 mt-3.5 slashed-zero">Profile</div>
                    </NavLink>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;
