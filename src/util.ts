export function groupBy<K extends string | number | symbol, V>(
    values: V[],
    keyExtractor: (value: V, index: number) => K
): Record<K, V[]> {
    return values.reduce<Record<K, V[]>>((accumulator, value, index) => {
        const key = keyExtractor(value, index);

        if (!accumulator[key]) {
            accumulator[key] = [];
        }

        accumulator[key].push(value);

        return accumulator;
    }, {} as Record<K, V[]>);
}
