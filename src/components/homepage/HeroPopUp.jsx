import cross_icon from "../../assets/images/svg/cross_icon.svg";
import verified from "../../assets/images/svg/Verified-SVG.svg";

const HeroPopUp = ({ show, setShow }) => {
  if (show === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div className="h-full w-FULL flex items-center justify-center ">
      <div
        onClick={() => setShow(!show)}
        className="absolute w-full h-full top-0 left-0  bg-gray-500 blur-[2px] opacity-50"
      ></div>
      <div className="h-[400px] w-[500px] bg-white rounded-xl border-[1px solid bg-gray-500] shadow-lg flex justify-center flex-col items-center z-10 relative px-5">
        <button className="py-2.5 px-3 absolute end-0 top-0">
          <img
            onClick={() => setShow(!show)}
            src={cross_icon}
            alt="cross_icon"
            className="min-w-3.5"
          />
        </button>
        <img src={verified} alt="img" />
        <h2 className="font-Inter font-bold text-4xl text-[#9CA3AF] text-center px-2">
          Falcra Varified Compaign
        </h2>
      </div>
    </div>
  );
};

export default HeroPopUp;
