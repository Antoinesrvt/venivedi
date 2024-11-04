Monorepo Structure Explanation
apps/
├── expo/ # Native app (iOS/Android)
└── next/ # Web app (Next.js)
packages/
├── app/ # Shared business logic and components
│ └── features/ # Core features used by both platforms
└── ui/ # Shared UI components (Tamagui)

## Platform-Specific Development

### 1- Native Only (iOS/Android)

- Create files in apps/expo/
- Use .native.tsx extension in packages/app for native-specific implementations
- Example: packages/app/features/home/layout.native.tsx

### 2- Web Only (Next.js)

- Create files in apps/next/
- Use .web.tsx extension in packages/app for web-specific implementations
- Example: packages/app/features/home/layout.web.tsx

### 3- Cross-Platform (Shared)

- Create files in packages/app/features/
- Use regular .tsx extension
- These files should use Tamagui components that work on both platforms
- Example: packages/app/features/home/screen.tsx

## Platform Detection

- Use Platform.select() for platform-specific values
- Use isWeb from Tamagui for conditional rendering
- File extensions (.native.tsx vs .web.tsx) automatically handle platform-specific implementations
