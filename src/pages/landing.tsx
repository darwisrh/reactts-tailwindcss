

const Landing: React.FC = () => {
   return (
      <div 
         className="h-[100vh] bg-[#232946] flex justify-center items-center"
      >
         <div
            className="bg-[#b8c1ec] w-[500px] h-[300px] rounded-lg flex justify-center items-center border-[5px] border-[#121629]"
         >
            <h1
               className="text-[30px] font-[700] text-center"
            >
               This page created using React Typescript and TailwindCSS
            </h1>
         </div>
      </div>
   )
}

export default Landing