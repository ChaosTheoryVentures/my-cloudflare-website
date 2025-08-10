# Canva Background Designs

This directory contains information about the custom backgrounds created for the website using Canva AI.

## Available Backgrounds

### Download Links
The following backgrounds were created using Canva and are available for download:

1. **Export URL (Temporary - Valid for ~19 hours)**:
   - [Download PNG Background](https://export-download.canva.com/BprkU/DAGjVdBprkU/-1/0/0001-2171209681588007453.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250810%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250810T012259Z&X-Amz-Expires=69619&X-Amz-Signature=29a3b360c1097212d39bf8827d9b0d9d3ccf254758239a08f03e704a52875778&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Sun%2C%2010%20Aug%202025%2020%3A43%3A18%20GMT)

### Canva Design Links (Permanent)
These links will take you to Canva where you can edit and download the designs:

#### Desktop Wallpaper Backgrounds
1. [Design 1 - Edit](https://design.canva.ai/mrwuxa8z) | [Preview](https://design.canva.ai/bdfk4kyr)
2. [Design 2 - Edit](https://design.canva.ai/2p8whawv) | [Preview](https://design.canva.ai/2p9ehyvm)
3. [Design 3 - Edit](https://design.canva.ai/mtpvapff) | [Preview](https://design.canva.ai/ycknxat9)
4. [Design 4 - Edit](https://design.canva.ai/ybhverz2) | [Preview](https://design.canva.ai/v8tvk3rk)

#### Hero Section Backgrounds
5. [Design 5 - Edit](https://design.canva.ai/2p9eehnd) | [Preview](https://design.canva.ai/bdz9c44d)
6. [Design 6 - Edit](https://design.canva.ai/mretd38y) | [Preview](https://design.canva.ai/3h775myd)
7. [Design 7 - Edit](https://design.canva.ai/3vdv4vfh) | [Preview](https://design.canva.ai/5k8b3cxb)
8. [Design 8 - Edit](https://design.canva.ai/2p8ahyaz) | [Preview](https://design.canva.ai/2p8ub5wa)

## How to Use

### Option 1: Download and Add to Project
1. Click any download link above
2. Save the image to your computer
3. Add it to the `public/backgrounds/` folder
4. Update the CSS in `index.html` to reference the local file:
   ```css
   background-image: url('/backgrounds/your-background.png');
   ```

### Option 2: Use Cloudflare R2 Storage
1. Download the backgrounds
2. Upload to your R2 bucket (`my-website-assets`)
3. Reference via your Worker or R2 public URL

### Option 3: Use External CDN
The current implementation uses a beautiful Unsplash gradient as a placeholder. You can replace it with any CDN-hosted image.

## Current Implementation

The website currently uses:
1. **Primary**: Animated CSS gradient with floating orbs
2. **Fallback**: High-quality gradient image from Unsplash
3. **Effects**: Glassmorphism and backdrop filters

## Design Specifications

- **Colors**: #667eea (purple) to #764ba2 (magenta)
- **Resolution**: 1920x1080 (Full HD)
- **Format**: PNG for best quality
- **Style**: Modern, abstract, tech-inspired gradients

## Notes

- The export URLs are temporary and expire after ~19 hours
- For permanent access, use the Canva edit links to regenerate exports
- The CSS animation approach (current implementation) provides the best performance
- Static images can be used for more complex designs but may impact load time

---

*Backgrounds created with Canva AI on August 10, 2025*