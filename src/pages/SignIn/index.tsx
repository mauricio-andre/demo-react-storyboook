import React from 'react';
import { FiUser, FiLock } from 'react-icons/fi'
import styles from './styles.module.scss';
import logoImg from '../../assets/images/logo.png';
import Title from '../../components/Title';
import { Input, Button } from '../../components/Form';

const SignIn: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={logoImg} alt="Logo Storybook" />
        <Title>Bem vindo!</Title>
        <p>Essa página possui componentes simples para demonstrar os recursos do Storybook.</p>

        <form>
          <Input placeholder="Usuário" icon={FiUser}/>
          <Input placeholder="Senha" icon={FiLock}/>

          <Button
            type="submit"
            click={() => { alert('Login realizado com sucesso!') }}
          >
            Entrar
          </Button>
        </form>
      </div>
      <div className={styles.background}></div>
    </div>
  );
};

export default SignIn;
