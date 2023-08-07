import React, { useRef } from 'react';
import'./Career.css';
import { Link } from "react-router-dom";
import { BGWLogo } from '../components/Global/BGWLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import axios from "../firebase/axios";
import emailjs from '@emailjs/browser';

import {
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

export const Career = () => {

  const notifyResumeSuccess = () => toast.success('Submitted successfully - Thank you for sending us your resume!', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  const notifyError = () => toast.error("Oops, something wasn't right!", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  const { register, handleSubmit, reset, formState: {errors} } = useForm();
  const form = useRef();

 
  
  const onSubmit = (data) => {
      let reader = new FileReader();
      reader.readAsDataURL(data.resume[0]);
      reader.onload = function () {
        const sendEmailWithResume = () => {
          emailjs.sendForm('service_y4g6vh7', 'template_6u7k6od', form.current, 'pFROFL2_cSiKOCV5X')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        }
        data["resume"] = reader.result;
        data["timeStamp"] = new Date().toLocaleString();
      axios.post("/Careers.json", data)
      .then(() => {
          notifyResumeSuccess()
          sendEmailWithResume()
          reset();
      })
      .catch(() => {
          notifyError()
      })
    }

  }
  return (
    <div className='career-ctn'>
        <Link to="/"><BGWLogo /></Link>
        <div className="career-heading">
          <h1>BGW Careers</h1>
        </div>
        <div className="career-body">
          <p>
            Our diverse group of companies operate in a variety of industries and we value motivated staff. We are always looking for a wide range of skills and experience. Please submit your resume below so we can consider which part of our business you may be best suited to join.
          </p>
          <div className="career-form-ctn">
            <form onSubmit={handleSubmit(onSubmit)} ref={form}>
                <input 
                    className="form-input"
                    {...register("firstName", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z]+$/i
                    })} 
                    placeholder="First Name" 
                /> 
                {errors?.firstName?.type === "required" && 
                    <p className="error-message">*This field is required</p>
                }
                {errors?.firstName?.type === "maxLength" && (
                    <p className="error-message">*First name cannot exceed 20 characters</p>
                )}
                {errors?.firstName?.type === "pattern" && (
                    <p className="error-message">*Alphabetical characters only</p>
                )}
                <input 
                    className="form-input"
                    {...register("lastName", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z]+$/i
                    })} placeholder="Last Name" 
                />
                {errors?.lastName?.type === "required" && 
                    <p className="error-message">*This field is required</p>
                }
                {errors?.lastName?.type === "maxLength" && (
                    <p className="error-message">*Last name cannot exceed 20 characters</p>
                )}
                {errors?.lastName?.type === "pattern" && (
                    <p className="error-message">*Alphabetical characters only</p>
                )} 
                <input 
                    className="form-input"
                    {...register("email", {
                            required: true,
                            maxLength: 30,
                            pattern: /^\S+@\S+$/i
                    })} placeholder="Email" 
                /> 
                {errors?.email?.type === "required" && 
                    <p className="error-message">*This field is required</p>
                }
                {errors?.email?.type === "pattern" && (
                    <p className="error-message">*Invalid email address</p>
                )} 

                <input 
                    className="form-input"
                    {...register("phone", 
                    {
                      pattern: /0?(61)0?(\d{1,2})(\d{4})(\d{4})/g,
                      maxLength: 20,
                    })} 
                    placeholder="Phone Number" 
                /> 
                {errors?.phone?.type === "maxLength" && (
                  <p className="error-message">*Phone number cannot exceed 20 characters</p>
                )}
                {errors?.phone?.type === "pattern" && (
                  <p className="error-message">*Invalid phone number, try with (+61)</p>
                )}

                <input 
                    className="form-input"
                    {...register("address", {
                            maxLength: 120,
                    })} placeholder="Address" 
                /> 
                {errors?.address?.type === "maxLength" && (
                  <p className="error-message">*Address cannot exceed 120 characters</p>
                )}

                <input 
                    className="form-input"
                    {...register("preferredLocation", {
                            maxLength: 120,
                    })} placeholder="Preferred Location" 
                /> 
                {errors?.preferredLocation?.type === "maxLength" && (
                  <p className="error-message">*Address cannot exceed 120 characters</p>
                )}

                <label>Industry interested in </label>
                <select {...register("industry")} 
                  className="form-input"
                >
                  <option value="Electrical & Data">Electrical & Data</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Mining">Mining</option>
                  <option value="Applicances">Applicances</option>
                  <option value="Cabling">Cabling</option>
                  <option value="Home Automation">Home Automation</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="CCTV and Security">CCTV and Security</option>
                </select>


                <label>Are you currently elegible to work in Australia: </label>
                <div className="radio-btn-ctn">
                <p>
                  <input 
                    type="radio" 
                    value="yes"
                    checked 
                    {...register("eligibility")}
                    /> Yes
                </p>
                <p>
                  <input 
                    type="radio"
                    {...register("eligibility")} 
                    value="no" 
                    /> No
                </p>
                </div>
                <label>Attach your CV</label>
                <input 
                    type="file"
                    className="form-input"
                    accept=".pdf, .doc, .docx"
                    {...register("resume", {
                      required: true,
                      validate: {
                        lessThan2MB: (files) => files[0]?.size < 2000000 || 'Max 3MB',
                      },
                    })}
                /> 
                  {errors?.resume?.type === "required" && 
                    <p className="error-message">*This field is required</p>
                  }
                  {errors.resume?.type === 'lessThan2MB' && (
                      <p className="error-message">*Required and file size must be under 2MB</p>
                  )}
              
              <div className="form-btn-ctn">
                <button className="form-submit-btn form-input" name="submit" type="submit">Submit</button>
                <button className="form-submit-btn form-input" name="submit" type="button" onClick={() => reset()}>Reset</button>
              </div>
            </form>
          </div>
        </div>
        <div className="return-btn">
          <Link to="/">
            <FontAwesomeIcon icon={faXmark} color="#f6f6f9" size="lg"/>
          </Link>
        </div>
        <ToastContainer />     
    </div>
  )
}
