import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

function Rig(props) {
    const ref = useRef();
    const scroll = useScroll();
    const [horizontalScroll, setHorizontalScroll] = useState(0);
    const [verticalScroll, setVerticalScroll] = useState(0);

    useEffect(() => {
        const handleWheel = (event) => {
            setHorizontalScroll((prev) => prev + event.deltaX);
            setVerticalScroll((prev) => prev + event.deltaY);
        };

        window.addEventListener("wheel", handleWheel);
        return () => window.removeEventListener("wheel", handleWheel);
    }, []);

    useFrame((state, delta) => {
        const horizontalOffset = horizontalScroll * 0.001; // Adjust for sensitivity
        const verticalOffset = verticalScroll * 0.001; // Adjust for sensitivity

        // Apply both horizontal and vertical offset for diagonal movement
        ref.current.position.x = horizontalOffset;
        ref.current.position.y = verticalOffset;

        state.events.update(); // Raycasts every frame rather than on pointer-move
        state.camera.lookAt(0, 0, 0); // Look at center
    });

    return <group ref={ref} {...props} />;
}

export { Rig };
