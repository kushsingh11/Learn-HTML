# Learn HTML - Interactive Mobile App

An interactive Expo-based Android application designed to help beginners learn HTML through structured lessons, live examples, and an interactive code editor with real-time preview.

## Features

- **12 Comprehensive HTML Lessons**: From basics to advanced topics
  - Introduction to HTML
  - Headings and Paragraphs
  - Text Formatting
  - Links and Images
  - Unordered and Ordered Lists
  - Tables
  - Forms
  - Semantic HTML
  - And more!

- **Interactive Code Editor**: Write HTML code and see it rendered in real-time
- **Live Preview**: WebView-based HTML preview that updates as you code
- **Progress Tracking**: Mark lessons as complete and track your learning journey
- **Exercises with Solutions**: Practice exercises with answer reveals
- **Beautiful UI**: Clean, modern interface with intuitive navigation
- **Categorized Content**: Lessons organized by difficulty and category

## Screenshots

The app includes:
- Home screen with lesson list and progress tracker
- Lesson detail screen with comprehensive content and examples
- Interactive code editor with live HTML preview

## Tech Stack

- **Expo**: React Native framework for cross-platform development
- **TypeScript**: Type-safe JavaScript
- **React Navigation**: Stack-based navigation
- **React Native WebView**: Live HTML rendering
- **AsyncStorage**: Persistent progress tracking

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Learn-HTML
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Run on Android**:
   ```bash
   npm run android
   ```

   Or scan the QR code with the Expo Go app on your Android device.

## Project Structure

```
Learn-HTML/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.tsx          # Main lesson list screen
│   │   ├── LessonDetailScreen.tsx  # Lesson content and info
│   │   └── CodeEditorScreen.tsx    # Interactive code editor
│   ├── components/                  # Reusable components (future use)
│   ├── data/
│   │   └── lessons.ts              # HTML lesson content
│   ├── types/
│   │   └── index.ts                # TypeScript type definitions
│   └── utils/
│       └── storage.ts              # AsyncStorage utilities
├── App.tsx                          # Main app entry point with navigation
├── app.json                         # Expo configuration
└── package.json                     # Dependencies
```

## Lesson Categories

- **Basics**: Introduction to HTML, document structure
- **Text**: Headings, paragraphs, formatting
- **Lists**: Ordered and unordered lists
- **Links**: Hyperlinks and navigation
- **Images**: Adding and configuring images
- **Tables**: Creating data tables
- **Forms**: User input elements
- **Advanced**: Semantic HTML, divs, spans

## How to Use

1. **Browse Lessons**: Start from the home screen to see all available HTML lessons
2. **Learn**: Tap on a lesson to read detailed explanations and view examples
3. **Practice**: Click "Try It Yourself" to open the interactive code editor
4. **Experiment**: Modify the code and click "Run Code" to see live results
5. **Complete**: Mark lessons as complete to track your progress

## Development

### Adding New Lessons

Edit `src/data/lessons.ts` to add new lesson content:

```typescript
{
  id: 13,
  title: 'Your Lesson Title',
  description: 'Brief description',
  category: 'basics' | 'text' | 'lists' | 'links' | 'images' | 'tables' | 'forms' | 'advanced',
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  content: 'Detailed lesson content...',
  example: 'HTML code example...',
  exercise: 'Practice exercise description',
  exerciseAnswer: 'Solution code'
}
```

### Customizing Styles

Each screen has its own StyleSheet. Modify the styles in the respective screen files to customize the appearance.

## Building for Production

### Android APK

```bash
# Build for Android
eas build --platform android

# Or use local build
npx expo run:android --variant release
```

## Requirements

- Node.js 18+
- npm or yarn
- Expo CLI
- Android Studio (for Android development) or Expo Go app

## License

MIT License - feel free to use this project for learning and teaching purposes.

## Contributing

Contributions are welcome! Feel free to:
- Add more HTML lessons
- Improve the UI/UX
- Add new features (CSS lessons, quizzes, etc.)
- Fix bugs

## Future Enhancements

- Add CSS and JavaScript lessons
- Include interactive quizzes
- Add achievements and badges
- Support for sharing code snippets
- Dark mode support
- Offline mode improvements
- Community code sharing

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

Happy Learning! 🚀
