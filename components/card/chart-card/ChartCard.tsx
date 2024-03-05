type ChartCardProps = {
  data_one: string;
  data_two?: string;
  data_three?: string;
  value_one: string;
  value_two: string;
  value_three?: string;
};
export default function ChartCard({
  data_one,
  data_two,
  data_three,
  value_one,
  value_two,
  value_three,
}: ChartCardProps) {
  return (
    <div className="uppercase text-left mt-2 text-sm [&>*]:py-1 [&>p>*]:text-blue-400">
      <p>
        {data_one} : <span>{value_one}</span>
      </p>
      <p>
        {data_two} : <span>{value_two}</span>
      </p>
      {data_three && (
        <p>
          {data_three} : <span>{value_three}</span>
        </p>
      )}
    </div>
  );
}
