import React, { useContext, useState } from 'react'
import { DeviceContext } from '../Contexts/DeviceContext'
import AnimatedText from './AnimatedText';
import EmphasisedText from './EmphasisedText';
import HoverableButton from './HoverableButton'
import emailjs from 'emailjs-com';
import HoverableLink from './HoverableLink';
import Modal from './Modal';

const ContactPage = () => {

    const { device } = useContext(DeviceContext);
    const [ message, setMessage ] = useState('');
    const [ messageSent, setMessageSent ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    
    const isSmall = device === 'small' || device === 'extra-small';

    function handleChange(e) {
        setMessage(()=> e.target.value);
    }

    function handleSubmit(e) { 
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('Portfolio', 'template_ub61guv', e.target, 'user_ZPuvXMoI1Hz8sQ2oJcxyF')
          .then((result) => {
              setMessage(()=> '');
              e.target.reset();
              setLoading(false);
              setMessageSent(true);
          }, (error) => {
              console.log(error.text);
              setLoading(false);
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
                    <HoverableLink hoverHandler={null} to='https://github.com/Shemicalx'>
                        GitHub
                    </HoverableLink>
                    <HoverableLink hoverHandler={null} to='https://www.linkedin.com/in/noamshemi/'>
                        LinkedIn
                    </HoverableLink>
                    <HoverableLink hoverHandler={null} to='https://www.buzzsprout.com/937528'>
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
                        loading={loading}
                    >
                        Send
                    </HoverableButton> : "" }
                </form>
            </div>
            { messageSent && (
                <Modal setMessageSent={setMessageSent}>
                    <h2><EmphasisedText>Your message has been sent!</EmphasisedText></h2>
                    <p>I appreciate you contacting me and I will respond as soon as possible<br/>Thank you for thinking of me,<br/><EmphasisedText>Noam.</EmphasisedText></p>
                </Modal>
            )}
        </section>
    )
}

export default ContactPage
