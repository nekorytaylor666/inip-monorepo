import {
    Flex,
    Box,
    Center,
    Text,
    Heading,
    Square,
    Button,
    ButtonGroup,
} from "@chakra-ui/react";
import Image from "next/image";
import kindnessImg from "@public/icons/homepage/kindness.jpg";
import rating from "@public/icons/homepage/rating.svg";

export const Rating: React.FC = ({ ratings }) => {
    return (
        <Box
            alignItems={"center"}
            // justifyContent={'center'}
        >
            {ratings.map((item, index) => {
                return (
                    <Flex
                        key={item.id}
                        bg={
                            index === 0
                                ? "linear-gradient(90deg, #7495A6 -2.86%, #B9D6E8 101.36%)"
                                : index === 1
                                ? "linear-gradient(90deg, #83A8BB -2.86%, #CEE6F4 101.36%)"
                                : index === 2 
                                ? "linear-gradient(90deg, #A7C2D3 -2.86%, #EDF8FF 101.36%)"
                                : ""
                        }
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        p={"15px 20px"}
                        borderBottom={index !== 0 && index !== 1 && index !== 2 ? "1px solid #c7dce9" : ""}
                    >
                        <Flex
                            gap={"35px"}
                            alignItems={"center"}
                            fontFamily={"QtOpt"}
                            color={"#1E4257"}
                            fontSize={"22px"}
                        >
                            {index + 1}
                            <Image
                                src={item.image}
                                width="67px"
                                height="67px"
                            />
                            <Text m={0} fontSize={"22px"} fontWeight={700}>
                                {item.author}
                            </Text>
                        </Flex>
                        <Flex gap={"20px"}>
                            <Image src={rating} />
                            <Text
                                m={0}
                                color={"#1E4257"}
                                fontSize={"20px"}
                                fontWeight={600}
                                fontFamily={"Inter"}
                            >
                                {item.rating}
                            </Text>
                        </Flex>
                    </Flex>
                );
            })}
        </Box>
    );
};
