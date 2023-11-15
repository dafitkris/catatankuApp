import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./ActionButton";

function NoteItem({ title, createdAt, body, id, onDelete }) {
    return (
        <div className="note-item">
            <NoteItemBody title={title} createdAt={createdAt} body={body} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}

export default NoteItem;
