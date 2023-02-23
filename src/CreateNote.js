import React, { useState } from 'react';
import add from './Images/add.png';
import remove from './Images/remove.svg'

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [data, setData] = useState([]);

  const handleClick = () => {
    const note = {
      title,
      content,
      id: new Date().getTime().toString()
    }
    setData([...data, note]);
    setTitle("")
    setContent("")
  }

  const deleteNote = (id) => {
    // console.log(id)
    const returnNotes = data.filter((elem) => {
      return elem.id !== id;
    })
    setData(returnNotes)
  }
  return (
    <>
      <div>
        <input type="text" name="" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title.." className="border-2 border-black" />

        <textarea name="" id="" cols="30" rows="10" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write a note.." className="border-2 border-black"></textarea>
        <button onClick={handleClick} className="border-1 border-black bg-white
         px-3 text-2xl"><img src={add} alt="" /></button>
      </div>

      {
        data.map((elem) => {
          return (
            <div key={elem.id}>
              <h2>{elem.title}</h2>
              <p>{elem.content}</p>
              <button onClick={() => deleteNote(elem.id)} className="border-1 border-black bg-white
         px-3 text-xl"><img src={remove} alt="" /></button>
              <br />
              <hr />
              <br />
            </div>
          )
        })
      }
    </>
  )
}

export default CreateNote;