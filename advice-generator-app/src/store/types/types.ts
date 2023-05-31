import { store } from '..';

export type InitialStateType = {
  id: number | null;
  advice: string;
};

type NonNull<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};

export type AdviceType = NonNull<InitialStateType>;

export type RootStoreType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
