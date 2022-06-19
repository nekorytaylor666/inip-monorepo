import React from "react";
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
import advising from "@public/icons/creator-support/advising.svg";
import fundraising from "@public/icons/creator-support/fundraising.svg";
import promo from "@public/icons/creator-support/promo.svg";
import resources from "@public/icons/creator-support/resources.svg";
import support from "@public/icons/creator-support/support.jpg";
import heno from "@public/icons/creator-support/heno.jpg";


const CreatorSupport = () => {

    return (
        <Box>
            <Flex
                flexDirection={"column"}
                bgImage={support.src}
                minH={"900px"}
                bgPos={"top"}
                bgSize={"cover"}
                p={"0 200px"}
                color={"#fff"}
                justifyContent={"center"}
            >
                <Flex
                    flexDirection={"column"}
                    maxW={"1000px"}
                    gap={"145px"}
                >
                    <Heading 
                        fontFamily={"Swing"} 
                        fontSize={"80px"} 
                        fontWeight={400}
                    >
                        Are you an artist? INIP can support you!
                    </Heading>
                    <Button 
                        maxW={"300px"}
                        minH={"80px"}
                        bg={"transparent"}
                        border={"2px solid #fff"}
                        borderRadius={0}
                    >
                        Submit your candidacy
                    </Button>
                </Flex>
            </Flex>

            <Box
                p={"120px 200px"}
            >
                <Heading
                    pb={"50px"}
                    fontWeight={700}
                    fontSize={"40px"}
                    color={"#365262"}
                >
                    support.
                </Heading>
                <Flex gap={"25px"}>
                    <Box 
                        w={"25%"} 
                        minH={"454px"}
                        p={"35px"}
                        color={"#fff"}
                        bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(203, 225, 239, 0) 100%), #6C8693"}
                    >
                        <Image src={advising}/>
                        <Heading
                            fontSize={"30px"}
                            fontFamily={"QtOpt"}
                            fontWeight={700}
                            pt={"25px"}
                        >
                            Advising
                        </Heading>
                        <Text 
                            fontFamily={"Inter"} 
                            fontWeight={400}
                            fontSize={"20px"}
                            pt={"22px"}
                        >
                            INIP will help you with navigating in space. We will share our experience, strategies and other knowledge to make your project even better.
                        </Text>
                    </Box>
                    <Box 
                        w={"25%"} 
                        minH={"454px"}
                        p={"35px"}
                        color={"#fff"}
                        bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(203, 225, 239, 0) 100%), #6C8693"}
                    >
                        <Image src={fundraising}/>
                        <Heading
                            fontSize={"30px"}
                            fontFamily={"QtOpt"}
                            fontWeight={700}
                            pt={"25px"}
                        >
                            Fundraising
                        </Heading>
                        <Text 
                            fontFamily={"Inter"} 
                            fontWeight={400}
                            fontSize={"20px"}
                            pt={"22px"}
                        >
                            Finding investment is one of the biggest problems creators face with. INIP has partnerships with many VCs and angel investors, whose next investment might be your project.
                        </Text>
                    </Box>
                    <Box 
                        w={"25%"} 
                        minH={"454px"}
                        p={"35px"}
                        color={"#fff"}
                        bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(203, 225, 239, 0) 100%), #6C8693"}
                    >
                        <Image src={promo}/>
                        <Heading
                            fontSize={"30px"}
                            fontFamily={"QtOpt"}
                            fontWeight={700}
                            pt={"25px"}
                        >
                            Promo
                        </Heading>
                        <Text 
                            fontFamily={"Inter"} 
                            fontWeight={400}
                            fontSize={"20px"}
                            pt={"22px"}
                        >
                            Having a valuable project and creating an interesting concept is good, but without effective marketing it will not reach the audience.
                        </Text>

                    </Box>
                    <Box 
                        w={"25%"} 
                        minH={"454px"}
                        p={"35px"}
                        color={"#fff"}
                        bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(203, 225, 239, 0) 100%), #6C8693"}
                    >
                        <Image src={resources}/>
                        <Heading
                            fontSize={"30px"}
                            fontFamily={"QtOpt"}
                            fontWeight={700}
                            pt={"25px"}
                        >
                            Resources
                        </Heading>
                        <Text 
                            fontFamily={"Inter"} 
                            fontWeight={400}
                            fontSize={"20px"}
                            pt={"22px"}
                        >
                            Human capital is one of the most important elements of the project. INIP will help you find the right team, advisors and partners.
                        </Text>
                    </Box>
                </Flex>

                <Center
                    pt={"75px"}
                >
                    <Button
                        w={"316px"}
                        minH={"74px"}
                        border={"1px solid #c2d5de"}
                        borderRadius={0}
                        color={"#365262"}
                        bg={"transparent"}
                    >
                        Submit your candidacy
                    </Button>
                </Center>
            </Box>

            <Box
                p={"0 200px 100px"}
            >
                <Heading
                    pb={"50px"}
                    fontWeight={700}
                    fontSize={"40px"}
                    color={"#365262"}
                >
                    collections supported by INIP.
                </Heading>

                <Flex flexWrap={"wrap"} gap={"40px"}>
                    <Flex
                        w={"31%"}
                        minH={"570px"}
                        p={"20px"}
                        flexDirection={"column"}
                        justifyContent={"end"}
                        bgImage={heno.src}
                        color={"#fff"}
                    >
                        <Flex
                            justifyContent={"space-between"}
                        >
                            <Box>
                                <Heading>
                                    HENOCYDE
                                </Heading>
                                <Text fontWeight={700} fontFamily={"QtOpt"} fontSize={"20px"}>by Binsky</Text>
                            </Box>
                            <Text 
                                fontSize={"20px"} 
                                fontWeight={700}
                                mt={"5px"}
                            >
                                29 NFTs
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        w={"31%"}
                        minH={"570px"}
                        p={"20px"}
                        flexDirection={"column"}
                        justifyContent={"end"}
                        bgImage={heno.src}
                        color={"#fff"}
                    >
                        <Flex
                            justifyContent={"space-between"}
                        >
                            <Box>
                                <Heading>
                                    HENOCYDE
                                </Heading>
                                <Text fontWeight={700} fontFamily={"QtOpt"} fontSize={"20px"}>by Binsky</Text>
                            </Box>
                            <Text 
                                fontSize={"20px"} 
                                fontWeight={700}
                                mt={"5px"}
                            >
                                29 NFTs
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        w={"31%"}
                        minH={"570px"}
                        p={"20px"}
                        flexDirection={"column"}
                        justifyContent={"end"}
                        bgImage={heno.src}
                        color={"#fff"}
                    >
                        <Flex
                            justifyContent={"space-between"}
                        >
                            <Box>
                                <Heading>
                                    HENOCYDE
                                </Heading>
                                <Text fontWeight={700} fontFamily={"QtOpt"} fontSize={"20px"}>by Binsky</Text>
                            </Box>
                            <Text 
                                fontSize={"20px"} 
                                fontWeight={700}
                                mt={"5px"}
                            >
                                29 NFTs
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        w={"31%"}
                        minH={"570px"}
                        p={"20px"}
                        flexDirection={"column"}
                        justifyContent={"end"}
                        bgImage={heno.src}
                        color={"#fff"}
                    >
                        <Flex
                            justifyContent={"space-between"}
                        >
                            <Box>
                                <Heading>
                                    HENOCYDE
                                </Heading>
                                <Text fontWeight={700} fontFamily={"QtOpt"} fontSize={"20px"}>by Binsky</Text>
                            </Box>
                            <Text 
                                fontSize={"20px"} 
                                fontWeight={700}
                                mt={"5px"}
                            >
                                29 NFTs
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        w={"31%"}
                        minH={"570px"}
                        p={"20px"}
                        flexDirection={"column"}
                        justifyContent={"end"}
                        bgImage={heno.src}
                        color={"#fff"}
                    >
                        <Flex
                            justifyContent={"space-between"}
                        >
                            <Box>
                                <Heading>
                                    HENOCYDE
                                </Heading>
                                <Text fontWeight={700} fontFamily={"QtOpt"} fontSize={"20px"}>by Binsky</Text>
                            </Box>
                            <Text 
                                fontSize={"20px"} 
                                fontWeight={700}
                                mt={"5px"}
                            >
                                29 NFTs
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        w={"31%"}
                        minH={"570px"}
                        p={"20px"}
                        flexDirection={"column"}
                        justifyContent={"end"}
                        bgImage={heno.src}
                        color={"#fff"}
                    >
                        <Flex
                            justifyContent={"space-between"}
                        >
                            <Box>
                                <Heading>
                                    HENOCYDE
                                </Heading>
                                <Text fontWeight={700} fontFamily={"QtOpt"} fontSize={"20px"}>by Binsky</Text>
                            </Box>
                            <Text 
                                fontSize={"20px"} 
                                fontWeight={700}
                                mt={"5px"}
                            >
                                29 NFTs
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Center pt={"70px"}>
                    <Button
                        minH={"74px"}
                        w={"271px"}
                        border={"1px solid #c2d5de"}
                        color={"#365262"}
                        bg={"transparent"}
                    >
                        Check more
                    </Button>
                </Center>
            </Box>
        </Box>
    );

}


export default CreatorSupport;