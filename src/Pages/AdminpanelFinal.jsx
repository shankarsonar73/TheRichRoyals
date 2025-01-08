import React from 'react'
import ButtonGradient from "../assets/svg/ButtonGradient";
import Admincomponent from '../AdminPage/admincomponent';
import Adminform from '../AdminPage/adminform';
import Header from '../components/Header';
import '../index.css';

function AdminpanelFinal() {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <Admincomponent/>
        <Adminform/>
        <ButtonGradient />
      </div>
  )
}

export default AdminpanelFinal
