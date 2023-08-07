import React, { useRef } from 'react';
import "./ContactForm.css";
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import axios from "../../firebase/axios";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const form = useRef();

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

    const { register, handleSubmit, reset, formState: {errors} } = useForm();
    
    const sendEmail = () => {
        emailjs.sendForm('service_y4g6vh7', 'template_41xcyja', form.current, 'pFROFL2_cSiKOCV5X')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }


    const onSubmit = (data) => {
        data["timeStamp"] = new Date().toLocaleString();
        axios.post("/contacts.json", data)
            .then(() => {
                notifySuccess()
                sendEmail()
                reset();
            })
            .catch(() => {
                notifyError()
            })
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={form}>
        <label>
            <input 
                type="text" 
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
                type="email" 
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
            <textarea 
                {...register("textMessage", 
                {
                     maxLength: 200,
                })} 
                placeholder="Message" 
                rows="6"
                name="message"
            >

                </textarea>
            {errors?.textMessage?.type === "maxLength" && (
                <p className="error-message">*Message cannot exceed 200 characters</p>
            )}
        </label>
            <button className="form-submit-btn form-input" name="submit" type="submit">Submit</button>
            <ToastContainer />
    </form>
  )
}
