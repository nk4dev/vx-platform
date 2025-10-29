# GitHub Copilot Usage Guide (English)

This document defines how we use GitHub Copilot in this repository. The goal is to boost productivity while maintaining quality, security, and license compliance.

## Purpose

- Use Copilot safely and effectively as an assistant.
- Clarify quality standards, review flow, and prohibitions for generated content.
- Provide repo-specific guidance that matches our stack (TypeScript, Next.js, Tailwind CSS, shadcn/ui).

## Scope

- Any development work within this repo: code generation, refactors, tests, docs drafts.
- All AI-generated content must be reviewed by humans and merged via Pull Request.

## Ground Rules

1. Generated code is a suggestion. Always review for security, types, tests before merging.
2. Never generate or commit secrets or personal data (API keys, passwords, tokens, PII).
3. Mind licenses: if Copilot proposes code resembling third-party works, verify compliance.
4. For tests, explicitly state expected values, boundaries, and negative cases—then run them.
5. The requester owns the change; reviewers should validate build, typecheck, and core tests.

## Repository Notes

- Stack: TypeScript / React / Next.js 16, Tailwind CSS, shadcn/ui.
- Use function components. Avoid `any` unless justified in comments.
- After adding code, run typechecks (tsc) and build.

## Recommended Prompts (Templates)

Write concrete prompts specifying inputs/outputs, constraints, and success criteria.

### Create a new React component (with shadcn + Tailwind)

```
Context
- Project: Next.js (TypeScript)
- Styling: Tailwind CSS + shadcn/ui components

Request
1. Create `src/components/PrimaryButton.tsx` based on shadcn/ui button. Props: `children: React.ReactNode`, `onClick?: () => void`, `disabled?: boolean`, `className?: string`.
2. Use Tailwind utilities and accessible markup; apply `aria-disabled` when disabled.
3. Add a simple test in `src/components/__tests__/PrimaryButton.test.tsx` (RTL/Jest).

Output
- Provide file path(s) and contents separately.
```

### Refactor an existing component

```
Context
- `src/pages/index.tsx` has a long component.

Request
1. Propose 3 refactor options (concise).
2. Provide TypeScript code for the best option (runnable level).
3. Give a short test plan to verify no regressions.
```

### Next.js + Tailwind + shadcn specific prompts

- Page and layout change
```
Context
- Add a responsive Hero section to `src/pages/index.tsx` with a shadcn Button.
- Site layout is in `src/layout/main.tsx`.

Request
1. Show a patch adding a mobile-first Hero (heading + subtext + button) using Tailwind.
2. Include responsive changes (e.g., `flex-col lg:flex-row`).
3. Provide steps to run locally and build.

Output
- A patch and full JSX snippet of the changes.
```

- Tailwind config adjustments
```
Context
- Add custom color and font to Tailwind.

Request
1. Update `tailwind.config.js` with `brand-blue: '#0ea5e9'`.
2. Show `globals.css` changes if needed.
3. Provide commands to build and lint afterward.
```

## Commit Message Template

```
- Short summary (<= 50 chars)
- One paragraph description (2–3 lines)
- Bullet list of changed files
```

## Security & Prohibitions

- Do NOT generate: secrets, PII, or unlicensed third-party code.
- Always typecheck (TypeScript) and run tests before merging.

## PR Review Checklist

- [ ] Build passes (`npm run build`) and no type errors
- [ ] No secrets or hardcoded credentials
- [ ] No license issues with generated code
- [ ] Tests added/updated and passing when applicable
- [ ] Comments or rationale included where necessary

## Maintenance

- Keep this guide up-to-date via PR. Significant policy changes should be announced to the team.

---

We aim to keep guidelines short and practical. Extend the templates and checklists as needed.