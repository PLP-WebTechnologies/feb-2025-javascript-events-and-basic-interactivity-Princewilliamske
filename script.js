// 1. Event Handling
document.getElementById("clickMe").addEventListener("click", () => {
    alert("✅ You clicked the button!");
  });
  
  const hoverBox = document.getElementById("hoverBox");
  hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.backgroundColor = "#d0f0c0";
  });
  hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.backgroundColor = "";
  });
  
  document.getElementById("keyInput").addEventListener("keypress", (e) => {
    console.log(`You typed: ${e.key}`);
  });
  
  document.getElementById("secretBox").addEventListener("dblclick", () => {
    alert("🤫 Secret action unlocked!");
  });
  
  // 2. Interactive Elements
  document.getElementById("changeMe").addEventListener("click", (e) => {
    e.target.textContent = "🎉 Changed!";
    e.target.style.backgroundColor = "#ffcc80";
  });
  
  const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3"
  ];
  let imgIndex = 0;
  
  document.getElementById("nextImg").addEventListener("click", () => {
    imgIndex = (imgIndex + 1) % images.length;
    document.getElementById("galleryImage").src = images[imgIndex];
  });
  
  document.querySelectorAll(".tabBtn").forEach((btn) =>
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tabContent").forEach((tab) => {
        tab.style.display = "none";
      });
      document.getElementById(btn.dataset.target).style.display = "block";
    })
  );
  
  // 3. Form Validation
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("feedback");
  
    if (!name || !email || !password) {
      feedback.textContent = "⚠️ All fields are required.";
      return;
    }
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      feedback.textContent = "❌ Invalid email format.";
      return;
    }
  
    if (password.length < 8) {
      feedback.textContent = "❌ Password must be at least 8 characters.";
      return;
    }
  
    feedback.textContent = "✅ Form submitted successfully!";
  });
  
  document.getElementById("password").addEventListener("input", (e) => {
    const feedback = document.getElementById("feedback");
    if (e.target.value.length < 8) {
      feedback.textContent = "🔒 Password too short";
    } else {
      feedback.textContent = "🔓 Strong password!";
    }
  });

  document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  