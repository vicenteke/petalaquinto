import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import { Link, useMatch } from 'react-router-dom';

export default function Home() {

    return (<>
        <iframe className="full-width" src="https://www.youtube-nocookie.com/embed/-46hH_94khM?rel=0&autoplay=1" title="Clipe Vielas - Pétala Quinto" frameBorder="0" allow="modestbranding; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowFullScreen></iframe>
        <Container fluid className="content-body">
            <h2>Vielas</h2>
            <p>Vielas é uma música que fala sobre coisas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac risus molestie, laoreet orci in, placerat ligula. Maecenas sollicitudin lobortis rhoncus. Duis eget risus augue. Vivamus dignissim, mauris ut facilisis faucibus, diam felis lacinia mauris, in convallis urna odio eget ex.</p>
            <p>Nam iaculis nibh ipsum, at mattis nulla imperdiet eget. Integer felis odio, lobortis sit amet velit in, sagittis sagittis libero. Duis accumsan mi nec consequat venenatis.</p>
            <p>Maecenas non neque id ex pellentesque molestie at id nibh. Vivamus posuere lorem ligula, eget imperdiet dolor elementum sit amet. Nunc placerat pulvinar facilisis.</p>
            <p>Maecenas non neque id ex pellentesque molestie at id nibh. Vivamus posuere lorem ligula, eget imperdiet dolor elementum sit amet. Nunc placerat pulvinar facilisis. Suspendisse pharetra, orci vitae mattis eleifend, arcu nibh porta velit, et feugiat nisi ligula ultricies est. Phasellus commodo ut nibh et dapibus.</p>
        </Container>
        </>
    );
}
