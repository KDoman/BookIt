export const EntryInfoDiv = ({
  h2,
  children,
  imgUrl,
  bgPosition,
}: {
  h2: string;
  children: string;
  imgUrl?: string;
  bgPosition?: string;
}) => {
  return (
    <div className="flex flex-col gap-3 relative rounded-lg overflow-hidden h-[400px] justify-evenly">
      <div
        className="absolute w-full h-full -z-10 opacity-25"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: bgPosition ? bgPosition : "70%",
          backgroundRepeat: "no-repeat",
          filter: "grayscale(0.5)",
        }}
      />
      <h2 className="text-3xl p-4 font-bold">{h2}</h2>
      <p className="p-4 font-semibold">{children}</p>
    </div>
  );
};
