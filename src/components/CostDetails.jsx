import React from 'react';

const CostDetails = ({dynamicValues,cost_note}) => {
    const tableHead = [
        {
            label: 'Group Sizes'
        }, {
            label: 'Cost (per person)'
        }, {
            label: 'EXTRA'
        }
    ];


    return (
        <div className='pt-8'>
            <div className='bg-white p-5 rounded-[5px] border border-[#0E9EDA]'>
                <h2 className='font-inter font-semibold'>Trip Cost in USD:</h2>
                <p className='font-inter pt-1 text-[#5B5F62]'>Per Person, On Twin Room Sharing Accommodation and on the basis of individual and group sizes.</p>
            </div>
            <div className='w-full bg-white rounded-[5px] border border-[#0E9EDA] mt-8 overflow-x-auto'>
                <table className='w-full'>
                    <tbody> {
                        tableHead ?. map((item, index) => (
                            <tr key={index}
                                className={
                                    index === 0 ? 'bg-[#E1EFFF] rounded-t-[5px] font-semibold text-black' : ''
                            }>
                                <th className='p-5'>
                                    <h2 className='font-inter text-start font-semibold'>
                                        {
                                        item ?. label
                                    }</h2>
                                    <p className='font-inter pt-1 font-normal text-start text-[#5B5F62]'>
                                        {
                                        index === 2 ? '(For Single Room Supplement)' : ''
                                    } </p>
                                </th>
                                {
                                dynamicValues ?. map((value, valueIndex) => (
                                    <td key={valueIndex}
                                        className='p-5 text-center'>
                                        <p className={`font-inter`}>
                                            <span>{
                                                index == 0 ? value.group_size : index == 1 ? value.cost : value.extra_cost
                                            }</span>
                                        </p>
                                    </td>
                                ))
                            } </tr>
                        ))
                    } </tbody>
                </table>
            </div>
            <div> 
                <h2 className='font-inter text-start font-semibold my-8'>NOTE: <span className="font-medium" dangerouslySetInnerHTML={{ __html: cost_note }} /></h2>
                <p></p>
            </div>
        </div>
    )
}

export default CostDetails;
