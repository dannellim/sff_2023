export class Helper {

    static randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    static randomFutureDate() {
        return new Date(new Date().getTime() + Math.random() * (1e+10));
    }

    static randomTime() {
        var date = new Date();
        date.setHours(Helper.randomIntFromInterval(9, 18));
        date.setMinutes(0);
        date.setSeconds(0);
        return date;
    }

    static shortDayOfWeekAsString(dayIndex: number) {
        return ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"][dayIndex] || '';
    }

    static dayOfWeekAsString(dayIndex: number) {
        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayIndex] || '';
    }

    static monthAsString(monthIndex: number) {
        return ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"][monthIndex] || '';
    }

    static isValidHttpUrl(data: string) {
        let url: URL;
        try {
            url = new URL(data);
        } catch (_) {
            return false;
        }
        return url.protocol === "http:" || url.protocol === "https:";
    }

    static isNumber(value?: string | number): boolean {
        return ((value != null) &&
            (value !== '') &&
            !isNaN(Number(value.toString())));
    }

    static isValidSffScan(data: string): boolean {
        if (data)
            return this.isLinkedIn(data) || this.isNumber(data);
        else return false;
    }

    static isLinkedIn(value: string){
        return value.includes("linkedin");
    }
}