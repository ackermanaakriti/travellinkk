import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from '../components';
import {PostFeedbackDatas} from '../utils/apiQueries';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeedbackForm = () => {
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [loading, setLoading] = useState(false);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [country, setCountry] = useState("");
    const [package_name, setPackage_name] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleReset = () => {
        setName("");
        setDescription("");
        setCountry("");
        setPackage_name("");
        setSelectedFile(null);
    };

    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('country', country);
        formData.append('package_name', package_name);
        formData.append('image', selectedFile);

        PostFeedbackDatas(formData).then((res) => {
            toast.success("Submitted Successfully");
            handleReset("");
            setLoading(false); 
        }).catch((error) => {
            console.log(error);
            setLoading(false); 
            toast.error("Please Fill All Fields");
        });
    };

    return (
        <form onSubmit={handleSubmit}
            className='w-full bg-white rounded-[5px] flex flex-col p-8 gap-[11px]'>
            <p className='text-[#021327] font-inter text-[19px]'>Fill out the form below to send us a message.</p>
            <div className='flex flex-col gap-[7px]'>
                <label htmlFor='name'>
                    <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Enter your full name</h2>
                </label>
                <input type='text' id='name' required
                    value={name}
                    onChange={
                        (e) => setName(e.target.value)
                    }
                    placeholder='John Doe'
                    className='w-full h-[45px] font-inter text-[#021327] border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
            </div>
            <div className='flex flex-col lg:flex-row gap-[7px] lg:gap-[21px]'>
                <div className='w-full flex flex-col gap-[7px]'>
                    <label htmlFor='country'>
                        <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Country</h2>
                    </label>
                    <input type='text' required
                        value={country}
                        onChange={
                            (e) => setCountry(e.target.value)
                        }
                        placeholder='Nepal'
                        id='country'
                        className='w-full h-[45px] font-inter text-[#021327] border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
                </div>
                <div className='w-full flex flex-col gap-[7px]'>
                    <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Upload your image<span className='text-[#FF0000]'>*</span>
                    </h2>
                    <label htmlFor='image'
                        className={
                            `w-full h-[45px] font-inter ${
                                selectedFile ? 'text-[#000]' : 'text-[#a5a7af]'
                            }  border border-[#ABABAB] outline-0 rounded-[5px] cursor-pointer flex items-center px-3`
                    }>
                        <input required type="file" accept="image/*"
                            onChange={handleImageUpload}
                            className='hidden'
                            id='image'/> {
                        selectedFile ? selectedFile ?. name : 'Choose Your Image'
                    } </label>
                </div>
            </div>
            <div className='flex flex-col gap-[7px]'>
                <label htmlFor='package_name'>
                    <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Trip/Trek</h2>
                </label>
                <input type='text' required
                    value={package_name}
                    onChange={
                        (e) => setPackage_name(e.target.value)
                    }
                    placeholder='Which trip did you go with us?'
                    id='package_name'
                    className='w-full h-[45px] font-inter text-[#021327] border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
            </div>
            {/* <div className='flex flex-col gap-[7px]'>
        <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Summary</h2>
        <input type='text' placeholder='Which trip did you go with us?' className='w-full h-[45px] font-inter text-[#021327] border border-[#ABABAB] outline-0 p-3 rounded-[5px]'/>
    </div> */}
            <div className='flex flex-col gap-[7px]'>
                <label htmlFor='description'>
                    <h2 className='text-[#021327] text-[19px] font-medium font-inter'>Feedback</h2>
                </label>
                <textarea type='text' required
                    value={description}
                    onChange={
                        (e) => setDescription(e.target.value)
                    }
                    placeholder='Let us know how you liked travelling with us.'
                    id='description'
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

                    <Button type="submit"
                        handleOnclick={
                            () => ""
                        }
                        btnName={loading ? ('Please Wait Submitting...'):('Submit')}
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


    )
}

export default FeedbackForm
