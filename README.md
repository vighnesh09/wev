# Next.js + MUI Starter Template

A professional and modern starter template built with Next.js 14 and Material-UI (MUI), featuring a clean project structure and best practices implementation.

## Features

- ⚡️ **Next.js 14** with App Router
- 🎨 **Material-UI v5** with custom theme
- 📱 **Responsive Design** out of the box
- 🔍 **SEO Optimized** meta tags
- 📂 **Professional Folder Structure**
- 🎯 **Pre-configured Components**
- 🛡️ **ESLint** for code linting
- 💅 **Clean & Modern Design**

## Quick Start

First, clone the repository:

```bash
git clone https://github.com/yourusername/next-mui-starter.git
cd next-mui-starter
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                  # App router pages
├── components/          
│   ├── common/          # Shared components
│   ├── features/        # Feature-specific components
│   └── layouts/         # Layout components
├── config/              # Configuration files
├── hooks/               # Custom hooks
├── lib/                 # Utility functions
├── styles/              # Global styles and theme
├── types/               # TypeScript types
└── utils/               # Helper functions
```

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## Customization

### Theme

You can customize the theme in `src/styles/theme/index.js`:

```javascript
export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    // Add your custom colors
  },
  // Customize other theme properties
});
```

### Components

Add new components in their respective directories under `src/components/`:
- Common components in `common/`
- Feature-specific components in `features/`
- Layout components in `layouts/`

## Best Practices

- Keep components small and focused
- Use proper file and folder naming conventions
- Follow MUI's design patterns
- Implement responsive design using MUI's breakpoints
- Use proper component composition

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Material-UI](https://mui.com/)
- [React](https://reactjs.org/)

## Support

If you like this template, please give it a ⭐️ on GitHub!
