import React, { useState, useEffect } from "react";

const fetchEndpoint = () => {
  return fetch("https://aws.random.cat/meow").then((resp) => resp.json());
};

const CatImage = () => {
  const [image, updateImage] = useState(null);

  useEffect(() => {
    fetchEndpoint().then(({ file }) => {
      updateImage(file);
    });
  }, []);

  return image ? <img src={image} alt="Cat" /> : <p>Loading image...</p>;
};

export default CatImage;
