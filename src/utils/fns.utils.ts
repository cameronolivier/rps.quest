type Fn = (...args: any[]) => unknown | void;
export const pipe =
  (...fns: Fn[]) =>
  (x: unknown) =>
    fns.reduce((v, f) => f(v), x);
