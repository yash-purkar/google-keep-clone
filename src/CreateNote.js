import React, { useState } from 'react';
import add from './Images/add.png';
import remove from './Images/remove.svg'

const CreateNote = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [data, setData] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const handleClick = () => {

    if (title && content) {
      const note = {
        title,
        content,
        id: new Date().getTime().toString()
      }
      setData([...data, note]);
      setTitle("")
      setContent("")
    }
    else {
      setErrMsg("Please Fill the data");
      setTimeout(() => {
        setErrMsg("")
      }, 2000)
    }
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
        <input type="text" name="" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title.." className="  w-56 border h-10  border-yellow-500 rounded-xl px-3 tracking-wider placeholder-gray-500" maxLength={15} />

        <textarea name="" id="" cols="30" rows="5" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write a note..." className=" w-56 p-4 border-2 border-yellow-500 border-t-0 rounded-lg placeholder-gray-400 tracking-wider mb-6 resize-none" maxLength={28} ></textarea>

        <button onClick={handleClick} className="border-1 border-black bg-white  w-8 mb-3"><img src={add} alt="add" /></button>

        <p className='h-3  mb-5 text-red-500 tracking-wider'>{errMsg}</p>
      </div>


      <hr className='border- border-yellow-300' />


      {
        data.map((elem) => {
          return (
            <>
              <div key={elem.id} className="flex justify-center flex-col items-center m-auto border border-yellow-500 w-56  overflow-scroll mt-10 bg-white px-3 rounded-md h-28">

                <h2 className='bg-white w-full text-center px-5 py-1 tracking-wider border-b border-gray-400 font-extrabold '>{elem.title}</h2>

                <p className='bg-white w-full text-center px-5 pt-2  py-2 tracking-wider'>{elem.content}</p>

                <button onClick={() => deleteNote(elem.id)} className=" 
         px-3 relative w-11"><img src={remove} alt="remove" className='bg-white border rounded-md border-red-500' /></button>

              </div>
            </>
          )
        })
      }
    </>
  )
}

export default CreateNote;