import '../../App.css'
import AboutItem from '../AboutItem';
import StickyFooter from '../StickyFooter'


function About() {
    return(
        <>
        <br />

        <AboutItem 
        src='images/alejandra.jpg'
        alt="alejandra smiling"
        style={{ height:"300px", width:"250" }}
        />
        <br />
        <br />
        <StickyFooter />
        </>
    );
}

export default About;