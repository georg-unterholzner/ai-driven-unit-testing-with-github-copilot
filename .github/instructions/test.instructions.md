---
applyTo: "**/*.test.ts"
description: "Agent instructions for writing unit tests"
---

Apply the following rules when writing unit tests:

- This codebase uses `jest` and `@testing-library/*` for unit tests.
- Prefer `jest.mocked` over `jest.spyOn`. For example:
  ```ts
  // Try to avoid this:
  jest.spyOn(myFunctionModule, 'mockedMethod').mockReturnValue('foo')

  // Prefer this:
  const myFunctionMock = jest.mocked(myFunction);
  myFunctionMock.mockReturnValue('foo');`
  ```
- You MUST NOT use `declare` or `require()`.
- You MUST NOT use `@ts-ignore` or `@ts-expect-error` to silence compiler errors. Instead, you MUST fix all compiler errors if there are any.
- You MUST NOT use `eslint-disable-next-line`, `eslint-disable-file`, or similar comments that silence ESLint issues. Instead, you MUST fix all lint issues if there are any.
- You MUST NOT use any methods that loosen compiler strictness. This includes but is not limited to:
  - the non-null assertion operator (`!`),
  - type-casting (e.g. `as any`, `as unknown as TypeXYZ`),
  - optional chaining (e.g. `object?.property`).
- You MUST NOT change any production code! If you believe it is necessary to change production code, you MUST ask the user for approval.
