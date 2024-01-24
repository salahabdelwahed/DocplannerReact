import React from 'react'
import '../CSS/Boxs.css'
const boxs = () => {
  return (
    <div className='boxs'>
      <div className="box-1">
        <img src="https://www.docplanner.com/icons/icon-patients.svg" alt="" />
        <h1>For patients</h1>
        <h2>Find a doctor, book a visit and solve any health-related doubt</h2>
        <select name="" id="">
            <option value=""><a href="">Choose country</a></option>
            <option value="">Argentina</option>
            <option value="">Brazil</option>
            <option value="">Chile</option>
            <option value="">Colombia</option>
            <option value="">Czech</option>
            <option value="">Germany</option>
            <option value="">Italy</option>
            <option value="">Mexico</option>
            <option value="">Peru</option>
            <option value="">Poland</option>
            <option value="">Portugal</option>
            <option value="">Spain</option>
            <option value="">Turkey</option>
        </select>
      </div>
      <div className="box-2">
      <img src="https://www.docplanner.com/icons/icon-doctors.svg" alt="" />
        <h1>For doctors</h1>
        <h2>Save time managing visits and cut no-shows by half</h2>
        <select name="" id="">
        <option value=""><a href="">Choose country</a></option>
            <option value="">Argentina</option>
            <option value="">Brazil</option>
            <option value="">Chile</option>
            <option value="">Colombia</option>
            <option value="">Czech</option>
            <option value="">Germany</option>
            <option value="">Italy</option>
            <option value="">Mexico</option>
            <option value="">Peru</option>
            <option value="">Poland</option>
            <option value="">Portugal</option>
            <option value="">Spain</option>
            <option value="">Turkey</option>
        </select>
      </div>
      <div className="box-3">
      <img src="https://www.docplanner.com/icons/icon-clinics.svg" alt="" />
        <h1>For clinics</h1>
        <h2>Deliver an exceptional patient experience in your clinic</h2>
        <select name="" id="">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>
      </div>
    </div>
  )
}

export default boxs
