import React, {
    Fragment,
    useContext,
} from 'react';

import { MediaContext } from '../../context/Media';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Avatar,
    Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        padding: '40px 25%',
        paddingTop: 100,
        [theme.breakpoints.down('md')]: {
            padding: '0 15%',
        },
        [theme.breakpoints.down('xs')]: {
            padding: 40,
            paddingTop: 100,
        },
    },
    avatars: {
        [theme.breakpoints.down('sm')]: {
            height: 80,
            width: 80,
        },
        height: 120,
        width: 120,
    },
    nameHeaders: {
        width: '100%',
        marginTop: 10,
    },
    dividers: {
        marginBlockStart: '0.5em',
        width: '60%',
        backgroundColor: 'rgb(0, 0, 0, 0.2)',
        marginBottom: 30,
    },
    quotes: {
        width: '100%',
        marginBottom: 60,
    },
}));

const quotes = [
    {
        src: `https://media.licdn.com/dms/image/C5603AQEBtZyjmguZ4Q/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=AUMFUiDeLOQaC1IUVlKc5LlokoTsTVgdeB76e4owS00`,
        name: 'Maia Williams',
        quote: `“Randall understands IT and business...soup to nuts. He's an IT expert with 
        a great personality and a flair for recommending solutions that address 
        immediate IT needs and as a bonus, strengthen your systems. He's thoughtful, 
        pragmatic and honest. He's a keeper!”`,
    },
    {
        src: `https://media.licdn.com/dms/image/C4E03AQFHydvEA2nYdQ/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=LM9eeX5OZMDgIf0hCcnpmKDpIocyPmreHZQIvlUuyZs`,
        name: 'Kim Price',
        quote: `“Randall's skill and expertise saved us alot of frustration and delays. 
        He is diligent and creative in providing solutions to best benefit your company.”`,
    },
    {
        src: `https://media.licdn.com/dms/image/C4D03AQGueho9XQaLug/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=GmzZMPFwAl-VWtrHazkoFDhURQ8YJOBz7MMQK6wBLQw`,
        name: 'Bill Latham',
        quote: `“I have known and worked with Randall for many years and have always 
        found him to be and honest hardworking individual. It will be my pleasure to 
        speak on his behalf whenever I have the opportunity.”`,
    },
    {
        src: `https://media.licdn.com/dms/image/C4D03AQEOZuV3DnTZNQ/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=5gFhSbkHRvmccpFMZ5RA_0OAVSVnUbG6TbK_pM8X8h0`,
        name: 'Paul Greiner',
        quote: `“Randall has provided IT consulting and technical work for my firm 
        for many years.  He has always been responsive to emergencies as well as day to 
        day questions.  I would not hesitate to recommend him to anyone.”`,
    },
    {
        src: `https://media.licdn.com/dms/image/C4E03AQHvmCjbppzbEQ/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=xyEhIESs54TAw3Wn-oo9tVBDMS2dJe_Jix39BMGxzl0`,
        name: 'Anthony De Paolo',
        quote: `“So it's late at night, the project is due and the server goes down. 
        One call to Randall and I'm back up and running in 25 minutes. Need I say more?”`,
    },
    {
        src: `https://media.licdn.com/dms/image/C4D03AQERkaUbmg9NUg/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=9zgVm81XscZF2IAakqzZTUAecPDoOpBSvvOcYG0XCPs`,
        name: 'Martin Machen',
        quote: `“We have brought Randall in a number of times on various projects for 
        several years.  He has always been quick to respond, very knowledgable, and 
        efficient in his work.  Randall has a great personality and is enjoyable 
        to work with. We recommend him with highest regards!”`,
    },
    {
        src: `https://media.licdn.com/dms/image/C4D03AQF1zLWoffQocA/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=4yYy04OqM3QKodiajjZPHm1vxaT1BVmAr51mOhWn6vU`,
        name: 'Scott Voldbaeck',
        quote: `“I have worked several times with Randall. He knowledgeable, personable 
        and always on time for appointments. He will also make time to provide 
        information or support over the phone. He has provided creative solutions 
        to issues presented and maintains a high level of transparency when it comes 
        to the purchase of 3rd party hardware/services. He has an excellent network 
        of colleagues he can call on for support if the problem is out of his realm 
        of expertise. He has always resolved the issues he was called to service. 
        He is my go to network guy. I don't even bother looking for anyone else.”`,
    },
];

const Vouchers = () => {

    const classes = useStyles();
    const media = useContext(MediaContext);

    return (
        <Grid className={classes.container} item xs={12}>

        {
            quotes.map((item, index) => {
                return (
                    <Fragment key={index}>

                        <Avatar
                            className={classes.avatars}
                            src={item.src}
                            alt={`${item.name} Profile Photo`}
                        />

                        <Typography
                            className={classes.nameHeaders}
                            align="center"
                            variant={media.xs ? 'h5' : 'h4'}
                        >
                            {item.name}
                        </Typography>

                        <Divider className={classes.dividers} />

                        <Typography
                            className={classes.quotes}
                            align="center"
                            color="textSecondary"
                            variant={media.xs ? 'body1' : 'h6'}
                        >
                            {item.quote}
                        </Typography>

                    </Fragment>
                );
            })
        }

        </Grid>
    );
};

export default Vouchers;
