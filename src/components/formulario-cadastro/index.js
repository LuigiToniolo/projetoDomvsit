import React, { useState, useCallback } from "react";
import {useDropzone} from 'react-dropzone';
import InputMask from "react-input-mask";
import { Container } from '..';
import axios from "axios";

export default function HookForm() {
    
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        const newdata = {...data};
        newdata.curriculo = acceptedFiles[0];
        setData(newdata);
      })
      const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({onDrop})

      const files = acceptedFiles.map(file => (
        <p className='arquivo-enviado' key={file.path}>
          {file.path}
        </p>
      ))
        const [data, setData] = useState({
            nome: "",
            telefone: "",
            email: "",
            confirmemail: "",
            urlLinkedin: "",
            curriculo: []
        })

        const [formMessages, setformMessages] = useState({
            nome: [],
            telefone: [],
            email: [],
            confirmemail: [],
            urlLinkedin: [],
            submit: [],
        });

        const enviar = async (e) => {

            e.preventDefault();

            formMessages.submit = [];
            setformMessages({...formMessages});

            validate({
                nome: ['required'],
                email: ['required' , 'emailValidate'],
                confirmemail: ['required', 'emailCompare'],
                telefone: ['required', 'telephoneValidate'],
                urlLinkedin: ['required'],
            });

            for (const props in formMessages) {
                if (formMessages[props].length) {
                    formMessages.submit.push({
                        name: 'invalidSubmit', 
                        message:"Por favor, verifique os campos e tente novamente"
                    });

                    setformMessages({...formMessages});
                    console.log(formMessages);
                    return;
                }
            }

            const tokens = await login();
            const config = {
                headers: {
                    'Authorization': `Bearer ${tokens.token}`,
                    'RefreshToken': tokens.refreshToken,
                    'AccessToken': process.env.REACT_APP_AccessToken,
                }
            };
            const dados = new FormData();
            dados.append("IdJob", 1);
            dados.append("name", data.nome);
            dados.append("cellPhone1", data.telefone);
            dados.append("email", data.email);
            dados.append("linkedIn", data.urlLinkedin);
            dados.append("upload", data.curriculo);

            
            axios.post(
                `${process.env.REACT_APP_URL}/Candidate/ApplyCandidateForJob`,
                dados,
                config
            ).then((response) => {
                formMessages.submit = [{
                    name: 'validSubmit', 
                    message:"Informações enviadas! Entraremos em contato em breve!"
                }];
                setformMessages({...formMessages});
            })
            .catch(error => {
                const submitMessage = { name: 'submit' };

                submitMessage.message = error.response?.data[0] || 
                "Ocorreu um erro inesperado, por favor tente novamente";

                formMessages.submit = [submitMessage];
                setformMessages({...formMessages});
            })

        };

        async function login(){
            const Acesstoken = process.env.REACT_APP_AccessToken;
            const dados = {
                login:process.env.REACT_APP_VacancyLogin,
                password:process.env.REACT_APP_VacancyPassword,
            }
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                     'AccessToken': Acesstoken
                }
            };
            const response = await axios.post(`${process.env.REACT_APP_URL}/Authentication/Authenticate`, dados, config)
            .catch(error => {
                console.log(error);
            })
            return{
                token: response.data.data.token,
                refreshToken: response.data.data.refreshToken
            }
        }

        function handle(e) {
            const newdata={...data}
            newdata[e.target.id] = e.target.value;
            if (e.target.id === "telefone") {
                newdata[e.target.id] = e.target.value.replace(/[^\d]/g, "");
            }
            setData(newdata)
        }

        const validate = (obj) => {
            const validationTypes = {
                required: function (field) {
                    if (!data[field]) {
                        return {
                            name: 'required', 
                            message: `Campo obrigatório`
                        }
                    }
                },
                
                emailValidate: function (field) {
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
                        return {
                            name: 'emailValidate', 
                            message: `Email inválido`,
                        }
                    }
                },

                emailCompare: function (field) {
                    if (data.email !== data.confirmemail) {
                        return {
                            name: 'emailCompare',
                            message: 'Os emails estão diferentes',
                        }
                    }
                },

                telephoneValidate: function (field) {
                    if (!/^\d{10,11}$/.test(data.telefone)) {
                        return {
                            name: 'telephoneValidate',
                            message: 'Número de telefone inválido',
                        }
                    }
                },
            }

            for (const prop in obj) {
                obj[prop].forEach((validation) => {
                    const fieldError = validationTypes[validation](prop);

                    if (fieldError) {
                        if (!formMessages[prop].find(
                            (error) => error.message === fieldError.message
                        )) {
                            formMessages[prop].push(fieldError);
                        }
                    }
                    else {
                        formMessages[prop] = formMessages[prop].filter(
                            (error) => error.name !== validation);
                    }
                });
            }
            setformMessages({...formMessages});
        }

    return (
        <Container type='fluid' id='candidatar'>
            <Container type='box'>
                <section className='candidatar-vaga' id="error">
                    <form className="formulario" onSubmit={enviar} id="form" action="/" method="GET">
                            <label for="nome">
                                <span>Nome</span>
                                <input
                                name="nome"
                                id="nome"
                                required
                                type="text"
                                className={
                                    `form-control ${formMessages.nome.length ? 'is-invalid' : ''}
                                `}
                                value={data.name}
                                onChange={(e) => handle(e)}
                                onBlur={() => validate({nome: ['required']})}
                                />
                                <div className="message-feedback">
                                    {formMessages.nome[0]?.message || ''}
                                </div>
                            </label>
                            <label for="telefone">
                                <span>Telefone</span>
                                <InputMask
                                    mask="(99) 99999-9999"
                                    type="text"
                                    name="Telefone"
                                    required
                                    className={`form-control ${formMessages.telefone.length ? 'is-invalid' : ''}`}
                                    value={data.telefone}
                                    id="telefone"
                                    onChange={(e) => handle(e)}
                                    onBlur={() => validate({telefone: ['required', 'telephoneValidate']})}
                                    />
                                    <div className="message-feedback">
                                        {formMessages.telefone[0]?.message || ''}
                                    </div>
                            </label>
                            <label>
                                    <span>
                                    E-mail
                                    </span>
                                    <input
                                    required
                                    name="email"
                                    type="email"
                                    className={`form-control ${formMessages.email.length ? 'is-invalid' : ''}`}
                                    value={data.email}
                                    id="email"
                                    onChange={(e) => handle(e)}
                                    onBlur={() => validate({email: ['required', 'emailValidate']})}
                                    />
                                    <div className="message-feedback">
                                        {formMessages.email[0]?.message ||  ''}
                                    </div>
                            </label>
                            <label>
                                    <span>
                                    Confirmar e-mail
                                    </span>
                                    <input
                                    required
                                    name="confirmemail"
                                    type="email"
                                    id="confirmemail"
                                    value={data.confirmemail}
                                    onChange={(e) => handle(e)}
                                    onBlur={() => validate({confirmemail: ['required', 'emailCompare']})}
                                    className={`form-control ${
                                        formMessages.confirmemail.length ? 'is-invalid' : ''
                                    }`}
                                    />
                                    <div className="message-feedback">
                                        {formMessages.confirmemail[0]?.message ||  ''}
                                    </div>
                            </label>
                            <label className="perfil-linkedin">
                                    <span className="titulo-linkedin">
                                    Perfil do Linkedin
                                    </span>
                                    <input
                                   name="urlLinkedin"
                                   required
                                   type="text"
                                   value={data.urlLinkedin}
                                   id="urlLinkedin"
                                   onChange={(e) => handle(e)}
                                   onBlur={() => validate({urlLinkedin: ['required']})}
                                   className={`form-control ${
                                    formMessages.urlLinkedin.length ? 'is-invalid' : ''
                                }`}
                                />
                                <div className="message-feedback">
                                    {formMessages.urlLinkedin[0]?.message ||  ''}
                                </div>
                            </label>
                            <label className="label-upload" onClick={(e) => e.preventDefault()}>
                            <div className='dropzone'{...getRootProps()}>
                                <input
                                {...getInputProps()}
                                type="file"
                                name="file"
                                onchange={e => handle(e.target.files[0])}
                                />
                                {isDragActive || files.length ?
                                    <p>{files}{console.log(files)}</p>:
                                    <>
                                        <div className='conteudo-drag'>
                                            <h3 className='titulo-drag'>Currículo</h3>
                                            <p className='descricao-drag'>Clique aqui ou arraste o documento para enviar.</p>
                                        </div>
                                        <div>
                                            <p className='arquivo'>{files}</p>
                                        </div>
                                    </>
                                }
                            </div>
                            </label>
                        <div className="d-grid">
                            <div className='message-feedback message-submit' >
                                {formMessages.submit[0]?.message || ''}
                            </div>
                            <button type="submit" className="botao-candidatar" onClick={enviar}>
                                Enviar candidatura
                            </button>
                        </div>
                    </form>
                </section>
            </Container>
        </Container>
    )
}