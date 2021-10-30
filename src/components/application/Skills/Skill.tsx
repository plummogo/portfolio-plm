import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';

const Skill = () => {
    const [name, setName] = useState('default');
    const { t, i18n } = useTranslation();

    const images = ['git', 'azure', 'css', 'html', 'js', 'react', 'vscode', 'csharp', 'skill']
        .map((name, index) => {
            <li key={name}>
                <img
                    id={name}
                    tabIndex={index}
                    onClick={async (e) => setName(name)}
                    src={require(`../../../assets/img/skills/${name}.png`).default} />
            </li>
        });

    const desc = [
        { id: 'vscode', title: 'Visual Studio Code', desc: t('skills.vscode') },
        { id: 'git', title: 'Git', desc: t('skills.git') },
        { id: 'js', title: 'JavaScript', desc: t('skills.js') },
        { id: 'html', title: 'HTML', desc: t('skills.html') },
        { id: 'css', title: 'CSS', desc: t('skills.css') },
        { id: 'csharp', title: 'C#', desc: t('skills.csharp') },
        { id: 'skill', title: 'Yoda', desc: t('skills.yoda') },
        { id: 'react', title: 'ReactJs', desc: t('skills.react') },
        { id: 'azure', title: 'Azure', desc: t('skills.azure') },
        { id: 'default', title: t('skills.default') }
    ].filter(d => d.id === name).map(d => ({ value: d.desc, text: d.title }));

    return (
        <Container className='skill-container'>
            <Row>
                <h1>{t('navbar.skills')}</h1>
            </Row>
            <Row>
                <Col md={8}>
                    <ul className='skill-circle-container'>
                        {['git', 'azure', 'css', 'html', 'js', 'react', 'vscode', 'csharp', 'skill']
                            .map((name, index) => {
                                return (
                                    <li key={name}>
                                        <img
                                            id={name}
                                            tabIndex={index}
                                            onClick={async () => setName(name)}
                                            src={require(`../../../assets/img/skills/${name}.png`).default} />
                                    </li>
                                )
                            })}
                    </ul>
                </Col>
                <Col className='desc-container' md={4}>
                    <h2>{desc[0].text}</h2>
                    <p className='skill-desc-text'>{desc[0].value}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Skill;