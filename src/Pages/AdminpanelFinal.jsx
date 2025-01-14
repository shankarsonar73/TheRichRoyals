import React from 'react'
import ButtonGradient from "../assets/svg/ButtonGradient";
import { Toaster } from 'react-hot-toast';
import CourseList from '../components/CourseList';
import Header from '../components/Header';
import CourseForm from '../components/CourseForm';
import CourseListAdmin from '../AdminPage/CourseListAdmin';
import AdminHeader from '../components/AdminHeader';
import '../index.css';


function AdminpanelFinal() {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <AdminHeader/>
        <CourseForm/>
        <CourseListAdmin/>
        <Toaster position="top-right" />
        <ButtonGradient />
      </div>
  )
}

export default AdminpanelFinal
