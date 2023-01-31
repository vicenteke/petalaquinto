import React from "react"
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";

import NavMenuTop from "./NavMenuTop";
import SocialMenu from "./SocialMenu";


export default function Header() {
    return (
        <Container fluid id="menu-bar">
            <Row className="d-flex align-items-center">
                <NavMenuTop />
                <SocialMenu />
            </Row>
        </Container>
    );
}
