import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '@/lib/utils';

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  currentStep: number;
  totalSteps: number;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className = "", currentStep, totalSteps, ...props }, ref) => {
  // Calculate the width percentage based on current step and total steps
  const percentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`relative flex items-center justify-center ${i < currentStep ? 'text-blue-500' : 'text-gray-200'}`}
            style={{ zIndex: i === currentStep - 1 ? 1 : 0 }}
          >
            <div
              className={`w-5 h-5 flex items-center justify-center ${i < currentStep ? 'bg-blue-500' : 'bg-gray-200'} rounded-full text-white`}
            >
              {i + 1}
            </div>
            {/* Add a line connecting circles */}
            {i < totalSteps - 1 && (
              <div
                className={`flex-grow h-1 ${i < currentStep - 1 ? 'bg-blue-500' : 'bg-gray-200'}`}
                style={{ marginLeft: 8, marginRight: 8 }}
              />
            )}
          </div>
        ))}
      </div>
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex bg-white w-full touch-none select-none items-center mt-6",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-300">
          <SliderPrimitive.Range
            className={`absolute h-full ${percentage > 0 ? 'bg-black' : 'bg-gray'}`}
            style={{ width: `${percentage}%` }}
          />
        </SliderPrimitive.Track>
      </SliderPrimitive.Root>
    </div>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
