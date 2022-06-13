import Bar from "../assets/images/bar.jpg";
import Dinner from "../assets/images/dinner.jpg";
import { MdDinnerDining } from "react-icons/md";
import { FaGlassWhiskey } from "react-icons/fa";
import { useState } from "react";

export default function Menu() {
  const [dinner, setDinner] = useState(true);
  const [bar, setBar] = useState(true);

  return (
    <div
      className="text-gray-300 bg-black border-red-600 border-2 p-10"
      name="menu"
    >
      <div className="text-center">
        <p className="text-4xl p-4">Menu</p>
      </div>

      <div>
        <img src="https://place-puppy.com/400x400" alt="" className="m-auto" />
      </div>
      <div className="grid grid-cols-2 gap-2 text-center p-4 justify-items-center">
        <div>
          {!dinner && (
            <img
              src={Dinner}
              alt="image of the menu"
              style={{ width: "600px", height: "1000px" }}
            />
          )}
          <button
            onClick={() => setDinner(!dinner)}
            className="border-2 border-yellow-200 p-2"
          >
            Dinner Menu
          </button>
        </div>
        <div>
          {!bar && (
            <img
              src={Bar}
              alt="image of the bar menu"
              style={{ width: "600px", height: "1000px" }}
            />
          )}
          <button
            onClick={() => setBar(!bar)}
            className="border-2 border-yellow-200 p-2"
          >
            Bar Menu
          </button>
        </div>
      </div>
    </div>
  );
}
