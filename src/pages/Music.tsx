import React from "react"
import { Container } from "react-bootstrap";
import ButtonSocial from "../components/ButtonSocial";


export default function Music() {
    const buttons = [
        {
            key: "spotify",
            text: "Ouça no Spotify",
            href: "https://open.spotify.com/artist/4GFANHG6Hljpi1JHKde9hJ?si=lpZpSAYzSLqsvkowsaPuHQ",
            className: "button-social-spotify",
            iconSrc: "spotify_logo.svg",
            iconAlt: "Logo Spotify"
        },
        {
            key: "youtube",
            text: "Assista no Youtube",
            href: "https://www.youtube.com/@petalaquinto",
            className: "button-social-youtube",
            iconSrc: "youtube_logo.svg",
            iconAlt: "Logo Youtube"
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
                        className={btn.className}
                        iconSrc={btn.iconSrc}
                        iconAlt={btn.iconAlt}
                        />
                })}
            </div>
        </Container>
        </>
    );
}
