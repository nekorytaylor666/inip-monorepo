import React, {useState, useEffect} from "react";
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
} from "@chakra-ui/react";
import charity from "@public/icons/about-charity/charity-main.jpg";
import dollar from "@public/icons/about-charity/dollar.svg";
import group from "@public/icons/about-charity/group.svg";
import question from "@public/icons/about-charity/question.svg";
import settings from "@public/icons/about-charity/settings.svg";
import world from "@public/icons/about-charity/world.svg";
import africa from "@public/icons/about-charity/africa.jpg";
import african_baby from "@public/icons/about-charity/african_baby.jpg";
import freedom_statue from "@public/icons/about-charity/freedom_statue.jpg";
import room from "@public/icons/about-charity/room.jpg";
import joyful_people from "@public/icons/about-charity/joyful_people.jpg";


interface IProjects {
    id: string,
    firstBlock: {
        title: string,
        amountOfMoney: string,
    },
    secondBlock: {
        title: string,
    },
    showFirst: boolean
}

const AboutCharity = () => {


    const [projects, setProjects] = useState<IProjects[]>([
        {
            id: "1",
            firstBlock: {
                title: "Make the Africa green again!",
                amountOfMoney: "125.000.000$"
            },
            secondBlock: {
                title: `The world is falling apart. The last 3 years are the explicit representatives of it.
                The pandemic, economics crisis, protests, wars. Without peering, it may seems
                like the humanity is in the right way, but no it is not. Despite all that technological
                advances and scientific progress, there are still many problems that have to be solved,
                but are ignored. asd123

                Do you know that there is more than enough capital in the world to make the Africa
                green again? But 256 children already died there while you were reading this, due to
                hunger and water scarcity. Would not you change this if you had the opportunity?
                So we are giving that.`,
            },
            showFirst: true
        },
        {
            id: "2",
            firstBlock: {
                title: "Make the Africa green again!",
                amountOfMoney: "125.000.000$"
            },
            secondBlock: {
                title: `The world is falling apart. The last 3 years are the explicit representatives of it.
                The pandemic, economics crisis, protests, wars. Without peering, it may seems
                like the humanity is in the right way, but no it is not. Despite all that technological
                advances and scientific progress, there are still many problems that have to be solved,
                but are ignored. asd123

                Do you know that there is more than enough capital in the world to make the Africa
                green again? But 256 children already died there while you were reading this, due to
                hunger and water scarcity. Would not you change this if you had the opportunity?
                So we are giving that.`,
            },
            showFirst: true
        },
        {
            id: "3",
            firstBlock: {
                title: "Make the Africa green again!",
                amountOfMoney: "125.000.000$"
            },
            secondBlock: {
                title: `The world is falling apart. The last 3 years are the explicit representatives of it.
                The pandemic, economics crisis, protests, wars. Without peering, it may seems
                like the humanity is in the right way, but no it is not. Despite all that technological
                advances and scientific progress, there are still many problems that have to be solved,
                but are ignored. asd

                Do you know that there is more than enough capital in the world to make the Africa
                green again? But 256 children already died there while you were reading this, due to
                hunger and water scarcity. Would not you change this if you had the opportunity?
                So we are giving that.`,
            },
            showFirst: true
        },
        {
            id: "4",
            firstBlock: {
                title: "Make the Africa green again!",
                amountOfMoney: "125.000.000$"
            },
            secondBlock: {
                title: `The world is falling apart. The last 3 years are the explicit representatives of it.
                The pandemic, economics crisis, protests, wars. Without peering, it may seems
                like the humanity is in the right way, but no it is not. Despite all that technological
                advances and scientific progress, there are still many problems that have to be solved,
                but are ignored. asd123

                Do you know that there is more than enough capital in the world to make the Africa
                green again? But 256 children already died there while you were reading this, due to
                hunger and water scarcity. Would not you change this if you had the opportunity?
                So we are giving that.`,
            },
            showFirst: true
        },
        {
            id: "5",
            firstBlock: {
                title: "Make the Africa green again!",
                amountOfMoney: "125.000.000$"
            },
            secondBlock: {
                title: `The world is falling apart. The last 3 years are the explicit representatives of it.
                The pandemic, economics crisis, protests, wars. Without peering, it may seems
                like the humanity is in the right way, but no it is not. Despite all that technological
                advances and scientific progress, there are still many problems that have to be solved,
                but are ignored. asd123

                Do you know that there is more than enough capital in the world to make the Africa
                green again? But 256 children already died there while you were reading this, due to
                hunger and water scarcity. Would not you change this if you had the opportunity?
                So we are giving that.`,
            },
            showFirst: true
        },
        {
            id: "6",
            firstBlock: {
                title: "Make the Africa green again!",
                amountOfMoney: "125.000.000$"
            },
            secondBlock: {
                title: `The world is falling apart. The last 3 years are the explicit representatives of it.
                The pandemic, economics crisis, protests, wars. Without peering, it may seems
                like the humanity is in the right way, but no it is not. Despite all that technological
                advances and scientific progress, there are still many problems that have to be solved,
                but are ignored. asd123

                Do you know that there is more than enough capital in the world to make the Africa
                green again? But 256 children already died there while you were reading this, due to
                hunger and water scarcity. Would not you change this if you had the opportunity?
                So we are giving that.`,
            },
            showFirst: true
        },
        
    ]);

    return (
        <Box p={"100px 0"}>
            <Flex
                bgImage={charity.src}
                bgPosition={"top"}
                bgSize={"cover"}
                h={"815px"}
                color={"#fff"}
                p={'0 10% 10%'}
                flexDirection={"column"}
                justifyContent={{md: 'flex-end', sm: 'center'}}
            >
                <Flex
                    justifyContent={"space-between"}
                    flexDir={{md: 'row', sm: 'column'}}
                >
                    <Flex
                        flexDirection={"column"}
                        justifyContent={"space-between"}
                        mb={{md: 0, sm: 20}}
                    >
                        <Heading
                            fontSize={"60px"}
                            fontFamily={"Swing"}
                            fontWeight={400}
                            maxWidth={{md: '80%', sm: '100%'}}
                        >
                            The world is falling apart
                        </Heading>
                        <Button w={"254px"} h={"82px"} bg={"rgba(255, 255, 255, 0.1)"} borderRadius={"0"} border={"2px solid #fff"}>Select the project</Button>
                    </Flex>
                    <Text
                        h={"240px"}
                        w={{md: "710px", sm: '100%'}}
                        fontWeight={400}
                        fontSize={"18px"}
                        fontFamilty={"Inter"}
                    >
                        The world is falling apart. The last 3 years are the explicit representatives
                        of it. The pandemic, economics crisis, protests, wars. Without peering, it
                        may seems like the humanity is in the right way, but no it is not. Despite all
                        that technological advances and scientific progress, there are still many
                        problems that have to be solved, but are ignored. <br/><br/>

                        Do you know that there is more than enough capital in the world to make
                        the Africa green again? But 256 children already died there while you were
                        reading this, due to hunger and water scarcity. Would not you change this
                        if you had the opportunity? So we are giving that.
                    </Text>
                </Flex>
            </Flex>

            <Box p={"100px 10%"}>
                <Box color={"#365262"}>
                    <Heading
                        fontFamily={"QtOpt"}
                        fontWeight={700}
                    >
                        how it works.
                    </Heading>
                    <Flex
                        pt={50}
                        justifyContent={'space-between'}
                        flexWrap={'wrap'}
                        alignItems={'center'}
                    >
                        <Box w={{md: "20%", sm: '48%'}} mb={10}>
                            <Heading>1</Heading>
                            <Text fontSize={"20px"} fontWeight={400} minH={"60px"}>List of problems are offered by the platform</Text>
                            <Square w={"145px"} h={"143px"} bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(203, 225, 239, 0) 100%), #6C8693"}>
                                <Image src={question}/>
                            </Square>
                        </Box>
                        <Box w={{md: "20%", sm: '50%'}} mb={10}>
                            <Heading>2</Heading>
                            <Text fontSize={"20px"} fontWeight={400} minH={"60px"}>Community selects <br/> the one</Text>
                            <Square w={"145px"} h={"143px"} bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(203, 225, 239, 0) 100%), #6C8693"}>
                                <Image src={group}/>
                            </Square>
                        </Box>
                        <Box w={{md: "20%", sm: '50%'}} mb={10}>
                            <Heading>3</Heading>
                            <Text fontSize={"20px"} fontWeight={400} minH={"60px"}>The needed capital is gathered</Text>
                            <Square w={"145px"} h={"143px"} bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(203, 225, 239, 0) 100%), #6C8693"}>
                                <Image src={dollar}/>
                            </Square>
                        </Box>
                        <Box w={{md: "20%", sm: '50%'}} mb={10}>
                            <Heading>4</Heading>
                            <Text fontSize={"20px"} fontWeight={400} minH={"60px"}>The project processes implementation</Text>
                            <Square w={"145px"} h={"143px"} bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(203, 225, 239, 0) 100%), #6C8693"}>
                                <Image src={settings}/>
                            </Square>
                        </Box>
                        <Box w={{md: "20%", sm: '50%'}} mb={10}>
                            <Heading>5</Heading>
                            <Text fontSize={"20px"} fontWeight={400} minH={"60px"}>The problem is solved and the world is better</Text>
                            <Square w={"145px"} h={"143px"} bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(203, 225, 239, 0) 100%), #6C8693"}>
                                <Image src={world}/>
                            </Square>
                        </Box>

                    </Flex>
                </Box>

                <Box p={"120px 0"}>
                    <Heading
                        color={"#365262"}
                        fontFamily={"QtOpt"}
                        fontWeight={700}
                    >
                        select the project.
                    </Heading>

                    <Flex
                        pt={"40px"}
                        flexWrap={"wrap"}
                        gap={"20px"}
                        color={"#fff"}
                    >

                        {projects.map((item) => {

                            if(item.showFirst){

                                return <Flex key={item.id}
                                        w={{md: "48%", sm: '100%'}}
                                        h={"447px"}
                                        flexDirection={"column"}
                                        justifyContent={"space-between"}
                                        bgImage={africa.src}
                                        bgSize={"cover"}
                                        bgPosition={"top"}
                                        p={"40px"}
                                    >
                                        <Flex flexDir={{md: 'row', sm: 'column'}}>
                                            <Heading fontFamily={"QtOpt"} fontSize={"50px"} fontWeight={700}>{item.firstBlock.title}</Heading>
                                            <Box>
                                                <Text m={0} fontWeight={400} fontSize={"20px"}>Needed amount</Text>
                                                <Text m={0} fontWeight={600} fontSize={"30px"}>{item.firstBlock.amountOfMoney}</Text>
                                            </Box>
                                        </Flex>

                                        <ButtonGroup
                                            display={"flex"}
                                            justifyContent={"space-between"}
                                        >
                                            <Button w={"175px"} h={"82px"} bg={"rgba(255, 255, 255, 0.1)"} border={"2px solid #fff"} borderRadius={"0"}
                                                onClick={() => {
                                                    setProjects([
                                                        ...projects.map((el) => {
                                                            if (el.id === item.id) {
                                                                return {
                                                                    ...item,
                                                                    showFirst: false
                                                                }
                                                            }
                                                            return el;
                                                        })
                                                    ]);
                                                }}
                                            >
                                                More
                                            </Button>

                                            <Button w={"254px"} h={"82px"} bg={"rgba(255, 255, 255, 0.1)"} border={"2px solid #fff"} borderRadius={"0"}>
                                                Select
                                            </Button>
                                        </ButtonGroup>
                                    </Flex>
                            }
                            else {
                                const text = item.secondBlock.title.replace("asd123", '<br/><br/>');
                                const firstText = item.secondBlock.title.substring(0, item.secondBlock.title.indexOf("asd123"));
                                const secondText = item.secondBlock.title.substring(item.secondBlock.title.indexOf("asd123") + 6, item.secondBlock.title.length);

                                return <Box key={item.id}
                                    w={{md: "48%", sm: '100%'}}
                                    h={"447px"}
                                    display={"flex"}
                                    flexDirection={"column"}
                                    justifyContent={"space-between"}
                                    p={"40px"}
                                    bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(203, 225, 239, 0) 100%), #6C8693"}

                                >
                                    <Text m={0}>
                                        {firstText}<br/><br/>
                                        {secondText}
                                    </Text>

                                    <Button
                                        w={"175px"}
                                        h={"82px"}
                                        bg={"rgba(255, 255, 255, 0.1)"}
                                        border={"2px solid #fff"}
                                        borderRadius={0}
                                        onClick={() => {
                                            setProjects([
                                                ...projects.map((el) => {
                                                    if (el.id === item.id) {
                                                        return {
                                                            ...item,
                                                            showFirst: true
                                                        }
                                                    }
                                                    return el;
                                                })
                                            ]);
                                        }}
                                    >
                                        Back
                                    </Button>
                                </Box>

                            }
                        })}
                        
                    </Flex>
                </Box>

                <Center>
                    <Button
                        w={"276px"}
                        h={"74px"}
                        color={"#365262"}
                        border={"1px solid #c5d5de"}
                        borderRadius={0}
                        bg={"transparent"}
                    >
                        Submit
                    </Button>
                </Center>
            </Box>

            <Box
                w={"100%"}
                minH={"153px"}
                bgColor={"#6c8693"}
                color={"rgba(255, 255, 255)"}
                fontFamily={"QtOpt"}
                gap={"45px"}
                overflowX={"scroll"}
                display={"flex"}
                p={"50px 0"}
                __css={{
                    '&::-webkit-scrollbar': {
                        height: "3px",
                        width: "50%",
                        backgroundColor: `rgba(0, 0, 0, 0.05)`,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: `#758F9D`,
                    },
                }}
            >
                <Flex
                    minW={"260px"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    fontSize={"40px"}
                    fontWeight={700}
                >
                    latest projects.
                </Flex>
                <Flex
                    minW={"260px"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    fontSize={"40px"}
                    fontWeight={700}
                >
                    latest projects.
                </Flex>
                <Flex
                    minW={"260px"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    fontSize={"40px"}
                    fontWeight={700}
                >
                    latest projects.
                </Flex>
                <Flex
                    minW={"260px"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    fontSize={"40px"}
                    fontWeight={700}
                >
                    latest projects.
                </Flex>
                <Flex
                    minW={"260px"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    fontSize={"40px"}
                    fontWeight={700}
                >
                    latest projects.
                </Flex>
                <Flex
                    minW={"260px"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    fontSize={"40px"}
                    fontWeight={700}
                >
                    latest projects.
                </Flex>
                <Flex
                    minW={"260px"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    fontSize={"40px"}
                    fontWeight={700}
                >
                    latest projects.
                </Flex>

            </Box>

            <Flex
                p={"102px 10% 116px"}
                color={"#fff"}
                flexDirection={"column"}
                gap={"80px"}
            >
                <Flex gap={"20px"} flexDir={{md: 'row', sm: 'column'}}>
                    <Flex
                        w={{md: "25%", sm: '100%'}}
                        minH={"464px"}
                        flexDirection={"column"}
                        justifyContent={"space-between"}
                        p={"20px"}
                        bgImage={african_baby.src}
                        bgPosition={"top"}
                        bgSize={"cover"}
                    >
                        <Box>
                            <Heading
                                fontSize={"24px"}
                             fontFamily={"QtOpt"} fontWeight={700}>
                                07/06/2022
                            </Heading>
                        </Box>
                        <Box>
                            <Heading fontWeight={700} fontSize={"30px"}>
                                Make the Africa green again!
                            </Heading>
                            <Text fontFamilty={"Inter"} fontWeight={500} pt={"7px"}>
                                Do you know that there is more than enough capital in the world to make the Africa green again?
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        w={{md: "25%", sm: '100%'}}
                        minH={"464px"}
                        flexDirection={"column"}
                        justifyContent={"space-between"}
                        p={"20px"}
                        bgImage={freedom_statue.src}
                        bgPosition={"top"}
                        bgSize={"cover"}
                    >
                        <Box>
                            <Heading fontFamily={"QtOpt"} fontWeight={700}>
                                07/06/2022
                            </Heading>
                        </Box>
                        <Box>
                            <Heading fontWeight={700} fontSize={"30px"}>
                                Make the Africa green again!
                            </Heading>
                            <Text fontFamilty={"Inter"} fontWeight={500} pt={"7px"}>
                                Do you know that there is more than enough capital in the world to make the Africa green again?
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        w={{md: "25%", sm: '100%'}}
                        minH={"464px"}
                        flexDirection={"column"}
                        justifyContent={"space-between"}
                        p={"20px"}
                        bgImage={room.src}
                        bgPosition={"top"}
                        bgSize={"cover"}
                    >
                        <Box>
                            <Heading fontFamily={"QtOpt"} fontWeight={700}>
                                07/06/2022
                            </Heading>
                        </Box>
                        <Box>
                            <Heading fontWeight={700} fontSize={"30px"}>
                                Make the Africa green again!
                            </Heading>
                            <Text fontFamilty={"Inter"} fontWeight={500} pt={"7px"}>
                                Do you know that there is more than enough capital in the world to make the Africa green again?
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        w={{md: "25%", sm: '100%'}}
                        minH={"464px"}
                        flexDirection={"column"}
                        justifyContent={"space-between"}
                        p={"20px"}
                        bgImage={joyful_people.src}
                        bgPosition={"top"}
                        bgSize={"cover"}
                    >
                        <Box>
                            <Heading fontFamily={"QtOpt"} fontWeight={700}>
                                07/06/2022
                            </Heading>
                        </Box>
                        <Box>
                            <Heading fontWeight={700} fontSize={"30px"}>
                                Make the Africa green again!
                            </Heading>
                            <Text fontFamilty={"Inter"} fontWeight={500} pt={"7px"}>
                                Do you know that there is more than enough capital in the world to make the Africa green again?
                            </Text>
                        </Box>
                    </Flex>

                </Flex>

                <Center>
                    <Button
                        w={"276px"}
                        h={"74px"}
                        border={"1px solid #c5d5de"}
                        borderRadius={0}
                        bg={"transparent"}
                        color={"#365262"}
                    >
                        Show more
                    </Button>
                </Center>
            </Flex>
        </Box>
    );

}


export default AboutCharity;
