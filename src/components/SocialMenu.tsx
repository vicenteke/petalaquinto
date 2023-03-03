import React from "react"
import { Col } from "react-bootstrap";

import LinkIcon from "./LinkIcon";

export default function SocialMenu() {
    return (
        <Col id="social-menu" className="d-flex align-items-center">
            <LinkIcon
                href="https://open.spotify.com/artist/4GFANHG6Hljpi1JHKde9hJ?si=lpZpSAYzSLqsvkowsaPuHQ"
                src="spotify_logo.svg" alt="Abrir Spotify"
            />
            <LinkIcon
                href="https://www.youtube.com/@petalaquinto"
                src="youtube_logo.svg" alt="Abrir YouTube"
            />
            <LinkIcon
                href="https://www.instagram.com/petalaquinto/"
                src="instagram_logo.svg" alt="Abrir Instagram"
            />
            <LinkIcon
                href="mailto:contato@petalaquinto.com.br"
                src="mail-icon.svg" alt="Escrever Email"
            />
        </Col>
    );
}
