import React, { useRef } from 'react';
import './PrivacyPolicy.css';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { BGWLogo } from '../components/Global/BGWLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from "react-hook-form";
import axios from "../firebase/axios";

import {
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

export const PrivacyPolicy = () => {
  const form = useRef();
  const { register, handleSubmit, watch, reset, formState: {errors} } = useForm();
  const notifySuccess = () => toast.success('Thank you! We will be in touch with you shortly.', {
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

  const onSubmit = (data) => {
      data["timeStamp"] = new Date().toLocaleString();
      axios.post("/complaints.json", data)
          .then(() => {
              notifySuccess()
              reset();
          })
          .catch(() => {
              notifyError()
          })
  };

  return (
    <div className='privacy-ctn'>
      <Link to="/"><BGWLogo /></Link>
      <div className="privacy-policy-heading">
        <h1>Privacy Policy</h1>
      </div>
      <div className="privacy-policy-body">
        <p>
          This statement sets outs the BGW Group’s policy concerning the collection and use of your personal information.
        </p>
        <p>
          The BGW Group respects and values the privacy of its customers and understands that you have a right to control your personal information. The BGW Group will not resell or rent personal information about customers or customer lists to third parties.
        </p>
        <p>

          The BGW Group may contact customers from time to time, either by email or otherwise to inform them of special offers, promotions, new product information and services. The BGW Group recognises and respects that not all customers wish to receive this information and will use all reasonable endeavours to ensure that customers have the ability to opt out of receiving such contact.
        </p>
        <p>
          However this site is visited, the BGW Group may record information about your usage of this site such as the time of the visit, its duration and the pages visited. This is intended to assist The BGW Group in ascertaining from what sections of the site users derive the most benefit or interest, and to assist in ensuring that the site contains content which is directly relevant to the interests of users. For this purpose we may use cookies to determine usage of the website.
        </p>
        <p>
          The BGW Group will not use or disclose any information about you without your consent, unless required by law or to protect the rights or property of The BGW Group. Users should be aware that in order to operate and maintain this site or deliver a service from this site we may sometimes share information with an internet service provider or consultant.
        </p>
        <p>
          The BGW Group may also provide links to other websites, which are not under the control of The BGW Group. The BGW Group cannot accept responsibility for the conduct of operators of these sites.
        </p>
        <p>
            By using this site you signify your consent to this BGW Group privacy policy. If you do not agree to this policy, please do not use this website. The BGW Group reserves the right, at its discretion, to change, modify, add or remove portions of this policy at any time. Please check this statement periodically for changes. Your continued use of the The BGW Group website following the posting of changes to these terms will mean you accept those changes.
        </p>

        <h2>Making a complaint</h2>
        <p> A complaint can be reported verbally (by telephone or in person) or in writing (letter or electronic form below) to the Privacy Officer.
        </p>
        <div className="complaint-form-ctn">
          <form onSubmit={handleSubmit(onSubmit)} ref={form}>
              <label>
                <input 
                    className="form-input"
                    {...register("firstName", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z]+$/i
                    })} 
                    placeholder="First name" 
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
              </label>
              <label>
                <input 
                    className="form-input"
                    {...register("lastName", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z]+$/i
                    })} 
                    placeholder="Last name" 
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
              </label>

              <label>
                <input 
                    className="form-input"
                    {...register("address", {
                            required: true,
                            maxLength: 100,
                    })} 
                    placeholder="Address" 
                /> 
                {errors?.email?.type === "required" && 
                    <p className="error-message">*This field is required</p>
                }
                {errors?.lastName?.type === "maxLength" && (
                    <p className="error-message">*Last name cannot exceed 100 characters</p>
                )}
              </label>

              <label>
                <input 
                    className="form-input"
                    {...register("email", {
                            required: true,
                            maxLength: 30,
                            pattern: /^\S+@\S+$/i
                    })} 
                    placeholder="Email" 
                /> 
                {errors?.email?.type === "required" && 
                    <p className="error-message">*This field is required</p>
                }
                {errors?.email?.type === "pattern" && (
                    <p className="error-message">*Invalid email address</p>
                )} 
              </label>
              <label>
                <input 
                    className="form-input"
                    {...register("personInvolved", {
                            required: true,
                            maxLength: 30,
                            pattern: /^[a-zA-Z ]+$/ 
                    })} 
                    placeholder="Who your complaint is about" 
                /> 
          
                {errors?.email?.type === "pattern" && (
                    <p className="error-message">*Invalid person name</p>
                )} 
              </label>
              <label>
                <textarea 
                    {...register("complaintIssue", 
                    {
                        maxLength: 200,
                    })} 
                    placeholder="What your complaint is about" 
                    rows="6"
                >
                </textarea>
                {errors?.textMessage?.type === "maxLength" && (
                    <p className="error-message">*Text cannot exceed 200 characters</p>
                )}
              </label>
              <label>
                <textarea 
                    {...register("complaintImpact", 
                    {
                        maxLength: 200,
                    })} 
                    placeholder="The impact of the breach on you" 
                    rows="6"
                >
                </textarea>
                {errors?.textMessage?.type === "maxLength" && (
                    <p className="error-message">*Text cannot exceed 200 characters</p>
                )}
              </label>
              <label>
                <textarea 
                    {...register("desireOutcome", 
                    {
                        maxLength: 200,
                    })} 
                    placeholder="The outcome you wish to make from this complaint" 
                    rows="6"
                >
                </textarea>
                {errors?.textMessage?.type === "maxLength" && (
                    <p className="error-message">*Text cannot exceed 200 characters</p>
                )}
              </label>
              <p>
                For privacy reasons we only accept complaints made by the person involved or an authorised representative. If you wish to complain on behalf of another person, please provide proof of authority to do so.
              </p>
              <div className="form-btn-ctn">
                <button className="form-submit-btn" name="submit" type="submit">Submit</button>
                <button className="form-submit-btn" name="submit" type="button" onClick={() => reset()}>Reset</button>
              </div>
          </form>
        </div>

        <div className="return-btn">
          <Link to="/">
            <FontAwesomeIcon icon={faXmark} color="#f6f6f9" size="lg"/>
          </Link>
        </div>
        <ToastContainer />            
      </div>
    </div>
  )
}
