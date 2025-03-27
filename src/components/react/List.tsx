type Props = {
  data?: Record<string, string>[];
};

export default function Filter({ data }: Props) {
  return <ul>{data?.map((item) => <li key={item.id}>{item.title}</li>)}</ul>;
}
