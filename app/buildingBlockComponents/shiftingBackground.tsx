import { useEffect, useRef } from "react";

type ShiftingBackgroundProps = {
  imageUrl?: string;
};

export default function ShiftingBackground({
  imageUrl = "/images/skyclouds.webp",
}: ShiftingBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const keyframes = [
      { transform: "translateX(0)" },
      { transform: "translateX(-40vh)" },
      { transform: "translateX(-5vh)" },
      { transform: "translateX(-40vh)" },
      { transform: "translateX(-5vh)" },
      { transform: "translateX(-40vh)" },
      { transform: "translateX(-5vh)" },
      { transform: "translateX(0)" },
    ];

    const animation = backgroundRef.current?.animate(keyframes, {
      duration: 200000,
      // duration: 1000,
      iterations: Infinity,
      easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    });

    return () => animation?.cancel();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: -1,
        borderRadius: 0,
      }}
    >
      <div
        ref={backgroundRef}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "150vw",
          height: "120vh",
          position: "absolute",
          top: 0,
          left: 0,
          borderRadius: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(135, 206, 250, 0.44)",
          borderRadius: 0,
        }}
      />
    </div>
  );
}
