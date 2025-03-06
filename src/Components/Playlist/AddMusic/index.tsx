import { Container, InputFile, Label, PlusCircleButton, SpaceToAddMusic, Title } from "./styles";
import { PlusCircle, YoutubeLogo } from "phosphor-react";
import { Input } from "./styles";

export function AddMusic(){
    return(
        <Container>
          <PlusCircleButton><PlusCircle size={40} color="#000000" weight="fill"/></PlusCircleButton>
          <SpaceToAddMusic>
                <Title>
                 Adicione através do Youtube
                 <YoutubeLogo size={40} color="#000000" weight="fill"/>
                </Title>

                 <Input 
                 type="text"
                 placeholder="Link aqui"
                 />
                
                 <Label>
                <p>Upload de seus arquivos de áudio</p> 
                 <InputFile 
                 type="file"
                 placeholder="Upload de seus arquivos de áudio"
                 />
                 </Label>
          </SpaceToAddMusic>
        </Container>
    )
}