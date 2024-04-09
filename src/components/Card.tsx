import React, { useState } from "react";

interface CardProps {
  status?: string;
  complaint?: string;
  time?: number;
  rating?: number;
  task?: string;
  details?: string;
  image?: string;
}

const Card: React.FC<CardProps> = ({
  status,
  complaint,
  time,
  rating,
  task,
  details,
  image,
}) => {
  const [viewDetails, setViewDetails] = useState(false);
  const handleClick = () => {
    setViewDetails(!viewDetails);
  };

  return (
    <div className=" border rounded-xl p-1">
      <div
        className="w-96  flex-col justify-start items-start inline-flex "
        onClick={handleClick}
      >
        <div className="self-stretch p-2  flex-col justify-start items-start gap-3 flex ">
          <div className="self-stretch justify-start items-center inline-flex">
            <div className="justify-start items-center gap-1 flex">
              <div className="px-1 py-1 bg-neutral-100 rounded justify-start items-center gap-2 flex">
                <img
                  src="assets/knife.png"
                  alt="knife"
                  className="w-4 h-4 relative rounded-sm"
                />
                <div className="text-stone-950 text-xs font-semibold font-serif">
                  Rajesh
                </div>
                <img
                  src="assets/red.png"
                  alt="red"
                  className="w-2 h-2 relative rounded-sm"
                />
              </div>

              {status && (
                <div
                  className={`px-2 py-1 ${
                    status === "Delayed" ? "bg-red-500" : "bg-neutral-300"
                  }  border rounded-2xl justify-center items-center gap-3 flex`}
                >
                  <div
                    className={`${
                      status === "Delayed"
                        ? "text-white"
                        : status === "Ongoing"
                        ? "text-yellow-500"
                        : "text-red-700"
                    }  text-xs font-medium font-serif`}
                  >
                    {status}
                  </div>
                </div>
              )}
              {complaint && (
                <div className="px-2 py-1 bg-red-500 border rounded-2xl justify-center items-center gap-3 flex">
                  <div className="text-white text-xs font-medium font-serif">
                    {complaint}
                  </div>
                </div>
              )}
              {image && (
                <div className="px-1 py-1 bg-neutral-100 rounded-2xl justify-start items-start flex">
                  <img src={image} alt="reset" className="w-4 h-4 relative" />
                </div>
              )}
            </div>
            {time && (
              <div className="grow shrink basis-0 flex-col justify-start items-end gap-3 inline-flex">
                <div
                  className={`px-1 py-1 ${
                    time > 5 ? "bg-green-100" : "bg-red-300"
                  }  rounded-2xl justify-start items-center gap-1 inline-flex`}
                >
                  <img
                    src="assets/clock.png"
                    alt="clock"
                    className="w-4 h-4 relative"
                  />
                  <div
                    className={`${
                      time > 5 ? "text-green-600" : "text-red-600"
                    }  text-sm font-medium font-sans`}
                  >
                    {time} min
                  </div>
                </div>
              </div>
            )}
            {rating && (
              <div className="grow shrink basis-0 flex-col justify-start items-end gap-3 inline-flex">
                <div
                  className={`px-1 py-1 ${
                    rating > 3 ? "bg-green-500" : "bg-red-500"
                  }  rounded-2xl justify-start items-center gap-1 inline-flex`}
                >
                  <div className="text-white text-sm font-medium font-sans flex items-center">
                    <img
                      src="assets/start.png"
                      alt="clock"
                      className="w-5 h-3 mr-1"
                    />
                    {rating}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="self-stretch justify-start items-start gap-4 inline-flex">
            <div className="grow shrink basis-0 text-stone-950 text-base font-semibold font-serif">
              Routine Cleaning
            </div>
            <div className="px-2 py-1 bg-neutral-100 rounded-3xl justify-center items-center gap-3 flex">
              <div
                className={`${
                  task === "Guest Task" ? "text-orange-600" : "text-blue-500"
                }  text-xs font-medium font-serif`}
              >
                {task}
              </div>
            </div>
          </div>
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="h-4 justify-start items-center gap-1 flex">
              <div className=" h-4 relative" />
              <div className="text-neutral-500 text-xs font-medium font-serif flex">
                <img src="assets/calender.png" alt="" />
                21 Jul 2024 | 03:00 am
              </div>
            </div>
            <div className="justify-center items-center gap-2 flex">
              <div className="text-neutral-500 text-xs font-medium font-serif">
                # 68988
              </div>
            </div>
          </div>
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="justify-center items-center gap-2 flex">
              <div className="text-neutral-500 text-xs font-semibold font-serif">
                From:Pantry
              </div>
            </div>
            <div className="justify-center items-center gap-2 flex">
              <div className="text-neutral-500 text-xs font-semibold font-serif">
                To:Reception
              </div>
            </div>
          </div>
        </div>

        {viewDetails && (
          <div className=" flex flex-col p-3 items-start gap-3 self-stretch bg-gray-200 rounded-lg">
            <div className="text-xs font-bold font-serif">
              Shampoo <span className="text-gray-500 pl-1">x 1</span>
            </div>
            <div className="text-xs font-bold font-serif">
              Conditioner <span className="text-gray-500 pl-1">x 1</span>
            </div>
            <div className="text-xs font-bold font-serif text-blue-600">
              Instruction :<span className="pl-1">Please get conditioner</span>
            </div>
            <div className="text-xs font-bold font-serif">
              Towel <span className="text-gray-500 pl-1">x 1</span>
            </div>
          </div>
        )}
        {details && (
          <button
            // onClick={() => setViewDetails(!viewDetails)}
            className={`self-stretch px-3 py-2 ${
              details === "Notify Staff"
                ? "bg-indigo-600 "
                : "border border-blue-300 "
            } $  rounded-2xl justify-center items-center gap-2 inline-flex`}
          >
            <div className="w-5 h-5 justify-center items-center flex">
              <img
                src="assets/checkbox.png"
                className="w-5 h-5 relative flex-col justify-start items-start flex"
              />
            </div>
            <div
              className={`${
                details === "Notify Staff" ? "text-rose-100" : "text-blue-500"
              } text-sm font-medium font-serif`}
            >
              {details}
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
