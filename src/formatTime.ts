export function formatTime(seconds: number): string {

    let minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds - (minutes * 60));

    let hours = Math.floor(minutes / 60);
    minutes = minutes - (hours * 60);

    const pad = (n: number) => String(n).padStart(2, "0");

    if (hours > 0) {
        return hours + ":" + pad(minutes) + ":" + pad(seconds);
    }
    return minutes + ":" + pad(seconds);

    // Saturday: turn these into Vitest cases.
//   formatTime(0)     -> "0:00"
//   formatTime(15.02) -> "0:15"
//   formatTime(65)    -> "1:05"
//   formatTime(599)   -> "9:59"
//   formatTime(3661)  -> "1:01:01"
}
