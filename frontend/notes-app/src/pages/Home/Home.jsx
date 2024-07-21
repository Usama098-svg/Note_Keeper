import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import NoteCard from '../../components/Navbar/Cards/NoteCard';
import { MdAdd } from 'react-icons/md';
import AddEditNotes from './AddEditNotes';
import Modal from 'react-modal';

function Home() {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const handleOpenModal = () => {
    setOpenAddEditModal({
      isShown: true,
      type: "add",
      data: null,
    });
  };

  const handleCloseModal = () => {
    setOpenAddEditModal({
      isShown: false,
      type: "add",
      data: null,
    });
  };

  return (
    <>
      <Navbar />
      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          <NoteCard title="Meeting on 7th April" date="3rd April" content="Meeting on 7th April Meeting on 7th April" tags={"#Meeting"} isPinned={true} onDelete={() => { }} onEdit={() => { }} onPinNote={() => { }} />
          <NoteCard title="Meeting on 7th April" date="3rd April" content="Meeting on 7th April Meeting on 7th April" tags={"#Meeting"} isPinned={true} onDelete={() => { }} onEdit={() => { }} onPinNote={() => { }} />
          <NoteCard title="Meeting on 7th April" date="3rd April" content="Meeting on 7th April Meeting on 7th April" tags={"#Meeting"} isPinned={true} onDelete={() => { }} onEdit={() => { }} onPinNote={() => { }} />
          <NoteCard title="Meeting on 7th April" date="3rd April" content="Meeting on 7th April Meeting on 7th April" tags={"#Meeting"} isPinned={true} onDelete={() => { }} onEdit={() => { }} onPinNote={() => { }} />
          <NoteCard title="Meeting on 7th April" date="3rd April" content="Meeting on 7th April Meeting on 7th April" tags={"#Meeting"} isPinned={true} onDelete={() => { }} onEdit={() => { }} onPinNote={() => { }} />
          <NoteCard title="Meeting on 7th April" date="3rd April" content="Meeting on 7th April Meeting on 7th April" tags={"#Meeting"} isPinned={true} onDelete={() => { }} onEdit={() => { }} onPinNote={() => { }} />
          <NoteCard title="Meeting on 7th April" date="3rd April" content="Meeting on 7th April Meeting on 7th April" tags={"#Meeting"} isPinned={true} onDelete={() => { }} onEdit={() => { }} onPinNote={() => { }} />
        </div>
      </div>
      <button
        className='w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-500 hover:bg-blue-600 absolute right-10 bottom-10'
        onClick={()=>{ setOpenAddEditModal({isShown:true, type:"add", data:null})}}
      >
        <MdAdd className='text-[32px] text-white' />
      </button>
      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={()=>{}}
        style={{
          overlay: {
            background: "rgba(0,0,0,0.5)",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md max-auto mt-14 p-5"
      >
        <AddEditNotes 
        type={openAddEditModal.type}
        noteData={openAddEditModal.data}
        onclose={()=>{
          setOpenAddEditModal({isShown:false, type:"add", data:null})
        }}/>
      </Modal>
    </>
  );
};

export default Home;
