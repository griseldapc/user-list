import React from "react";

function Search({ setInputValue, value }) {
    console.log("error");

    return (
            <div>
                <input
                    type="search"
                    onChange={(event) => {
                        const inputValue = event.target.value;
                        console.log(inputValue);
                        setInputValue(inputValue);
                    }}
                    value={value}
                    id="mySearch"
                    placeholder="Search User"
                    className='mx-auto bg-[#25273D] lg:w-[540px] md:w-[450px] w-[200px] lg:h-[55px] md:h-[50px] h-[45px] lg:px-10 md:px-8 px-4 flex lg:my-6 md:my-5 my-4 text-white lg:text-[18px] md:text-[16px] text-[15px] shadow-black shadow-md rounded-[5px] '
                />
            </div>
    );
}

export default Search;
