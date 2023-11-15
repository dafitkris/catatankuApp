import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        const TextChar = "Sisa Karakter";
        const limitTitle = `${TextChar} : ${50 - this.state.title.length}`;

        return (
            <div className="note-input">
                <h2>Buat catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <h4 className="note-input__title__char-limit">{limitTitle}</h4>

                    <input
                        type="text"
                        className="note-input__title"
                        placeholder="Judul Catatan"
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler}
                        maxLength="50"
                    />
                    <textarea
                        className="note-input__body"
                        placeholder="Tulis catatanmu disini ya"
                        value={this.state.body}
                        onChange={this.onBodyChangeEventHandler}
                    />

                    <button type="submit">Buat</button>
                </form>
            </div>
        );
    }
}

export default NoteInput;
