import React from "react";

const NewTicketPage = () => {
  return (
    <div className="mx-20 m-5 flex flex-col gap-4">
      <div className="w-[990px]">
        <h1 className="text-4xl  font-semibold text-center">
          Create New Ticket
        </h1>
      </div>
      <div className="w-[990px] h-[538px] flex flex-col   gap-2   ">
        <div className="flex flex-wrap justify-center gap-8 ">
          <div className="flex items-center justify-between w-[450px]">
            <div className="text-xl ">Ticket No. </div>
            <input
              className=" bg-[#C4C4C4A1]  rounded h-[43px] w-[298px]"
              type="text"
            />
          </div>
          <div className="flex items-center justify-between w-[450px]">
            <div className="text-xl ">Date: </div>
            <input
              className="bg-[#C4C4C4A1]  rounded h-[43px] w-[298px]"
              type="text"
            />
          </div>
          <div className="flex items-center justify-between w-[450px]">
            <div className="text-xl ">Name:</div>
            <input
              className="bg-[#C4C4C4A1]  rounded h-[43px] w-[298px]"
              type="text"
            />
          </div>
          <div className="flex items-center justify-between w-[450px]">
            <div className="text-xl ">Department:</div>
            <input
              className="bg-[#C4C4C4A1]  rounded h-[43px] w-[298px]"
              type="text"
            />
          </div>
        </div>

        <div className=" ml-7 flex flex-col justify-center gap-1">
          <div className="text-xl ">Subject:</div>{" "}
          <input
            className="bg-[#C4C4C4A1]  h-[43px] w-[935px] rounded "
            type="text"
          />{" "}
        </div>

        <div className="flex gap-3 p-5 ">
          <div className=" flex flex-col items-center gap-2">
            <div>
              <div className="text-xl">Category:</div>
              <input
                className="w-[398px] h-[42px] bg-[#C4C4C4A1] rounded"
                type="text"
              />
            </div>
            <div>
              <div className="text-xl">Type:</div>
              <input
                className="w-[398px] h-[42px] bg-[#C4C4C4A1] rounded"
                type="text"
              />
            </div>
            <div>
              <div className="text-xl">Priority:</div>
              <input
                className="w-[398px] h-[42px] bg-[#C4C4C4A1]  rounded"
                type="text"
              />
            </div>
          </div>
          <div>
            <div className="text-xl ">Description:</div>
            <textarea className="bg-[#C4C4C4A1]  rounded w-[560px] h-[200px] "></textarea>
          </div>
        </div>
        <div className="flex justify-between ml-5 w-[980px] h-[100px]">
          <img src="./images/robot.png" alt="robot" />
          <button className="py-1 px-4 h-10 rounded-lg self-end bg-[#55D6C2]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTicketPage;
