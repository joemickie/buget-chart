import * as React from "react";
import { Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col gap-0 pt-4 mx-auto w-full bg-zinc-50 ">
            {/* Budget */}
            <div className="flex flex-col gap-2.5 px-6 w-full text-3xl font-bold tracking-tighter text-slate-900">
                <div className="flex gap-5 justify-between px-0.5 text-base font-semibold tracking-normal leading-5 text-center text-black whitespace-nowrap">
                    <div className="gap-0">9:41</div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4b60fb148a9c0c2d68ce9eec28580c04fa6e4743c1cf8f10edc3943b0c1a50d?"
                        className="shrink-0 gap-0 aspect-[5.56] w-[67px]"
                    />
                </div>
                <div className="gap-0 mt-11 leading-[129%]">Budget</div>
                <div className="flex gap-2.5 self-start mt-8 text-sm tracking-normal text-gray-500">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec8891895311b238335ec5a9277cd0b03f89c3b4c83dfc1e8e84fe48a27ebb1f?"
                        className="shrink-0 gap-0 w-5 aspect-square"
                    />
                    <div className="gap-0">Monthly Budget</div>
                </div>
                <div className="items-start px-5 pt-4 pb-2.5 mt-2.5 whitespace-nowrap bg-white rounded-xl shadow-sm leading-[129%]">
                    ₦120,000
                </div>
            </div>
            {/* Expenses and Category Overview */}
            <Flex className="z-10 flex-col gap-3 items-end pt-5 pr-8 pb-20 pl-20 mt-5 w-full text-xs tracking-normal leading-4 text-black rounded-md shadow-sm backdrop-blur-[125px] bg-zinc-50" style={{ paddingBottom: "120px" }}>
                {/* Expenses overview */}

                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/396266860f3d857e3d6794fd04e2252a91e218a1cbdbc2af5abe114958005f69?"
                    className="gap-0 w-full aspect-[4.35]"
                />
                {/* Category Overview */}
                <Flex className="flex gap-3 mt-11 text-center">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec8891895311b238335ec5a9277cd0b03f89c3b4c83dfc1e8e84fe48a27ebb1f?"
                        className="shrink-0 gap-0 w-5 aspect-square"
                    />
                    <div className="flex-auto gap-0">Expenses overview</div>
                </Flex>
                <Flex className="flex gap-3 mt-3 mb-72 text-right">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec8891895311b238335ec5a9277cd0b03f89c3b4c83dfc1e8e84fe48a27ebb1f?"
                        className="shrink-0 gap-0 w-5 aspect-square"
                    />
                    <div className="flex-auto gap-0">Category Overview</div>
                </Flex>
            </Flex>
            {/* Profile */}
            <Footer />

        </div>
    );
};

export default Home;
