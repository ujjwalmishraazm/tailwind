import React, { Children } from "react";

const Grid = () => {
  return (
    <div className="h-screen bg-gray-400 py-10 ">
      <div className="max-w-[70%] min-h-[100%] mx-auto items-center border-x  border-gray-500 shadow-md bg-white text-gray-600 ">
        <div className="grid grid-cols-2 ">
          <Card>
            <CardHeader>
              <Cardtitle className="bg-green-50">
                llm marketing
              </Cardtitle>
            </CardHeader>
            <CardDescription classname="bg-amber-50">
              this is descriptions
            </CardDescription>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Grid;

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="border-gray-400">{children}</div>
}
const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-2">{children}</div>
}
const Cardtitle = ({ children, className }: { children: React.ReactNode, className: string }) => {
  return <h2 className=" font-medium text-lg tracking-tight">{children}</h2>
}

const CardDescription = ({ children, classname }: { children: React.ReactNode, classname: string }) => {
  return <p className="text-base text-neutral-300">{children}</p>
}


















// const Grid = () => {
//   return (
//     <div className='h-screen max-w-[70%] mx-auto bg-gray-700 grid grid-cols-2 md:grid-cols-3 gap-10 overflow-hidden '>
//       <div className='w-full h-30 bg-blue-500 rounded-[5px] shadow-2xl col-span-2 shrink-0 '></div>
//       <div className='w-full h-30 bg-blue-500 rounded-[5px] shadow-2xl col-span-1'></div>
//       <div className='w-full h-30 bg-blue-500 rounded-[5px] shadow-2xl col-span-1'></div>
//       <div className='w-full h-30 bg-blue-500 rounded-[5px] shadow-2xl col-span-1'></div>
//       <div className='w-full h-30 bg-blue-500 rounded-[5px] shadow-2xl col-span-1'></div>
//       <div className='w-full h-30 bg-blue-500 rounded-[5px] shadow-2xl col-span-2'></div>
//       <div className='w-full h-30 bg-blue-500 rounded-[5px] shadow-2xl col-span-1'></div>
//     </div>
//   )
// }

// export default Grid
