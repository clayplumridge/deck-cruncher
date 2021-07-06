export function monthsAgo(n: number) {
    const res = new Date();
    res.setMonth(res.getMonth() - n);
    return res;
}
