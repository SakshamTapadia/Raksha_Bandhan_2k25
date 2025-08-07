# 🎀 Raksha Bandhan Website - A Heartfelt Tribute

A beautiful, interactive website created with love for Raksha Bandhan, celebrating the eternal bond between siblings. This project combines modern web technologies with heartfelt emotions to create a memorable digital experience.

## ✨ Features

### 🎵 **Audio Experience**
- Background music with "Itni Si Khushi" song
- Floating mute/unmute button
- Auto-play functionality with browser compatibility

### 🎨 **Interactive Sections**
- **Hero Section**: Animated entrance with floating hearts and sparkles
- **Letter Animation**: Typewriter effect for personal message
- **Photo Gallery**: Animated gallery with lightbox functionality
- **Rakhi Designer**: Interactive tool to design custom rakhis
- **Video Recording**: Record and share reaction videos
- **Quote Section**: Beautiful inspirational quotes about siblings

### 🎭 **Animations & Effects**
- Smooth scroll animations using Intersection Observer
- Custom CSS animations for floating elements
- Responsive design for all devices
- Beautiful gradient backgrounds
- Hover effects and transitions

### 🎥 **Video Recording Feature**
- Record HD video reactions (720p)
- Download videos locally
- WhatsApp sharing integration
- Professional video naming convention
- Success confirmation with auto-close

### 🎨 **Rakhi Designer Tool**
- Interactive color palettes
- Multiple shapes (Circle, Flower, Hexagon, Star)
- Various patterns (Hearts, Stars, Sparkles, Dots)
- Size options (Delicate, Classic, Bold)
- Style themes (Modern, Traditional, Elegant, Playful)
- Real-time preview
- Download functionality

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Dancing Script, Poppins)
- **Icons**: Lucide React
- **Animations**: Custom CSS + Intersection Observer API
- **Media**: HTML5 Video/Audio APIs
- **TypeScript**: Full type safety

## 📁 Project Structure
```
└── sakshamtapadia-raksha_bandhan_2k25/
    ├── README.md
    ├── components.json
    ├── next.config.mjs
    ├── package.json
    ├── postcss.config.mjs
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── .eslintrc.json
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── audio-player.tsx
    │   ├── closing-section.tsx
    │   ├── footer.tsx
    │   ├── gallery.tsx
    │   ├── hero-section.tsx
    │   ├── message-box.tsx
    │   ├── quote.tsx
    │   ├── rakhi-designer.tsx
    │   └── video-section.tsx
    ├── hooks/
    │   └── use-scroll-animation.ts
    └── lib/
        └── utils.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/raksha-bandhan-website.git
   cd raksha-bandhan-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Add audio file**
   - Place your `itni-si-khushi.mp3` file in the `public/` directory
   - Or replace with your preferred background music

4. **Run development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 🎯 Key Components

### Hero Section
- Animated floating hearts and sparkles
- Responsive typography with Dancing Script font
- Smooth entrance animations

### Message Box
- Typewriter effect for personal letter
- Customizable message content
- Beautiful card design with backdrop blur

### Gallery
- 4 animated rakhi images around center photo
- Lightbox functionality for image viewing
- Mobile-responsive layout

### Video Recording
- HD video recording (720p)
- Local download functionality
- WhatsApp sharing integration
- Professional file naming

### Rakhi Designer
- 6 color palettes (Sunset, Ocean, Royal, Earth, Fire, Garden)
- 4 shapes with real-time preview
- Multiple patterns and sizes
- Canvas-based download feature

## 🎨 Customization

### Colors
The website uses a warm color palette:
- Primary: Pink (#ff6b9d)
- Secondary: Orange (#ff8e53)
- Accent: Blue (#45b7d1)
- Background: Gradient combinations

### Fonts
- **Dancing Script**: For headings and decorative text
- **Poppins**: For body text and UI elements

### Content
- Update personal messages in `message-box.tsx`
- Replace images in `public/` directory
- Modify color palettes in `rakhi-designer.tsx`

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Adapted layouts for medium screens
- **Desktop**: Full-featured experience with advanced animations
- **Touch Friendly**: Large buttons and touch targets

## 🎵 Audio Features

- **Auto-play**: Attempts to start music automatically
- **Loop**: Continuous background music
- **Controls**: Floating mute/unmute button
- **Fallback**: Graceful handling of browser restrictions

## 🎥 Video Features

- **HD Recording**: 1280x720 resolution
- **WebM Format**: Modern, efficient video format
- **Mirror Effect**: Front camera with mirror display
- **Download**: Automatic file download
- **Sharing**: WhatsApp integration with pre-written message

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Drag and drop `out/` folder after `npm run build`
- **GitHub Pages**: Use `next export` for static deployment

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is created with love for personal use. Feel free to use it as inspiration for your own family projects!

## 💝 Acknowledgments

- **Family**: For the inspiration and love
- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For beautiful styling utilities
- **Lucide**: For the beautiful icons
- **Google Fonts**: For the typography

## 📞 Support

If you have any questions or need help customizing this for your family:

- Create an issue on GitHub
- Reach out via email
- Share your own family website creations!

---

**Made with ❤️ for my beloved sister on Raksha Bandhan 2025**

*"A sister is both your mirror and your opposite. She's the person who knows you best and loves you anyway."*
