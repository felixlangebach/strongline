import React, { Component } from "react";
import Typist from "react-typist";
import typistConfig from "../data/typistConfig";
import Form, { Input, Textarea } from "../components/Form";
import ContentSection from "../layouts/ContentSection";

export default class ContactView extends Component {
    render() {
        return (
            <div data-view="ContactView">
                <ContentSection>
                    <h2>
                        <Typist {...typistConfig}>Kontaktieren Sie uns</Typist>
                    </h2>
                    <Form action="#contact" submitText="Absenden">
                        <Input id="mail" type="email" placeholder="E-Mail" />
                        <Input id="name" type="text" placeholder="Vorname Nachname" />
                        <Textarea id="message" placeholder="Ihre Nachricht (max. 255 Zeichen)" />
                    </Form>
                </ContentSection>
            </div>
        );
    }
}
