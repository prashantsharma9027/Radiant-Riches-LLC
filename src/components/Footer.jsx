import lowArrowFooter from "../assets/lowArrowFooter.svg";
export const Footer = () => {
  return (
    <div className="bg-[#212731]  h-[452px]  pt-10 pb-20">
      <div className="flex justify-around mx-auto w-[1024px]">
        <div className="flex justify-around w-1/2">
          <div>
            <p className="text-[#FFFFFF] text-[16px]">Categories</p>
            <div className="flex-col  text-[13px] text-[#B6BDC4] ">
              <p className="my-3">Web Builder</p>
              <p className="my-3">Hosting</p>
              <p className="my-3">Data Center</p>
              <p>Robotic-Automation</p>
            </div>
          </div>
          <div className="">
            <p className="text-[#FFFFFF] text-[16px]">Contact</p>
            <div className="flex-col text-[13px] text-[#B6BDC4] ">
              <p className="my-3">Contact</p>
              <p className="my-3">Privacy Policy</p>
              <p className="my-3">Terms Of Service</p>
              <p className="my-3">Categories</p>
              <p>About</p>
            </div>
          </div>
        </div>
        <div className="text-[#D1D6DA] gap-2 flex items-center justify-center w-1/2">
          <p className="text-[13px]">United States</p>
          <img className="h-fit" src={lowArrowFooter} alt="lowArrowFooter" />
        </div>
      </div>
    </div>
  );
};
