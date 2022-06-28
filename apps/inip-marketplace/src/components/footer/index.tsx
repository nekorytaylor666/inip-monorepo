import React, { CSSProperties } from "react";
import { 
    Box, 
    Flex, 
    Center, 
    Heading, 
    Text, 
    Input, 
    Button,
    HStack,
    Square,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import discord from "@public/icons/homepage/discord.svg";
import yt from "@public/icons/homepage/yt.svg";
import twitter from "@public/icons/homepage/twitter.svg";
import inst from "@public/icons/homepage/instagram.svg";


export const Footer: React.FC = () => {
    

    return (
        <Center 
            bg={'#394348'} 
            py={10}
            p={'100px 200px 120px'}
            color={'rgba(255, 255, 255, 0.5)'}
            flexDirection={'column'}
        >
            <Box width={'100%'}>
                <Flex
                    justifyContent={'space-between'}
                >
                    <Box>
                        <Heading
                            color={'#fff'}
                        >
                            Be with us.
                        </Heading>
                        <Text
                            maxWidth={'500px'}
                        >
                            Subscribe our mailing list to get daily news about Charity Projects, 
                            Dreams, Kindness Rating, Community and other stuff.
                        </Text>    
                    </Box>

                    <HStack color={'white'}>
                        <Square
                            size={'40px'}
                            border={'2px solid #FFFFFF'}
                        >
                            EN
                        </Square>

                        <Square
                            size={'40px'}
                            border={'1px solid #748F9C'}
                        >
                            RU
                        </Square>
                    </HStack>
                </Flex>
                <Flex
                    justifyContent={'space-between'}
                    minHeight={'63px'}
                >

                    <Flex
                        gap={'20px'}
                        width={'45%'}
                    >
                        <Input
                            placeholder='Your email adress'
                            p={'20px'}
                            height={'100%'}
                            width={'100%'}
                            borderRadius={'none'}

                        />
                        <Button 
                            color={'#6A5843'}
                            height={'100%'}
                            width={'25%'}
                            borderRadius={'none'}

                            onClick={() => console.log('asd')}
                        >
                            Submit
                        </Button>
                    </Flex>

                    <Flex
                        gap={'50px'}
                    >
                        <Link href="">
                            <Image src={yt}/>
                        </Link>
                        <Link href="">
                            <Image src={twitter}/>
                        </Link>
                        <Link href="">
                            <Image src={discord}/>
                        </Link>
                        <Link href="">
                            <Image src={inst}/>
                        </Link>
                    </Flex>
                    
                </Flex>

            </Box>

            <Flex
                pt={'100px'}
                width={'100%'}
                gap={"25px"}
                justifyContent={'space-between'}
            >
                <Flex
                    alignItems={'center'}
                    gap={"10px"}
                >
                    <Heading 
                        as='h2' 
                        fontFamily={'QtOpt'} 
                        color={"#fff"}
                        fontSize={'52px'}
                    >
                        INIP
                    </Heading>

                    <Box
                        borderLeft={'1px solid #748F9C'}
                    >
                    </Box>
                    <Box
                        alignItems={'center'}
                        fontSize={'24px'}
                        fontWeight={'500'}
                        fontFamily={'Inter'}
                    >
                        ©  2022
                    </Box>
                </Flex>

                <Box 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="space-between" 
                    gap={"60px"} 
                    fontSize={"18px"} 
                    fontFamily={"Inter"} 
                    fontWeight={"500"}
                >
                    <Link href="">
                        <a>
                            <Text mb={0} color={"#fff"}>Homepage</Text>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <Text mb={0} color={"rgba(255, 255, 255, 0.5)"}>Charity Projects</Text>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <Text mb={0} color={"#rgba(255, 255, 255, 0.5)"}>Search</Text>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <Text mb={0} color={"#rgba(255, 255, 255, 0.5)"}>Kindness Rating</Text>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <Text mb={0} color={"#rgba(255, 255, 255, 0.5)"}>Community</Text>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <Text mb={0} color={"#rgba(255, 255, 255, 0.5)"}>INIP token</Text>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <Text mb={0} color={"#rgba(255, 255, 255, 0.5)"}>Louvre</Text>
                        </a>
                    </Link>
                </Box>
            </Flex>
        </Center>
    );
};
