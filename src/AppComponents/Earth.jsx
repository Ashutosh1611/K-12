import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Earth() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const frames = {
    currentIndex: 0,
    maxIndex: 102,
  };

  const images = [];
  let imageLoaded = 0;

  function preloadImages() {
    for (let i = 1; i <= frames.maxIndex; i++) {
      const imageUrl = `/assets/earth_frames/ezgif-frame-${i
        .toString()
        .padStart(3, "0")}.jpg`;

      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        imageLoaded++;
        // Draw the first frame as soon as it's loaded
        if (i === 1) {
          loadImage(0);
        }
        // When all images are loaded, start animation
        if (imageLoaded === frames.maxIndex) {
          startAnimation();
        }
      };

      images.push(img);
    }
  }

  function loadImage(index) {
    if (index >= 0 && index < frames.maxIndex) {
      const canvas = canvasRef.current;
      const ctx = contextRef.current;
      const img = images[index];

      if (!canvas || !ctx || !img) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const scaleX = canvas.width / img.width;
      const scaleY = canvas.height / img.height;
      const scale = Math.max(scaleX, scaleY);

      const newWidth = img.width * scale;
      const newHeight = img.height * scale;

      const offsetX = (canvas.width - newWidth) / 2;
      const offsetY = (canvas.height - newHeight) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
    }
  }

  function startAnimation() {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".animation-container",
        start: "top top",
        scrub: 2,
        // markers: true, // optional
      },
    }).to(frames, {
      currentIndex: frames.maxIndex - 1,
      onUpdate: () => loadImage(Math.floor(frames.currentIndex)),
      ease: "none",
    });
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    contextRef.current = canvas.getContext("2d");
    preloadImages();
  }, []);

  return (
    <section className="relative animation-container h-[500vh] bg-gray-900 text-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          id="frame"
          className="absolute inset-0 w-full h-full"
        ></canvas>

        {/* Dark overlay on top of canvas */}
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative pb-[20rem] z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Empowering schools across the globe
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            with seamless, secure connectivity that transforms learning everywhere.
          </p>
        </div>
      </div>
    </section>

  );
}
