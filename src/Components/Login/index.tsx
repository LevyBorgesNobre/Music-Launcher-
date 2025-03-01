import { Container, Input, InputContainer, LoginContainer, ValidationButton, ValidationContainer } from "./styles";

export function Login(){
    return(
       <>
       <Container>
        <LoginContainer>
            <InputContainer>
             <p>Email</p>
             <Input
             placeholder="Email"
             />
            </InputContainer>

            <InputContainer>
             <p>Senha</p>
             <Input
             placeholder="Senha"
             />
            </InputContainer>

            <ValidationContainer>
                <p>Login</p>
                <ValidationButton>Login</ValidationButton>
            </ValidationContainer>
        </LoginContainer>
       </Container>
       </>
    )
}