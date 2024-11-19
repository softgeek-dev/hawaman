import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getColorForTemperature(temp: number) {
  // Example color mapping
  if (temp < 0) return '#A5F2F3' // Ice blue
  if (temp < 10) return '#8CC6DE' // Light blue
  if (temp < 20) return '#FFE168' // Yellow
  if (temp < 30) return '#FFA500' // Orange
  return '#FF4500' // Red (hot)
}
