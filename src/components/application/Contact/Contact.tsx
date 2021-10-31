import { useTranslation } from "react-i18next";
import { Container, Row } from "react-bootstrap";
import { Slide } from 'react-slideshow-image';

const Contact = () => {
    const { t } = useTranslation();
    
    const images = [
        "/assets/img/skills/azure.png",
        "/assets/img/skills/git.png",
        "/assets/img/skills/js.png",
      ];
    
      const fadeProperties = {
        duration: 3000,
        pauseOnHover: true
    };

    return (
        <Container className='contact-container'>
            <Row>
                <h1>{t('navbar.contact')}</h1>
            </Row>
            <Row>
                <Slide {...fadeProperties}>
                    <div className="each-fade">
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png" />
                        </div>
                        <p>First Slide</p>
                    </div>
                    <div className="each-fade">
                        <p>Second Slide</p>
                        <div>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8dHRsAAAAZGRcuLi3Ly8sbGxnOzs4VFROpqakQEA21tbVpaWjBwcHx8fHp6elgYGAHBwA5OTednZzV1dXm5ubU1NTb29smJiRdXVy6urlWVlWYmJeKiorz8/Ourq5MTEt5eXlvb26Ojo2bm5oxMS+Dg4NERENJSUiSrgQ+AAADIElEQVR4nO3ZZ3uiQBSGYRwQEUtCMGIsiylL8v9/4RICIypTMEXIPve3cHH28C6TKcRxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8J9L1uM4Hs/uf6bbeuAphHNVTaqs8Vxzw1shPS709z6tlI0KK++Psd9MuCpCmXCsKTL0G0ciHFT8ULxpX+Q0UjZ6F0bKR5SGYqCkS6gu0rab3wn/+P5AxLqEYXOXsvaTAb8hYSKChorHCxO64sYYcKkL+PUJb4TbWPJ8UUJXmGeqxemQ+eaEXsMbLGqWFyT0LQIm+oBfnrBWFebzaCRfqOu1T+iLxBhwIWqqwqh+0ZxQnFM3DH3ZZBpPJs8r2VXMFCUPTc8YFD+ZAzrDg1H1yNHzqHZZWVrdLtb12w1F8pde7Mork+pKeKuoWdQfsrw72Czzn9ruFpbyka1ulwnNk1lD0fYQQIa2+QfKm8Npi6ZS9f8jJu0etk3CXVQW1bYhmQgLFrNGDxJmVcLaQB5tbgubX5HwRVSzoF2TM51PKPdPvgh3yhVQ4yoJ18fz6Ej/hHL59fNFaZq2nQ6vkfB0PVxpq+KjfUK+6A8y9drS4CoJj7l3+rLXkx2Km7/Knf1A70FC5+9ZXT5en8yH2A99SOhMG04XoeU2ox8JnaHXcETUHoIP+pHQcWYbIU5PDMqd95Huz6WVefr+Lar+Kv3u7kvT2THrhss4PxhF7cbpVRKavwTpmmZyuAavFvd3fdc2r4byS+3iU5vjU9cTVpu24Gg62gf2o6HzCT23YeJsM947n7A6H/r1qsew46N0PTql3kvLTxbu4QxcnajcgUXXLqyH+m9tr9US6Iu3NJnP72dyookyi64d2NMYhlvtC/vHB8HD3sbm22APEjqZqix8sOnag4TOPmqscYXVAaoPCZ19U2FgNUZ7ktDZnR+exMryg80nE/oF64S+imlhS/Yiqv1BKJ9ytoYKqWx6acKgYJ0wUDEv3UnmH9aWTWr/kGXT6KKEP+xmmMbbbby2+/0DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAD/wD54Mp1IWvHPUAAAAASUVORK5CYII=" />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div>
                            <img src="https://teacherdanmax.files.wordpress.com/2013/09/school-test.png" />
                        </div>
                        <p>Third Slide</p>
                    </div>
                </Slide>
            </Row>
        </Container>
    );
}

export default Contact;