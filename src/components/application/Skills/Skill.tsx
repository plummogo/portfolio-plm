import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface SkillState {
    name: string;
}

class Skill extends React.Component<{}, SkillState> {
    constructor(props: {}) {
        super(props);
        this.state = { name: 'default' };
    }

    render() {
        return this.renderSkill();
    }

    renderSkill = () => {
        return (
            <Container className='skill-container'>
                <Row>
                    <h1 className='skill-heading'>.skills</h1>
                </Row>
                <Row>
                    <Col>
                        {this.renderSkillCircle()}
                    </Col>
                    <Col className='skill-desc-container'>
                        {this.renderSkillList()}
                    </Col>
                </Row>
            </Container>
        );
    }

    renderSkillCircle = () => {
        const images = this.fillImgArray().map((name, index) => {
            return (
                <li key={name}>
                    <img
                        id={name}
                        tabIndex={index}
                        onClick={async (e) => await this.handleClick(name, e)}
                        src={require(`../../../assets/img/skills/${name}.png`).default} />
                </li>
            );
        });

        return (
            <ul className='skill-circle-container'>
                {images}
            </ul>
        );
    };

    renderSkillList = () => {
        const { name } = this.state;

        const desc = this.fillDescArray().filter(d => d.id === this.state.name).map(d => ({ value: d.desc, text: d.title }));

        return (
            <>
                <h2 className='skill-heading skill-heading2'>{desc[0].text}</h2>
                <p className='skill-text-desc'>{desc[0].value}</p>
            </>
        );
    }

    fillImgArray = () => {
        return ['git', 'azure', 'css', 'html', 'js', 'react', 'vscode', 'csharp', 'skill'];
    }

    fillDescArray = () => {
        return [
            { id: 'vscode', title: 'Visual Studio Code', desc: 'I like using Visual Studio Code because its light-weight and easy-to use functionality' },
            { id: 'git', title: 'Git', desc: 'I like both using GIT and TFVC. I prefer using GIT because of managing remote repositories is better' },
            { id: 'js', title: 'JavaScript', desc: 'I like JavaScript who does not, just watch Netflix or Youtube without it 😉' },
            { id: 'html', title: 'HTML', desc: 'Some thinks it is a language, I just remove them from my friends' },
            { id: 'css', title: 'CSS', desc: 'I like fancy pages, I prefer using SASS' },
            { id: 'csharp', title: 'C#', desc: 'After my first language (TurboPascal), I love in. Nowadays I prefer learning more Node.Js' },
            { id: 'skill', title: 'Yoda', desc: '"Do or do not. There is no try."' },
            { id: 'react', title: 'ReactJs', desc: 'Like heaven with typescript, I used ASP.NET with Razor syntax and AngularJs, but React is my cup of tea.' },
            { id: 'azure', title: 'Azure', desc: 'I prefer using WebApp publishment to the cloud with the Portal, Azure Devops has awesome CI/CD feature as well. As a Scrum Master, I like Azure boards because, the WorkItem definitions can be modified as the team wants' },
            { id: 'default', title: 'Skill title', desc: 'Please click on skill circle, to see my opinion!' }
        ];
    }

    handleClick = async (name: string, event: React.MouseEvent<HTMLImageElement, MouseEvent>) => { this.setState({ name: name }) }
}

export default Skill;