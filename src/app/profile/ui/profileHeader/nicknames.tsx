export const Nicknames = () => {
  return (
    <div className="w-full flex flex-col gap-2 items-center justify-center">
      <div className="w-fit">
        <span className="text-xl">
          румер: <strong className="text-2xl font-bold">Ваня Петькин</strong>
        </span>
        <div className="w-full flex justify-between">
          <span>@nickname</span>
          <span>Вчера 18.00</span>
        </div>
      </div>
    </div>
  );
};
