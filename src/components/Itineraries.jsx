import React, { useState } from 'react'
import {
  QA
} from '../components';

const Itineraries = ({itinerary}) => {
  const [activeQA, setActiveQA] = useState(null);

    return (
        <div>
           {/*...fAQ Tab...*/}
            {
            itinerary ?. length > 0 && (
                <div className="w-full mt-[30px] flex flex-col gap-[17px]">
                    {
                    itinerary?.map((item, index) => (
                        <QA className='text-[40px]' key={index}
                            question={
                                item ?. title
                            }
                            answer={
                                item ?. description
                            }
                            index={item?.days}
                            handleQAClick={
                                () => {
                                    if (activeQA === index) {
                                        setActiveQA(null);
                                    } else {
                                        setActiveQA(index);
                                    }
                                }
                            }
                            active={
                                activeQA === index ? true : false
                            }
                            iconControl={true}
                            />
                    ))
                } </div>
            )
        } </div>
    )
}

export default Itineraries
