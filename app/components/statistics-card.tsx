interface StatisticsCardProps {
  number: string;
  title: string;
  subtitle: string;
}

export function StatisticsCard({
  number,
  title,
  subtitle,
}: StatisticsCardProps) {
  return (
    <div className="text-center p-8 rounded-2xl bg-gray-800/50">
      <div className="text-6xl font-bold text-primary mb-3">{number}</div>
      <div className="text-xl font-medium mb-2 text-white">{title}</div>
      <div className="text-base text-gray-400">{subtitle}</div>
    </div>
  );
}
