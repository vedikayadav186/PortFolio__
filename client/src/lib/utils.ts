import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const downloadResume = () => {
  // Create a blob with resume data or trigger download
  // For now, we'll simulate the download
  const link = document.createElement('a');
  link.href = '/api/resume/download';
  link.download = 'Vedika_Yadav_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
