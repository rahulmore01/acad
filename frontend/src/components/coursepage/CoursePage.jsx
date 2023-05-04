
import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';




const CoursePage = () => {

    // to show the video on 0 th index
    const lectureNumber = 0;
    // demo model of data to get lectures from backend
    const lectures = () => [{
        _id: 'exampleid',
        title: 'exampletitle',
        description: 'exampledescription hdfdk jlsdjk sdfirjsldkf',
        video: {
            url: 'exampleurl .com'
        }
    }]
    return (

        <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
            {lectures && lectures.length > 0 ? (
                <>
                    <Box>
                        <video
                            width={'100%'}
                            controls
                            controlsList="nodownload noremoteplayback"
                            disablePictureInPicture
                            disableRemotePlayback
                            src={lectures[lectureNumber].video.url}
                        ></video>

                        <Heading
                            m="4"
                            children={`#${lectureNumber + 1} ${lectures[lectureNumber].title
                                }`}
                        />

                        <Heading m="4" children="Description" />
                        <Text m="4" children={lectures[lectureNumber].description} />
                    </Box>

                    <VStack>
                        <button

                            style={{
                                width: '100%',
                                padding: '1rem',
                                textAlign: 'center',
                                margin: 0,
                                borderBottom: '1px solid rgba(0,0,0,0.2)',
                            }}
                        >
                            <Text noOfLines={1}>
                            </Text>
                        </button>

                    </VStack>
                </>
            ) : (
                <Heading children="No Lectures" />
            )}
        </Grid>
    );
};

export default CoursePage


