import React from 'react'
import ButtonGradient from "../assets/svg/ButtonGradient";
import AdminBytejas from '../AdminPage/AdminBytejas';
import AdminDataform from '../AdminPage/AdminDataform';
import Header from '../components/Header';
import '../index.css';

function AdminpanelFinal() {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <AdminBytejas/>
        <AdminDataform/>
        <ButtonGradient />
      </div>
  )
}

export default AdminpanelFinal
