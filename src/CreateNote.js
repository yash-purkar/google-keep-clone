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
      <div className='flex flex-col items-center justify-center'>
        <input type="text" name="" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title.." className="  w-56 border h-10  border-yellow-500 rounded-xl px-3 tracking-wider placeholder-gray-500" />

        <textarea name="" id="" cols="30" rows="5" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write a note..." className=" w-56 p-4 border-2 border-yellow-500 border-t-0 rounded-lg placeholder-gray-400 tracking-wider mb-3"></textarea>

        <button onClick={handleClick} className="border-1 border-black bg-white w-8 mb-3"><img src={add} alt="" /></button>
      </div>

      {
        data.map((elem) => {
          return (
            <div key={elem.id} className="bg-yellow-50">
              <h2>{elem.title}</h2>
              <p>{elem.content}</p>
              <button onClick={() => deleteNote(elem.id)} className="border-1 border-black bg-white
         px-3 text-xl"><img src={remove} alt="" /></button>

            </div>
          )
        })
      }
    </>
  )
}

export default CreateNote;