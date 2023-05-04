import { Button, Container, HStack, Heading, Input, Stack, Text, VStack, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import {Link} from "react-router-dom"


// this is a course component
const Course = ({
    views,
    title,
    imageSrc,
    id,
    addToPlaylistHandler,
    creator,
    description,
    lectureCount }) => {
    return (
        <VStack className='course' alignItems={["center", "flex-start"]}>
            <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
            <Heading
                textAlign={['center', "left"]}
                maxW="200px"
                size={"sm"}
                fontFamily={"sans-serif"}
                noOfLines={3}
                children={title}
            />
            <Text noOfLines={2} children={description} />

            <HStack>
                <Text
                    fontWeight={'bold'}
                    textTransform="uppercase"
                    children={'Creator'}
                />

                <Text
                    fontFamily={'body'}
                    textTransform="uppercase"
                    children={creator}
                />
            </HStack>
            <Heading
                textAlign={'center'}
                size="xs"
                children={`Lectures - ${lectureCount}`}
                textTransform="uppercase"
            />

            <Heading
                size="xs"
                children={`Views - ${views}`}
                textTransform="uppercase"
            />
            <Stack direction={['column', 'row']} alignItems="center">
                <Link to={`/course/${id}`}>
                    <Button colorScheme={'yellow'}>Watch Now</Button>
                </Link>
                <Button
                    // isLoading={loading} 
                    variant={'ghost'}
                    colorScheme={'yellow'}
                    onClick={() => addToPlaylistHandler(id)}
                >
                    Add to playlist
                </Button>
            </Stack>
        </VStack>

    )

}
// main courses component

const Courses = () => {
    const [keyword, setKeyword] = useState('')
    const categories = [
        'Web development',
        'Artificial Intellegence',
        'Data Structure & Algorithm',
        'App Development',
        'Data Science',
        'Game Development',
    ];
    const [category, setCategory] = useState('');

    const addToPlaylistHandler=()=>{
        console.log('added to playlist')
    }

    return (
        <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
            <Heading children="All Courses" m={"8"} />
            {/* to get the data inside the input box */}
            <Input value={keyword} onChange={e => setKeyword(e.target.value)}
                placeholder='Search a course...' type={"text"} focusBorderColor='yellow.500' />

            <HStack
                overflowX={'auto'} paddingY="8" css={{ '&::-webkit-scrollbar': { display: 'none', }, }}
            >
                {/* to apply the css on each item inside catagory array */}
                {categories.map((item, index) => (
                    <Button key={index} onClick={() => setCategory(item)} minW={"60"}>
                        <Text children={item} />
                    </Button>
                ))}
            </HStack>
            <Stack
                direction={["column", "row"]}
                flexWrap="wrap"
                justifyContent={["flex-start", 'space-evenly']}
                alignItems={["center", 'flex-start']}
            >
                <Course
                    // sample is to show example
                    title={'Sampel'}
                    description={'Sampel'}
                    views={23}
                    imageSrc={"https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"}
                    id={'sampel'}
                    creator={'sampel boy'}
                    lectureCount={2}
                    addToPlaylistHandler={addToPlaylistHandler}
                />
            </Stack>
        </Container>
    )
}

export default Courses
