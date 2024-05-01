import * as React from "react";
import {
    Box,
    Flex,
    Image,
    Text,
} from "@chakra-ui/react";
import Circle from "../assets/circle.svg";
import Degree from "../assets/degree.svg";
import Savings from "../assets/savings.svg";
import Battery from "../assets/battery.svg";
import Naira from "../assets/naira.svg";
import Dot from "../assets/dot.svg";
import Food from "../assets/food.svg";
import House from "../assets/house.svg";
import Report from "../assets/report.svg";
import Chat from "../assets/chat.svg";
import Buget from "../assets/buget.svg";
import Profile from "../assets/vector.svg";

const Budget: React.FC = () => {
    return (
        <Box className="flex flex-col gap-2.5 pt-4 mx-auto w-full bg-zinc-100 ">
            <Flex className="flex flex-col gap-2.5 px-10 w-full">
                <Flex className="flex gap-5 justify-between text-base font-semibold tracking-normal leading-5 text-center text-black whitespace-nowrap">
                    <Text className="gap-0">9:41</Text>
                    <Image
                        loading="lazy"
                        src={Battery}
                        className="shrink-0 gap-0 aspect-[5.56] w-[67px]"
                    />
                </Flex>
                <Text className="gap-0 mt-11 text-3xl font-bold tracking-tighter leading-9 text-slate-900">
                    Budget
                </Text>
                <Flex className="flex gap-2.5 self-start mt-8 text-sm tracking-normal text-gray-500">
                    <Image
                        loading="lazy"
                        src={Naira}
                        className="shrink-0 gap-0 w-5 aspect-square"
                    />
                    <Text className="gap-0">Monthly Budget</Text>
                </Flex>
                <Box
                    className="items-start px-5 pt-4 pb-2.5 mt-2.5 text-3xl font-bold tracking-tighter leading-9 whitespace-nowrap bg-white rounded-xl shadow-sm text-slate-900"
                >
                    ₦120,000
                </Box>
                <Flex className="flex gap-5 justify-between items-start mt-8 w-full text-base tracking-normal leading-8">
                    <Flex className="flex gap-5 justify-between mt-1.5">
                        <Text className="gap-0 self-start text-gray-500">Last Month</Text>
                        <Flex className="flex flex-col gap-3 text-sky-600">
                            <Text className="gap-0">This Month</Text>
                            <div className="gap-0 w-1/2 border-2 border-sky-600 border-solid aspect-[16.67] stroke-[2px] stroke-sky-600"></div>
                        </Flex>
                    </Flex>
                    <Image
                        loading="lazy"
                        src={Dot}
                        className="shrink-0 gap-0 aspect-[1.89] w-[30px]"
                    />
                </Flex>
                <Flex className="relative w-40 h-40 mx-auto" style={{ objectPosition: "60% -7px" }}>
                    <Image
                        loading="lazy"
                        src={Circle}
                        className="rounded-full w-full h-full"
                    />
                    <Image
                        loading="lazy"
                        src={Degree}
                        className="absolute inset-1/4 w-1/2 h-1/2 rounded-full"
                    />
                </Flex>
                <Text className="gap-0 self-center text-sm tracking-normal text-gray-500">
                    Amount spent so far
                </Text>
                <Text className="flex gap-0 self-center text-base tracking-normal leading-8 text-blue-400">
                    <Text className="text-sky-600">₦50,000</Text>
                    <Text className="text-blue-400">/₦120,000</Text>
                </Text>
                <Text className="gap-0 mt-8 text-xl font-medium tracking-normal leading-6 text-slate-900">
                    Category Breakdown
                </Text>
            </Flex>
            <Box className="flex flex-col gap-4 pt-5 pb-1.5 mt-2.5 w-full rounded-xl px-10">
                <Flex className="" >
                    <Flex className="flex gap-2.5 text-sm tracking-normal">
                        <Image
                            loading="lazy"
                            src={Food}
                            className="shrink-0 gap-0 aspect-square w-[50px]"
                        />
                        <Flex className="flex flex-col gap-0 my-auto">
                            <Text className="gap-0 font-medium leading-[171%] text-slate-900">
                                Food and Drink
                            </Text>
                            <Text className="gap-0 mt-0 text-gray-500">40%</Text>
                        </Flex>
                    </Flex>
                    <Flex className="flex-auto gap-0 self-start mt-2.5 text-base tracking-normal leading-8 text-right" style={{ justifyContent: "flex-end" }}>
                        <Text className="text-black">₦20,000/</Text>
                        <Text className="text-neutral-300">₦42,000</Text>
                    </Flex>
                </Flex>
                <Flex className="">
                    <Flex className="flex gap-2.5 text-sm tracking-normal">
                        <Image
                            loading="lazy"
                            src={Savings}
                            className="shrink-0 gap-0 aspect-square w-[50px]"
                        />
                        <Flex className="flex flex-col gap-0 my-auto">
                            <Text className="gap-0 font-medium leading-[171%] text-slate-900">
                                Savings
                            </Text>
                            <Text className="gap-0 mt-0 text-gray-500">20%</Text>
                        </Flex>
                    </Flex>
                    <Flex className="flex-auto gap-0 self-start justify-self-end mt-2.5" style={{ justifyContent: "flex-end" }}>
                        <Text className="text-black">₦10,000/</Text>
                        <Text className="text-neutral-300">₦24,000</Text>
                    </Flex>
                </Flex>
            </Box>
            <Box className="bg-white">
                <Flex className="flex flex-col gap-0 justify-between  backdrop-blur-[50px] p-0">
                    <Flex className="overflow-hidden relative gap-5 justify-between items-start px-8 py-5">
                        {/* Home */}
                        <div className="flex relative flex-col gap-3.5 text-xs text-center whitespace-nowrap font-[450] text-neutral-300">
                            <img
                                loading="lazy"
                                src={House}
                                className="gap-0 self-center w-full aspect-[1.54] fill-neutral-300"
                            />
                            <div className="gap-0 mt-3.5 slashed-zero">Home</div>
                        </div>
                        {/* Reports */}
                        <div className="flex relative flex-col gap-3.5 text-xs text-center whitespace-nowrap font-[450] text-neutral-300">
                            <img
                                loading="lazy"
                                src={Report}
                                className="gap-0 self-center w-full aspect-[2] fill-neutral-300"
                            />
                            <div className="gap-0 mt-3.5 slashed-zero">Reports</div>
                        </div>
                        {/* Chat */}
                        <div className="flex relative flex-col gap-3.5 text-xs text-center text-gray-500 whitespace-nowrap font-[450]">
                            <img
                                loading="lazy"
                                src={Chat}
                                className="gap-0 self-center w-full aspect-[0.75] fill-gray-500"
                            />
                            <div className="gap-0 slashed-zero text-gray-500">Chat</div>
                        </div>
                        {/* Buget */}
                        <div className="flex relative flex-col gap-3.5 text-xs text-center text-gray-500 whitespace-nowrap font-[450]">
                            <img
                                loading="lazy"
                                src={Buget}
                                className="gap-0 self-center w-5 aspect-[0.56] fill-sky-500"
                            />
                            <div className="gap-0 slashed-zero text-slate-900">Budget</div>
                        </div>
                        {/* Profile */}
                        <div className="flex relative flex-col gap-3.5 text-xs text-center text-gray-500 whitespace-nowrap font-[450]">
                            <img
                                loading="lazy"
                                src={Profile}
                                className="gap-0 self-center w-full aspect-[1.64] fill-gray-500"
                            />
                            <div className="gap-0 mt-3.5 slashed-zero">Profile</div>
                        </div>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default Budget;
