// ===== State Management =====
const state = {
    completedModules: JSON.parse(localStorage.getItem('completedModules') || '[]'),
    completedPractice: JSON.parse(localStorage.getItem('completedPractice') || '[]'),
    currentModule: null
};

// ===== Lesson Content Data =====
const lessonData = {
    1: {
        badge: 'Module 1',
        title: 'Introduction to Video Editing',
        content: `
            <h3>What is Video Editing?</h3>
            <p>Video editing is the process of manipulating and rearranging video footage to create a polished final product. It involves cutting, trimming, adding effects, music, and transitions to tell a story or convey a message.</p>
            
            <div class="video-placeholder">&#9654;</div>
            
            <h3>Why Does Video Editing Matter?</h3>
            <p>Raw footage is rarely perfect. Video editing transforms rough clips into engaging content. Whether you're creating YouTube videos, Instagram Reels, or short films, editing is what makes the difference between amateur and professional content.</p>
            
            <h3>Step-by-Step: Your First Look</h3>
            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <strong>Understand the Basics</strong>
                    <p>Video editing software provides a workspace where you import footage, arrange it on a timeline, and apply changes. Think of it like arranging puzzle pieces to tell a story.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <strong>Before vs. After</strong>
                    <p>Raw footage might be shaky, too long, or missing context. After editing, the same footage becomes smooth, concise, and engaging with added music and effects.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <strong>The Editor's Mindset</strong>
                    <p>Great editors think like storytellers. Every cut, every transition, every effect should serve the story you're trying to tell.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">4</div>
                <div class="step-content">
                    <strong>Choose Your Tool</strong>
                    <p>Start with a free tool like CapCut or DaVinci Resolve. You don't need expensive software to create amazing content.</p>
                </div>
            </div>

            <div class="tip">
                <strong>Pro Tip:</strong> Before you start editing, always watch your entire raw footage first. This gives you a mental map of what you have to work with.
            </div>

            <div class="mistake">
                <strong>Common Mistake:</strong> Trying to learn everything at once. Focus on one skill at a time &mdash; start with simple cuts before moving to effects.
            </div>
        `,
        quiz: {
            question: 'What is the primary purpose of video editing?',
            options: [
                { text: 'To record video footage', correct: false },
                { text: 'To manipulate and arrange footage into a polished final product', correct: true },
                { text: 'To upload videos to YouTube', correct: false },
                { text: 'To buy camera equipment', correct: false }
            ]
        }
    },
    2: {
        badge: 'Module 2',
        title: 'Understanding the Timeline',
        content: `
            <h3>The Timeline: Your Editing Workspace</h3>
            <p>The timeline is the heart of any video editor. It's a horizontal workspace where you arrange, trim, and organize your video and audio clips. Think of it as a visual storyboard that plays from left to right.</p>

            <div class="interactive-timeline">
                <div class="i-timeline-header">
                    <button class="i-timeline-btn">&#9654;</button>
                    <button class="i-timeline-btn">&#9646;&#9646;</button>
                    <button class="i-timeline-btn">&#9632;</button>
                    <span>00:00:00 / 00:02:30</span>
                </div>
                <div class="i-timeline-tracks">
                    <div class="i-track">
                        <div class="i-track-label">V2</div>
                        <div class="i-clip" style="background: rgba(108, 99, 255, 0.6); flex: 2;">Title</div>
                        <div style="flex: 5;"></div>
                        <div class="i-clip" style="background: rgba(108, 99, 255, 0.6); flex: 2;">Credits</div>
                    </div>
                    <div class="i-track">
                        <div class="i-track-label">V1</div>
                        <div class="i-clip" style="background: #6C63FF; flex: 3;">Intro Clip</div>
                        <div class="i-clip" style="background: #5A52E0; flex: 4;">Main Content</div>
                        <div class="i-clip" style="background: #764ba2; flex: 2;">Outro</div>
                    </div>
                    <div class="i-track">
                        <div class="i-track-label">A1</div>
                        <div class="i-clip" style="background: #00D2FF; flex: 3;">Dialog</div>
                        <div class="i-clip" style="background: #00b4d8; flex: 4;">Interview</div>
                        <div class="i-clip" style="background: #0096c7; flex: 2;">Voiceover</div>
                    </div>
                    <div class="i-track">
                        <div class="i-track-label">A2</div>
                        <div class="i-clip" style="background: rgba(0, 210, 255, 0.4); flex: 9;">Background Music &#9835;</div>
                    </div>
                </div>
            </div>

            <h3>Key Timeline Concepts</h3>
            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <strong>Clips</strong>
                    <p>Individual pieces of video or audio that you place on the timeline. Each colored block above represents a clip.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <strong>Tracks</strong>
                    <p>Horizontal layers in the timeline. Video tracks (V1, V2) hold visual content, while audio tracks (A1, A2) hold sound. Higher video tracks appear on top.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <strong>Cutting &amp; Trimming</strong>
                    <p>Cutting splits a clip into two parts. Trimming shortens a clip from either end. Both are essential for removing unwanted footage.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">4</div>
                <div class="step-content">
                    <strong>Arranging</strong>
                    <p>Drag clips to reorder them. The order of clips on the timeline determines the order they play in your final video.</p>
                </div>
            </div>

            <div class="tip">
                <strong>Pro Tip:</strong> Use keyboard shortcuts! Press "S" or "Ctrl+B" in most editors to split a clip at the playhead position. This is much faster than using the menu.
            </div>

            <div class="mistake">
                <strong>Common Mistake:</strong> Not zooming in on the timeline when making precise cuts. Zoom in for accuracy, zoom out for the big picture.
            </div>
        `,
        quiz: {
            question: 'What are "tracks" in a video editing timeline?',
            options: [
                { text: 'Music files you add to videos', correct: false },
                { text: 'Horizontal layers that hold video or audio clips', correct: true },
                { text: 'Effects you apply to footage', correct: false },
                { text: 'The final exported video file', correct: false }
            ]
        }
    },
    3: {
        badge: 'Module 3',
        title: 'Basic Cuts & Transitions',
        content: `
            <h3>The Art of Cutting</h3>
            <p>Cuts are the most fundamental editing technique. A cut is simply where one clip ends and another begins. The type of cut you use affects the pacing, emotion, and flow of your video.</p>

            <h3>Common Types of Cuts</h3>
            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <strong>Hard Cut (Standard Cut)</strong>
                    <p>An instant switch from one clip to another. This is the most common cut and works great for conversations, action scenes, and most general editing.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <strong>Jump Cut</strong>
                    <p>A cut within the same shot that skips forward in time. Popular on YouTube for keeping videos fast-paced and cutting out pauses or mistakes.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <strong>J-Cut &amp; L-Cut</strong>
                    <p>J-Cut: Audio from the next clip starts before the video changes. L-Cut: Audio from the current clip continues into the next shot. Both create smooth, professional transitions.</p>
                </div>
            </div>

            <h3>Essential Transitions</h3>
            <div class="transition-demo">
                <div class="transition-box" style="background: #6C63FF;">
                    <span class="transition-icon">&#9724;</span>
                    Clip A
                </div>
                <div class="transition-box" style="background: linear-gradient(90deg, #6C63FF, #00D2FF);">
                    <span class="transition-icon">&#10145;</span>
                    Fade
                </div>
                <div class="transition-box" style="background: #00D2FF;">
                    <span class="transition-icon">&#9724;</span>
                    Clip B
                </div>
            </div>

            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <strong>Fade In / Fade Out</strong>
                    <p>The clip gradually appears from (or disappears to) black. Perfect for beginning and ending videos or signaling a passage of time.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <strong>Cross Dissolve</strong>
                    <p>One clip gradually blends into the next. Great for showing time passing, changing locations, or creating a dreamy effect.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <strong>Wipe</strong>
                    <p>One clip replaces another with a moving boundary. Used for dynamic transitions, especially in vlogs and energetic content.</p>
                </div>
            </div>

            <div class="tip">
                <strong>Pro Tip:</strong> Less is more with transitions. Beginners tend to overuse fancy transitions. In professional editing, 90% of cuts are simple hard cuts. Use transitions sparingly and purposefully.
            </div>

            <div class="mistake">
                <strong>Common Mistake:</strong> Using a different transition between every clip. This looks amateurish. Stick to 1-2 transition types per video for a consistent, professional look.
            </div>
        `,
        quiz: {
            question: 'Which transition is best for indicating a passage of time?',
            options: [
                { text: 'Hard Cut', correct: false },
                { text: 'Jump Cut', correct: false },
                { text: 'Cross Dissolve', correct: true },
                { text: 'Wipe', correct: false }
            ]
        }
    },
    4: {
        badge: 'Module 4',
        title: 'Adding Music & Sound',
        content: `
            <h3>The Power of Audio</h3>
            <p>Audio is 50% of the video experience. A well-chosen background track, clean dialogue, and perfectly synced sound effects can transform a good video into a great one.</p>

            <div class="waveform">
                ${Array.from({length: 40}, (_, i) => `<div class="waveform-bar" style="animation-delay: ${i * 0.05}s; height: ${8 + Math.random() * 32}px;"></div>`).join('')}
            </div>

            <h3>Step-by-Step: Adding Music</h3>
            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <strong>Choose the Right Music</strong>
                    <p>Select music that matches the mood of your video. Upbeat for vlogs, calm for tutorials, dramatic for cinematic content. Use royalty-free music from sites like YouTube Audio Library, Epidemic Sound, or Artlist.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <strong>Import &amp; Place on Timeline</strong>
                    <p>Import your audio file and drag it to an audio track on your timeline. Position it beneath your video clips.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <strong>Adjust Volume Levels</strong>
                    <p>Background music should be subtle &mdash; typically -12dB to -20dB below dialogue. Use keyframes to raise and lower volume at specific points.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">4</div>
                <div class="step-content">
                    <strong>Sync Audio with Video</strong>
                    <p>Match music beats to visual cuts for a professional feel. Many editors have "beat detection" tools to help with this.</p>
                </div>
            </div>

            <h3>Sound Design Basics</h3>
            <div class="step">
                <div class="step-number">5</div>
                <div class="step-content">
                    <strong>Sound Effects (SFX)</strong>
                    <p>Add whooshes for transitions, clicks for button animations, and ambient sounds for atmosphere. Subtle SFX make videos feel polished.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">6</div>
                <div class="step-content">
                    <strong>Audio Fade In/Out</strong>
                    <p>Always fade music in and out rather than starting or stopping abruptly. A 1-2 second fade sounds much more professional.</p>
                </div>
            </div>

            <div class="tip">
                <strong>Pro Tip:</strong> Always listen to your video with headphones before exporting. Speakers can mask audio issues that headphones reveal.
            </div>

            <div class="mistake">
                <strong>Common Mistake:</strong> Making background music too loud. If viewers can't hear dialogue over the music, they'll click away. When in doubt, make the music quieter.
            </div>
        `,
        quiz: {
            question: 'What is the recommended volume level for background music relative to dialogue?',
            options: [
                { text: 'Same volume as dialogue', correct: false },
                { text: 'Louder than dialogue', correct: false },
                { text: '-12dB to -20dB below dialogue', correct: true },
                { text: 'Muted completely', correct: false }
            ]
        }
    },
    5: {
        badge: 'Module 5',
        title: 'Text & Titles',
        content: `
            <h3>Typography in Video</h3>
            <p>Text overlays, titles, and captions add context, branding, and accessibility to your videos. From intro titles to lower thirds, text is an essential part of modern video editing.</p>

            <div class="video-placeholder" style="position: relative;">
                <div style="position: absolute; top: 20%; left: 50%; transform: translateX(-50%); text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: 800; color: white; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">MY AWESOME VIDEO</div>
                    <div style="font-size: 0.7rem; color: rgba(255,255,255,0.7); margin-top: 8px; letter-spacing: 2px;">A CINEMATIC EXPERIENCE</div>
                </div>
                <div style="position: absolute; bottom: 15%; left: 5%; background: rgba(108, 99, 255, 0.8); padding: 8px 16px; border-radius: 6px;">
                    <div style="font-size: 0.7rem; font-weight: 700; color: white;">John Smith</div>
                    <div style="font-size: 0.55rem; color: rgba(255,255,255,0.7);">Creative Director</div>
                </div>
            </div>

            <h3>Types of Text in Video</h3>
            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <strong>Title Cards</strong>
                    <p>Full-screen text displays used for video intros, chapter headings, or end screens. Keep them bold, centered, and readable.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <strong>Lower Thirds</strong>
                    <p>Small text boxes in the lower portion of the screen showing names, locations, or context. Essential for interviews and documentaries.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <strong>Captions &amp; Subtitles</strong>
                    <p>Text that displays dialogue or narration. Crucial for accessibility and for viewers watching without sound (which is most social media viewers!).</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">4</div>
                <div class="step-content">
                    <strong>Animated Text</strong>
                    <p>Text that moves, fades, or transforms. Add kinetic typography to make key points stand out and keep viewers engaged.</p>
                </div>
            </div>

            <h3>Typography Best Practices</h3>
            <div class="step">
                <div class="step-number">5</div>
                <div class="step-content">
                    <strong>Font Choice</strong>
                    <p>Use clean, sans-serif fonts for modern videos. Avoid decorative fonts unless they match your brand. Stick to 1-2 fonts per video.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">6</div>
                <div class="step-content">
                    <strong>Readability</strong>
                    <p>Ensure text contrasts with the background. Add drop shadows, outlines, or semi-transparent backgrounds behind text for clarity.</p>
                </div>
            </div>

            <div class="tip">
                <strong>Pro Tip:</strong> When adding captions, use short phrases (2-3 words at a time) that appear in sync with speech. This is the "TikTok style" that keeps viewers engaged.
            </div>

            <div class="mistake">
                <strong>Common Mistake:</strong> Using too many different fonts and colors for text. This looks messy and unprofessional. Consistency is key.
            </div>
        `,
        quiz: {
            question: 'What is a "lower third" in video editing?',
            options: [
                { text: 'The bottom third of the video resolution', correct: false },
                { text: 'A text overlay showing names or context at the bottom of the screen', correct: true },
                { text: 'A type of transition effect', correct: false },
                { text: 'An audio mixing technique', correct: false }
            ]
        }
    },
    6: {
        badge: 'Module 6',
        title: 'Exporting Your Video',
        content: `
            <h3>The Final Step: Exporting</h3>
            <p>You've edited your masterpiece &mdash; now it's time to export (also called "rendering"). This process converts your timeline into a single video file that you can upload or share.</p>

            <div class="video-placeholder">&#128190;</div>

            <h3>Export Settings Explained</h3>
            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <strong>Resolution</strong>
                    <p><strong>1080p (1920x1080)</strong> &mdash; Standard HD, great for most content.<br>
                    <strong>4K (3840x2160)</strong> &mdash; Ultra HD, best quality but larger file size.<br>
                    <strong>720p (1280x720)</strong> &mdash; Lower quality, smaller files, good for quick previews.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <strong>Frame Rate</strong>
                    <p><strong>24fps</strong> &mdash; Cinematic look, standard for films.<br>
                    <strong>30fps</strong> &mdash; Standard for online content and vlogs.<br>
                    <strong>60fps</strong> &mdash; Smooth motion, great for gaming and sports.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <strong>Format &amp; Codec</strong>
                    <p><strong>MP4 (H.264)</strong> &mdash; Most compatible format. Works everywhere. This is your go-to choice.<br>
                    <strong>MP4 (H.265/HEVC)</strong> &mdash; Better compression, smaller files, but slower to export.<br>
                    <strong>MOV (ProRes)</strong> &mdash; High quality, large files, used for professional workflows.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">4</div>
                <div class="step-content">
                    <strong>Bitrate</strong>
                    <p>Higher bitrate = better quality but larger file. For YouTube 1080p, aim for 8-12 Mbps. For 4K, use 35-45 Mbps.</p>
                </div>
            </div>

            <h3>Platform-Specific Settings</h3>
            <div class="step">
                <div class="step-number">5</div>
                <div class="step-content">
                    <strong>YouTube</strong>
                    <p>1080p or 4K, 30fps or 60fps, MP4 (H.264), 16:9 aspect ratio.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">6</div>
                <div class="step-content">
                    <strong>Instagram Reels / TikTok</strong>
                    <p>1080x1920 (9:16 vertical), 30fps, MP4 (H.264), under 60 seconds for optimal reach.</p>
                </div>
            </div>

            <div class="tip">
                <strong>Pro Tip:</strong> Always keep your original project files after exporting. You might need to make changes later, and re-editing from the original is much better than trying to edit an exported video.
            </div>

            <div class="mistake">
                <strong>Common Mistake:</strong> Exporting in the wrong aspect ratio. Always match your export settings to your target platform (16:9 for YouTube, 9:16 for TikTok/Reels, 1:1 for Instagram feed).
            </div>
        `,
        quiz: {
            question: 'What is the most compatible video format for sharing online?',
            options: [
                { text: 'AVI', correct: false },
                { text: 'MOV (ProRes)', correct: false },
                { text: 'MP4 (H.264)', correct: true },
                { text: 'WMV', correct: false }
            ]
        }
    }
};

// ===== Navigation =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveNav();
});

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);

        if (link) {
            if (scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
}

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
});

// ===== Progress Tracking =====
function updateProgress() {
    const total = 6;
    const completed = state.completedModules.length;
    const percent = Math.round((completed / total) * 100);

    document.getElementById('progressCount').textContent = completed;
    document.getElementById('progressFill').style.width = `${percent}%`;
    document.getElementById('progressPercent').textContent = `${percent}%`;

    updateModuleStatuses();
    updateBadges();
    saveState();
}

function updateModuleStatuses() {
    for (let i = 1; i <= 6; i++) {
        const card = document.querySelector(`[data-module="${i}"]`);
        const statusEl = document.getElementById(`status-${i}`);

        card.classList.remove('completed', 'unlocked', 'locked');

        if (state.completedModules.includes(i)) {
            card.classList.add('completed');
            statusEl.querySelector('.status-text').textContent = 'Completed';
        } else if (i === 1 || state.completedModules.includes(i - 1)) {
            card.classList.add('unlocked');
            statusEl.querySelector('.status-text').textContent = 'Available';
        } else {
            card.classList.add('locked');
            statusEl.querySelector('.status-text').textContent = 'Locked';
        }
    }
}

function updateBadges() {
    const container = document.getElementById('progressBadges');
    container.innerHTML = '';

    const badgeNames = [
        { id: 1, name: 'First Steps', icon: '&#128095;' },
        { id: 2, name: 'Timeline Pro', icon: '&#127916;' },
        { id: 3, name: 'Cut Master', icon: '&#9986;' },
        { id: 4, name: 'Sound Wizard', icon: '&#9835;' },
        { id: 5, name: 'Text Artist', icon: '&#84;' },
        { id: 6, name: 'Export Expert', icon: '&#128190;' }
    ];

    state.completedModules.forEach(moduleId => {
        const badgeInfo = badgeNames.find(b => b.id === moduleId);
        if (badgeInfo) {
            const badge = document.createElement('span');
            badge.className = 'badge earned';
            badge.innerHTML = `${badgeInfo.icon} ${badgeInfo.name}`;
            container.appendChild(badge);
        }
    });

    if (state.completedModules.length === 6) {
        const masterBadge = document.createElement('span');
        masterBadge.className = 'badge earned';
        masterBadge.innerHTML = '&#127942; Course Complete!';
        masterBadge.style.background = 'linear-gradient(135deg, #fbbf24, #f59e0b)';
        container.appendChild(masterBadge);
    }
}

// ===== Lesson Modal =====
function openLesson(moduleId) {
    const card = document.querySelector(`[data-module="${moduleId}"]`);
    if (card.classList.contains('locked')) {
        showToast('&#128274;', 'Complete the previous module first!');
        return;
    }

    state.currentModule = moduleId;
    const data = lessonData[moduleId];

    document.getElementById('lessonBadge').textContent = data.badge;
    document.getElementById('lessonTitle').textContent = data.title;
    document.getElementById('lessonBody').innerHTML = data.content;

    const quizContainer = document.getElementById('lessonQuiz');
    if (data.quiz) {
        quizContainer.innerHTML = `
            <div class="quiz-container">
                <h3 class="quiz-title">&#128221; Quick Quiz</h3>
                <div class="quiz-question">
                    <p>${data.quiz.question}</p>
                    <div class="quiz-options">
                        ${data.quiz.options.map((opt, idx) => `
                            <button class="quiz-option" onclick="checkAnswer(this, ${opt.correct})" data-correct="${opt.correct}">
                                ${opt.text}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    const completeBtn = document.getElementById('completeBtn');
    if (state.completedModules.includes(moduleId)) {
        completeBtn.textContent = 'Completed ✓';
        completeBtn.classList.add('completed');
    } else {
        completeBtn.innerHTML = 'Mark as Complete &#10003;';
        completeBtn.classList.remove('completed');
    }

    document.getElementById('lessonModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLesson() {
    document.getElementById('lessonModal').classList.remove('active');
    document.body.style.overflow = '';
    state.currentModule = null;
}

function checkAnswer(el, isCorrect) {
    const options = el.parentElement.querySelectorAll('.quiz-option');
    options.forEach(opt => {
        opt.classList.add('disabled');
        if (opt.dataset.correct === 'true') {
            opt.classList.add('correct');
        }
    });

    if (!isCorrect) {
        el.classList.add('incorrect');
    } else {
        showToast('&#127881;', 'Correct! Great job!');
    }
}

function completeModule() {
    const moduleId = state.currentModule;
    if (!moduleId || state.completedModules.includes(moduleId)) return;

    state.completedModules.push(moduleId);
    updateProgress();

    const completeBtn = document.getElementById('completeBtn');
    completeBtn.textContent = 'Completed ✓';
    completeBtn.classList.add('completed');

    const messages = [
        { icon: '&#127881;', text: "Module complete! You're doing great!" },
        { icon: '&#11088;', text: 'Amazing progress! Keep it up!' },
        { icon: '&#128170;', text: "You're getting better with every module!" },
        { icon: '&#127942;', text: 'Another badge earned! Well done!' },
        { icon: '&#128640;', text: "You're on fire! Keep learning!" },
        { icon: '&#127775;', text: 'Course complete! You did it!' }
    ];

    const msg = messages[Math.min(moduleId - 1, messages.length - 1)];
    setTimeout(() => {
        showToast(msg.icon, msg.text);
    }, 300);

    if (state.completedModules.length === 6) {
        setTimeout(() => {
            showToast('&#127942;', "Congratulations! You've completed the entire course!");
        }, 2000);
    }
}

// ===== Practice =====
function togglePractice(practiceId) {
    const card = document.querySelector(`[data-practice="${practiceId}"]`);
    const idx = state.completedPractice.indexOf(practiceId);

    if (idx === -1) {
        state.completedPractice.push(practiceId);
        card.classList.add('done');
        card.querySelector('.practice-btn-text').textContent = 'Completed ✓';
        showToast('&#10024;', 'Challenge completed! Awesome work!');
    } else {
        state.completedPractice.splice(idx, 1);
        card.classList.remove('done');
        card.querySelector('.practice-btn-text').textContent = 'Mark as Completed';
    }

    saveState();
}

// ===== Toast Notifications =====
let toastTimeout = null;
function showToast(icon, message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastIcon').innerHTML = icon;
    document.getElementById('toastMessage').textContent = message;

    if (toastTimeout) clearTimeout(toastTimeout);
    toast.classList.add('show');
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== Contact Form =====
function handleContact(e) {
    e.preventDefault();
    const form = document.getElementById('contactForm');
    const success = document.getElementById('formSuccess');

    success.classList.add('show');
    form.reset();

    setTimeout(() => {
        success.classList.remove('show');
    }, 5000);
}

// ===== State Persistence =====
function saveState() {
    localStorage.setItem('completedModules', JSON.stringify(state.completedModules));
    localStorage.setItem('completedPractice', JSON.stringify(state.completedPractice));
}

function loadState() {
    // Restore practice cards
    state.completedPractice.forEach(id => {
        const card = document.querySelector(`[data-practice="${id}"]`);
        if (card) {
            card.classList.add('done');
            card.querySelector('.practice-btn-text').textContent = 'Completed ✓';
        }
    });

    updateProgress();
}

// ===== Close modal on escape =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLesson();
    }
});

// ===== Close modal on backdrop click =====
document.getElementById('lessonModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeLesson();
    }
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    loadState();
});
