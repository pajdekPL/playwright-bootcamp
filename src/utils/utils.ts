import { test } from "@playwright/test";

export function step(stepName?: string) {
  return function wrapper<This extends object, Args extends unknown[], Return>(
    target: (this: This, ...args: Args) => Promise<Return>,
    context: ClassMethodDecoratorContext<
      This,
      (this: This, ...args: Args) => Promise<Return>
    >,
  ) {
    return function replacementMethod(
      this: This,
      ...args: Args
    ): Promise<Return> {
      const name =
        stepName ??
        `${this.constructor.name}.${context.name as string}(${args
          .map((a) => JSON.stringify(a))
          .join(",")})`;
      return test.step(name, async () => {
        return await target.call(this, ...args);
      });
    };
  };
}
