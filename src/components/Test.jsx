import React, { useEffect, useRef } from "react";

const Test = ({ coordinatesArray, imagePath }) => {
  const containerRef = useRef(null);

  const convertDMSToDD = (degrees, minutes, direction) => {
    let dd = parseInt(degrees) + parseFloat(minutes) / 60;

    if (direction === "S" || direction === "W") {
      dd *= -1;
    }

    return dd;
  };

  const addMarkers = (coordinatesArray, containerWidth, containerHeight) => {
    coordinatesArray.forEach((coordinates) => {
      const { latitudeDMS, longitudeDMS } = coordinates;

      const parseCoordinates = (coordinates) => {
        if (!coordinates) {
          console.error("Coordinates data is missing.");
          return null;
        }

        const parts = coordinates.split(/[^\d\w]+/);

        if (parts.length === 3) {
          const degrees = parts[0];
          const minutes = parts[1];
          const direction = parts[2];

          return {
            degrees,
            minutes,
            direction,
          };
        } else {
          console.error("Invalid coordinates format");
          return null;
        }
      };

      const parsedLatitude = parseCoordinates(latitudeDMS);
      const parsedLongitude = parseCoordinates(longitudeDMS);

      if (!parsedLatitude || !parsedLongitude) {
        console.error("Invalid latitude or longitude data.");
        return;
      }

      const decimalLatitude = convertDMSToDD(
        parsedLatitude.degrees,
        parsedLatitude.minutes,
        parsedLatitude.direction
      );
      const decimalLongitude = convertDMSToDD(
        parsedLongitude.degrees,
        parsedLongitude.minutes,
        parsedLongitude.direction
      );

      addMarker(
        decimalLatitude,
        decimalLongitude,
        containerWidth,
        containerHeight
      );
    });
  };

  const addMarker = (lat, long, containerWidth, containerHeight) => {
    const marker = document.createElement("div");
    marker.className = "marker";
    marker.style.position = "absolute";
    marker.style.width = "10px";
    marker.style.height = "10px";
    marker.style.borderRadius = "50%";
    marker.style.backgroundColor = "rgb(43, 0, 235)";

    // Calculate marker positions based on image containment within the container
    const markerLeft = containerWidth / 2 + (long / 360) * containerWidth;
    const markerTop = containerHeight / 2 - (lat / 180) * containerHeight;

    marker.style.left = `${markerLeft}px`;
    marker.style.top = `${markerTop}px`;

    containerRef.current.appendChild(marker);
  };

  useEffect(() => {
    if (
      !coordinatesArray ||
      !Array.isArray(coordinatesArray) ||
      coordinatesArray.length === 0
    ) {
      console.error("Coordinates array is missing or invalid.");
      return;
    }

    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    addMarkers(coordinatesArray, containerWidth, containerHeight);
  }, [coordinatesArray]);

  return (
    <div
      ref={containerRef}
      className="relative lg:max-w-[20%] max-w-[100%] h-full"
    >
      <img
        src={imagePath}
        alt="Map"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default Test;
