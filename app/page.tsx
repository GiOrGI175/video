'use client';
import { useEffect, useState } from 'react';
import Collection from '../components/Collection';

type CollectionData = {
  category: number;
  name: string;
  photos: string[];
};

export default function Home() {
  const [collections, setCollections] = useState<CollectionData[]>([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch(
          'https://6734d2605995834c8a90ffac.mockapi.io/photos'
        );
        const data: CollectionData[] = await response.json();
        setCollections(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchCollections();
  }, []);

  return (
    <div>
      <div>
        <h1>My Colection</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Test</li>
          <li>Test2</li>
        </ul>
        <input type='text' placeholder='Search' />
      </div>

      {/* Colection */}
      <div className='grid grid-cols-1 gap-[30px] mt-[40px] sm:grid-cols-2'>
        {/* <Collection
          name='Travel Around World'
          photos={[
            'https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1612676239016-41e2c92b8e06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1610809027249-86c649feacd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1621682372775-533449e550ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          ]}
        /> */}

        {collections.map((colection) => (
          <Collection
            key={colection.name}
            name={colection.name}
            photos={colection.photos}
          />
        ))}
      </div>
    </div>
  );
}
