import React from 'react';
import { getInitial } from "../../../utils/helper";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className='flex items-center gap-3'>
      <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 bg-slate-400 font-bold'>{getInitial("Usama Ahmed")}</div>
      <div>
        <p>Usama Ahmed</p>
        <button className='underline text-slate-500' onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}

export default ProfileInfo;
