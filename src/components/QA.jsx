import React, {useEffect, useRef, useState} from "react";
import {MdKeyboardArrowRight} from "react-icons/md";

const QA = ({
    index,
    question,
    answer,
    active,
    handleQAClick,
    iconControl
}) => {

    const divRef = useRef(null);

    const [divHeight, setDivHeight] = useState(null);

    useEffect(() => {
        if (divRef.current) {
            const height = divRef.current.offsetHeight;
            setDivHeight(height)
        }
    }, [active])

    return (
        <div ref={divRef}
            className="w-full p-[10px] border-b border-[#000] cursor-pointer"
            onClick={
                () => handleQAClick()
        }>
            <div className="w-full flex items-center justify-between h-full">
                <div className="grow flex items-center gap-[36px]">
                    <div style={
                            {
                                height: active ? divHeight : "100%",
                               
                            }
                        }
                        className={`min-w-[18%] max-w-[15%] bg-[#0E9EDA] rounded-[5px] flex items-center justify-center`}>
                        <div className="w-full font-inter text-center py-1 px-3 overflow-hidden text-[15px] text-white" dangerouslySetInnerHTML={{ __html: index }} />
                    </div>
                    <div className="grow flex flex-col gap-[10px]">
                        <div className={
                            `${
                                active ? "font-semibold text-[#0E9EDA]" : "font-semibold text-[#2D3134]"
                            } font-inter`
                        } dangerouslySetInnerHTML={{ __html: question }} />
                        <div className={
                            `${
                                active ? "" : "hidden"
                            } font-inter text-[#5B5F62] text-[15px] list_style`
                        } 
                        dangerouslySetInnerHTML={{ __html: answer }} />
                    </div>
                </div>
                <div> {
                    iconControl && (
                        <MdKeyboardArrowRight className={
                            `${
                                active && "transform rotate-[90deg]"
                            } text-3xl text-[#0E9EDA] `
                        }/>
                    )
                } </div>
            </div>
        </div>
    );
};

export default QA;
