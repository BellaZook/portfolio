import React from 'react';
import Divider from '../../divider';
import './experience.css';

const Experience = () => {
    return (
        <div id="experience" className="row p-xlg">
            <Divider border={"no-border"} />

            <div className="col">
                <h2>EXPERIENCE</h2>
                <div className="indent">
                    <div>
                        <Divider border="no-border p-sm" />
                        <h4>BellaZook</h4>
                        <p>A website built with react.js to help kids learn math. <a href="https://www.bellazook.com/">BellaZook.com</a> <br />
                            Some of the technologies used to build BellaZook are React, Redux, React-Router, React-Context, Higher Order Components, VSG, speech Synthesis.</p>

                    </div>
                    <div>
                        <Divider border="no-border p-sm" />
                        <h4>The Complete React Web Developer Course (with Redux)</h4>
                        <p>A course on developing a react app, then deploying it to Firebase.  The course include topics such as
                        types of React components, webpack, react-Router, Redux, testing and more. </p>
                    </div>
                    <div>
                        <Divider border="no-border p-sm" />
                        <h4>JavaScript: Understanding the Weird Parts</h4>
                        <p>A course on understanding how Javascript works.  The course include
                        execution contexts and lexical environments, types and operators, objects and functions,
                        and many more.</p>
                    </div>
                    <div>
                        <Divider border="no-border p-sm" />
                        <h4>Author & Illustrator</h4>
                        <p>Wrote a children book using mnemonic to help remember the sums of ten. <a href="https://www.amazon.com/dp/1719506175">The Octopus and the Ostrich</a>
                            <br />
                            Illustrations were created using Inksape.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Experience;


