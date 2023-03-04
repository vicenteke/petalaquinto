import React from "react"
import { Container, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';


export default function About() {

    return (<>
        <img src="resources/img/sobre.jpg" className="top-image" />
        <Container fluid className="content-body">
            <h2>Pétala Quinto</h2>
            <p>
                <i>Pétala Quinto</i> é um projeto musical formado na cidade de Brusque/SC em meados de 2017, inicialmente como <i>Os Dalits</i>, período em que lançaram os singles "Lucidez" e " Despedidas Calçadas". O som do Pétala é um constante passeio entre o experimentalismo da música alternativa e o tradicionalismo do rock independente. Letras que abordam temas pessoais, as dores e vivências de grande parte dos jovens anos 20 marcam as composições da banda.
            </p>
            <p>
                Em 2021, lançou seu primeiro EP intitulado "Romances & Suspenses", onde se percebe uma forte influência do rock em suas composições. Ainda assim, "Carnaval em Preto & Branco" traz um sambinha surpreendente, enquanto "Nem Tão Fria" expõe uma canção mais impactante.
            </p>
            <p>
                Agora, com os lançamentos mais recentes, traços de indie e pop são bem mais explorados, o que marca um som em constante trabalho de auto-descoberta. Sintetizadores substituem guitarras com distorção, ao passo que muitas músicas viajam para pontes em atmosferas alegavelmente inusuais.
            </p>
            <p>
                Para acompanhar a banda mais de perto, acompanhe no Instagram em <a target="_blank" href="https://www.instagram.com/petalaquinto/">@petalaquinto</a> e ouça no <a target="_blank" href="https://open.spotify.com/artist/4GFANHG6Hljpi1JHKde9hJ?si=lpZpSAYzSLqsvkowsaPuHQ">Spotify</a> ou na plataforma que preferir. Outros links interessantes você encontra na página <Link to="/musica">Música</Link>.
            </p>
            <br/>
            <Image src="resources/img/petala_1.jpg" fluid/>
            <br/>
            <br/>
            <Image src="resources/img/petala_2.jpg" fluid/>
            <br/>
            <br/>
        </Container>
        </>
    );
}
