import React, { Component } from "react";
import ReactDOM from "react-dom";

// Enable Crossbrowser support for the <dialog> tag
import "dialog-polyfill";
import "dialog-polyfill/dialog-polyfill.css";

export default class Dialog extends Component {
    state = {
        visible: false
    };

    hide() {
        this.setState({
            visible: false
        });
    }

    show() {
        this.setState({
            visible: true
        });
    }

    toggle() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        // https://getmdl.io/components/index.html#dialog-section
        const { id, title, children, agree, disagress } = this.props;
        const DialogNode = ReactDOM.findDOMNode(this);

        return (
            <dialog className="mdl-dialog" data-dialog-id={id}>
                <h4 className="mdl-dialog__title">
                    {title}
                </h4>
                <div className="mdl-dialog__content">
                    {children}
                </div>
                <div className="mdl-dialog__actions">
                    <button type="button" className="mdl-button" onClick={DialogNode.close}>
                        {agree}
                    </button>
                    <button type="button" className="mdl-button close" onClick={DialogNode.close}>
                        {disagree}
                    </button>
                </div>
            </dialog>
        );
    }
}
