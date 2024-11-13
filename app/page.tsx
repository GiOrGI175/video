'use client';
import { useState, useEffect } from 'react';
import Collection from '@/components/Collection';

type collectionData = {
  category: number;
  name: string;
  photos: string[];
};

export default function Home() {
  const [collection, setCollection] = useState<collectionData[]>([]);
  return (
    <div>
      <div>
        <h1>my collection</h1>
        <ul>
          <li>home</li>
          <li>test</li>
          <li>test2</li>
          <li>aboyt</li>
        </ul>
        <input type='text' placeholder='search' />
      </div>
      <div className='grid grid-cols-3 gap-[30px] sm:grid-cols-2 xs:grid-cols-1'>
        <Collection
          name='travel around woerd'
          photos={[
            'https://images.unsplash.com/photo-1616578738046-8d6bbb4ee28e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1629774631753-88f827bf6447?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1609618486540-8b210e32fe79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1608507777998-7b4f2c269120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          ]}
        />
      </div>
    </div>
  );
}
