# Cool Base Enterprises – DuraCoat Centre
### Cinematic Scroll-Driven Store Walkthrough Experience

A production-ready, scroll-scrubbed interactive landing experience built with **React 19**, **Vite**, **Tailwind CSS**, and **GSAP ScrollTrigger**.

As the visitor scrolls, the camera moves from the store exterior, through the entrance portal, and into the aisles and shelves of the **DuraCoat Centre** in Siaya town.

---

## 🎬 Video Asset Configuration

The video asset is referenced from a single config path:
```javascript
// src/config.js
export const WALKTHROUGH_CONFIG = {
  videoSrc: '/assets/store-walkthrough.mp4',
  optimizedVideoSrc: '/assets/store-walkthrough-optimized.mp4',
  posterSrc: '/assets/store-walkthrough-poster.jpg',
  ...
};
```

To drop in a replacement video, simply place your video file at:
```
public/assets/store-walkthrough.mp4
```

---

## ⚡ Video Scrubbing & Keyframe Optimization

### Why Standard MP4s Scrub Choppily
Standard MP4 videos compress motion by inserting keyframes (I-frames) only once every 5 to 10 seconds (every 120–250 frames), while all intervening frames (P and B frames) store only directional deltas. When scrubbing backwards or quickly via `video.currentTime`, the browser decoder is forced to seek back to the nearest prior keyframe and compute dozens of frames in sequence, causing visual stutter and freeze frames.

### One-Line ffmpeg Command (All Intra-Frames / Zero Latency)
To make video scrubbing completely instantaneous (0ms seek latency) at 60fps on all GPUs and browsers, run this one-line command to re-encode every single frame as an intra-frame (keyframe):

```bash
ffmpeg -i input.mp4 -g 1 -an -c:v libx264 -crf 20 -preset fast public/assets/store-walkthrough.mp4
```

* `-g 1`: Sets Group of Pictures (GOP) size to 1, making every frame an I-frame.
* `-an`: Strips audio tracks (not needed for muted scroll background).
* `-crf 20`: Visually lossless high-definition quality.
* `-preset fast`: Fast, efficient encoder profile.

---

## 🖼️ Optional Canvas Image-Sequence Mode

For low-power devices, legacy mobile browsers, or environments where video tag seek permissions are restricted, the project includes an automated canvas image-sequence engine.

1. **Extract all frames at 24fps**:
   ```bash
   npm run extract-frames
   ```
   *(Runs `scripts/extract-frames.js` via ffmpeg and generates frames into `public/frames/frame_0001.jpg`)*

2. **Enable canvas mode in config**:
   ```javascript
   // src/config.js
   canvasMode: {
     enabled: true, // Switch from <video> to <canvas>
     frameCount: 240,
     framePath: (index) => `/frames/frame_${String(index).padStart(4, '0')}.jpg`,
   }
   ```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🏗️ Architecture & Core Mechanics

* **Pinned Hero Stage (`WalkthroughHero.jsx`)**: A 450vh scroll track with a pinned 100vh viewport stage powered by GSAP ScrollTrigger (`scrub: 0.5`).
* **Parallax Depth Separation**:
  * **Background Video**: Slowest layer with slight scale-up (`scale(1.0) -> scale(1.15)`).
  * **Emerging Entrance (`EmergingEntrance.jsx`)**: Architectural portal pillars that part outward and aperture blur-to-sharp depth-of-field transition (`blur(10px) -> blur(0px)`).
  * **Mid-ground (`ParallaxMidground.jsx`)**: Floating DuraCoat paint cans, precision rollers, and builder toolsets with differential parallax velocity.
  * **Foreground Copy Timeline (`ScrollCopyTimeline.jsx`)**:
    1. *Cool Base Enterprises* (Brand anchor)
    2. *DuraCoat Centre • Ask the experts* (Official authorized partner badge)
    3. *1–2 Line Value Statement* (Certified master tinting & heavy building supplies)
    4. *Primary CTA: “Shop Now”* (Directs down into the catalog floor)
* **Exit Transition**: At `progress = 1.0`, GSAP releases the pin cleanly with zero jump or layout shift into the standard **Product Catalog** and technical features floor.
* **Quote Drawer (`QuoteDrawer.jsx`)**: Slide-out cart with live subtotal calculation, delivery toggle, and direct one-click WhatsApp dispatch to `0708 292558`.

---

## ♿ Accessibility & Performance

* **WCAG AA Compliance**: High-contrast text on dark slate surfaces (`#07090E`).
* **Reduced Motion**: Automatically detects `prefers-reduced-motion: reduce` and renders a clean, static, high-res presentation without motion sickness.
* **Performance**: Animates strictly `transform` and `opacity` properties using hardware-accelerated composite layers.
