import { h } from 'preact';

export function News() {
  const newsList = [
    "News 1: A new breakthrough in AI technology!",
    "News 2: The latest developments in quantum computing.",
    "News 3: New programming language takes the world by storm.",
    // ...rest of your news items
  ];
  
  return (
    <div>
      {newsList.map((newsItem,index) => (
        <div key={`news-${index}`}>
          <p>{newsItem}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}