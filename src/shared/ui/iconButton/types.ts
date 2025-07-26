// any - потому что сам тайпскрипт помечает импортированные иконки как any, а какой у них тип я не знаю
export type TIconButton = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  description: string;
};
