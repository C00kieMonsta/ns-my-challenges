import { Day, DayStatus } from './day.model';

/**
 * _days is a list of Day interfaces
 *
 * We create a logic inside the constructor to populate the days, since we have year and
 * month, we can easily do it here
 *
 * But if we later add a challenge that already has days, we have the possibility to do it
 * with the days in the constructor
 */

export class Challenge {
    constructor(
        public title: string,
        public description: string,
        public year: number,
        public month: number,
        private _days: Day[] = []
    ) {

        // We check if days were added from the server otherwise we create it inside
        // the body of the constructor
        if (_days.length > 0) {
            return;
        }

        // this.currentYear = new Date().getFullYear();
        // this.currentMonth = new Date().getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 1; i < daysInMonth + 1; i++) {
            const date = new Date(year, month, i);
            const dayInWeek = date.getDay();
            this._days.push({
                dayInMonth: i,
                dayInWeek: dayInWeek,
                date: date,
                status: DayStatus.Open
            });
        }
    }

  get currentDay() {
    return this._days.find(d => d.dayInMonth === new Date().getDate());
  }

  get days() {
    return this._days.slice();
  }
}
