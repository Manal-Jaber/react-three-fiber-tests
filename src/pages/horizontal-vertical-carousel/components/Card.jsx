// components/Card.js
import { Image } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { easing } from "maath";
import * as THREE from "three";

const Card = React.forwardRef(({ url, ...props }, ref) => {
    const localRef = useRef();
    const [hovered, setHovered] = useState(false);

    const pointerOver = (e) => {
        e.stopPropagation();
        setHovered(true);
    };

    const pointerOut = () => setHovered(false);

    useFrame((state, delta) => {
        const currentRef = ref?.current || localRef.current;
        if (currentRef) {
            const targetScale = hovered ? 1.15 : 1;
            easing.damp3(currentRef.scale, targetScale, 0.1, delta);
        }
    });

    return (
        <Image
            ref={ref || localRef}
            url={url}
            transparent
            side={THREE.DoubleSide}
            onPointerOver={pointerOver}
            onPointerOut={pointerOut}
            {...props}
        />
    );
});

export { Card };
