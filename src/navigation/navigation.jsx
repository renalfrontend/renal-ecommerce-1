import React, { Fragment } from 'react';
import {Stack, useDisclosure, useMediaQuery} from '@chakra-ui/core';
import {Box, Container, Flex, Spacer, Center, VStack, Link} from '@chakra-ui/core';
import {HiOutlineMenuAlt1} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import {arrayMenu} from '../controller/menuObject';
import { NavLink, withRouter } from 'react-router-dom';
import ContainerApp from '../component/container_C/container';

function Navigation() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isDesktop_Laptop_Tablet, isMobile] = useMediaQuery([
        '(min-width: 768px)', '(min-width: 200px) and (max-width:767px)'
    ])

    return(
        <Fragment>
            <Box layerStyle='containerDesktopDevice' zIndex='99'>
                <ContainerApp mt='0% !important'>
                    <Flex>
                        <Link as={NavLink} exact to='/' fontSize='2xl' my={3} _hover='' fontWeight='black'>Furniture</Link>

                        <Spacer/>

                        {isDesktop_Laptop_Tablet ? 
                            <Stack isInline spacing={{md : 5, lg:6, xl:10}} align='center'>
                                {arrayMenu.map((item,index) => {
                                    return <Link exact as={NavLink} to={item.link} key={index}  _hover=''>{item.menu}</Link>
                                })}       
                             </Stack> : false
                        }
                        {isMobile ? 
                            <Center gridColumnGap={10} align='center'>
                                {!isOpen && <HiOutlineMenuAlt1 size={25} style={{zIndex : 1}}  onClick={onOpen} />}
                                {isOpen && <AiOutlineClose size={25} style={{zIndex : 1}} color='white'  onClick={onClose} />}

                                <VStack transform={isOpen ? 'scale(1)' : 'scale(0)'} opacity={isOpen ? 1 : 0} transition={isOpen ? '.3s' : '0'}  layerStyle='containerMobileDevice'>
                                    <Stack mt='30%' spacing='30%'>
                                        {arrayMenu.map((item,index) => {
                                            return <Link exact as={NavLink} activeClassName='me' to={item.link} key={index} layerStyle='NavlinkMobile' _hover=''>{item.menu}</Link>
                                        })} 
                                    </Stack>      
                                </VStack>
                            </Center> : false
                        }
                    </Flex>
                </ContainerApp>
            </Box>

        </Fragment>
    )
}

export default withRouter(Navigation);