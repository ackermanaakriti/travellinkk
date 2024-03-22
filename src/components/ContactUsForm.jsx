import React, {useState} from 'react';
import {Button} from '../components';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {PostContactUsDatas} from '../utils/apiQueries';

const ContactUsForm = () => {    
    const [loading, setLoading] = useState(false);
    const [full_name, setFull_name] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [contents, setContents] = useState("");

    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const handleReset = () => {
        setFull_name("");
        setCountry("");
        setEmail("");
        setPhone("");
        setSubject("");
        setContents("");
    };

    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 
        const formData = {
            full_name,
            country,
            email,
            phone,
            subject,
            contents
        };

        PostContactUsDatas(formData).then((res) => {
            toast.success("Submitted Successfully");
            setLoading(false); 
            console.log(res);
            handleReset("");
        }).catch((error) => {
            console.log(error);
            setLoading(false); 
            toast.error("Please Fill All Fields");
        });
    };

    return (
        <div className='w-full bg-white rounded-[5px] flex flex-col p-8 gap-[11px]'>
            <p className='text-[#021327] font-inter text-[19px]'>Fill out the form below to send us a message.</p>
            <form onSubmit={handleSubmit}
                className='flex flex-col gap-[11px]'>
                <div className='flex flex-col gap-[7px]'>
                    <label htmlFor='full_name'>
                        <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Enter your full name</h2>
                    </label>
                    <input type='text' required placeholder='John Doe' id='full_name'
                        value={full_name}
                        onChange={
                            (e) => setFull_name(e.target.value)
                        }
                        className='w-full h-[45px] font-inter text-[#021327] border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                </div>
                <div className='flex flex-col lg:flex-row gap-[7px] lg:gap-[21px]'>
                    <div className='w-full flex flex-col gap-[7px]'>
                        <label htmlFor='country'>
                            <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Country</h2>
                        </label>
                        <input type='text' required placeholder='Nepal' id='country'
                            value={country}
                            onChange={
                                (e) => setCountry(e.target.value)
                            }
                            className='w-full h-[45px] font-inter text-[#021327] border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                    </div>
                    <div className='w-full flex flex-col gap-[7px]'>
                        <label htmlFor='email'>
                            <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Email</h2>
                        </label>
                        <input type='email' required placeholder='johndoe@gmail.com' id='email'
                            value={email}
                            onChange={
                                (e) => setEmail(e.target.value)
                            }
                            className='w-full h-[45px] font-inter text-[#021327] border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-[7px] lg:gap-[21px]'>
                    <div className='w-full flex flex-col gap-[7px]'>
                        <label htmlFor='phone'>
                            <h2 className='text-[#021327] text-[19px] font-medium font-inter whitespace-nowrap'>Contact Number</h2>
                        </label>
                        <input type='number' required placeholder='9887326409' id='phone'
                            value={phone}
                            onChange={
                                (e) => setPhone(e.target.value)
                            }
                            className='w-full h-[45px] font-inter text-[#021327] border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                    </div>
                    <div className='w-full flex flex-col gap-[7px]'>
                        <label htmlFor='subject'>
                            <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Subject</h2>
                        </label>
                        <input type='text' required placeholder='What is your message about?' id='subject'
                            value={subject}
                            onChange={
                                (e) => setSubject(e.target.value)
                            }
                            className='w-full h-[45px] font-inter text-[#021327] border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                    </div>
                </div>
                <div className='flex flex-col gap-[7px]'>
                    <label htmlFor='message'>
                        <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Message</h2>
                    </label>
                    <textarea type='text' required placeholder='Let us know all your inquiries and we will get back to you shortly' id='message'
                        value={contents}
                        onChange={
                            (e) => setContents(e.target.value)
                        }
                        className='w-full h-[145px] font-inter text-[#021327] border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                </div>
                <div className='w-full'>
                    <p className='float-right w-max font-inter text-[#0E9EDA] cursor-pointer'
                        onClick={handleReset}>Reset</p>
                </div>
                <div className='w-full flex justify-end'>
                    <div onMouseEnter={
                            () => setIsButtonHovered(true)
                        }
                        onMouseLeave={
                            () => setIsButtonHovered(false)
                        }
                        className="relative w-max">

                        <Button btnName={loading ? ('Please Wait Submitting...'):('Submit')}
                            handleOnclick={
                                () => ""
                            }
                            style={
                                `w-full rounded-[5px] ${
                                    isButtonHovered ? "bg-transparent text-[#0E9EDA]" : "bg-[#0E9EDA] text-white"
                                } border border-[#0E9EDA] font-semibold font-inter px-[32px] lg:px-[64px] py-[11px]`
                            }/> {
                        isButtonHovered && (
                            <div>
                                <div className="absolute top-[-20px] left-[-20px] w-[20px] h-[20px] rounded-full bg-[#0E9EDA] animate-sprinkle"></div>
                                <div className="absolute top-[-5px] right-[-5px] w-[5px] h-[5px] rounded-full bg-[#0E9EDA] animate-sprinkle"></div>
                                <div className="absolute bottom-[-5px] left-[-5px] w-[10px] h-[10px] rounded-full bg-[#0E9EDA] animate-sprinkle"></div>
                                <div className="absolute bottom-[-5px] right-[-5px] w-[15px] h-[15px] rounded-full bg-[#0E9EDA] animate-sprinkle"></div>
                            </div>
                        )
                    } </div>
                </div>
                <ToastContainer/>
            </form>

        </div>
    )
}

export default ContactUsForm
