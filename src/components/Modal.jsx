import React,{useRef, useState} from "react";
import './Modal.css'

const Modal = ({onClose}) => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [date,setDate] = useState('')

    let currDate = new Date();

let todayDate = currDate.getDate()
let todaymonth = currDate.getMonth()+1
let todayyear = currDate.getFullYear();
const fullDate = `${todayyear}-${todaymonth}-${todayDate}`




    const modalRef = useRef()
   function handleSubmit(e){
    e.preventDefault();

    }

    function closeModal(e){
        if(modalRef.current === e.target){
            onClose();

        }
    }
    function submit(){
        
       
        if(phone.toString().length<10){
            displayAlert('Invalid phone number. Please enter a 10-digit phone number.')
            setPhone('')
        }
        else if((new Date(date))>(new Date(fullDate))){
            displayAlert('Invalid date of birth. Date of birth can not be in future');
            setDate('')
            console.log('future date');
        }
       else if(!(email.includes('@'))){
            displayAlert('Invalid email.')
            setEmail('')
        }else{
            setDate('')
        setEmail('')
        setName('')
        setPhone('')

        }

       
    }
    function displayAlert(msg){
        alert(msg)
    }

    console.log(date);
  return (
    <div ref={modalRef}  className="modal" onClick={closeModal}>
      <div className="modal-content" style={{
        display:'flex',
        alignItems:'center',
        flexDirection:'column'
      }} >

        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="username">Username:</label>
            <input type="text"  required id="username" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input type="email"  required id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="phone">Phone:</label>
            <input type="number"  required id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date"  required id="dob" value={date} onChange={(e)=>setDate(e.target.value)}/>
            </div>
            <button type="sumbit"  className='submit-button' onClick={submit}>Submit</button>
            
        </form>
      </div>
    </div>
  );
};

export default Modal;
