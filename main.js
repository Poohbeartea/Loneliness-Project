// Elements
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const toggleBtn = document.getElementById("toggleBtn");
const title = document.getElementById("loneliness");

// Track background toggle
let usingGraphite = true;
toggleBtn.addEventListener("click", () => {
  usingGraphite = !usingGraphite;
  if (usingGraphite) {
    section1.classList.remove("spiral-bg");
    section1.classList.add("graphite-bg");
    toggleBtn.textContent = "Switch to Spiral";
  } else {
    section1.classList.remove("graphite-bg");
    section1.classList.add("spiral-bg");
    toggleBtn.textContent = "Switch to Graphite";
  }
});

// Fade Section 1 out and Section 2 in
title.addEventListener("click", () => {
  section1.classList.add("fade-out");
  setTimeout(() => {
    section1.style.display = "none";
    section2.style.opacity = "1"; // reveal Section 2
  }, 1000); // matches fade-out animation
});
// --- SECTION 2 → SECTION 3 ---
const nextToSection3 = document.getElementById("nextToSection3");
nextToSection3.addEventListener("click", () => {
  section2.style.opacity = "0";
  setTimeout(() => {
    section2.style.display = "none";
    section3.style.display = "block";
    setTimeout(() => (section3.style.opacity = "1"), 100);
    showScene("samIntro");
  }, 2000);
});

// ===================== SECTION 3 — SAM’S STORY =====================

// All scene divs
const scenes = document.querySelectorAll(".scene");

function showScene(sceneId) {
  scenes.forEach((scene) => {
    scene.classList.remove("active");
  });
  const currentScene = document.getElementById(sceneId);
  currentScene.classList.add("active");
}

// Handle all “Next” buttons in Section 3
document.querySelectorAll(".next-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const nextId = btn.getAttribute("data-next");
    if (nextId) {
      // Fade current out, fade next in
      const currentScene = btn.closest(".scene");
      currentScene.classList.remove("active");
      setTimeout(() => {
        showScene(nextId);
      }, 500);
    } else if (btn.id === "toSection4") {
      // Placeholder for transition to Section 4 (future)
      section3.style.opacity = "0";
      console.log("Transition to Section 4 coming soon!");
    }
  });
});

// ===================== INTERACTIVE PHONE LOGIC =====================
const phoneFeed = document.getElementById("phoneFeed");
const sideText = document.getElementById("sideText");
const likeBtn = document.getElementById("likeBtn");
const postBtn = document.getElementById("postBtn");

// Individual post buttons
document.querySelectorAll(".post .like-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const post = btn.closest(".post");
    const user = post.querySelector(".post-header").textContent;

    if (user === "@Sam") {
      // Sam’s post gets "negative" feedback
      const reply = document.createElement("p");
      reply.textContent = "1 new comment: 'loser'";
      reply.style.color = "red";
      phoneFeed.appendChild(reply);

      sideText.innerHTML = "<p>Not getting likes on pictures and negative comments can increase feelings of loneliness.</p>";
    } else {
      // Friend posts - subtle acknowledgment
      sideText.innerHTML = `<p>You liked ${user}'s post. Social Media usage can reduce face-to-face interactions, making it difficult for people to form "real" social relationships.</p>`;
    }
  });
});

// Sam’s post creation
postBtn.addEventListener("click", () => {
  const samPost = document.createElement("div");
  samPost.className = "post";
  samPost.innerHTML = `
    <img src="images/sam.png" class="post-avatar" alt="Sam">
    <div class="post-content">
      <div class="post-header">@Sam</div>
      <div class="post-body">Sharing a moment…</div>
    </div>
    <button class="like-btn">❤️ Like</button>
  `;
  phoneFeed.appendChild(samPost);

  sideText.innerHTML = "<p>Posting exposes us to judgment and minimal engagement, which can worsen feelings of isolation.</p>";

  // Add event listener to the new post like button
  samPost.querySelector(".like-btn").addEventListener("click", () => {
    const reply = document.createElement("p");
    reply.textContent = "1 new comment: 'meh'";
    reply.style.color = "red";
    phoneFeed.appendChild(reply);

    sideText.innerHTML = "<p>Even small posts can attract negative attention, highlighting how social media can deepen loneliness.</p>";
  });
});
const section4 = document.getElementById("section4");
const toSection4Btn = document.getElementById("toSection4");

toSection4Btn.addEventListener("click", () => {
  section3.style.opacity = "0";
  setTimeout(() => {
    section3.style.display = "none";
    section4.style.display = "block";
    setTimeout(() => {
      section4.classList.add("active");
      section4.scrollTop = 0; // make sure it starts at top
    }, 100);
  }, 1000);
});
document.querySelectorAll('.next-scene-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const next = btn.dataset.next;
    if (next === "section4") {
      document.getElementById("section3").style.display = "none";
      const sec4 = document.getElementById("section4");
      sec4.style.display = "block";
      setTimeout(() => {
        sec4.classList.add("active");
      }, 100);
    }
  });
});

