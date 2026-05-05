---
name: testing-editcraft
description: Test the EditCraft video editing learning platform end-to-end. Use when verifying UI interactions, module progression, quiz feedback, progress tracking, or responsive layout.
---

# Testing EditCraft Video Editing Platform

## Running the App Locally

This is a static site (HTML/CSS/JS only). Serve it with any HTTP server:

```bash
cd /home/ubuntu/abhishekabraham.github.io
python3 -m http.server 8080
```

Then open `http://localhost:8080` in the browser.

## Key Test Flows

### 1. Hero Section & Navigation
- Verify hero title contains "Learn Video Editing" and "from Scratch"
- Nav links: Home, Lessons, Tools, Practice, Contact
- "Begin Your Journey" button scrolls to Lessons section

### 2. Module Unlock System
- Module 1 starts as "Available", Modules 2-6 as "Locked"
- Clicking "Start Lesson" on a locked module shows a toast: "Complete the previous module first!" and does NOT open the modal
- Completing a module unlocks the next one

### 3. Lesson Modal & Quiz
- Click "Start Lesson" on an available module to open the lesson modal
- Each lesson has: title, badge, step-by-step content, tips, common mistakes, and a quiz
- Quiz feedback: wrong answer turns red, correct answer turns green, all options get disabled
- "Mark as Complete" button changes text to "Completed ✓" and shows an encouragement toast

### 4. Progress Tracking
- Progress bar shows "X of 6 modules" and percentage (rounded)
- Badges appear as modules are completed (e.g., "First Steps", "Timeline Pro")
- Progress persists via localStorage — reload the page to verify

### 5. Practice Challenges
- "Mark as Completed" toggles the challenge card to a green completed state
- Toast: "Challenge completed! Awesome work!"

### 6. Contact Form
- Fill name, email, message and submit
- Green success message appears, form fields reset
- Success message auto-hides after 5 seconds

### 7. Responsive Design
- Use Chrome DevTools device toolbar (F12 → Ctrl+Shift+M) or resize to ~400px width
- Hamburger menu icon should replace horizontal nav links
- Clicking hamburger opens vertical dropdown with all nav links

## Tips

- **localStorage state**: If you need a clean slate, run `localStorage.clear()` in the browser console and reload
- **Toast timing**: The toast notification auto-hides after 3 seconds. If testing multiple toasts in sequence, the previous timeout is cleared so the latest toast always shows for the full duration
- **Module completion order**: Modules must be completed sequentially (1→2→3→4→5→6). You cannot skip ahead
- **Scroll animations**: Elements with `[data-animate]` fade in when 10% visible via IntersectionObserver. Scroll slowly to see them trigger
- **Keyboard shortcuts**: Press Escape to close the lesson modal. Clicking the backdrop (outside modal content) also closes it

## No Secrets Needed

This is a fully static site with no backend or authentication. No secrets are required for testing.
