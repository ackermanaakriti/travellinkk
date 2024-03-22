import React from 'react'

const Overview = ({data}) => {
    return (
        <div>
            <p className='font-inter pt-5 text-[#5B5F62]' dangerouslySetInnerHTML={{ __html: data }} />
           
        </div>
    )
}

export default Overview
