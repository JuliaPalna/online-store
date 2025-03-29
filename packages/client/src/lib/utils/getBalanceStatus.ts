export enum BalanceStatus {
  runningOut = "Товар заканчивается",
  notAvailable = "Нет в наличии",
  inStock = "Товар в наличии", 
  checkAvailability= "Необходимо уточнить по наличию",
}

export function getBalanceStatus({ count }: { count: number }): BalanceStatus {
  if (+count <= 0) {
    return BalanceStatus.notAvailable;
  } else if (+count < 4) {
    return BalanceStatus.runningOut;
  } else if (+count > 10) {
    return BalanceStatus.inStock;
  } else {
    return BalanceStatus.checkAvailability;
  }
}
