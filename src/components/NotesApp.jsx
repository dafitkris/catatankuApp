import React from "react";
import { getData } from "../utils/index";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getData(),
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                    }
                ]
            }
        });
    }

    render() {
        return (
            <React.StrictMode>
                <div>
                    <div className="note-app__header">
                        <h1>Aplikasi Catatanku</h1>
                    </div>

                    <div className="note-app__body">
                        <NoteInput addNote={this.onAddNoteHandler} />

                        <h2>Catatan aktif</h2>
                        <NoteList
                            notes={this.state.notes}
                            onDelete={this.onDeleteHandler}
                        />
                    </div>
                </div>
            </React.StrictMode>
        );
    }
}

export default NotesApp;
