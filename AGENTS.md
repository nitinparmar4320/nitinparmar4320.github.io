<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Visual Component Matching & Image-to-Code Guidelines

When tasked with creating or updating Next.js components to match an image:

### Strict Instructions
1. **Direct Visual Inspection**: Do NOT write or execute any background Python scripts (no code execution, image processing libraries, or pixel analysis). Rely ONLY on direct multimodal vision.
2. **Immediate Output**: Directly inspect the visual layout and output the final Next.js TSX/Tailwind code immediately without taking multi-step computational passes.
