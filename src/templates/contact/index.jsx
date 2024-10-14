import React, {useState} from 'react'
import Title from '../../components/title';
import Button from '../../components/button';

import * as S from './styles'

import { ReactComponent as Ovni} from '../../assets/images/ovni.svg'
import { ReactComponent as Person} from '../../assets/images/person.svg'


export default function Contact(){
    const [name, setName] = useState("");
    const [subject, setSubject ] = useState("");
    const [message, setMessage] = useState("");


    return (
            <S.Content id='ContactTag'>
                      <Title>Contact me</Title>

                    <Ovni className='ovni'/>
                    <Person className="person"/>
                    <S.Form>
                        <S.Input type='text' placeholder='Name' onChange={ e => setName(e.target.value)}/>
                        <S.Input type='text' placeholder='Email'/>
                        <S.Input type='text' placeholder='Subject' onChange={ e => setSubject(e.target.value)}/>
                        <S.TextArea type='text' placeholder='Message' onChange={ e => setMessage(e.target.value)}/>
                        <Button 
                            type='submit' 
                            variant='outline'
                            href={`mailto:luana.lessa@driven.com.br?subject=${subject}&amp;body=Olá,%0D%0A%0D%0A${message}%0D%0A%0D%0AAtenciosamente,%0D%0A${name}`}>Send</Button>
                    </S.Form>
                                        
            </S.Content>
    )
}