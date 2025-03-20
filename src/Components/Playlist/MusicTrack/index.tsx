import { TuneRepository } from "../@TuneRepository";
import { IconsContainer, PlaylistContainer, TuneContainer } from "./styles";
import { Icons, IconButtons } from "./styles";
import { PlusCircle, PlayCircle, ShuffleAngular } from "phosphor-react";

export function MusicTrack(){
    const FakeData = Array.from({ length: 20 });
    return(
        <>
        <PlaylistContainer>
        <IconsContainer>
        <Icons>
            <IconButtons><PlusCircle size={40} color="#000000" weight="fill"/></IconButtons>
            <IconButtons><PlayCircle size={40} color="#000000" weight="fill"/></IconButtons>
            <IconButtons><ShuffleAngular size={40} color="#000000" weight="fill"/></IconButtons>
        </Icons>
        </IconsContainer>
        <TuneContainer>
        {FakeData.map((_, index) => {
            return(
                <TuneRepository
                name={`${index}`}
                Img=""
                />
            )
        })}
        </TuneContainer>
        </PlaylistContainer>
        </>
    )
}