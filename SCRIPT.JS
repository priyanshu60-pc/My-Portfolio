const email = "priyanshuchakraborty60@gmail.com";
const copyBtn = document.getElementById("copyBtn");
const projectFilter = document.getElementById("projectFilter");
const projects = document.querySelectorAll(".project");

if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(email);
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy Email"), 2000);
  });
}

if (projectFilter) {
  projectFilter.addEventListener("input", () => {
    const query = projectFilter.value.toLowerCase();
    projects.forEach(p => {
      const tech = p.getAttribute("data-tech");
      p.style.display = tech.includes(query) ? "block" : "none";
    });
  });
}

function resetFilter() {
  projectFilter.value = "";
  projects.forEach(p => (p.style.display = "block"));
}

document.getElementById("downloadBtn")?.addEventListener("click", () => {
  alert("Resume download will be added soon!");
});
