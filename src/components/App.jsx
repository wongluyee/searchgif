import React, { useState } from 'react';
import Gif from './Gif';
import GifList from './GifList';
import SearchBar from './SearchBar';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  // const gifIds = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  // const selectedGifId = "gG6OcTSRWaSis";
  // useState give us array
  const [selectedGifId, setSelectedGifId] = useState("gG6OcTSRWaSis");
  const [gifIds, setGifIds] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq", "gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm", "PnpkimJ5mrZRe", "LmNwrBhejkK9EFP504", "5ntdy5Ban1dIY", "ZG719ozZxGuThHBckn", "TilmLMmWrRYYHjLfub", "kHrKpJiCbOmkWD4xT9"]);

  const searchGifs = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 20
    }, (err, res) => {
      const ids = res.data.map((gif) => gif.id);
      setGifIds(ids);
      // this.setState({ giIdList: res.data.map(gif => gif.id) });
    });
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar searchGifs={searchGifs} />
        <div className="selected-gif">
          <Gif gifId={selectedGifId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} setSelectedGifId={setSelectedGifId} />
      </div>
    </div>
  );
};

export default App;
