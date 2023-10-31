export type Tournament = {
  tournId: string,
  name: string,
  date: {
    start: string,
    end: string,
    weekNumber: string,
  },
  format: string,
  purse: number,
  winnerShare: number,
}

