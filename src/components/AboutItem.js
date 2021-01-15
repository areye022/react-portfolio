import React from 'react';
import "./About.css"

function AboutItem(props) {
  return (
    <>
      <div>
            <div className="row">
            <div className='col-md-12'>
                <img src={props.src} alt={props.alt} style={props.style}/>
            </div>  
            </div>
            
            <div className="row">
            <div className='col-md-12'>
                <h1 className='display-4'>Alejandra Reyes</h1>
                <hr></hr>
            </div>
            </div>

            <div className='row'>
            <div className='col-md-12'>
                <p>Hello! Welcome to my portfolio website. My name is Alejandra Reyes, and I am 
                    currently a student at the UCR Extension's Coding Bootcamp. I graduated with 
                    my B.A. in Business Economics from the University of California, Riverside in
                    2017. I decided to switch career paths when I continuously saw a need for
                    developers in my previous position. I worked in outside sales, so I had much
                    experience working with businesses in multiple cities. I realized how many of
                    these businesses had little to no online presence, and it motivated me to try 
                    and fill a gap in this area. I aspire to provide the skillsets I will learn to 
                    help smaller businesses in lower income communities that don't have or know about 
                    programs to help them build an online presence. This will not only help the 
                    businesses develop, but also the communities.
                </p>
                <p>On a lighter note, I am a goofy, empathetic, and outgoing person. I am always 
                    the person trying to motivate people and congratulate others on their 
                    accomplishments. I firmly believe that there is enough space for everyone 
                    to succeed, and that we can all accomplish more when we build each other up. 
                    I know I haven't learned everything yet, but there's so much power in yet. 
                    There's power in remembering that though we may not know something yet, we 
                    can learn it in the future. 
                </p>
            </div>
            </div>
        </div>
    </>
  );
}

export default AboutItem;