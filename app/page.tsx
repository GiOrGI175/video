'use client';
import { useEffect, useState } from 'react';
import Collection from '../components/Collection';

type CollectionData = {
  category: number;
  name: string;
  photos: string[];
};

type myColl = {
  name: string;
};

export default function Home() {
  const [collections, setCollections] = useState<CollectionData[]>([]);
  const [searchValue, setSearchValue] = useState<String>('');
  const [categoryId, setCategoryId] = useState<Number>(0);

  const myCategory: myColl[] = [
    { name: 'All' },
    { name: 'Sea' },
    { name: 'Mountain' },
    { name: 'Architectures' },
    { name: 'Cities' },
  ];

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const url = `https://6734d2605995834c8a90ffac.mockapi.io/photos${
          categoryId ? `?category=${categoryId}` : ''
        }`;

        const response = await fetch(url);
        const data: CollectionData[] = await response.json();
        setCollections(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchCollections();
  }, [categoryId]);

  const filterCollection = collections.filter((collection) =>
    collection.name
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase())
  );

  console.log(filterCollection);

  return (
    <div className='p-[50px] max-w-[1200px] w-full m-auto'>
      <h1 className='font-serif'>My Photo Collection</h1>
      <div className='flex items-center flex-wrap mt-[40px]'>
        <ul className='flex list-none p-0'>
          {myCategory.map((category, index) => (
            <li
              key={index}
              onClick={() => setCategoryId(index)}
              className={`inline-block py-[12px] px-[18px] rounded-[10px] mr-[10px] cursor-pointer font-semibold text-[18px] border-[1px] border-transparent hover:border-black active:bg-black active:text-white transition-all duration-150 ease-in-out ${
                categoryId === index ? 'bg-black text-white' : 'bg-white'
              }`}
            >
              {category.name}
            </li>
          ))}
        </ul>
        <input
          className='mt-[20px] w-[250px] h-[50px] p-[0_15px] text-[16px] rounded-[10px] border-[1px] border-[#00000033] focus:border-[#00000066] outline-none transition-all duration-150 ease-in-out'
          placeholder='Search With Name'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      {filterCollection.map((colection) => (
        <Collection
          key={colection.name}
          name={colection.name}
          photos={colection.photos}
        />
      ))}
    </div>
  );
}
