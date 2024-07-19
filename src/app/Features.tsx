import React from "react";
import { Button } from "@/components/ui/button";
import { Icon } from '@iconify/react'

const Features: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-20 brandPadding max-w-[1200px] mx-auto">
      <div className="text-center mb-14">
        <h4 className="text-3xl md:text-4xl lg:6xl font-bold mt-20">Restaurants For You</h4>
        <p className="text-xl md:text-2xl lg:text-4xl mt-4 font-semibold text-[#f98222]  ">
          Discover your Restaurant
        </p>
      </div>

      <div className="space-y-12">
        <div className="w-full flex max-sm:flex-col gap-y-6 items-center justify-start sm:justify-between">
          <div className="w-full sm:w-[60%] flex flex-col max-sm:-center  ">
            <h4 className="mb-3 text-primary max-sm:text-center text-lg md:text-2xl font-semibold">
              The Gourmet Bistro
            </h4>
            <p className="mb-4 full text-sm md:text-md lg:text-lg">
              Elevating dining experiences with exquisite culinary creations that tantalize your taste buds and delight your senses.
            </p>
            <Button className="rounded-full w-12 h-12 bg-primary">
              <Icon className='w-[200px] h-[200px]' icon='ei:arrow-right' />
            </Button>
          </div>
          <div className="bg-primary w-[50%] h-[50%] md:w-[200px] md:h-[200px] rounded-full overflow-hidden">
            <img
              className="rounded-full w-full h-full scale-90 object-cover"
              src="/assets/image5.jpeg"
              alt="restaurant" />
          </div>
        </div>
        <div className="w-full flex max-sm:flex-col-reverse gap-y-6 items-center justify-start sm:justify-between">
          <div className="bg-primary w-[50%] h-[50%] md:w-[200px] md:h-[200px] rounded-full overflow-hidden">
            <img
              className="rounded-full w-full h-full scale-90 object-cover"
              src="/assets/image3.jpeg"
              alt="restaurant"
            />
          </div>
          <div className="w-full sm:w-[60%] flex flex-col">
          <h4 className="mb-3 text-primary max-sm:text-center text-lg md:text-2xl font-semibold">
          Urban Café
            </h4>
            <p className="mb-4 full text-sm md:text-md lg:text-lg">
              EElevating dining experiences with exquisite culinary creations that tantalize your taste buds and delight your senses.
            </p>
            <Button className="rounded-full w-12 h-12 bg-primary">
              <Icon className='w-[200px] h-[200px]' icon='ei:arrow-right' />
            </Button>
          </div>
        </div>
        {/* <div className="flex flex-row items-center mt-[100px] md:gap-3 gap-4 pl-10 lg:gap-40">
          <div className=" flex items-center justify-center bg-primary w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] rounded-full bg-opaque-80">
            <img
              className="rounded-full  w-[100px] h-[100px] lg:w-[180px] lg:h-[180px] "
              src="/assets/image3.jpeg"
              alt="restaurant" />
          </div>
          <div className="flex flex-col pr-[100px]lg:pr-[200px] ">
            <h4 className="mb-3 text-lg md:text-2xl font-semibold">Urban Café</h4>
            <p className="mb-4 w-[300px] lg:w-[500px] text-sm md:text-md lg:text-lg">
              Elevating dining experiences with exquisite culinary creations that tantalize your taste buds and delight your senses.
            </p>
            <Button className="rounded-full w-12 h-12 bg-primary"><Icon className='w-[200px] h-[200px]' icon='ei:arrow-right' /></Button>
          </div>
        </div> */}
        <div className="w-full flex max-sm:flex-col gap-y-6 items-center justify-start sm:justify-between">
        <div className="flex flex-col pr-[100px]lg:pr-[200px] ">
          <h4 className="mb-3 text-primary max-sm:text-center text-lg md:text-2xl font-semibold">
          Sea Breeze Diner
          </h4>
            <p className="mb-4 w-[300px] lg:w-[500px] text-sm md:text-md lg:text-lg">
              Bringing fresh flavors and ocean vibes to every meal, offering a seaside escape right at your table.
            </p>
            <Button className="rounded-full w-12 h-12 bg-primary"><Icon className='w-[200px] h-[200px]' icon='ei:arrow-right' /></Button>
          </div>
          <div className="bg-primary w-[50%] h-[50%] md:w-[200px] md:h-[200px] rounded-full overflow-hidden">
            <img
              className="rounded-full w-full h-full scale-90 object-cover"
              src="/assets/image4.jpeg"
              alt="restaurant" />
          </div>
        </div>

        <div className="w-full flex max-sm:flex-col-reverse gap-y-6 items-center justify-start sm:justify-between">
        <div className="bg-primary w-[50%] h-[50%] md:w-[200px] md:h-[200px] rounded-full overflow-hidden">
        <img
              className="rounded-full w-full h-full scale-90 object-cover"
              src="/assets/image2.jpeg"
              alt="restaurant" />
          </div>
          <div className="flex flex-col pr-[100px]lg:pr-[200px] ">
          <h4 className="mb-3 text-primary max-sm:text-center text-lg md:text-2xl font-semibold">
          Spice Route</h4>
            <p className="mb-4 w-[300px] lg:w-[500px] text-sm md:text-md lg:text-lg">
              Embark on a journey of taste with our diverse, flavorful dishes that transport you to exotic destinations.
            </p>
            <Button className="rounded-full w-12 h-12 bg-primary"><Icon className='w-[200px] h-[200px]' icon='ei:arrow-right' /></Button>
          </div>
        </div>
      </div>

      <Button className="rounded-full w-[200px] h-[50px] bg-[#f2f2f2] border-2 text-[#f15a2a] border-primary p-4 mb-10 mt-6"> See more </Button>

    </div>
  )
}
export default Features;