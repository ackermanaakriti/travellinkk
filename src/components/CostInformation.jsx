import React, { useState } from 'react'
import {
  QA
} from '../components';
// import { bookTabData } from '../data/bookTabData';

const CostInformation = ({costInfoData}) => {
  const [activeQA, setActiveQA] = useState(null);
    return (
        <div>
            {/*...fAQ Tab...*/}
            {
            costInfoData ?. length > 0 && (
                <div className="w-full mt-[30px] flex flex-col gap-[17px]">
                    {
                    costInfoData?.map((item, index) => (
                        <QA key={index}
                            question={
                                item ?. title
                            }
                            answer={
                                item ?. description
                            }
                            index={item?.name}
                            handleQAClick={
                                () => {
                                    if (activeQA === index) {
                                        setActiveQA(null);
                                    } else {
                                        setActiveQA(index);
                                    }
                                }
                            }
                            active={true}
                            iconControl={false}
                            />
                    ))
                } </div>
            )
        }
            </div>
    )
}

export default CostInformation
