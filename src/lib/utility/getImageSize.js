const getImageSize = (src, cb) => {
  let img = new Image();
  img.src = src;

  img.addEventListener('load', () => {
    cb(img);
  });
};

export default getImageSize;
