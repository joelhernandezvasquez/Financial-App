
'use client';
import { createContext, useContext, ReactNode } from 'react';
import { ThemeColor } from '@/lib/definitions';

type ThemeColorsContextType = {
  processedThemeColors: ThemeColor[];
};

const ThemeColorsContext = createContext<ThemeColorsContextType | undefined>(undefined);

export function ThemeColorsProvider({ 
  children, 
  processedThemeColors 
}: { 
  children: ReactNode; 
  processedThemeColors: ThemeColor[];
}) {
  return (
    <ThemeColorsContext.Provider value={{ processedThemeColors }}>
      {children}
    </ThemeColorsContext.Provider>
  );
}

export function useThemeColors() {
  const context = useContext(ThemeColorsContext);
  if (context === undefined) {
    throw new Error('useThemeColors must be used within a ThemeColorsProvider');
  }
  return context;
}