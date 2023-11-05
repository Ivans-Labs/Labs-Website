import { useState } from 'preact/hooks';
import { tw } from 'twind';

export function News() {
  const [expandedNews, setExpandedNews] = useState<number | null>(null);
  const [selectedNews, setSelectedNews] = useState<number>(0);

  const newsList = [
    "News 1: A new breakthrough in technology!",
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
    <div class={tw`my-8 mx-auto max-w-lg flex items-center`}>
      <button onClick={prevNews} class={tw`p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all duration-200 ease-in-out`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="m12.707 8.707-1.414-1.414L6.586 12l4.707 4.707 1.414-1.414L10.414 13H16v-2h-5.586l2.293-2.293z"/></svg>
      </button>
      <div key={`news-${selectedNews}`} class={tw`p-4 mx-6 bg-white rounded-lg shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105`}>
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
      <button onClick={nextNews} class={tw`p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all duration-200 ease-in-out`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M11.293 8.707 13.586 11H8v2h5.586l-2.293 2.293 1.414 1.414L17.414 12l-4.707-4.707-1.414 1.414z"/></svg>
      </button>
    </div>
  );
}