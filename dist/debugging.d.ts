export declare const useLogReport: <T = string>(frequencyMs?: number, resetReportAfterLogging?: boolean) => Set<T>;
export declare const useCooldownLog: (frequencyMs?: number) => (...data: any[]) => void;
