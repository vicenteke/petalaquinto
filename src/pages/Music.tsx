import React from "react"
import { Container } from "react-bootstrap";
import ButtonSocial from "../components/ButtonSocial";


export default function Music() {
    const buttons = [
        {
            key: "spotify",
            text: "Ouça no Spotify",
            href: "https://open.spotify.com/artist/4GFANHG6Hljpi1JHKde9hJ?si=lpZpSAYzSLqsvkowsaPuHQ",
            iconSrc: "spotify_logo.svg",
            iconAlt: "Logo Spotify"
        },
        {
            key: "deezer",
            text: "Ouça no Deezer",
            href: "https://www.deezer.com/br/artist/193473817",
            iconSrc: "deezer_logo.svg",
            iconAlt: "Logo Deezer"
        },
        {
            key: "youtube",
            text: "Assista no Youtube",
            href: "https://www.youtube.com/@petalaquinto",
            iconSrc: "youtube_logo.svg",
            iconAlt: "Logo Youtube"
        },
        {
            key: "instagram",
            text: "Acompanhe no Instagram",
            href: "https://www.instagram.com/petalaquinto/",
            iconSrc: "instagram_logo.svg",
            iconAlt: "Logo Instagram"
        },
        {
            key: "apple",
            text: "Ouça na Apple Music",
            href: "https://music.apple.com/us/artist/p%C3%A9tala-quinto/1659716909",
            iconSrc: "apple_logo.svg",
            iconAlt: "Logo Apple"
        },
        {
            key: "amazon",
            text: "Ouça na Amazon Music",
            href: "https://music.amazon.com.br/artists/B0BQ3X75VK/p%C3%A9tala-quinto",
            iconSrc: "amazon_logo.svg",
            iconAlt: "Logo Amazon Music"
        },
    ]


    return (<>
        <Container fluid className="content-body">
            <h2>Música</h2>
            <p>Aqui está uma lista com links úteis para você escutar a nossa música onde achar melhor. Também deixamos links para as nossas redes sociais, se quiser acompanhar mais de perto ;)</p>
            <div className="full-width text-center" id="music-buttons-list">
                {buttons.map((btn) => {
                    return <ButtonSocial 
                        key={"button-social-music-" + btn.key}
                        text={btn.text}
                        href={btn.href}
                        className={"button-social-" + btn.key}
                        iconSrc={btn.iconSrc}
                        iconAlt={btn.iconAlt}
                        />
                })}
            </div>
        </Container>
        </>
    );
}
