import React, { useState } from 'react'
import TagInput from '../../components/Navbar/input/TagInput';
import { MdClose } from 'react-icons/md';

const AddEditNotes = ({ noteData, type, onclose }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState([]);
    const [error, setError] = useState(null);

    //add note
    const addNewNote = async ()=>{};
    //edit not
    const editNote = async ()=>{};


    const handleAddNote = () => {
        if (!title) {
            setError("Please enter the title");
            return;
        }
        if (!content) {
            setError("Please enter the content");
            return;
        }

        setError("");

        if(type === "edit"){
            editNote();
        }else{
            addNewNote();
        }
        
    };

    return (
        <div className='relative'>
            <button className='h-10 w-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-400' onClick={onclose}>
                <MdClose className='text-sl text-black' />
            </button>
            <div className='flex flex-col gap-2'>
                <label className="text-xs text-slate-40">TITLE</label>
                <input 
                    type="text"
                    className='text-2xl text-slate-950 outline-none'
                    placeholder='Go To Gym At 5'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='flex flex-col gap-2 mt-4'>
                <label className="text-xs text-slate-40">CONTENT</label>
                <textarea 
                    className='text-sm text-slate-950 outline-none bg-slate-100 p-2 rounded-none'
                    placeholder='Content'
                    rows={10}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className='mt-4'>
                <label className="text-xs text-slate-40">TAGS</label>
                <TagInput tags={tags} setTags={setTags} />
            </div>
            {error && <p className='text-red-500 text-xs pt-5'>{error}</p>}
            <button className='mt-5 p-3 font-medium bg-blue-500 hover:bg-blue-600 w-full rounded' onClick={handleAddNote}>ADD</button>
        </div>
    );
};

export default AddEditNotes;
