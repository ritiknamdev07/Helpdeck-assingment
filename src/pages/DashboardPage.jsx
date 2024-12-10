const DashboardPage = () => {
  return (
    <div className="px-20 mt-5">
      <div>
        <h1 className="text-3xl mb-5 font-semibold ">Dashboard</h1>
      </div>
      <div className="flex justify-between">
        <div className="bg-[#2F82FF] flex flex-col gap-10 justify-center items-center  shadow-xl  font-sanchez w-[228.25px] h-[243.07px] rounded-3xl ">
          <h3 className="text-2xl">Total Tickets</h3>
          <div className="text-8xl">12</div>
        </div>
        <div className="bg-[#0BFF68] flex flex-col gap-10 justify-center items-center  shadow-xl font-sanchez w-[228.25px] h-[243.07px] rounded-3xl">
          <h3 className="text-2xl">Total Solved</h3>
          <div className="text-8xl">8</div>
        </div>
        <div className="bg-[#FE594E] flex flex-col gap-10 justify-center items-center  shadow-xl font-sanchez w-[228.25px] h-[243.07px] rounded-3xl">
          <h3 className="text-2xl ">
            Total Awaiting <br /> Approval
          </h3>
          <div className="text-8xl">2</div>
        </div>
        <div className="bg-[#FCFF6C] flex flex-col  gap-10 justify-center  items-center shadow-xl  font-sanchez w-[228.25px] h-[243.07px] rounded-3xl">
          <h3 className="text-2xl">Total in Progress</h3>
          <div className="text-8xl">2</div>
        </div>
      </div>
      <div className="flex justify-between h-[300px] my-5">
        <div className="h-[300.03] w-[450.25px]  bg-[#55D6C2] flex justify-center items-center ">
          <img
            className=" w-[218.5px] h-[203.16px] "
            src="../images/Group.png"
            alt="group"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex h-[330.65px] w-[539.25px] justify-around items-center bg-[#55D6C2]  ">
            <div className="text-center  ">
              <img
                className="h-[80px]"
                src="../images/technical.png"
                alt="tech"
              />
              <h3>3</h3>
              <h3>
                Technical <br /> Supports
              </h3>
            </div>
            <div className="text-center ">
              <img
                className="h-[80px]"
                src="../images/operation.png"
                alt="tech"
              />
              <h3>4</h3>
              <h3>
                Operation <br />
                Team
              </h3>
            </div>
          </div>
          <div className="w-[539px] h-[108px] bg-[#55D6C2] text-center font-semibold rounded-3xl text-2xl p-5 ">
            <div>Customer Feedback</div>
            <div className="flex justify-center">
              <img src="../images/star.png" alt="star" />
              <img src="../images/star.png" alt="star" />
              <img src="../images/star.png" alt="star" />
              <img src="../images/star.png" alt="star" />
              <img src="../images/half.png" alt="star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
