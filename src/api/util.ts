import { AxiosResponse } from "axios";
import { inspect } from "util";

export function memoizeApiCall<
    Payload,
    T extends (...args: any[]) => Promise<AxiosResponse<Payload>>
>(func: T): (...funcArgs: Parameters<T>) => Promise<AxiosResponse<Payload>> {
    const memo: Record<string, Promise<AxiosResponse<Payload>>> = {};

    return (...internalArgs: Parameters<T>) => {
        const stringifiedParams = inspect(internalArgs);

        if (memo[stringifiedParams]) {
            return memo[stringifiedParams];
        } else {
            memo[stringifiedParams] = func(...internalArgs).then(x => {
                return x;
            });

            return memo[stringifiedParams];
        }
    };
}
