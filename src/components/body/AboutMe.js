import React from 'react';
import Divider from '../divider';

const AboutMe = () => {
    return (
        <div id="about-me" className="row p-xlg">
            <Divider border={""} />
            <div className="col">
                <h2>ABOUT ME</h2>
                <p>
                    My passion for programing started from my experience working as data analyst.
                    When I stated working as a data analyst I had to manually move about 3000 rows of data around to populate about 100 sheets.
                    After learning how to code and better utilize the tools available to me, I was able to accomplish the same task in less than 10 min.
                     This experience lead me to become a web developer.
                 </p>
            </div>
        </div>

    );
}

export default AboutMe;