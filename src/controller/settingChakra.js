import {color, extendTheme} from '@chakra-ui/core';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import {styleNavigation} from '../navigation/layerStyleNavigation';
import { styleNewIn } from '../Page/New_IN/layerStyleNewIn';

const breakpoints = createBreakpoints({
    sm : '640px',
    md : '768px',
    lg : '1024px',
    xl : '1280px'
});

const myColor = {
    navbarColor : '#2C2E3F',
    fontColorFirst : '#2C2E3F',
    pinkColor : '#FE7865'
}

const myTheme = {
    colors : {
        ...myColor
    },

    fontFamily : {
        poppins : 'Poppins'
    },

    breakpoints,
    
    styles : {
        global : () => ({
            // code in here ...
        })
    },

    layerStyles : {
        ...styleNavigation,
        ...styleNewIn
    }
}

export const chakraTheme = extendTheme({
    ...myTheme
});

