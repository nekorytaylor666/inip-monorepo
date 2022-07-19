import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Box,
    ButtonGroup,
    Button,
    Center,
    Container,
    Flex,
    Heading,
    HStack,
    SimpleGrid,
    Skeleton,
    Square,
    Text,
    VStack,
    Checkbox
} from "@chakra-ui/react";
import henocyde from "@public/icons/homepage/henocyde.jpg";
import upward from "@public/icons/upward.svg";
import downward from "@public/icons/downward.svg";
import DreamsLayout from "@components/layout/dreams-layout";
import DreamsCollection from "@components/dreams-collection";


export interface DreamsNFT {
    id: string,
    author: string,
    desc: string,
    price: number,
    name: string
    img: StaticImageData,
}

const Dreams = () => {

    const [showCriteria, setShowCriteria] = useState(true);

    const dreams: DreamsNFT[] = [
        {
            id: "1",
            author: "Binsky",
            name: "HENOCYDE",
            desc: "Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem, Lorem ipsum loremLorem ipsum lorem, Lorem ipsum lorem",
            price: 5468,
            img: henocyde,
        },
        {
            id: "2",
            author: "Binsky",
            name: "HENOCYDE",
            desc: "Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem, Lorem ipsum loremLorem ipsum lorem, Lorem ipsum lorem",
            price: 5468,
            img: henocyde,
        },
        {
            id: "3",
            author: "Binsky",
            name: "HENOCYDE",
            desc: "Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem, Lorem ipsum loremLorem ipsum lorem, Lorem ipsum lorem",
            price: 5468,
            img: henocyde,
        },
        {
            id: "4",
            author: "Binsky",
            name: "HENOCYDE",
            desc: "Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem, Lorem ipsum loremLorem ipsum lorem, Lorem ipsum lorem",
            price: 5468,
            img: henocyde,
        },
        {
            id: "5",
            author: "Binsky",
            name: "HENOCYDE",
            desc: "Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem, Lorem ipsum loremLorem ipsum lorem, Lorem ipsum lorem",
            price: 5468,
            img: henocyde,
        },
        {
            id: "6",
            author: "Binsky",
            name: "HENOCYDE",
            desc: "Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem, Lorem ipsum loremLorem ipsum lorem, Lorem ipsum lorem",
            price: 5468,
            img: henocyde,
        },
        {
            id: "7",
            author: "Binsky",
            name: "HENOCYDE",
            desc: "Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem, Lorem ipsum loremLorem ipsum lorem, Lorem ipsum lorem",
            price: 5468,
            img: henocyde,
        }
    ];

    return (
        <Box>
            <Box p={"120px 10%"} color={"#1c2529"}>
                <Heading fontFamily={"Swing"} fontSize={"140px"} fontWeight={400} >Dreams</Heading>
                <Text
                    maxW={"470px"}
                    fontFamily={"Inter"}
                    fontSize={"20px"}
                    fontWeight={500}
                    color={"#aaa"}
                    pb={"40px"}
                >
                    Collect, sell and buy NFT's from the best creators around the world. Just in clicks
                </Text>
                <Button
                    minW={"220px"}
                    minH={"74px"}
                    border={"2px solid #dedede"}
                    bg={"transparent"}
                    borderRadius={0}
                >
                    About
                </Button>
            </Box>

            <Box p={"0 10%"}>
                <Flex pb={"30px"}>
                    <Box minW={"45px"} position={"relative"}>
                        <Image
                            src={showCriteria ? upward : downward}
                            onClick={() => setShowCriteria(!showCriteria)}
                        />

                        {!showCriteria && <Flex
                            flexDir={"column"}
                            gap={"30px"}
                            position={"absolute"}
                            zIndex={1}
                            bg={"#fff"}
                            p={"100px 70px 100px"}
                            mt={"30px"}
                            border={"1px solid #d9d9d9"}
                            color={"#1c2529"}
                            fontSize={"20px"}
                            fontWeight={400}
                        >
                            <Checkbox size={"md"} gap={"30px"}>
                                New
                            </Checkbox>
                            <Checkbox  size={"md"} gap={"30px"}>
                                In progress
                            </Checkbox>
                            <Checkbox  size={"md"} gap={"30px"}>
                                Succeed
                            </Checkbox>
                        </Flex>}
                    </Box>

                    <Box>
                        All dreams
                    </Box>
                </Flex>
                <DreamsCollection dreams={dreams}/>
            </Box>
        </Box>
    );
}


Dreams.getLayout = function getLayout(page: ReactElement){

    return <DreamsLayout>
        <>
            {page}
        </>
    </DreamsLayout>;
}


export default Dreams;
