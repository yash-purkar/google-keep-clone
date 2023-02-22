import React, { useState } from 'react';

const CreateNote = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <div>
        <input type="text" name="" value={title} onChange={(e) => setTitle(e.target.value)} className="border-2 border-black" />

        <textarea name="" id="" cols="30" rows="10" value={content} onChange={(e) => setContent(e.target.value)} className="border-2 border-black"></textarea>
        <button className="border-1 border-black bg-white
         px-3 text-2xl">+</button>
      </div>
    </>
  )
}

export default CreateNote;