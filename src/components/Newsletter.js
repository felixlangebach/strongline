import React from "react";
import ContentSection from "../layouts/ContentSection";
import Form, { ExpandableInput } from "../components/Form";

const Newsletter = ({ title, text, inputPlaceholder, placeholder }) => {
    return (
        <ContentSection modifier="spaced-inner" align="center">
            <h3>
                {title}
            </h3>
            <p className="newsletter-sign-up-text">
                {text}
            </p>
            <Form action="#newsletter-sign-up" showSubmitButton={false}>
                <ExpandableInput
                    type="mail"
                    icon="mail outline"
                    id="newsletter"
                    placeholder={placeholder}
                    inputPlaceholder={inputPlaceholder}
                />
            </Form>
        </ContentSection>
    );
};

export default Newsletter;
