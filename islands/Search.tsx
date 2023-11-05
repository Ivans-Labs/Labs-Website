// /components/Search.tsx

import { tw } from "twind";
import { useRef, useState, useEffect } from 'preact/hooks';
import { FunctionComponent as FC } from "preact";

export const Search: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [links, setLinks] = useState<string[]>([]);

  useEffect(() => {
    const fetchLinks = async () => {
      const response = await fetch('https://ivanryan.dev/');
      const data = await response.text();
      setLinks(data.split('\n'));
    }
    fetchLinks();
  }, []);
  
  const handleSearch = async () => {
    if (inputRef.current) {
      const query = inputRef.current.value.toLowerCase();

      for(const link of links) {
        if (link.endsWith('.txt') || link.endsWith('.csv') || link.endsWith('.md')) {
          const response = await fetch(link);
          const data = await response.text();
          const results = data.toLowerCase().includes(query);
          console.log(`Search in ${link}: ${results ? 'Found' : 'Not found'}`);
        }
      }
    }
  }

  return (
    <div className={tw`h-10 mb-6 flex items-center w-full`}>
      <input type="text" className={tw`border-2 h-full py-1 px-2 w-full bg-transparent text-white placeholder-white`} placeholder="Search..." ref={inputRef} />
      <button type="button" className={tw`flex items-center border-2 border-white rounded-md py-1 px-2 ml-2`} aria-label="Search" onClick={handleSearch}>
        <svg width="20" height="20" className={tw`mr-1`} viewBox="0 0 20 20">
          <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
    </div>
  );
};