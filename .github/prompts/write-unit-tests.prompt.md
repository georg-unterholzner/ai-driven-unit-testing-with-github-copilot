---
agent: 'agent'
description: 'Generate unit tests for the provided code.'
---

Your task is to write unit tests for the provided code.

Use the `manage_todo_list` tool to keep track of the following tasks:

1. Analyze context files:
  - Read all files that have been provided as context.
  - For each file, briefly summarize its purpose and identify the key business logic and edge cases that require testing.
  - If anything about the business logic is unclear, ask the user to provide more information.
2. Propose test cases:
  - Based on your analysis, propose a concise ordered list of test case titles (grouped by file/module), e.g.:
    ```markdown
    A. `MyComponent.tsx`:
      1. should display a greeting when showGreeting is true.
      2. ...
    B. `useHelloWorld.ts`:
      1. should ...
    ```
  - Only propose tests for business logic that is relevant and actually requires testing. Focus on the happy path and only the most critical edge cases.
  - Do not propose redundant test-cases.
  - Ask the user to review and approve or edit this list.
  - Do not proceed to implementation until the user explicitly approves the final list.
3. Implement approved tests:
  - Implement exactly the test cases approved by the user. Do not add unapproved tests and do not omit any approved test.
4. Run tests and iterate until green:
  - Run all tests that you added.
  - If any test fails, first verify whether the failure is due to the test (not the product code).
    - If the failure is due to the test, fix the test.
    - If the failure appears to be a product issue, ask the user how to proceed. Do not modify production code without asking the user for consent.
  - Re-run until all tests pass.
5. Check and fix project quality gates:
  - Run type checks, linters, and any formatting tools configured in the project.
  - If any check fails, first verify whether the failure comes from one of the test files you edited or if it comes from unrelated code.
    - If it comes from one of the test files you edited, fix the error.
    - If it comes from unrelated code, ignore the error
  - Re-run checks until they are clean or until only unrelated files cause issues.
6. Final verification and report:
  - Finally, run the full test suite. Confirm that all newly created tests pass.
  - Provide a very brief summary of what you did.

Rules and constraints:
- You are only done if **all** the steps have been completed successfully. Otherwise, you must continue.
- If critical information is missing, always ask the user.
