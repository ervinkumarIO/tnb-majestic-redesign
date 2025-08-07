# TNB Majestic Redesign - Project Guide

## 🚀 Project Overview

This is a modern React application built with **Vite**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** components. It appears to be a redesign of a TNB (possibly Tenaga Nasional Berhad) website with a beautiful, responsive interface.

### 🛠️ Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite (fast development server and build tool)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (modern, accessible components)
- **Routing**: React Router DOM
- **State Management**: TanStack Query (React Query)
- **Icons**: Lucide React
- **Animations**: Tailwind CSS animations

---

## 📁 Project Structure Explained

### Root Configuration Files

#### `package.json`
- **Purpose**: Defines project dependencies, scripts, and metadata
- **Key Scripts**:
  - `npm run dev` - Start development server
  - `npm run build` - Build for production
  - `npm run preview` - Preview production build
  - `npm run lint` - Check code quality

#### `vite.config.ts`
- **Purpose**: Vite build tool configuration
- **Key Features**:
  - React SWC plugin for fast compilation
  - Path aliases (`@` points to `src/`)
  - Development server on port 8080
  - Component tagging for development

#### `tailwind.config.ts`
- **Purpose**: Tailwind CSS configuration
- **Features**:
  - Custom color system with CSS variables
  - Dark mode support
  - Custom animations (accordion effects)
  - Responsive breakpoints
  - shadcn/ui integration

#### `components.json`
- **Purpose**: shadcn/ui configuration
- **Defines**: Component paths, styling preferences, and aliases

#### `tsconfig.json` files
- **Purpose**: TypeScript configuration
- **Types**: App config, Node config, and main config

---

### Source Code Structure (`src/`)

#### Entry Points

##### `main.tsx`
```typescript
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
```
- **Purpose**: Application entry point
- **Function**: Mounts React app to DOM element with ID "root"

##### `App.tsx`
```typescript
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
```
- **Purpose**: Root component with providers and routing
- **Providers**:
  - `QueryClientProvider` - For data fetching
  - `TooltipProvider` - For tooltip components
  - `BrowserRouter` - For client-side routing
- **Toast Systems**: Dual toast systems (Toaster + Sonner)

#### Pages (`src/pages/`)

##### `Index.tsx`
- **Purpose**: Main homepage component
- **Structure**: Composed of multiple sections:
  ```typescript
  <Header />           // Navigation
  <HeroSection />      // Main banner/hero
  <FeaturedCards />    // Featured content
  <DiscoverSection />  // Discovery content
  <StatsSection />     // Statistics display
  <Footer />           // Site footer
  <FloatingChat />     // Chat widget
  ```

##### `NotFound.tsx`
- **Purpose**: 404 error page for invalid routes

#### Components (`src/components/`)

The project uses a component-based architecture:

##### Main Layout Components
- **`Header.tsx`** - Navigation bar with menus and search
- **`HeroSection.tsx`** - Main banner/hero section
- **`FeaturedCards.tsx`** - Featured content cards
- **`DiscoverSection.tsx`** - Content discovery section
- **`StatsSection.tsx`** - Statistics and metrics display
- **`Footer.tsx`** - Site footer with links
- **`FloatingChat.tsx`** - Floating chat widget

##### UI Components (`src/components/ui/`)
These are shadcn/ui components - pre-built, accessible UI components:

**Form & Input Components:**
- `button.tsx` - Customizable button component
- `input.tsx` - Text input fields
- `textarea.tsx` - Multi-line text input
- `checkbox.tsx` - Checkbox input
- `radio-group.tsx` - Radio button groups
- `select.tsx` - Dropdown select
- `switch.tsx` - Toggle switch
- `slider.tsx` - Range slider

**Layout Components:**
- `card.tsx` - Content cards
- `sheet.tsx` - Slide-out panels
- `dialog.tsx` - Modal dialogs
- `drawer.tsx` - Mobile-friendly drawers
- `tabs.tsx` - Tabbed interfaces
- `accordion.tsx` - Collapsible content
- `separator.tsx` - Visual separators

**Navigation Components:**
- `navigation-menu.tsx` - Navigation menus
- `dropdown-menu.tsx` - Dropdown menus
- `breadcrumb.tsx` - Breadcrumb navigation
- `pagination.tsx` - Page navigation

**Feedback Components:**
- `toast.tsx` & `toaster.tsx` - Toast notifications
- `sonner.tsx` - Alternative toast system
- `alert.tsx` - Alert messages
- `progress.tsx` - Progress indicators
- `skeleton.tsx` - Loading placeholders

**Data Display:**
- `table.tsx` - Data tables
- `chart.tsx` - Charts and graphs
- `badge.tsx` - Status badges
- `avatar.tsx` - User avatars
- `calendar.tsx` - Date picker

#### Utilities (`src/lib/`)

##### `utils.ts`
```typescript
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```
- **Purpose**: Utility for combining CSS classes
- **Function**: Merges Tailwind classes intelligently (handles conflicts)

#### Hooks (`src/hooks/`)
- **`use-mobile.tsx`** - Hook for mobile device detection
- **`use-toast.ts`** - Hook for toast notifications

#### Styling

##### `index.css`
- **Purpose**: Global styles and CSS variables
- **Contains**: Tailwind imports, custom CSS variables for theming

##### `App.css`
- **Purpose**: Component-specific styles (if any)

---

## 🎨 Styling System

### Tailwind CSS
The project uses Tailwind CSS with a custom design system:

#### Color System
```css
/* CSS Variables for theming */
--background: 0 0% 100%;
--foreground: 224 71% 4%;
--primary: 221 83% 53%;
--secondary: 210 40% 98%;
/* ... more colors */
```

#### Usage Examples
```tsx
<div className="bg-background text-foreground">
  <Button className="bg-primary text-primary-foreground">
    Click me
  </Button>
</div>
```

### Component Styling
Components use the `cn()` utility to merge classes:
```tsx
<Button 
  className={cn(
    "bg-primary text-white", // base styles
    "hover:bg-primary/90",   // hover styles
    className                // additional props
  )}
>
```

---

## 🧩 How to Edit and Develop

### Adding New Components

1. **Create a new component file:**
```tsx
// src/components/MyNewComponent.tsx
import { Button } from '@/components/ui/button';

const MyNewComponent = () => {
  return (
    <div className="p-4 bg-card rounded-lg">
      <h2 className="text-2xl font-bold">My Component</h2>
      <Button>Click me</Button>
    </div>
  );
};

export default MyNewComponent;
```

2. **Use it in a page:**
```tsx
// src/pages/Index.tsx
import MyNewComponent from '@/components/MyNewComponent';

const Index = () => {
  return (
    <div>
      <Header />
      <MyNewComponent /> {/* Add your component */}
      <Footer />
    </div>
  );
};
```

### Adding New Pages

1. **Create page component:**
```tsx
// src/pages/About.tsx
const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <h1>About Page</h1>
    </div>
  );
};

export default About;
```

2. **Add route in App.tsx:**
```tsx
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Styling Guidelines

1. **Use Tailwind classes:**
```tsx
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
```

2. **Use design system colors:**
```tsx
<div className="bg-primary text-primary-foreground">
<div className="bg-secondary text-secondary-foreground">
```

3. **Responsive design:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### Using shadcn/ui Components

1. **Import the component:**
```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
```

2. **Use with proper props:**
```tsx
<Button variant="outline" size="lg">
  Large Outline Button
</Button>

<Card>
  <CardHeader>Title</CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

### State Management

1. **Local state with useState:**
```tsx
import { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  
  return (
    <Button onClick={() => setCount(count + 1)}>
      Count: {count}
    </Button>
  );
};
```

2. **Server state with TanStack Query:**
```tsx
import { useQuery } from '@tanstack/react-query';

const MyComponent = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['data'],
    queryFn: () => fetch('/api/data').then(res => res.json())
  });

  if (isLoading) return <div>Loading...</div>;
  
  return <div>{data?.message}</div>;
};
```

---

## 🚀 Development Workflow

### Starting Development
```bash
npm run dev
# Opens on http://localhost:8082
```

### Building for Production
```bash
npm run build
# Creates optimized build in 'dist' folder
```

### Code Quality
```bash
npm run lint
# Checks for code issues
```

### File Structure Best Practices

1. **Components**: One component per file, PascalCase names
2. **Pages**: Represent routes, placed in `src/pages/`
3. **Utilities**: Helper functions in `src/lib/`
4. **Hooks**: Custom hooks in `src/hooks/`
5. **Types**: TypeScript types (can be in separate `.types.ts` files)

### Import Aliases
The project uses path aliases for clean imports:
```tsx
// Instead of: import Button from '../../../components/ui/button'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
```

---

## 🔧 Customization

### Adding New Colors
1. **Add to tailwind.config.ts:**
```typescript
colors: {
  'brand-blue': '#1e40af',
  'brand-green': '#059669',
}
```

2. **Use in components:**
```tsx
<div className="bg-brand-blue text-white">
```

### Adding New Animations
1. **Define keyframes in tailwind.config.ts:**
```typescript
keyframes: {
  'fade-in': {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  }
},
animation: {
  'fade-in': 'fade-in 0.5s ease-out',
}
```

2. **Use in components:**
```tsx
<div className="animate-fade-in">
```

---

## 📚 Key Concepts to Learn

### React Concepts
- **Components**: Building blocks of UI
- **Props**: Data passed to components
- **State**: Component data that can change
- **Hooks**: Functions that add React features
- **JSX**: JavaScript XML syntax

### TypeScript Benefits
- **Type Safety**: Catch errors at compile time
- **IntelliSense**: Better IDE support
- **Documentation**: Types serve as documentation

### Tailwind CSS
- **Utility-First**: Small, single-purpose classes
- **Responsive**: Built-in responsive design
- **Customizable**: Easy to extend and customize

This project provides an excellent foundation for learning modern React development with industry-standard tools and practices!