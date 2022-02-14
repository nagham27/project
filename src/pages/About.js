import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.wrapall}>
      <div className={classes.wrap}>
        <div className={classes.container}>
          <div className={classes.aboutwrapper}>
            <h2>About the project</h2>
            <p>
              One of the great things about word games is that they can be
              enjoyed by players of all ages. As language is such a critical
              part of everyday life, regardless of what you do or where you
              live, word games offer an opportunity to flex those
              language-twisting muscles in a fun and engaging way! Remember that
              while word games can certainly take on the form of more
              traditional board games or card games, they aren’t restricted to
              those formats either. Did you know that there are tons of great
              Alexa word games you can play using only your voice? How awesome
              is that?
            </p>
          </div>
          <div className={classes.imgwrapper}>
            <img src="https://media.istockphoto.com/photos/smart-city-of-cloud-computing-using-artificial-intelligence-and-picture-id1306421028?b=1&k=20&m=1306421028&s=170667a&w=0&h=Ab6ignYeGuNmLvAeiBuWyEKaqJdHoiN_3BxgjKQJs8Q=" />
          </div>
        </div>
      </div>
      <div className={classes.locations}>
        <div className={classes.headwrap}>
          <h2>
            Currently, these are the locations where sensors are set up. Water
            quality is being monitored continuously.
          </h2>
          <h3>Choose a Location:</h3>
        </div>

        <ul>
          <li>Placeholder</li>
          <li>Placeholder</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
