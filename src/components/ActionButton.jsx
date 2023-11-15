import React from "react";

function DeleteButton({ id, onDelete }) {
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    );
}

export default DeleteButton;
