"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/utils/auth';
import Link from "next/link";
import React from 'react'
import { CgFileDocument } from 'react-icons/cg'
import { FaArrowRightLong, FaFileImage } from 'react-icons/fa6'
import { MdOutlineSurroundSound } from 'react-icons/md'
import { TbShirt, TbShirtOff, TbShirtSport } from 'react-icons/tb'
import "../../../app/globals.css"





function AdminPage() {
  const { isLogin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push('login');
    }
  }, [isLogin, router]);

  if (!isLogin) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center  h-screen overflow-auto">
      <div className='md:p-7'>
        <div className="pt-14">
          <h1 className="text-3xl font-semibold text-gray-800  text-left mb-2">
            {new Date().getHours() < 12 ? "Good Morning!" : new Date().getHours() < 18 ? "Good Afternoon!" : "Good Evening!"}
          </h1>
          <div className="flex items-center flex-wrap gap-2">
            <div className="flex items-center flex-wrap gap-1 mr-auto py-2">
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 mb-8'>
              <Link href="/admin/content" >
                <div className=' myArrow  hover:text-white rounded cursor-pointer bg-white shadow p-2 md:px-4 md:py-3 flex items-center group'>
                  <div className='w-8 h-8 md:w-10 md:h-10 flex  items-center justify-center bg-gray-200 rounded-full group-hover:bg-purple-950'>
                    <CgFileDocument className='h-[24px] w-[24px] ' />
                  </div>
                  <span className='text-lg text-gray-600 font-bold ml-2 text-left '> Content</span>
                </div>
              </Link>
              <div className=' myArrow hover:text-white rounded bg-white shadow p-2 md:px-4 md:py-3 flex items-center group cursor-not-allowed'>
                <div className='w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-200 rounded-full group-hover:bg-purple-950'>
                  <MdOutlineSurroundSound className='h-[24px] w-[24px]' />
                </div>
                <span className='text-lg text-gray-800   font-bold ml-2 text-left'> Live Blog</span>
                <button className='ml-auto text-grey-400 hover:underline text-caption font-normal justify-center flex items-center '>
                  <FaArrowRightLong className=' leftArrow h-[16px] w-[16px] ' />
                </button>
              </div>
              <div className='myArrow hover:text-white rounded  bg-white shadow p-2 md:px-4 md:py-3 flex items-center group cursor-not-allowed'>

                <div className='w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-200 rounded-full group-hover:bg-purple-950'>

                  <FaFileImage className='h-[24px] w-[24px]' />
                </div>
                <span className='text-lg text-gray-600 font-bold ml-2 text-left '> Media</span>

                <button className='ml-auto text-grey-400 hover:underline text-caption font-normal justify-center flex items-center '>
                  <FaArrowRightLong className=' leftArrow h-[16px] w-[16px] ' />

                </button>
              </div>
              <div className=' myArrow rounded hover:text-white  bg-white shadow p-2 md:px-4 md:py-3 flex items-center group cursor-not-allowed'>
                <div className='w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-200 rounded-full group-hover:bg-purple-950'>
                  <TbShirt className='h-[24px] w-[24px]' />
                </div>
                <span className='text-lg text-gray-600 font-bold ml-2 text-left '> Players</span>
                <button className='ml-auto text-grey-400 hover:underline text-caption font-normal justify-center flex items-center '>
                  <FaArrowRightLong className=' leftArrow  h-[16px] w-[16px] ' />
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded bg-white shadow p-4 md:p-6 flex flex-col">
              <div>
                <article>
                  <h1 className='text-2xl text-gray-700 font-semibold '>  The latest from cortex</h1>
                  <div className='space-y-4'>
                    <div className=''>
                      <p>
                        <strong className='text-md text-gray-700' > New Audience Builder Feature Release!</strong>
                      </p>
                      <p className='mt-3 text-lg'>
                        Live now! Check out our new features, Folders and the Audience Sync Panel, right
                        <span className='hover:underline font-semibold cursor-pointer text-gray-700'> here</span> !
                      </p>
                      <div className='mt-4'>
                        <p className='text-gray-700 text-lg'><strong> Want to be kept in the loop on future product releases and updates?</strong></p>
                      </div>
                      <div className='mt-4'>
                        <p className='text-lg'>
                          Head to the main Cortex website,
                          <span className='hover:underline  cursor-pointer font-semibold text-gray-700'> let us know </span>
                          which products you're interested in and sign up for future comms... we'll be in touch!
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage
