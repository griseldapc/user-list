import React from 'react';
import useFetch from '../components/data';
import Search from '../components/search';

export default function Beranda() {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/users");
    const [inputValue, setInputValue] = React.useState("");

    return (
        <main className='lg:p-10 md:p-8 p-5 bg-[#171823] font-DM'>
            <div className='py-3'>
                <h1 className='text-center text-white lg:text-[40px] md:text-[30px] text-[25px] font-bold'>
                    USER LIST
                </h1>
                <Search value={inputValue} setInputValue={setInputValue} />
                <div className='flex flex-wrap lg:justify-start md:justify-start justify-center lg:gap-9 md:gap-11 gap-6 lg:pt-6 md:pt-5 pt-6 item center'>
                    {data &&
                        data
                            .filter((item) => {
                                const nameLower = item.name.toLowerCase();
                                const inputLower = inputValue.toLowerCase();
                                return nameLower.includes(inputLower);
                            })
                            .map((item) => (
                                <div key={item.id} className='bg-[#25273D] lg:h-[auto] md:h-[170px] h-[160px] lg:w-[370px] md:w-[330px] w-[100%] lg:p-[16px] md:p-[16px] p-[14px] rounded-[12px] flex flex-col justify-between'>
                                    <div className='flex lg:gap-5 md:gap-4 gap-3 items-start lg:h-[120px] md:h-[110px] h-[150px]'>
                                        <img src='../../assets/boy.svg' className='lg:w-[64px] md:w-[60px] w-[55px]' alt="User Avatar" />
                                        <div className='flex flex-col justify-between lg:h-[auto] md:h-[95px] h-[85px]'>
                                            <ul className='lg:text-[18px] md:text-[17px] text-[16px] text-[#C8CBE7]'>
                                                {item.name}
                                            </ul>
                                            <ul className='lg:text-[16px] md:text-[15px] text-[14px] text-[#5B5E7E]'>
                                                {item.company.name}
                                            </ul>
                                            <ul className='lg:text-[14px] md:text-[13px] lg:mt-2 text-[12px] text-[#C8CBE7] flex lg:gap-4 md:gap-2 gap-1'>
                                                <img src='../../assets/phone.svg' alt="Phone Icon" className='lg:w-[20px] md:w-[18px] w-[16px]'/>
                                                {item.phone}
                                            </ul>
                                            <ul className='lg:text-[14px] md:text-[13px] text-[12px] text-[#C8CBE7] flex lg:gap-4 md:gap-2 gap-1'>
                                                <img src='../../assets/location.svg' alt="Location Icon" className='lg:w-[20px] md:w-[18px] w-[16px]' />
                                                {item.address.city}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='flex lg:gap-4 md:gap-2 gap-1'>
                                        <ul className='flex lg:gap-2 md:gap-1 gap-1 lg:text-[14px] md:text-[13px] text-[11px] text-[#3A7CFD] items-center'>
                                            <img src='../../assets/browser.svg' alt="Browser Icon" className='lg:w-[20px] md:w-[18px] w-[16px]' />
                                            {item.website}
                                        </ul>
                                        <ul className='text-[#C8CBE7]'>|</ul>
                                        <ul className='flex lg:gap-2 md:gap-1 gap-1 lg:text-[14px] md:text-[13px] text-[11px] text-[#3A7CFD] items-center'>
                                            <img src='../../assets/email.svg' alt="Email Icon" className='lg:w-[20px] md:w-[18px] w-[16px]' />
                                            {item.email}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                </div>
            </div>
        </main>
    );
}