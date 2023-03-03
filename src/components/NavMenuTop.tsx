import React from "react"
import { Col } from "react-bootstrap";
import { Link, useMatch } from 'react-router-dom';

export default function NavMenuTop() {

    const isMusicaActive = useMatch('/musica') !== null
    const isSobreActive = useMatch('/sobre') !== null
    const isHomeActive = !isMusicaActive && !isSobreActive

    return (
        <Col className="d-flex align-items-center" id="top-nav-menu">
            <Link to="/" key="home" className={
                isHomeActive ? "nav-menu-link active" : "nav-menu-link"}
                >
                Destaques
            </Link>
            <Link to="/musica" key="musica" className={
                isMusicaActive ? "nav-menu-link active" : "nav-menu-link"}
                >
                Música
            </Link>
            <Link to="/sobre" key="sobre" className={
                isSobreActive ? "nav-menu-link active" : "nav-menu-link"}
                >
                Sobre
            </Link>
        </Col>
    );
}
