import { HashLink } from "react-router-hash-link";
import resumePdf from "../../assets/CV.pdf";

const Information = () => {
  return (
    <section id="iam" className="flex md:flex-row flex-col-reverse gap-10 mt-4">
      <div className="flex flex-col">
        <div className="flex flex-col bg-[#f6f8f9] p-4 pb-10 rounded-md shadow-lg transform-gpu hover:translate-y-[-5px] transition-transform duration-700">
          <div className="rounded-full w-14 h-14 bg-primary bg-opacity-50 shadow-xl text-white m-5 border flex justify-center items-center">
            <div className="rounded-full w-10 h-10 bg-primary border-primary text-white border flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h2 className="text-5xl font-bold text-gray-600">
              {`Hi, I'm`} <span className="text-[#F50057]">Julhash</span>
            </h2>
            <p className="text-gray-500 mt-3">
              Passionate about learning new technology to solve problem.
            </p>
            <div className="space-y-2 mt-4">
              <div className="flex items-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#F50057]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <span className="ml-2">julhashtamim69@gmail.com</span>
              </div>
              <div className="flex items-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#F50057]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <span className="ml-2">Sylhet, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-[#f6f8f9] p-4 shadow-lg rounded-md mt-16 flex-grow flex flex-col justify-center items-center">
          <div className="pt-[10%]">
            <p className="mb-4 ml-10 font-sans text-lg font-medium">
              Download my Resume
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-10">
              <a href={resumePdf} download>
                <button className="overflow-hidden relative w-32 p-2 h-12 bg-white text-gray-500 hover:text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
                  Download
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-primary bg-opacity-30 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-primary bg-opacity-60 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-primary bg-opacity-100 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
                  <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                    Resume!
                  </span>
                </button>
              </a>
              <HashLink to={"#contact"}>
                <button className="overflow-hidden relative w-32 p-2 h-12 bg-primary text-white hover:text-gray-500 border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
                  Contact
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-white bg-opacity-30 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-white bg-opacity-60 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-white bg-opacity-100 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
                  <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                    With me
                  </span>
                </button>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-[#f6f8f9] shadow-lg rounded-lg">
        <div className="overflow-hidden">
          <img
            className="max-w-full rounded-lg transform transition-transform duration-700 hover:scale-110"
            src="https://i.postimg.cc/tJnpXcKP/FB-IMG-1660811032163.jpg"
            alt="Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Information;
