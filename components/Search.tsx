// /components/Search.tsx

import { tw } from "twind";
import { useRef } from 'preact/hooks';
import { FunctionComponent as FC } from "preact";

export const Search: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (inputRef.current) {
      const query = inputRef.current.value;
      // Implement your search logic here using the `query` string.
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