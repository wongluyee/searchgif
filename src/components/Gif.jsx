import React from 'react';

const Gif = (props) => {
  const { gifId, setSelectedGifId } = props;
  const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;
  const handleClick = () => {
    setSelectedGifId(gifId);
  };
  return (
    <img className="gif" src={url} alt="gif" onClick={handleClick} />
  );
};

export default Gif;

// rsc -> functional component
// rcc -> functional class
