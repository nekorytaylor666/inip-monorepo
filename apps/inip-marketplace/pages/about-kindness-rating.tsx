import {useState} from "react";
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
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Textarea
    // Image
} from "@chakra-ui/react";
import chart from "@public/icons/about-kindness/chart.svg";
import ellipse from "@public/icons/about-kindness/ellipse.svg";
import man from "@public/icons/about-kindness/man.svg";
import kindnessBgim from "@public/icons/about-kindness/kindness.jpg";
import reward from "@public/icons/community/reward.svg";
import kindnessImg from "@public/icons/homepage/kindness.jpg";
import { Rating } from "@components/rating";




const AboutKindnessRating = () => {

    const [kindnessChoice, setKindnessChoice] = useState('quantitive');


    const kindness = [
        {
            id: "1",
            image: kindnessImg,
            author: "Binsky",
            rating: 5468,
        },
        {
            id: "2",
            image: kindnessImg,
            author: "Ben",
            rating: 5468,
        },
        {
            id: "3",
            image: kindnessImg,
            author: "Henocyde",
            rating: 5468,
        },
        {
            id: "4",
            image: kindnessImg,
            author: "Binsky",
            rating: 5468,
        },
        {
            id: "5",
            image: kindnessImg,
            author: "Ben",
            rating: 5468,
        },
        {
            id: "6",
            image: kindnessImg,
            author: "Henocyde",
            rating: 5468,
        },
    ];



    return (
        <Box>
            <Flex
                bgImage={kindnessBgim.src}
                p={"0 200px"}
                minH={"700px"}
                alignItems={"center"}
            >
                <Flex 
                    maxW={"662px"}
                    flexDir={"column"}
                    gap={"40px"}
                >
                    <Heading 
                        fontWeight={500}
                        fontFamily={"QtOpt"}
                        fontSize={"64px"}
                        color={"#4f6776"}
                    >
                        Compete in kindness, not in the thickness of the wallet
                    </Heading>
                    <Button
                        maxW={"249px"}
                        minH={"80px"}
                        bg={"radial-gradient(43.08% 63.75% at 50% 50%, rgba(157, 184, 200, 0.5) 0%, rgba(156, 183, 199, 0) 100%), #748E9C"}
                        borderRadius={0}
                        color={"#fff"}
                        fontSize={"20px"}
                        fontFamily={"Inter"}
                    >
                        See the rating
                    </Button>
                </Flex>
            </Flex>

            <Box
                p={"70px 200px 100px"}
            >
                <Flex gap={"70px"} alignItems={"center"}>
                    <Square 
                        h={"102px"} 
                        w={"100px"}
                        border={"1px solid #476676"}
                        color={"#365262"}
                        fontFamily={"QtOpt"}
                        fontSize={"70px"}
                        fontWeight={700}
                    >
                        ?
                    </Square>
                    <Box
                        maxW={"910px"}
                    >
                        <Heading color={"#365262"}>how it works.</Heading>
                        <Text color={"#476676"} fontSize={"18px"} fontWeight={400} mt={"20px"}>
                            Kindness Rating allows users to compete in kindness. 
                            Compete and improve the world! For each action on the marketplace and outside it, you will earn 
                            points. Each action is evaluated differently and divided into three 
                            sectors: democratic, financial, quantitative.
                        </Text>
                    </Box>
                </Flex>

                <Flex gap={"24px"} mt={"90px"}>
                    <Flex
                        minW={"465px"}
                        minH={"282px"}
                        justifyContent={"space-between"}
                        flexDir={"column"}
                        border={"1px solid #b1d0d8"}
                        p={"35px 76px 0"}
                        color={"#476676"}
                    >
                        <Flex
                            flexDir={"column"}
                            gap={"21px"}
                        >
                            <Heading
                                fontWeight={700} 
                                fontSize={"30px"} 
                                fontFamily={"QtOpt"}
                                color={"#476676"}        
                            >
                                Quantitive
                            </Heading>
                            <Text fontWeight={400} fontSize={"18px"} fontFamily={"Inter"}>
                                The ranking is based 
                                on the number of 
                                persons assisted by the person. 
                                This rating is independent of the 
                                amount of donated capital.
                            </Text>
                        </Flex>
                        <img src={chart.src} width={"115px"}/>
                    </Flex>
                    <Flex
                        minW={"465px"}
                        minH={"282px"}
                        flexDir={"column"}
                        justifyContent={"space-between"}
                        color={"#476676"}
                        border={"1px solid #b1d0d8"}
                        p={"35px 76px 0"}
                    >
                        <Flex
                            flexDir={"column"}
                            gap={"21px"}
                        >
                            <Heading 
                                fontWeight={700} 
                                fontSize={"30px"} 
                                fontFamily={"QtOpt"}
                                color={"#476676"}    
                            >
                                Financial
                            </Heading>
                            <Text fontWeight={400} fontSize={"18px"} fontFamily={"Inter"}>
                                The rating is based on the amount of 
                                money that the person ultimately 
                                donated to the marketplace. 
                                This rating is independent of the 
                                number of acts of kindness.
                            </Text>
                        </Flex>
                        <img src={ellipse.src} width={"115px"}/>
                    </Flex>
                    <Flex
                        minW={"465px"}
                        minH={"282px"}
                        flexDir={"column"}
                        justifyContent={"space-between"}
                        border={"1px solid #b1d0d8"}
                        p={"35px 76px 0"}

                        color={"#476676"}
                    >
                        <Flex
                            flexDir={"column"}
                            gap={"21px"}
                        >
                            <Heading 
                                fontWeight={700} 
                                fontSize={"30px"} 
                                fontFamily={"QtOpt"}
                                color={"#476676"}    
                            >
                                Democratic
                            </Heading>
                            <Text fontWeight={400} fontSize={"18px"} fontFamily={"Inter"}>
                                Rating is formed by voting in the 
                                community (will be explained later). 
                                Every month a poll will be 
                                conducted - the persons with the 
                                most votes will be in the top.
                            </Text>
                        </Flex>
                        <img src={man.src} width={"115px"}/>
                    </Flex>
                </Flex>
            </Box>

            <Flex
                p={"60px 200px 80px"}
                gap={"85px"}
                bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(167, 194, 211, 0) 100%), #6C8693"}
                color={"#fff"}
            >

                <Box>
                    <Heading>rewards.</Heading>
                    <Text maxW={"754px"} mt={"20px"} fontFamily={"Inter"} fontWeight={100} fontSize={"20px"}>The rating is updated every month. Points from all three sectors are summed up and a full number of your points is obtained.</Text>
                    <Flex pt={"50px"} justifyContent={"space-between"}>
                        <Flex
                            flexWrap={"wrap"}
                            gap={"20px"}
                        >
                            <Flex
                                minW={"594px"}
                                minH={"190px"}
                                flexDir={"column"}
                                border={"1px solid #b1d0d8"}
                                p={"35px"}
                                gap={"25px"}
                            >
                                <Heading>
                                    Surrounding one in a billion
                                </Heading>

                                <Text maxW={"400px"}>
                                    Get into the top 50 and get access to a community 
                                    that will change the whole world!
                                </Text>
                            </Flex>
                            <Flex
                                minW={"594px"}
                                minH={"190px"}
                                flexDir={"column"}
                                border={"1px solid #b1d0d8"}
                                p={"35px"}
                                gap={"25px"}
                            >
                                <Heading>
                                    AirDrops & Private Sales
                                </Heading>

                                <Text maxW={"400px"}>
                                    Get into the top 50 and get access to a community 
                                    that will change the whole world!
                                </Text>
                            </Flex>
                        

                        </Flex>
                    </Flex>
                </Box>
                <Flex
                    alignItems={"center"}
                >
                    <Image src={reward}/>
                </Flex>

            </Flex>

            <Box
                p={"120px 200px"}
            >
                <Heading>kindness rating.</Heading>

                <Flex mt={"50px"}>
                    <Flex 
                        minW={"160px"} 
                        minH={"80px"} 
                        justifyContent={"center"} 
                        alignItems={"center"}
                        onClick={() => setKindnessChoice("quantitive")}
                        border={kindnessChoice === "quantitive" ? "1px solid #d9d9d9" : ""}
                        color={kindnessChoice === "democratic" ? "#bac1cf" : (kindnessChoice === "financial" ? "#8899a3" : "#1e4257")}

                    >
                        <Heading fontSize={"20px"} fontFamily={"Inter"} fontWeight={500}>
                            Quantitive
                        </Heading>

                    </Flex>
                    <Flex 
                        minW={"160px"} 
                        minH={"80px"} 
                        justifyContent={"center"} 
                        alignItems={"center"}
                        onClick={() => setKindnessChoice("financial")}
                        border={kindnessChoice === "financial" ? "1px solid #d9d9d9" : ""}
                        color={(kindnessChoice === "democratic" || kindnessChoice === "quantitive") ? "#8899a3" : "#1e4257"}

                    >
                        <Heading fontSize={"20px"} fontFamily={"Inter"} fontWeight={500}>
                            Financial
                        </Heading>
                    </Flex>
                    <Flex 
                        minW={"160px"} 
                        minH={"80px"} 
                        justifyContent={"center"} 
                        alignItems={"center"}
                        onClick={() => setKindnessChoice("democratic")}
                        border={kindnessChoice === "democratic" ? "1px solid #d9d9d9" : ""}
                        color={kindnessChoice === "quantitive" ? "#bac1cf" : (kindnessChoice === "financial" ? "#8899a3" : "#1e4257")}
                    >
                        <Heading fontSize={"20px"} fontFamily={"Inter"} fontWeight={500}>
                            Democratic
                        </Heading>
                    </Flex>

                </Flex>

                <Box mt={"50px"}>
                    <Rating ratings={kindness}/>

                    <Center mt={"70px"}>
                        <Button 
                            minW={"316px"} 
                            minH={"80px"} 
                            color={"#365262"} 
                            fontSize={"20px"}
                            bg={"transparent"}
                            borderRadius={0}
                            border={"1px solid #c2d5de"}
                        >
                            Check more
                        </Button>
                    </Center>
                </Box>
            </Box>
        </Box>
    );
}


export default AboutKindnessRating;
