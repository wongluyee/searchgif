import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  const { gifIds, setSelectedGifId } = props;
  // const gifIds = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  return (
    <div className="gif-list">
      { gifIds.map((gifId) => <Gif gifId={gifId} setSelectedGifId={setSelectedGifId} key={gifId} />) }
    </div>
  );
};

export default GifList;
