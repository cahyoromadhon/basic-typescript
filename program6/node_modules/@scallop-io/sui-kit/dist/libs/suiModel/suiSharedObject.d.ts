import type { CallArg } from '@mysten/sui/transactions';
export declare class SuiSharedObject {
    readonly objectId: string;
    initialSharedVersion?: string;
    constructor(param: {
        objectId: string;
        initialSharedVersion?: string;
        mutable?: boolean;
    });
    asCallArg(mutable?: boolean): CallArg | string;
}
