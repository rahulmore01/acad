import React, { useState } from 'react';
import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';

import introVideo from '../../assets/videos/intro.mp4'


const CoursePage = () => {

    // to show the video on 0 th index
    const [lectureNumber, setLectureNumber] = useState('0');
    // demo model of data to get lectures from backend
    const lectures =[
        {
        _id: 'exampleid1',
        title: 'exampletitle1',
        description: 'exampledescription1 hdfdk jlsdjk sdfirjsldkf',
        video: {
            url: 'exampleurl .com1'
        }
    },
    {
        _id: 'exampleid2',
        title: 'exampletitle2',
        description: 'exampledescription2 hdfdk jlsdjk sdfirjsldkf',
        video: {
            url: 'exampleurl .com2'
        }
    },
    {
        _id: 'exampleid3',
        title: 'exampletitle3',
        description: 'exampledescription3 hdfdk jlsdjk sdfirjsldkf',
        video: {
            url: 'exampleurl .com3'
        }
    }
]
    return (

        <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
            <Box>
                <video
                    width={'100%'}
                    controls
                    controlsList="nodownload noremoteplayback"
                    disablePictureInPicture
                    disableRemotePlayback
                    // src={lectures[lectureNumber].video.url}
                    src={introVideo}
                // note
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
            {lectures.map((element, index) => (
              <button
              onClick={()=>setLectureNumber(index)}
                key={element._id}
                style={{
                  width: '100%',
                  padding: '1rem',
                  textAlign: 'center',
                  margin: 0,
                  borderBottom: '1px solid rgba(0,0,0,0.2)',
                }}
              >
                <Text noOfLines={1}>
                  #{index + 1} {element.title}
                </Text>
              </button>
            ))}
          </VStack>
            {/* <Heading children="No Lectures" /> */}
        </Grid>
    );
};

export default CoursePage


