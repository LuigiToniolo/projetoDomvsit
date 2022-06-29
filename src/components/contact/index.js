import React, { useState } from 'react';
import axios from 'axios';
import { i18n } from '../multi-lingual/translate/i18n';
import { Container } from '..';
import { eventClickContact } from '../googleAnalitics';

export const ContactForm = () => {
    const [values, setValues] = useState({
        nome: '',
        telefone: '',
        email: '',
        empresa: '',
        cargo: '',
        linhas: 'Consultoria',
    });

    const [formMessage, setFormMessage] = useState({ status: '', message: '' })

    const handleChange = (event) => {
        const auxValues = { ...values };
        auxValues[event.target.name] = event.target.value;
        setValues(auxValues);
    };

    const validation = (obj) => {
        const emptyFields = [];
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                if (!obj[prop]) {
                    emptyFields.push(prop)
                }
            }
        }
        return emptyFields;
    }

    const submitEmail = async (event) => {
        event.preventDefault();
        const validationFields = validation(values);
        if (validationFields.length === 0) {
            
            axios.post('https://epjbs8o2w8.execute-api.sa-east-1.amazonaws.com/comunicacao/enviar-email', {
                ...values
            })
                .then(() => {
                    setFormMessage({status: 'positive', message: 'Enviado com sucesso!'})
                    eventClickContact();
                })
                .catch(() => {
                    setFormMessage({status: 'negative', message: 'Houve algum erro ao enviar, tente novamente mais tarde.'})
                })
        }else {
            
            setFormMessage({status: 'negative', message: `Os campos: ${validationFields.join(', ')} são obrigatórios.`})
        }
    }

    return (
        <Container type='fluid' id='contato'>
            <Container type='box'>
                <section className='home-contact'>
                    <div className='half contact-textbox'>
                        <p className='contact-title'>
                            {i18n.t('contactTextbox.contactTitle')}
                        </p>
                        <p className='contact-subtitle'>
                        {i18n.t('contactTextbox.contactSubtitle')}
                        </p>

                        <p className='bottontext'>
                        {i18n.t('contactTextbox.bottonText')} <strong>{i18n.t('contactTextbox.bottonTextEmail')}</strong> <br /> {i18n.t('contactTextbox.bottonTextStrong')} <strong>{i18n.t('contactTextbox.bottonTextTel')}</strong>.
                        </p>
                    </div>
                    <div className='half'>
                        <form className='form'>
                            <label>
                                <span>{i18n.t('form.formNome')}</span>
                                <input
                                    type="text"
                                    name='nome'
                                    onChange={handleChange}
                                    minLength="6"
                                    required
                                />
                            </label>
                            <label>
                                <span>{i18n.t('form.formTel')}</span>
                                <input
                                    type="text"
                                    name='telefone'
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                <span>{i18n.t('form.formEmail')}</span>
                                <input
                                    type="email"
                                    name='email'
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                <span>{i18n.t('form.formEmpresa')}</span>
                                <input
                                    type="text"
                                    name='empresa'
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                <span>{i18n.t('form.formCargo')}</span>
                                <input
                                    type="text"
                                    name='cargo'
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                <span>{i18n.t('form.formLinhaServicos')}</span>
                                <select id="funcionarios" name='linhas' onChange={handleChange} >
                                    <option value="Consultoria" >{i18n.t('form.formConsult')}</option>
                                    <option value="Squads" >{i18n.t('form.formSquads')}</option>
                                    <option value="Professional" >Professional Services</option>
                                    <option value="Hunting" >Hunting</option>
                                </select>
                            </label>
                            {
                                formMessage.status &&
                                <span className={`form-message -${formMessage.status}`}>{formMessage.message}</span>
                            }
                            <button className='botao-enviar' onClick={submitEmail}>{i18n.t('form.formButton')}</button>
                        </form>
                    </div>
                </section>
            </Container>
        </Container>
    )
}

export default ContactForm;
