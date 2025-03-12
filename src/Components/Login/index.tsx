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

export function Login(){

 const[data, setData] = useState('Login')

 const formConfiguration = zod.object({
    Email: zod.string()
    .nonempty('O Email é obrigatório')
    .regex(/@/, "O campo deve conter o caractere '@'")
    .regex(/.com/, "O campo deve conter . com"),

    senha: zod.string()
    .nonempty('A senha  é obrigatória')
 })
  
  const {register, handleSubmit, formState: { errors }} = useForm<formConfigurationType>({
    resolver: zodResolver(formConfiguration)
  })
  
  type formConfigurationType = zod.infer<typeof formConfiguration>

   function handleConnfigurationForm(data : formConfigurationType){
    console.log('teste do formulario')
   }

    return(
       <>
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
                onClick={() => setData(data === 'Login' ? 'Registrar' : 'Login')}
                >{data}
                </ChangeMethodButton>
                <ValidationButton onClick={handleSubmit(handleConnfigurationForm)}>{data}</ValidationButton>
            </ValidationContainer>
        </LoginContainer>
        </LoginPageContainer>
       </>
    )
}