import Image from 'next/image'
import React from 'react'
import Button from './Button'

function Hero() {
    return (
        <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
            <div className='hero-map' />

            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
                <Image src={'camp.svg'} alt='camp' width={50} height={50} className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]' />
                <h1 className='bold-32 lg:bold-88 uppercase'>kintamani camp area</h1>
                <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptates beatae, voluptatum sit quasi enim facilis asperiores explicabo et suscipit doloremque nisi assumenda corrupti mollitia facere! Ex consequuntur vero ducimus?</p>

                <div className='my-11 flex flex-wrap gap-5'>
                    <div className='flex items-center gap-2'>
                        {Array(5).fill(1).map((_, index) => (
                            <Image src={'star.svg'} alt='star' key={index} width={24} height={24} />
                        ))}
                    </div>
                    <p className='bold-16 lg:bold-20 text-blue-70'>10k
                        <span className='underline regular-16 lg:regular-20 ml-2'>Exellent Reviews</span>
                    </p>
                </div>

                <div className='flex flex-col w-full gap-3 sm:flex-row'>
                    <Button type='button' title='Download App' variant='btn_green' icon={''} />
                    <Button type='button' title='How We Work?' icon='play.svg' variant='btn_white_text' />
                </div>
            </div>

            <div className='relative flex flex-1 items-start'>
                <div className='relative flex z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 '>
                    <div className='flex flex-col'>
                        <div className='flexBetween'>
                            <p className='regular-16 text-gray-20 capitalize'>location</p>
                            <Image src={'close.svg'} alt='close' width={24} height={24} />
                        </div>
                        <p className='capitalize bold-20 text-white'>kintamani bangli</p>
                    </div>

                    <div className='flexBetween'>
                        <div className='flex flex-col'>
                            <p className='regular-16 block text-gray-20 capitalize'>distance</p>
                            <p className='bold-20 text-white'>173.28 mil</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='regular-16 block text-gray-20 capitalize'>elevation</p>
                            <p className='bold-20 text-white'>2.040 km</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero