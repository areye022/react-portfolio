import React from 'react';
import Resume from './Alejandra_Resume21.pdf'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import "./StickyFooter.css"


// StickyFooter component will "stick" to the bottom of viewport, even when content is shorter than the viewport height

// function Copyright() {
//     return (
//         <Typography className="center-text" variant="body2" color="textSecondary">
            
//             <Link color="inherit" href={Resume}>
//                 Resume
//             </Link>{'  | '}<Link color="inherit" href="https://github.com/areye022">
//                 Github
//             </Link>{'  | '}
//             <Link color="inherit" href="https://www.linkedin.com/in/alejandrareyes022/">
//                 LinkedIn
//             </Link>
//         </Typography>
//     );
// }

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     main: {
//         marginTop: theme.spacing(6),
//         marginBottom: theme.spacing(1),
//     },
//     footer: {
//         // padding: theme.spacing(3, 2),
//         position: fixed,
//         width: 100%,
//         text-align: center,
//         marginTop: 'auto',
//         backgroundColor:
//             theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
//     },
// }));

export default function StickyFooter() {
    // const classes = useStyles();

    return (

        <div className="footer-main">
            <footer className="footer">
                <Link color="inherit" href={Resume}>
                    Resume
                </Link>{'  | '}<Link color="inherit" href="https://github.com/areye022">
                    Github
                </Link>{'  | '}
                <Link color="inherit" href="https://www.linkedin.com/in/alejandrareyes022/">
                    LinkedIn
                </Link>
            </footer>
            <div> 
        </div>
        </div>

    );
}