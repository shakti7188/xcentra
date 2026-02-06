"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface CardFlip3DProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
  autoFlip?: boolean;
  flipDuration?: number;
}

export default function CardFlip3D({
  front,
  back,
  className = "",
  autoFlip = true,
  flipDuration = 0.8,
}: CardFlip3DProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`perspective cursor-pointer ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative preserve-3d w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: flipDuration, ease: "easeInOut" }}
        {...(autoFlip && {
          initial: { rotateY: 0 },
          whileInView: {
            rotateY: [0, 180, 360],
            transition: {
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              delay: 0.5,
            },
          },
          viewport: { once: true },
        })}
      >
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden">{front}</div>
        {/* Back Face */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          {back}
        </div>
      </motion.div>
    </div>
  );
}
