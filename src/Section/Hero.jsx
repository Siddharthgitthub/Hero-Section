import React from 'react';
import ModelViewer from '../Components/ModelViewer';

const Hero = () => {
    return (
        <section style={{
            position: 'relative',
            width: '100%',
            height: '100vh',
            background: '#0a0015',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
        }}>
            {/* Left: Headline */}
            <div style={{
                position: 'relative',
                zIndex: 10,
                paddingLeft: '6vw',
                flex: '0 0 auto',
            }}>
                <span style={{
                    fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    textShadow: '0 0 60px rgba(255,255,255,0.4)',
                    lineHeight: 1.1,
                    display: 'block',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                }}>
                    HACKSERIES
                </span>
            </div>

            {/* Right: 3D Model — absolutely positioned, overflows bottom */}
            <div style={{
                position: 'absolute',
                right: '-4vw',
                top: '25vh',
                width: '60vw',
                height: '200vh',
            }}>
                <ModelViewer
                    url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
                    width="100%"
                    height="100%"
                    modelXOffset={0}
                    modelYOffset={0.08}
                    defaultRotationX={-30}
                    defaultRotationY={12}
                    defaultZoom={0.20}
                    minZoomDistance={0.1}
                    maxZoomDistance={10}
                    cameraFov={32}
                    enableMouseParallax={false}
                    enableHoverRotation
                    enableManualRotation={false}
                    enableManualZoom={false}
                    environmentPreset="warehouse"
                    fadeIn={false}
                    autoRotate={false}
                    showScreenshotButton={false}
                    ambientIntensity={0.15}
                    keyLightIntensity={1.4}
                    fillLightIntensity={0.25}
                    rimLightIntensity={0.5}
                    shadowColor="#6b0000"
                    shadowOpacity={1.5}
                />
            </div>
        </section>
    );
};

export default Hero;
