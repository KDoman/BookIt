export const AccountSettingsInfoDiv = ({
  item,
  i,
}: {
  item: { label: string; value: string };
  i: number;
}) => {
  return (
    <div key={i} className="flex items-center justify-between py-4">
      <div>
        <p className="text-sm font-medium text-gray-900">{item.label}</p>
        <p className="text-sm text-gray-600">{item.value}</p>
      </div>
      <div>
        <button className="text-sm font-medium text-black transition-colors hover:text-white hover:bg-black p-2 rounded-md ">
          Edytuj
        </button>
      </div>
    </div>
  );
};
