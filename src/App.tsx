import { useState } from "react";
import "./App.css";
import homePage from "./ui/assets/homePage/homePage.png";
// import room1 from "./ui/assets/rooms/room1.jpeg";
import MenuIcon from "@mui/icons-material/Menu";

const App = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="relative flex ">
        <div className="w-full bg-gradient-to-b from-blue-400 to-blue-600">
          <img
            className="w-full h-[400px] lg:h-[650px] object-cover "
            src={homePage}
            alt="Main background"
          />
          <div className="opacity-80 max-md:hidden absolute top-10 right-10 left-10 bg-white rounded-lg p-2 flex justify-center items-center gap-20">
            <div className="text-blue-400 text-2xl font-normal">Home</div>
            <div className="text-2xl font-normal">About</div>
            <div className="text-2xl font-normal">Newsletter</div>
            <div className="text-center text-neutral-800 text-[32px] font-bold font-inika leading-tight">
              Hotel
              <br />
              Logo
            </div>
            <div className="text-2xl font-normal">Rooms</div>
            <div className="text-2xl font-normal">Services</div>
            <div className="text-2xl font-normal">Pricing</div>
          </div>
        </div>
        <div className="w-full absolute p-4 opacity-80">
          <div className="top-4 bg-white w-full rounded-[18px] flex items-center justify-around lg:hidden">
            <div className="text-center font-medium text-neutral-800 text-[28px] font-inika leading-tight">
              Hotel
              <br />
              Logo
            </div>
            <div className="text-[30px]" onClick={() => setMobile(!mobile)}>
              <MenuIcon />
            </div>
          </div>
        </div>
        {mobile && (
          <div className="absolute top-24 right-4 bg-white rounded-lg p-2 opacity-80">
            <div className="text-blue-400 text-2xl font-normal">Home</div>
            <div className="text-2xl font-normal">About</div>
            <div className="text-2xl font-normal">Newsletter</div>
            <div className="text-2xl font-normal">Rooms</div>
            <div className="text-2xl font-normal">Services</div>
            <div className="text-2xl font-normal">Pricing</div>
          </div>
        )}
        <div className="z-10 absolute bottom-20 left-10 text-white text-[30px] lg:text-[64px] font-bold font-['Inter']">
          Discover Extraordinary <br />
          Comfort in Hotels
        </div>
        <div className="absolute lg:bottom-8 left-0 right-0 flex justify-center gap-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full" />
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950 opacity-40" />
      </div>
      <div>
        <div className="h-80 bg-slate-100 rounded-[42px]">
          <div className="text-center text-black lg:text-[32px] font-medium font-['Inter']">
            Book a Room
          </div>
          <div className="text-center text-zinc-600 text-base font-medium font-['Inter']">
            Discover the perfect space for you!
          </div>
          <div className="flex-col">
            <div className="text-black text-base font-bold font-['Inter']">
              Date
            </div>
            {/* <div className="absolute flex-col justify-start items-start gap-2 flex"> */}
            <div className="w-[265px] h-[60px] bg-white rounded-xl" />
            <div className="justify-start items-center gap-5x">
              <div className="text-stone-900 text-base font-semibold font-['Inter']">
                Check Available
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* <div className="bg-zinc-100">
        <img
          className="w-[400px] h-[760px] bg-gradient-to-t from-black to-black rounded-[42px] "
          src={room1}
          alt="first room"
        />
      </div> */}
    </div>
  );
};

export default App;
