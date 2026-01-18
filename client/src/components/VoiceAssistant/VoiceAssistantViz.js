import React, { useState, useEffect, useRef } from 'react';
import './VoiceAssistantViz.css';

const VoiceAssistantViz = () => {
  const [isListening, setIsListening] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const [time, setTime] = useState(0);
  const animationFrameRef = useRef(null);

  // Animation loop that runs continuously
  useEffect(() => {
    const animate = () => {
      setTime(prev => prev + 0.02);

      if (isListening) {
        if (Math.random() > 0.93) {
          const targetLevel = 0.3 + Math.random() * 0.7;
          setAudioLevel(prev => prev + (targetLevel - prev) * 0.12);
        } else {
          setAudioLevel(prev => prev * 0.98);
        }
      } else {
        setAudioLevel(0);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isListening]);

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  // 5 colorful dots
  const dots = [
    { color: '#ff9500', name: 'orange' },   // Orange
    { color: '#ff375f', name: 'pink' },     // Pink/Red
    { color: '#af52de', name: 'purple' },   // Purple
    { color: '#007aff', name: 'blue' },     // Blue
    { color: '#34c759', name: 'green' },    // Green
  ];

  const getDotPosition = (index, total) => {
    if (!isListening) {
      // Each dot travels around the circle continuously
      const speed = 0.8;
      const angle = (time * speed) + (index / total) * Math.PI * 2;
      const radius = 16;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        scale: 1,
      };
    } else {
      // Horizontal line with wave motion when talking
      const baseSpacing = 16;
      const centerOffset = -((total - 1) * baseSpacing) / 2;
      const x = centerOffset + index * baseSpacing;

      // Create wave effect based on audio level and time
      const waveOffset = Math.sin(time * 3 + index * 0.8) * audioLevel * 10;
      const y = waveOffset;

      // Scale variation for sound wave effect
      const scale = 1 + Math.sin(time * 4 + index * 1.2) * audioLevel * 0.5;

      return { x, y, scale };
    }
  };

  return (
    <div className="voice-assistant-bar">
      <div
        className="voice-assistant-container"
        onClick={toggleListening}
      >
        {/* Click hint */}
        {!isListening && (
          <div className="voice-hint">
            Click to start
          </div>
        )}

        {dots.map((dot, index) => {
          const pos = getDotPosition(index, dots.length);

          return (
            <div
              key={index}
              className="voice-dot"
              style={{
                backgroundColor: dot.color,
                transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
                boxShadow: `0 0 ${10 + (isListening ? audioLevel * 20 : 0)}px ${dot.color}`,
              }}
            />
          );
        })}

        {/* Rotating animation hint for idle state */}
        {!isListening && (
          <div className="voice-circle-hint" />
        )}
      </div>
    </div>
  );
};

export default VoiceAssistantViz;
