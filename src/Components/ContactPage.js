import React, { useContext, useState } from 'react'
import { DeviceContext } from '../Contexts/DeviceContext'
import AnimatedText from './AnimatedText';
import EmphasisedText from './EmphasisedText';
import HoverableButton from './HoverableButton'
import emailjs from 'emailjs-com';
import HoverableLink from './HoverableLink';

const ContactPage = () => {

    const { device } = useContext(DeviceContext);
    const [ message, setMessage ] = useState('');
    
    const isSmall = device === 'small' || device === 'extra-small';

    function handleChange(e) {
        setMessage(()=> e.target.value);
    }

    function handleSubmit(e) { 
        e.preventDefault();
        emailjs.sendForm('Portfolio', 'template_ub61guv', e.target, 'user_ZPuvXMoI1Hz8sQ2oJcxyF')
          .then((result) => {
              console.log(result.text);
              setMessage(()=> '')
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
    }

    return (
        <section id="contact" className="flex-col">
            <h2>
                <AnimatedText>
                    Keep in {isSmall ? <br /> : ''}<EmphasisedText>touch</EmphasisedText>
                </AnimatedText>
            </h2>
            <div 
                id="contact-options"
                className={`flex-${isSmall ? 'col' : 'row'} ${device}`}
            >
                <address 
                    className={`flex-${isSmall ? 'row' : 'col'}`}
                >
                    <HoverableLink hoverHandle={null} to='https://github.com/Shemicalx'>
                        GitHub
                    </HoverableLink>
                    <HoverableLink hoverHandle={null} to='https://www.linkedin.com/in/noamshemi/'>
                        LinkedIn
                    </HoverableLink>
                    <HoverableLink hoverHandle={null} to='https://www.buzzsprout.com/937528'>
                        Podcast
                    </HoverableLink>
                </address>
                <form onSubmit={handleSubmit} className="flex-row">
                    <fieldset className="flex-col">
                        <legend>
                            <AnimatedText>
                                Let <EmphasisedText>me</EmphasisedText> get back to <EmphasisedText>you</EmphasisedText>
                            </AnimatedText>
                        </legend>
                        
                        <label htmlFor="email" />
                        <input 
                            id="emailInput" 
                            className={device} 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            autoComplete="off"
                            required 
                        />
                        <label htmlFor="message" />
                        <textarea
                            name="message" 
                            id="mailInput" 
                            className={device} 
                            placeholder="Tell me anything!" 
                            value={message}
                            onChange={handleChange}
                        />
                    </fieldset>
                    { message ? <HoverableButton 
                        rotate={true} 
                        submit={message ? true : false }
                    >
                        Send
                    </HoverableButton> : "" }
                </form>
            </div>
        </section>
    )
}

export default ContactPage
