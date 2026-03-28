/* ============================================================
   FIRE CRACKERS — Pre-Launch Page JS
   - Character silhouette reveal scheduler
   - Email form handler
   ============================================================ */

'use strict';

/* ── Reveal Schedule ──────────────────────────────────────────
   Dates correspond to the social media character reveal calendar
   from content_strategy.md (Weeks 3–5 of smoke test phase).

   TO CONFIGURE: Update these dates to match your actual launch
   calendar. Set all dates in the past to test the full
   revealed state instantly. ISO 8601 format (YYYY-MM-DD).
   ─────────────────────────────────────────────────────────── */
const REVEAL_SCHEDULE = [
  { date: '2026-03-30', char: 'blaze'      }, // Week 3 Monday
  { date: '2026-04-01', char: 'matchstick' }, // Week 3 Wednesday
  { date: '2026-04-03', char: 'ha-hank'    }, // Week 3 Friday
  { date: '2026-04-06', char: 'carolina'   }, // Week 4 Monday
  { date: '2026-04-08', char: 'ghost'      }, // Week 4 Wednesday (was seeded early)
  { date: '2026-04-10', char: 'abi'        }, // Week 4 Friday
  { date: '2026-04-13', char: 'shipka'     }, // Week 4 Sunday
  { date: '2026-04-15', char: 'smoky'      }, // Week 5 Tuesday
];

/* ── Silhouette Reveal ──────────────────────────────────────── */
function initRevealSchedule() {
  const now = Date.now();

  REVEAL_SCHEDULE.forEach(({ date, char }) => {
    const revealTime = new Date(date + 'T00:00:00').getTime();
    if (now >= revealTime) {
      revealCharacter(char, false); // immediate, no animation
    }
  });
}

function revealCharacter(char, animate = true) {
  const el = document.querySelector(`.character-silhouette[data-char="${char}"]`);
  if (!el) return;

  if (animate) {
    // brief pulse before reveal
    el.style.transition = 'none';
    el.style.transform = 'scale(1.08)';
    setTimeout(() => {
      el.style.transition = '';
      el.style.transform = '';
      el.classList.add('revealed');
    }, 120);
  } else {
    // instant, page-load state
    el.style.transition = 'none';
    el.classList.add('revealed');
    // re-enable transitions after a tick so future changes animate
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { el.style.transition = ''; });
    });
  }
}

/* ── Email Form ─────────────────────────────────────────────── */
function initEmailForm() {
  const form = document.getElementById('email-form');
  if (!form) return;

  const input   = form.querySelector('input[type="email"]');
  const btn     = form.querySelector('button[type="submit"]');
  const errorEl = form.querySelector('.email-form__error');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearError(errorEl);

    const email = input.value.trim();

    if (!isValidEmail(email)) {
      showError(errorEl, 'Enter a real email.');
      input.focus();
      return;
    }

    btn.textContent = 'SENDING...';
    btn.disabled = true;
    input.disabled = true;

    try {
      await submitEmail(email);
      showSuccess(form);
    } catch (err) {
      btn.textContent = 'JOIN THE LIST';
      btn.disabled = false;
      input.disabled = false;
      showError(errorEl, 'Something went wrong. Try again.');
      console.error('Email submit error:', err);
    }
  });
}

async function submitEmail(email) {
  /* ── TODO: Replace stub with real email service ────────────

     OPTION A — Klaviyo Subscribe API:
     ─────────────────────────────────
     const LIST_ID = 'YOUR_KLAVIYO_LIST_ID';
     const API_KEY = 'YOUR_KLAVIYO_PUBLIC_API_KEY';

     const response = await fetch(
       `https://a.klaviyo.com/api/v2/list/${LIST_ID}/subscribe`,
       {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
           api_key: API_KEY,
           profiles: [{ email }]
         })
       }
     );
     if (!response.ok) throw new Error('Klaviyo error');

     OPTION B — Mailchimp (via hidden form action):
     ────────────────────────────────────────────
     Use Mailchimp's embedded form with the action URL from
     your audience settings. Replace the fetch above with a
     standard form POST to the Mailchimp action URL.

     OPTION C — Formspree / Netlify Forms:
     ──────────────────────────────────────
     Add `data-netlify="true"` to the <form> tag and set
     method="POST" — Netlify handles the rest automatically
     on deployment. No JS needed for that case.
  ─────────────────────────────────────────────────────────── */

  // Stub: simulate 700ms network request
  await new Promise(resolve => setTimeout(resolve, 700));
  // In production, remove the line above and uncomment your
  // chosen option above.
}

/* ── Form helpers ───────────────────────────────────────────── */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(el, msg) {
  if (!el) return;
  el.textContent = msg;
}

function clearError(el) {
  if (!el) return;
  el.textContent = '';
}

function showSuccess(form) {
  form.innerHTML =
    '<p class="email-form__success">You\'re in. Don\'t go anywhere.</p>';
}

/* ── Init ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initRevealSchedule();
  initEmailForm();
});
