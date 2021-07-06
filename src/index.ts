import { readDecklistFile, attachCardPayloads } from "./deck";
import { monthsAgo } from "./time";
import { groupBy } from "./util";

const OLD_THRESHOLD_IN_MONTHS = 18;

const cardCounts = readDecklistFile("./decklists.txt");
Promise.all(attachCardPayloads(cardCounts)).then(results => {
    const releasedAtMap = results.map(({ count, name, scryfall }) => ({
        count,
        name,
        scryfall,
        firstReleasedAt: scryfall.data.data
            .map(x => x.released_at)
            .map(x => new Date(x))
            .sort((a, b) => a.getTime() - b.getTime())[0]
    }));

    const grouped = groupBy(releasedAtMap, ({ firstReleasedAt }) =>
        firstReleasedAt > monthsAgo(OLD_THRESHOLD_IN_MONTHS) ? "new" : "old"
    );

    const oldStats = grouped["old"].reduce(
        (accumulator, curr) => {
            accumulator.count += curr.count;
            accumulator.cards.add(curr.name);
            return accumulator;
        },
        {
            count: 0,
            cards: new Set<string>()
        }
    );

    const newStats = grouped["new"].reduce(
        (accumulator, curr) => {
            accumulator.count += curr.count;
            accumulator.cards.add(curr.name);
            return accumulator;
        },
        {
            count: 0,
            cards: new Set<string>()
        }
    );

    console.log({ oldStats, newStats });
});
