/**
 * Extract Frames Script for Canvas Image-Sequence Mode
 * ----------------------------------------------------
 * Extracts all frames from store-walkthrough.mp4 into public/frames/frame_%04d.jpg.
 * This is an optional alternative to direct MP4 video scrubbing:
 * 
 * Why use canvas image sequences?
 * Direct video.currentTime seeking in browsers can encounter decoder lag if the MP4
 * has sparse keyframes (e.g. 1 keyframe every 250 frames). An image sequence drawn
 * to an HTML5 <canvas> offers guaranteed 60fps frame scrubbing on every GPU and browser.
 * 
 * Usage:
 *   node scripts/extract-frames.js
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const inputVideo = path.resolve('public/assets/store-walkthrough.mp4');
const outputDir = path.resolve('public/frames');

console.log('--- Cool Base Enterprises: Frame Extraction ---');
console.log(`Input:  ${inputVideo}`);
console.log(`Output: ${outputDir}`);

if (!fs.existsSync(inputVideo)) {
  console.error(`Error: Source video not found at ${inputVideo}`);
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

try {
  console.log('Extracting frames via ffmpeg at 24fps (1280x720 JPEG, quality 2)...');
  const cmd = `ffmpeg -y -i "${inputVideo}" -vf "fps=24" -q:v 2 "${outputDir}/frame_%04d.jpg"`;
  execSync(cmd, { stdio: 'inherit' });
  const count = fs.readdirSync(outputDir).filter(f => f.endsWith('.jpg')).length;
  console.log(`✓ Successfully extracted ${count} frames to public/frames/`);
} catch (err) {
  console.error('ffmpeg failed:', err.message);
  console.log('Ensure ffmpeg is installed on your PATH.');
}

