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
            <img className='skill-img' />
            <img className='hello-img seperator-img ' />
            <h1 className='skill-heading'>.skills</h1>
            <img className='hello-img seperator-img rotated' />

            <h2 className='skill-heading skill-heading2'>Most ❤️ circle</h2>
            {drawSkillCircle()}
            <ul>
                <li>Vscode</li>
                <li>ReactJs</li>
                <li>Javascript</li>
                <li>Html</li>
                <li>Css</li>
                <li>c#</li>
            </ul>
        </div>
    );
}

export default Skill;