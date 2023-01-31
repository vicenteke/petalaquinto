import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import { Link, useMatch } from 'react-router-dom';

import Icon from "./Icon";

export default function NavMenuBottom() {

    const isMusicaActive = useMatch('/musica') !== null
    const isSobreActive = useMatch('/sobre') !== null
    const isHomeActive = !isMusicaActive && !isSobreActive

    const linkClassNames = "nav-menu-link"
    const linkActiveClassNames = linkClassNames + " active"

    return (
        <Container fluid id="bottom-nav-menu-bar">
            <Row className="d-flex align-items-center">
                <Col className="d-flex align-items-center" id="bottom-nav-menu">
                    <Col className="d-flex justify-content-evenly">
                        <Link to="/" key="home" className={
                            isHomeActive ? linkActiveClassNames : linkClassNames}
                            >
                            <Icon src="star-icon.svg" alt="Ir para página Destaques"
                                className="bottom-icon-image" />
                            <br/>
                            <span>Destaques</span>
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-evenly">
                        <Link to="/musica" key="musica" className={
                            isMusicaActive ? linkActiveClassNames : linkClassNames}
                            >
                            <Icon src="headphones-icon.svg" alt="Ir para página Música"
                                className="bottom-icon-image" />
                            <br/>
                            <span>Música</span>
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-evenly">
                        <Link to="/sobre" key="sobre" className={
                            isSobreActive ? linkActiveClassNames : linkClassNames}
                            >
                            <Icon src="question-icon.svg" alt="Ir para página Sobre"
                                className="bottom-icon-image" />
                            <br/>
                            <span>Sobre</span>
                        </Link>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}
