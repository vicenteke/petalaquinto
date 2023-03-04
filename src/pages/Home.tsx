import React from "react"
import { Container } from "react-bootstrap";


export default function Home() {
    return (<>
        <iframe className="full-width" src="https://www.youtube-nocookie.com/embed/-46hH_94khM?rel=0&autoplay=1" title="Clipe Vielas - Pétala Quinto" frameBorder="0" allow="modestbranding; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowFullScreen></iframe>
        <Container fluid className="content-body">
            <h2>Vielas</h2>
            <p>
                Vielas é uma música que fala sobre a insatisfação com a rotina, da mesmice, de ser só mais um. Esse sentimento que parece recorrente nos jovens anos 20 se reflete não apenas na letra da canção, mas também no arranjo e composição como um todo. Logo acima você confere o clipe dessa canção.
            </p>
            <br/>
            <p style={{fontSize: '1.5em'}}>
                ♪
            </p>
            <p>
                Nas vezes em que eu esqueço<br/>
                Que é coisa minha achar ser tarde<br/>
                Se não me afoga um recomeço <br/>
                O que me sobra é a verdade<br/>
            </p>
            <p>
                E o que pra mim serão novelas<br/>
                Se passam por curtas metragens<br/>
                Quero correr todas vielas<br/>
                Com gosto de longas viagens<br/>
            </p>
            <p>
                (Refrão)
            </p>
            <p>
                Por mais que eu tenha medo<br/>
                Como sei que tens também<br/>
                Não quero dar ao desespero<br/>
                O gosto de me ter refém<br/>
            </p>
            <p>
                Noites de amor eu conto a dedo<br/>
                De solidão eu já não sei<br/>
                Mas a razão não mais desejo<br/>
                Se a emoção me faz tão bem<br/>
            </p>
        </Container>
        </>
    );
}
