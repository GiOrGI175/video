'use clients';
import Image from 'next/image';

type colectiontype = {
  name: string;
  photos: string[];
};

export default function Collection({ name, photos }: colectiontype) {
  return (
    <div className='max-w-[460px]  bg-white p-[30px] rounded-[30px] shadow-md cursor-pointer transform duration-150 ease in out hover:shadow-xl hover:transform hover:translate-x-[5px]'>
      <Image
        className='h-250px w-ful object fit rounded mg-15'
        width={470}
        height={250}
        objectFit='cover'
        alt='item'
        src={photos[1]}
      ></Image>
      <div className='flex justify-between'>
        <Image
          className='w-[31%] h-80pc rounded-[20px'
          width={470}
          height={250}
          objectFit='cover'
          alt='item'
          src={photos[2]}
        ></Image>

        <Image
          className='w-[31%] h-80pc rounded-[20px'
          width={470}
          height={250}
          objectFit='cover'
          alt='item'
          src={photos[3]}
        ></Image>

        <Image
          className='w-[31%] h-80pc rounded-[20px'
          width={470}
          height={250}
          objectFit='cover'
          alt='item'
          src={photos[4]}
        ></Image>
      </div>
    </div>
  );
}
