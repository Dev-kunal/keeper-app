import React, { useState } from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

function CreateArea(props) {
  const [noteview, setnoteview] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function handleclick() {
    setnoteview(true);
  }

  return (
    <div onClick={handleclick}>
      <form className="create-note">
        {noteview && (
          <input
            autoFocus
            autoComplete="off"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={noteview ? "3" : "1"}
        />
        <button onClick={submitNote}>
          <AddRoundedIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
