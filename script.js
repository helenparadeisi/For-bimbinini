window.onload = function() {
    const okBtn = document.getElementById('okBtn');
    const overlay = document.getElementById('overlay');
    const music = document.getElementById('valentineMusic');
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const mainContainer = document.getElementById('mainContainer');
    const victoryMessage = document.getElementById('victoryMessage');

    // 1. iPhone Alert Logic
    if(okBtn) {
        okBtn.addEventListener('click', () => {
            // Attempt music playback from link
            if (music) {
                music.play().then(() => {
                    console.log("Music playing from link!");
                }).catch(err => {
                    console.log("Music blocked or link broken, but continuing...");
                });
            }
            
            // Fade out overlay
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
                startFloatingHearts();
            }, 500);
        });
    }

    // 2. No Button Logic
    let phraseIndex = 0;
    let yesSize = 1.2;
    const phrases = [
        "No💔", 
        "Are you sure tho?🤧", 
        "Pretty please?🥺", 
        "One more chance, pookie?🤭", 
        "Don't break my heart😔", 
        "please don't do this to me I am a little fragile bimbinini😢"
    ];

    if(noBtn) {
        noBtn.addEventListener('click', () => {
            phraseIndex++;
            noBtn.textContent = phrases[Math.min(phraseIndex, phrases.length - 1)];
            
            // Grow Yes Button
            yesSize += 1.5;
            yesBtn.style.fontSize = `${yesSize}rem`;
            yesBtn.style.padding = `${15 + phraseIndex * 15}px ${30 + phraseIndex * 25}px`;
        });
    }

    // 3. Yes Button Logic
    if(yesBtn) {
        yesBtn.addEventListener('click', () => {
            mainContainer.style.display = 'none';
            victoryMessage.style.display = 'block';
            for (let i = 0; i < 50; i++) {
                setTimeout(createVictoryHeart, i * 50);
            }
        });
    }
};

// Background Floating Hearts Function
function startFloatingHearts() {
    const bg = document.getElementById('bg-hearts');
    if(!bg) return;
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('bg-heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 5 + 10) + "s";
        bg.appendChild(heart);
        setTimeout(() => heart.remove(), 10000);
    }, 600);
}

// Victory Hearts Function
function createVictoryHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-victory');
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
