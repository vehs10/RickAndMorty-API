type SeparatorProps = {
  icon?: React.ReactNode;
  topLineColor?: string;
  bottomLineColor?: string;
  circleGradient?: string;
}

export const Separator = ({ 
  icon,
  topLineColor = "via-blue-300",
  bottomLineColor = "via-purple-300",
  circleGradient = "from-blue-500 to-purple-600"
}: SeparatorProps) => {
  const defaultIcon = (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
    </svg>
  );

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className={`h-32 w-px bg-gradient-to-b from-transparent ${topLineColor} to-transparent`}></div>
      <div className={`w-12 h-12 bg-gradient-to-br ${circleGradient} rounded-full flex items-center justify-center shadow-lg border-4 border-white/80 backdrop-blur-sm`}>
        {icon || defaultIcon}
      </div>
      <div className={`h-32 w-px bg-gradient-to-b from-transparent ${bottomLineColor} to-transparent`}></div>
    </div>
  );
};