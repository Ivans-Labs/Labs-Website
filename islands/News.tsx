import { h } from 'preact';
import { useState } from 'preact/hooks';
import { tw } from 'twind';

export function News() {
  const [expandedNews, setExpandedNews] = useState<number | null>(null);
  const [selectedNews, setSelectedNews] = useState<number>(0);

  const newsList = [
    "News 1: A new breakthrough in AI technology!",
    "News 2: The latest developments in quantum computing.",
    "News 3: New programming language takes the world by storm.",
    // ...rest of your news items
  ];

  const handleClick = (index: number) => {
    setExpandedNews(expandedNews === index ? null : index);
  };

  const nextNews = () => {
    setSelectedNews((prev) => prev === newsList.length - 1 ? 0 : prev + 1);
  };

  const prevNews = () => {
    setSelectedNews((prev) => prev === 0 ? newsList.length - 1 : prev - 1);
  };

  return (
    <div class={tw`my-8 mx-auto max-w-lg flex flex-col items-center`} >
      <button onClick={prevNews} class={tw`mb-4 p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all duration-200 ease-in-out`}>Prev</button>
      <div key={`news-${selectedNews}`} class={tw`p-4 mb-6 bg-white rounded-lg shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105`}>
        <p class={tw`text-[#03396c]`}>{newsList[selectedNews].split(':')[1]}</p>
        {expandedNews === selectedNews && (
          <p class={tw`mt-2 text-gray-600 italic`}>[Expanded news description]</p>
        )}
        <button 
          class={tw`mt-4 py-1 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-200 ease-in-out`}
          onClick={() => handleClick(selectedNews)}
        >
          {expandedNews === selectedNews ? 'Read Less' : 'Read More'}
        </button>
        <hr class={tw`mt-3 border-gray-200`}/>
      </div>
      <button onClick={nextNews} class={tw`mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all duration-200 ease-in-out`}>Next</button>
    </div>
  );
}