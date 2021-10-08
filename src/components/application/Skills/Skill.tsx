import React from 'react';
import '../../../styles/sass/_skill.scss';
import git from '../../../assets/skills/git.png';
import azure from '../../../assets/skills/azure.png';
import css from '../../../assets/skills/css.png';
import html from '../../../assets/skills/html.png';
import js from '../../../assets/skills/js.png';
import react from '../../../assets/skills/react.png';
import vscode from '../../../assets/skills/vscode.png';
import csharp from '../../../assets/skills/csharp.png';

function drawSkillCircle() {
    return (
        <ul className='skill-circle-container'>
            <li><img src={git} title='Git' /></li>
            <li><img src={azure} title='Azure' /></li>
            <li><img src={css} title='CSS' /></li>
            <li><img src={html} title='HTML' /></li>
            <li><img src={js} title='Javascript' /></li>
            <li><img src={react} title='ReactJs' /></li>
            <li><img src={vscode} title='VsCode' /></li>
            <li><img src={csharp} title='C#' /></li>
        </ul>
    );
}


function Skill() {
    return (
        <div className='skill-container'>

            <h1 className='skill-heading'>skills</h1>
            <h2 className='skill-heading2'>Most preferred tools, techs</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non nisi est sit amet. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Sem nulla pharetra diam sit amet nisl suscipit. Sed augue lacus viverra vitae congue eu consequat ac felis. Iaculis nunc sed augue lacus. Integer vitae justo eget magna fermentum iaculis. Nulla at volutpat diam ut venenatis. Arcu odio ut sem nulla. Id nibh tortor id aliquet lectus. Ipsum faucibus vitae aliquet nec.

                Mauris in aliquam sem fringilla ut. Ut sem nulla pharetra diam sit. Nisl rhoncus mattis rhoncus urna neque viverra. Vel facilisis volutpat est velit egestas dui id ornare. Elit scelerisque mauris pellentesque pulvinar. Quam vulputate dignissim suspendisse in est ante. Non consectetur a erat nam at lectus urna duis convallis. Augue interdum velit euismod in pellentesque massa. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. In hendrerit gravida rutrum quisque</p>
            {drawSkillCircle()}

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non nisi est sit amet. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Sem nulla pharetra diam sit amet nisl suscipit. Sed augue lacus viverra vitae congue eu consequat ac felis. Iaculis nunc sed augue lacus. Integer vitae justo eget magna fermentum iaculis. Nulla at volutpat diam ut venenatis. Arcu odio ut sem nulla. Id nibh tortor id aliquet lectus. Ipsum faucibus vitae aliquet nec.

                Mauris in aliquam sem fringilla ut. Ut sem nulla pharetra diam sit. Nisl rhoncus mattis rhoncus urna neque viverra. Vel facilisis volutpat est velit egestas dui id ornare. Elit scelerisque mauris pellentesque pulvinar. Quam vulputate dignissim suspendisse in est ante. Non consectetur a erat nam at lectus urna duis convallis. Augue interdum velit euismod in pellentesque massa. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. In hendrerit gravida rutrum quisque</p>

        </div>
    );
}

export default Skill;