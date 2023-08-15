import React, { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import "./App.css"; // Import the CSS file for styling

function FetchApi({ photos }) {
  const api = createApi({
    accessKey: "0W9SKOR618XHoqiwXgrBWXm5xlWGLktOCo18E51KOGw"
  });

  const [data, setPhotoDetails] = useState(null);
  const [hoveredPhoto, setHoveredPhoto] = useState(null);

  useEffect(() => {
    if (photos) {
      api.search
        .getPhotos({ query: photos })
        .then(results => {
          setPhotoDetails(results);
        })
        .catch(() => {
          console.log("something went wrong!");
        });
    }
  }, [photos]);

  const handleMouseOver = (photoId) => {
    setHoveredPhoto(photoId);
  };

  const handleMouseOut = () => {
    setHoveredPhoto(null);
  };

  if (!photos) {
    return <div className="fetch-message">Please select a category.</div>;
  } else if (data === null) {
    return <div className="fetch-message">Loading...</div>;
  } else {
    return (
      <div className="display-photos">
        

{data.response.results.map(photo => {
  const { user, urls } = photo;
  return (
    <div
      className="photo-card"
      key={photo.id}
      onMouseOver={() => handleMouseOver(photo.id)}
      onMouseOut={handleMouseOut}
    >
      <div className="image-container">
        <img src={urls.regular} alt="unavailable" />
        {hoveredPhoto === photo.id && (
          <p className="user-name-overlay">{user.name}</p>
        )}
      </div>
    </div>
  );
})}

      </div>
    );
  }
}

export default FetchApi;
