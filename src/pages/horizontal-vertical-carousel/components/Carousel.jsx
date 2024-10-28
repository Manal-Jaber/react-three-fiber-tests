// components/Carousel.js
import { Card } from "./Card";

function Carousel({ radius = 6, curvatureAngle = Math.PI / 2, folderPath = "/images" }) {
    let imageUrls = Array.from({ length: 9 }, (_, i) => `${folderPath}/img${i + 1}_.jpg`);
    imageUrls = [...imageUrls, ...imageUrls, ...imageUrls, ...imageUrls, ...imageUrls, ...imageUrls];

    const gridSize = Math.ceil(Math.sqrt(imageUrls.length));
    const latStep = curvatureAngle / (gridSize - 1);
    const lonStep = curvatureAngle / (gridSize - 1);

    return (
        <>
            {imageUrls.map((url, index) => {
                const row = Math.floor(index / gridSize);
                const col = index % gridSize;
                const latAngle = (row - (gridSize - 1) / 2) * latStep;
                const lonAngle = (col - (gridSize - 1) / 2) * lonStep;

                const x = radius * Math.sin(lonAngle) * Math.cos(latAngle);
                const y = radius * Math.sin(latAngle);
                const z = radius * Math.cos(lonAngle) * Math.cos(latAngle);

                return (
                    <Card
                        key={index}
                        url={url}
                        position={[x, y, z]}
                        rotation={[0, -lonAngle, 0]}
                    />
                );
            })}
        </>
    );
}

export { Carousel };
