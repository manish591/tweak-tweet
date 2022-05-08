const getTwitterPostId = (url) => {
  const urlArr = url.split('');
  const id = [];
  for (let i = urlArr.length - 1; i >= 0; i -= 1) {
    if (urlArr[i] === '/') {
      break;
    }
    id.push(url[i]);
  }
  return id.reverse().join('');
};

export { getTwitterPostId };
