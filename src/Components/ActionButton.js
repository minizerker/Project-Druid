import React, { Component } from 'react';
import { connect } from "react-redux";
import { addList, addCard } from '../Actions';


class ActionButton extends Component {
    state = {
        formOpen: false,
        text: "",
    };
    
    openForm = () => {
        this.setState({
            formOpen: true,
        });
    }

    closeForm = () => {
        this.setState({
            formOpen: false,
        });
    }

    handleInputChange = e => {
        this.setState({
            text: e.target.value,
        })
    }

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if (text) {
            dispatch(addList(text));
        }

        return;
    }

    handleAddcard = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if(text) {
            dispatch(addCard(listID, text));
        }
        return;
    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "Add another list" : "Add another card"

        return (
            <div onClick={this.openForm}>
                <p>{buttonText}</p>
            </div>
        )
    }

    renderForm = () => {

        const { list } = this.props;

        const placeholder = list 
            ? "Enter new list title"
            : "Enter new card title";

        const buttonTitle = list ? "Add List" : "Add card"
        return <div>
            <textarea 
                placeholder={placeholder} 
                autoFocus
                onBlur={this.closeForm}
                value={this.state.text}
                onChange={this.handleInputChange}
                style={{
                    minHeight: 80,
                    resize: "none",
                    width: "100%",
                    outline: "none",
                    overflow: "hidden",
                    border: "none"
                }}
            />
            <button className="btn btn-sm btn-light" type="button" onMouseDown={list ? this.handleAddList: this.handleAddcard}>{buttonTitle}</button>
        </div>
    };

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

export default connect()(ActionButton);