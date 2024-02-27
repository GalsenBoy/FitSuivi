type ChartCardProps = {
  data_one: string;
  data_two?: string;
  data_three?: string;
};
export default function ChartCard({
  data_one,
  data_two,
  data_three,
}: ChartCardProps) {
  return (
    <div className="uppercase text-left mt-2 text-sm [&>*]:py-1 [&>p>*]:text-blue-400">
      <p>
        {data_one} : <span>5.7 km</span>
      </p>
      <p>
        {data_two} : <span>100 kcal</span>
      </p>
      {data_three && (
        <p>
          {data_three} : <span>11 km</span>
        </p>
      )}
    </div>
  );
}
