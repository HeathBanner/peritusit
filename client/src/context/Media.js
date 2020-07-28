import React, { createContext } from 'react';

import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

export const MediaContext = createContext();

export const MediaProvider = ({ children }) => {

    const theme = useTheme();

    const xl = useMediaQuery(theme.breakpoints.up('lg'))
    const lg = useMediaQuery(theme.breakpoints.down('lg'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const xs = useMediaQuery(theme.breakpoints.down('xs'));

    // const logWidth = () => {
    //     switch (true) {
    //         case xs:
    //             return console.log('XS');
    //         case sm:
    //             return console.log('SM');
    //         case md:
    //             return console.log('MD');
    //         case lg:
    //             return console.log('LG');
    //         default:
    //             return console.log('XL');
    //     };
    // };

    // logWidth();

    return (
        <MediaContext.Provider
            value={{ xl, lg, md, sm, xs }}
        >
            { children }
        </MediaContext.Provider>
    );
};
