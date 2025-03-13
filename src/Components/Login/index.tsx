import {  
  ChangeMethodButton,
  Input, InputContainer,
  LoginContainer, 
  LoginPageContainer, 
  ValidationButton, 
  ValidationContainer,
  ErrorMessage
} from "./styles";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { api } from "../../lib/axios";

export function Login() {
  const [authMethod, setAuthMethod] = useState('Login');
  const [buttonMethod, setButtonMethod] = useState('Register')
  const formConfiguration = zod.object({
    Email: zod.string()
      .trim()
      .email({ message: 'Email inválido' })
      .nonempty({ message: 'O Email é obrigatório' }),

    senha: zod.string()
      .min(6, { message: 'O mínimo de caracteres é 6' })
      .max(50, { message: 'O máximo de caracteres é 50' })
      .nonempty({ message: 'A senha é obrigatória' })
  });

  type formConfigurationType = zod.infer<typeof formConfiguration>;

  const {
    register, 
    handleSubmit, 
    reset, 
    setError, 
    formState: { errors }
  } = useForm<formConfigurationType>({
    resolver: zodResolver(formConfiguration)
  });
 
  async function handleConfigurationForm(data: formConfigurationType) {
    if(buttonMethod === 'Register'){
      Register(data)
    }
    if(buttonMethod === 'Login'){
      Login(data)
    }
  }
  
  function Login(data: formConfigurationType){
  }
  async function Register(data: formConfigurationType){
    try {
      await api.post('/users', {
        email: data.Email,
        password: data.senha
      });

      reset({
        Email: '',
        senha: ''
      });

    } 
    catch (error: any) {
      if (error.response?.status === 400) {
        const errorData = error.response.data;
        
        if (errorData.message === "Já existe uma conta com esse e-mail. Faça login.") {
          setError("Email", {
            type: "manual",
            message: errorData.message,
          });
        } 
      }
      else{
        setError("Email", {
          type: "manual",
          message: "Tente novamente mais tarde",
        });
      }
    }
  }
  return (
    <LoginPageContainer>
      <LoginContainer>
        <InputContainer>
          <p>Email</p>
          <Input
            placeholder="Email"
            {...register("Email")}
          />
          {errors.Email && <ErrorMessage>{errors.Email.message}</ErrorMessage>}
        </InputContainer>

        <InputContainer>
          <p>Senha</p>
          <Input
            placeholder="Senha"
            {...register("senha")}
          />
          {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
        </InputContainer>

        <ValidationContainer>
          <ChangeMethodButton 
            onClick={() => {
              setAuthMethod(authMethod === 'Register' ? 'Login' : 'Register') 
              setButtonMethod(buttonMethod !== 'Register' ? 'Register' : 'Login')}}
          >
            {authMethod}
          </ChangeMethodButton>
          {
          buttonMethod === 'Register' && 
          <ValidationButton onClick={handleSubmit(handleConfigurationForm)}>
          {buttonMethod}
          </ValidationButton>
          }
          {
          buttonMethod === 'Login' && 
          <ValidationButton onClick={handleSubmit(handleConfigurationForm)}>
          {buttonMethod}
          </ValidationButton>
          }
        </ValidationContainer>
      </LoginContainer>
    </LoginPageContainer>
  );
}
