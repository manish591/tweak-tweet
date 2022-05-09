import React, { createContext, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { getTwitterPostId } from 'utilis';

const StateContext = createContext();

const apiURL = '/.netlify/functions/node-fetch';

const authAxios = axios.create({
  baseURL: apiURL,
  headers: {
    Accept: 'Accept: application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`,
  },
});

const StateContextProvider = ({ children }) => {
  const [twitterPostUrl, setTwitterPostUrl] = useState('');
  const [showUnsplacePage, setShowUnsplacePage] = useState(false);
  const [cardTheme, setCardTheme] = useState('light');
  const [showCardMetrics, setShowCardMetrics] = useState(true);
  const [imageUrl, setImageUrl] = useState(
    'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=2400&q=60',
  );
  const downloadRef = useRef();
  const [userData, setUserData] = useState({
    data: {
      author_id: '',
      created_at: '2021-09-07T15:59:20.000Z',
      id: '1435271475192156160',
      text: 'Paste the url in the input field and create beautiful social media post from your twitter tweets. You can also translate your tweets to different languages. Add the background of your choice. Download the image and share with everyone, do not forget to tag us.',
      public_metrics: {
        like_count: 75,
        quote_count: 3,
        reply_count: 210,
        retweet_count: 8,
      },
    },
    includes: {
      users: [
        {
          id: '',
          name: 'Manish Devrani',
          profile_image_url:
            'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWluaW9uc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          username: 'manishdevrani777',
        },
      ],
    },
  });
  const id = getTwitterPostId(twitterPostUrl);

  const getTwitterData = async () => {
    try {
      const res = await authAxios.get(`?id=${id}`);
      if (res.status === 200) {
        setUserData(res.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StateContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        getTwitterData,
        twitterPostUrl,
        setTwitterPostUrl,
        userData,
        setUserData,
        downloadRef,
        cardTheme,
        setCardTheme,
        setShowCardMetrics,
        showCardMetrics,
        showUnsplacePage,
        setShowUnsplacePage,
        imageUrl,
        setImageUrl,
      }}>
      {children}
    </StateContext.Provider>
  );
};

StateContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { StateContext, StateContextProvider };
