const fetch = require('node-fetch');
const process = require('process');

const handler = async (event) => {
  const queryString = event.queryStringParameters;
  try {
    const response = await fetch(
      `https://api.twitter.com/2/tweets/${queryString.id}?tweet.fields=attachments,public_metrics,created_at&expansions=author_id&place.fields=full_name&user.fields=username,profile_image_url`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`,
        },
      },
    );
    if (!response.ok) {
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }),
    };
  }
};

module.exports = { handler };
