import { TBalanceStatus } from "../types/TBalanceStatus";

export function getbalanceStatus({ count }: { count: number }): TBalanceStatus {
  if (+count) {
    return "Нет в наличии";
  } else if (count < 4) {
    return "Заканчивается";
  } else if (count > 10) {
    return "В наличии";
  } else {
    return "Необходимо уточнить по наличию";
  }
}
