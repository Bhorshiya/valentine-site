const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const proposal = document.getElementById("proposal");
const memories = document.getElementById("memories");

// YES button click
yesBtn.addEventListener("click", () => {
    proposal.style.display = "none";
    memories.classList.remove("hidden");
    memories.scrollIntoView({ behavior: "smooth" });
});

// NO button runs away 😄
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});





