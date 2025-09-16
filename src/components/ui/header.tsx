
type HeaderProps = {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm border-b border-blue-200/50 shadow-sm">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-center text-gray-600 mt-2 text-lg">
          {subtitle}
        </p>
      </div>
    </div>
  );
};