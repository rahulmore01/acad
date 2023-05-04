import { Button, Heading, Stack, VStack, Text, Image, Box, HStack } from '@chakra-ui/react'
import "./home.css"
import { Link } from 'react-router-dom'
import bg from '../../assets/images/bg.png'
import { CgGoogle, CgYoutube } from "react-icons/cg"
import { SiCoursera, SiUdemy } from "react-icons/si"
import { DiAws } from "react-icons/di"
import introVideo from '../../assets/videos/intro.mp4'


const Home = () => {
    return (
        <section className='home'>
            <div className="container">
                {/* for home full screen */}
                <Stack
                    direction={["column", "row"]}
                    height="100%"
                    justifyContent={["center", "space-between"]}
                    alignItems="center"
                    spacing={["16", "56"]}
                >
                    {/* vertical flex for hero text */}
                    <VStack width={'full'} alignItems={["center", "flex-end"]} spacing="6">
                        <Heading children="LEARN FROM THE EXPERTS" />
                        <Text fontSize={'2xl'} fontFamily="cursive" alignItems={["center", "left"]} children="Find valuable content at reasonable price" />
                        <Link to="/courses">
                            <Button size={"lg"} colorScheme='yellow'>
                                Explore Now
                            </Button>
                        </Link>
                    </VStack>
                    {/* for image */}
                    <Image boxSize={"md"} src={bg} objectFit="contain" />
                </Stack>
            </div>
            {/* below home seciton 2nd screen*/}
            <Box padding={"8"} bg={"blackAlpha.800"}>
                <Heading
                    textAlign={"center"}
                    fontFamily="body"
                    color={"yellow.400"}
                    children="OUR BRANDS"
                />
                <HStack className='brandsBannner' justifyContent={"space-evenly"} marginTop={"4"}>
                    <CgGoogle />
                    <CgYoutube />
                    <SiCoursera />
                    <SiUdemy />
                    <DiAws />
                </HStack>
            </Box>
            <div className="container2">
                <video src={introVideo}
                    // autoPlay  
                    controls controlsList='nodownload nofullscreen noremoteplayback'
                    disablePictureInPicture
                    disableRemotePlayback
                ></video>
            </div>
        </section>
    )
}

export default Home
