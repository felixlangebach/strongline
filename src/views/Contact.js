import React, { Component } from "react";
import Form, { Input, Textarea } from "../components/Form";

export default class ContactView extends Component {
    render() {
        return (
            <div data-view="ContactView">
                <h2>Kontaktieren Sie uns</h2>
                <Form action="#contact" submitText="Absenden">
                    <Input id="mail" type="email" placeholder="E-Mail" />
                    <Input id="name" type="text" placeholder="Vorname Nachname" />
                    <Textarea id="message" placeholder="Ihre Nachricht (max. 255 Zeichen)" />
                </Form>
            </div>
        );
    }
}
