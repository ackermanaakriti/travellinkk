import React, {useState} from 'react';
import {Button} from '../components';
import {BiChevronLeft} from 'react-icons/bi';
import {PostBookDatas} from '../utils/apiQueries';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookForm = ({handleBtnClickB, backName, id}) => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [nationality, setNationality] = useState("");
    const [arrival_date, setArrival_date] = useState("");
    const [departure_date, setDeparture_date] = useState("");
    const [total_adults, setTotal_adults] = useState("");
    const [requirements, setRequirements] = useState("");


    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const handleReset = () => {
        setName("");
        setEmail("");
        setAddress("");
        setPhone("");
        setNationality("");
        setArrival_date("");
        setDeparture_date("");
        setTotal_adults("");
        setRequirements("");
    };

    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 
        const formData = {
            package_id:id,
            name,
            email,
            address,
            phone,
            nationality,
            arrival_date,
            departure_date,
            total_adults,
            requirements
        };
        PostBookDatas(id, formData).then((res) => {
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
        <>
            <form onSubmit={handleSubmit}>           
                <div className='w-full flex flex-col p-8 gap-[11px] lg:block hidden'>
                    <p className='text-[#021327] font-inter text-[19px]'>Fill out the form below to send us a message.</p>
                    <div className='flex flex-col gap-[7px]'>
                        <label htmlFor='name'>
                            <h2 className='text-[#021327] text-[19px] font-medium font-inter pt-2'>Enter your full name</h2>
                        </label>
                        <input type='text' placeholder='John Doe' required id='name'
                            value={name}
                            onChange={
                                (e) => setName(e.target.value)
                            }
                            className='w-full h-[45px] font-inter text-[#021327] bg-transparent border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-[7px] lg:gap-[21px]'>
                        <div className='w-full flex flex-col gap-[7px]'>
                            <label htmlFor='address'>
                                <h2 className='text-[#021327] text-[19px] font-medium font-inter pt-2'>Address</h2>
                            </label>
                            <input type='text' placeholder='Kathmandu-16, Nepal' required id='address'
                                value={address}
                                onChange={
                                    (e) => setAddress(e.target.value)
                                }
                                className='w-full h-[45px] font-inter text-[#021327] bg-transparent border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                        </div>
                        <div className='w-full flex flex-col gap-[7px]'>
                            <label htmlFor='nationality'>
                                <h2 className='text-[#021327] text-[19px] font-medium font-inter pt-2'>Nationality</h2>
                            </label>
                            <input type='text' placeholder='Eg. Romanian' required id='nationality'
                                value={nationality}
                                onChange={
                                    (e) => setNationality(e.target.value)
                                }
                                className='w-full h-[45px] font-inter bg-transparent text-[#021327] border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-[7px] lg:gap-[21px]'>
                        <div className='w-full flex flex-col gap-[7px]'>
                            <label htmlFor='email'>
                                <h2 className='text-[#021327] text-[19px] font-medium font-inter pt-2'>Email</h2>
                            </label>
                            <input type='email' required placeholder='johndoe@gmail.com' id='email'
                                value={email}
                                onChange={
                                    (e) => setEmail(e.target.value)
                                }
                                className='w-full h-[45px] font-inter text-[#021327] bg-transparent border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                        </div>
                        <div className='w-full flex flex-col gap-[7px]'>
                            <label htmlFor='phone'>
                                <h2 className='text-[#021327] text-[19px] font-medium font-inter pt-2'>Contact Number</h2>
                            </label>
                            <input type='number' placeholder='9876543235' required id='phone'
                                value={phone}
                                onChange={
                                    (e) => setPhone(e.target.value)
                                }
                                className='w-full h-[45px] font-inter bg-transparent text-[#021327] border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-[7px] lg:gap-[21px]'>
                    <div className='w-full flex flex-col gap-[7px]'>
                            <label htmlFor='departure_date'>
                                <h2 className='text-[#021327] text-[19px] font-medium font-inter pt-2'>Departure Date</h2>
                            </label>
                            <input type='date' required id='departure_date'
                                value={departure_date}
                                onChange={
                                    (e) => setDeparture_date(e.target.value)
                                }
                                className='w-full h-[45px] font-inter bg-transparent text-[#021327] border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                        </div>
                        <div className='w-full flex flex-col gap-[7px]'>
                            <label htmlFor='arrival_date'>
                                <h2 className='text-[#021327] text-[19px] font-medium font-inter pt-2'>Arrival Date</h2>
                            </label>
                            <input type='date' required id='arrival_date'
                                value={arrival_date}
                                onChange={
                                    (e) => setArrival_date(e.target.value)
                                }
                                className='w-full h-[45px] font-inter text-[#021327] bg-transparent border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                        </div>                    
                    </div>
                    <div className='flex flex-col gap-[7px]'>
                        <label htmlFor='total_adults'>
                            <h2 className='text-[#021327] text-[19px] font-medium font-inter pt-2'>No. of people</h2>
                        </label>
                        <input type='number' required id='total_adults'
                            value={total_adults}
                            onChange={
                                (e) => setTotal_adults(e.target.value)
                            }
                            placeholder='0'
                            min="0"
                            className='w-full h-[45px] font-inter text-[#021327] bg-transparent border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                    </div>
                    <div className='flex flex-col gap-[7px]'>
                        <label htmlFor='requirements'>
                            <h2 className='text-[#021327] text-[19px] font-medium font-inter pt-2'>Special Requirement</h2>
                        </label>
                        <textarea type='text' required id='requirements'
                            value={requirements}
                            onChange={
                                (e) => setRequirements(e.target.value)
                            }
                            placeholder='Let us know all your inquiries and we will get back to you shortly'
                            className='w-full h-[145px] font-inter text-[#021327] border border-[#ABABAB] outline-0 p-3 bg-transparent rounded-[5px]'/>
                    </div>
                    <div className='w-full py-2'>
                    <p className='float-right w-max font-inter text-[#0E9EDA] cursor-pointer'
                        onClick={handleReset}>Reset</p>
                </div>
                    <div className='w-full flex justify-between items-center pt-2'>
                        <div className='w-full flex justify-start'>
                            <button onClick={
                                () => handleBtnClickB()
                            }>
                                <h2 className='flex gap-[5px] items-center font-normal text-[19px] underline underline-offset-2'>
                                    <span className='text-[25px]'><BiChevronLeft/></span>
                                    {backName}</h2>
                            </button>
                        </div>
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
                </div>
               
                <ToastContainer/>
            
            </form>

            {/* Responsive Form */}
            <form onSubmit={handleSubmit}>
                <div className='lg:hidden block fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] overflow-y-auto rounded-[25px] lg:rounded-[5px] bg-white z-40 h-[70vh] w-[98vw]'
                    style={
                        {animation: "loginAnimation ease-out 0.5s"}
                }>
                    <div className='w-full flex flex-col p-8 gap-[11px]'>
                        <div className='w-full flex justify-center pb-5'>
                            <button onClick={
                                () => handleBtnClickB()
                            }>
                                <h2 className='flex gap-[5px] items-center font-normal text-[19px] underline underline-offset-2'>
                                    <span className='text-[25px]'><BiChevronLeft/></span>
                                    {backName}</h2>
                            </button>
                        </div>
                        <p className='text-[#021327] font-inter text-[19px]'>Fill out the form below to send us a message.</p>
                        <div className='flex flex-col gap-[7px]'>
                            <label htmlFor='name'>
                                <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Enter your full name</h2>
                            </label>
                            <input type='text' placeholder='John Doe' required id='name'
                                value={name}
                                onChange={
                                    (e) => setName(e.target.value)
                                }
                                className='w-full h-[45px] font-inter text-[#021327] bg-transparent border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-[7px] lg:gap-[21px]'>
                            <div className='w-full flex flex-col gap-[7px]'>
                                <label htmlFor='address'>
                                    <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Address</h2>
                                </label>
                                <input type='text' placeholder='Kathmandu-16, Nepal' required id='address'
                                    value={address}
                                    onChange={
                                        (e) => setAddress(e.target.value)
                                    }
                                    className='w-full h-[45px] font-inter text-[#021327] bg-transparent border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                            </div>
                            <div className='w-full flex flex-col gap-[7px]'>
                                <label htmlFor='nationality'>
                                    <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Nationality</h2>
                                </label>
                                <input type='text' placeholder='Eg. Romanian' required id='nationality'
                                    value={nationality}
                                    onChange={
                                        (e) => setNationality(e.target.value)
                                    }
                                    className='w-full h-[45px] font-inter bg-transparent text-[#021327] border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-[7px] lg:gap-[21px]'>
                            <div className='w-full flex flex-col gap-[7px]'>
                                <label htmlFor='email'>
                                    <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Email</h2>
                                </label>
                                <input type='email' required id='email'
                                    value={email}
                                    onChange={
                                        (e) => setEmail(e.target.value)
                                    }
                                    placeholder='johndoe@gmail.com'
                                    className='w-full h-[45px] font-inter text-[#021327] bg-transparent border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                            </div>
                            <div className='w-full flex flex-col gap-[7px]'>
                                <label htmlFor='phone'>
                                    <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Contact Number</h2>
                                </label>
                                <input type='number' placeholder='9876543235' required id='phone'
                                    value={phone}
                                    onChange={
                                        (e) => setPhone(e.target.value)
                                    }
                                    className='w-full h-[45px] font-inter bg-transparent text-[#021327] border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-[7px] lg:gap-[21px]'>
                        <div className='w-full flex flex-col gap-[7px]'>
                                <label htmlFor='departure_date'>
                                    <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Departure Date</h2>
                                </label>
                                <input type='date' required id='departure_date'
                                    value={departure_date}
                                    onChange={
                                        (e) => setDeparture_date(e.target.value)
                                    }
                                    className='w-full h-[45px] font-inter bg-transparent text-[#021327] border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                            </div>
                            <div className='w-full flex flex-col gap-[7px]'>
                                <label htmlFor='arrival_date'>
                                    <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Arrival Date</h2>
                                </label>
                                <input type='date' required id='arrival_date'
                                    value={arrival_date}
                                    onChange={
                                        (e) => setArrival_date(e.target.value)
                                    }
                                    className='w-full h-[45px] font-inter text-[#021327] bg-transparent border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                            </div>                         
                        </div>
                        <div className='flex flex-col gap-[7px]'>
                            <label htmlFor='total_adults'>
                                <h2 className='text-[#021327] text-[19px] font-medium font-inter'>No. of people</h2>
                            </label>
                            <input type='number' placeholder='0' min="0" required id='total_adults'
                                value={total_adults}
                                onChange={
                                    (e) => setTotal_adults(e.target.value)
                                }
                                className='w-full h-[45px] font-inter text-[#021327] bg-transparent border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                        </div>
                        <div className='flex flex-col gap-[7px]'>
                            <label htmlFor='requirements'>
                                <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Special Requirement</h2>
                            </label>
                            <textarea type='text' required id='requirements'
                                value={requirements}
                                onChange={
                                    (e) => setRequirements(e.target.value)
                                }
                                placeholder='Let us know all your inquiries and we will get back to you shortly'
                                className='w-full h-[145px] font-inter text-[#021327] border border-[#ABABAB] outline-0 p-3 bg-transparent rounded-[5px]'/>
                        </div>
                        <p className='text-end  font-inter text-[#0E9EDA] cursor-pointer'
                            onClick={handleReset}>Reset</p>

                        <div className='w-full flex justify-between items-center'>
                            <div className='w-full flex justify-start'>
                                <button onClick={
                                    () => handleBtnClickB()
                                }>
                                    <h2 className='flex gap-[5px] items-center font-normal text-[19px] underline underline-offset-2'>
                                        <span className='text-[25px]'><BiChevronLeft/></span>
                                        {backName}</h2>
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
                    </div>
                </div>
                <ToastContainer/>
            </form>
        </>

    )
}

export default BookForm
