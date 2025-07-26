import { StackList } from "@/shared/ui/stackList";

interface Props {
  telegram: string;
}
export const AboutMe = ({ telegram }: Props) => {
  return (
    <StackList>
      <div className="w-full bg-[var(--foreground)] p-4">
        <div className="overflow-hidden text-ellipsis line-clamp-4 break-words">
          Я профессиональный скуф, обожаю сидеть дома и часто играю в Мафию с
          друзьями по вечерам в Сицилии и зовем всех желающих и занимаемся
          разными другими делами.
        </div>
      </div>
      <div className="w-full bg-[var(--foreground)] p-4 flex justify-between">
        <p>Мой телеграм</p>
        <p className="font-bold">@{telegram}</p>
      </div>
    </StackList>
  );
};
