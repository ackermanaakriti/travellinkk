import React, {useState} from 'react';
import "../styles/style.css";
import {Button} from '../components';
import {BiChevronLeft} from 'react-icons/bi';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PostCustomizeDatas } from '../utils/apiQueries';

const PopupCustomizeForm = ({handleCrossA}) => {
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [loading, setLoading] = useState(false);

    const [full_name, setFull_name] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [trip_name, setTrip_name] = useState("");
    const [details, setDetails] = useState("");

    const handleReset = () => {
        setFull_name("");
        setCountry("");
        setEmail("");
        setTrip_name("");
        setDetails("");
    };

    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 
        const formData = {
            full_name,
            country,
            email,
            trip_name,
            details,
        };

        PostCustomizeDatas(formData).then((res) => {
            toast.success("Submitted Successfully");
            console.log(res);
            setLoading(false); 
            handleReset("");
        }).catch((error) => {
            console.log(error);
            setLoading(false); 
            toast.error("Please Fill All Fields");
        });
    };
    return (
        <div style={
                {animation: "loginAnimation ease-out 0.5s"}
            }
            className=' overflow-x-hidden z-40 h-[70vh] w-[98vw] lg:w-fit lg:h-fit fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] overflow-y-auto bg-white p-[11px] rounded-[25px] lg:rounded-[5px] shadow-xl'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col p-4 gap-[9px] overflow-x-hidden'>
                <div className='w-full flex justify-center pb-5 block lg:hidden'>
                    <button onClick={
                        () => handleCrossA()
                    }>
                        <h2 className='flex gap-[5px] items-center font-normal text-[19px] underline underline-offset-2'>
                            <span className='text-[25px]'><BiChevronLeft/></span>Go Back</h2>
                    </button>
                </div>
                <p className='text-[#021327] font-inter text-[19px]'>Fill out the form below to send us a message.</p>
                <div className='flex flex-col gap-[7px]'>
                    <label htmlFor='full_name'>
                        <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Enter your full name</h2>
                    </label>
                    <input required type='text'
                     value={full_name}
                     onChange={
                         (e) => setFull_name(e.target.value)
                     }
                    placeholder='John Doe' id='full_name' className='w-full h-[45px] font-inter text-[#021327] bg-transparent border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                </div>
                <div className='flex flex-col lg:flex-row gap-[7px] lg:gap-[21px]'>
                    <div className='w-full flex flex-col gap-[7px]'>
                        <label htmlFor='country'>
                            <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Country</h2>
                        </label>
                        <input required 
                         value={country}
                         onChange={
                             (e) => setCountry(e.target.value)
                         }
                        type='text' id='country' placeholder='Nepal' className='w-full h-[45px] font-inter text-[#021327] bg-transparent border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                    </div>
                    <div className='w-full flex flex-col gap-[7px]'>
                        <label htmlFor='email'>
                            <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Email</h2>
                        </label>
                        <input required 
                         value={email}
                         onChange={
                             (e) => setEmail(e.target.value)
                         }
                        type='email' id='email' placeholder='johndoe@gmail.com' className='w-full h-[45px] font-inter bg-transparent text-[#021327] border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                    </div>
                </div>

                <div className='flex flex-col gap-[7px]'>
                    <label htmlFor='trip_name'>
                        <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Trip/Trek</h2>
                    </label>
                    <input type='text'
                    value={trip_name}
                    onChange={
                        (e) => setTrip_name(e.target.value)
                    }
                    required id='trip_name' placeholder='Which trip do you want to customize?' className='w-full h-[45px] font-inter text-[#021327] bg-transparent border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                </div>
                <div className='flex flex-col gap-[7px]'>
                    <label htmlFor='details'>
                        <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Details</h2>
                    </label>
                    <textarea type='text' 
                       value={details}
                       onChange={
                           (e) => setDetails(e.target.value)
                       }
                    id='details' required placeholder='Enter the trip details briefly.' className='w-full h-[99px] font-inter text-[#021327] border border-[#ABABAB] outline-0 p-3 bg-transparent rounded-[5px]'/>
                </div>
                <p className='text-end  font-inter text-[#0E9EDA] cursor-pointer' onClick={handleReset}>Reset</p>

                <div className='w-full flex justify-between items-center'>
                    <div className='w-full flex justify-start'>
                        <button onClick={
                            () => handleCrossA()
                        }>
                            <h2 className='flex gap-[5px] items-center font-normal text-[19px] underline underline-offset-2'>
                                <span className='text-[25px]'><BiChevronLeft/></span>Go Back</h2>
                        </button>
                    </div>
                    <div onMouseEnter={
                            () => setIsButtonHovered(true)
                        }
                        onMouseLeave={
                            () => setIsButtonHovered(false)
                        }
                        className="relative w-max">

                        <Button btnName={loading ? ('Submitting...'):('Submit')}
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

export default PopupCustomizeForm
