const getImageTag = src =>
  new Promise((resolve, reject) => {
    let img = new Image();
    img.src = src;

    img.addEventListener('load', () => {
      resolve(img);
    });
  });

export default getImageTag;
