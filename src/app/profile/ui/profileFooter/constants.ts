import { TIconButton } from "@/shared/ui/iconButton/types";
import {
  Ban,
  Bookmark,
  Check,
  ClockFading,
  Columns3,
  Eye,
  LogOut,
} from "lucide-react";

export const historyOfMettings: TIconButton[] = [
  { icon: ClockFading, description: "История встреч" },
];
export const buttons: TIconButton[] = [
  { icon: Eye, description: "Публичный аккаунт" },
  { icon: Columns3, description: "Взрослый" },
];

export const profileButtons: TIconButton[] = [
  { icon: Check, description: "Мои подписки" },
  { icon: Ban, description: "Чёрный список" },
  { icon: Bookmark, description: "Закладки" },
];

export const infoButtons: TIconButton[] = [
  { icon: "", description: "Возможности ИГРУМА" },
  { icon: "", description: "Правила ИГРУМА" },
  { icon: "", description: "Инструкция РУМЕРА" },
  { icon: "", description: "Инструкция МАСТЕРА" },
  { icon: "", description: "Инструкция МЕСТА" },
  { icon: "", description: "Пользовательское соглашение" },
];

export const logoutButton: TIconButton[] = [
  { icon: LogOut, description: "Выйти из профиля" },
];
