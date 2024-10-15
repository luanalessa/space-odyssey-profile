import React, { useState } from 'react';
import Title from '../../../components/atoms/title';
import Button from '../../../components/atoms/button';
import Input from '../../../components/atoms/input';

import * as S from './styles';

import { ReactComponent as Ovni } from '../../../assets/images/ovni.svg';
import { ReactComponent as Person } from '../../../assets/images/person.svg';

export default function Contact() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <S.Content id="ContactTag">
      <Title>Contact me</Title>

      <Ovni className="ovni" />
      <Person className="person" />

      <S.Form>
        <Input
          type="input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input type="input" placeholder="Email" />
        <Input
          type="input"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <Input
          type="textarea"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="submit"
          variant="outline"
          href={`mailto:lessalsn@gmail.com.br?subject=${subject}&amp;body=Olá,%0D%0A%0D%0A${message}%0D%0A%0D%0AAtenciosamente,%0D%0A${name}`}
        >
          Send
        </Button>
      </S.Form>
    </S.Content>
  );
}
