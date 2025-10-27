import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import Inspiration from "./Inspiration";
import WhyUse from "./WhyUse";
import checklist from "../src/assets/Checklist-cuate.png";

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleGetStarted = () => {
    navigate("/create"); // Redirect to the Create page
  };

  return (
    <>
      <div className="bg-[#f65562] flex flex-col md:flex-row items-center md:justify-around lg:p-10 p-5">
        <div className="flex flex-col md:max-w-lg space-y-4">
          <h1 className="md:text-7xl text-3xl text-white font-semibold md:whitespace-normal whitespace-nowrap">
            Plan. Focus. Achieve.
          </h1>
          <h2 className="text-white md:text-2xl text-3 md:pt-5 pt-3">
            Stay organized and motivated with
            <br /> My Smart List
          </h2>

          <div>
            <button
              onClick={handleGetStarted} // Handle redirection when button is clicked
              className="bg-white text-[#f65562] py-2 md:px-4 px-6 rounded-lg font-medium cursor-pointer md:mt-3 hover:bg-black hover:text-white hover:shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>

        <img
          className="md:max-w-[27em] max-w-[14em] mt-8 md:mt-0"
          src={checklist}
          alt="Checklist Image"
        />
      </div>

      <Inspiration />
      <WhyUse />
    </>
  );
};

export default Home;
