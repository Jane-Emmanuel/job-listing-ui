const jobs = [
  {
    title: "Junior Frontend Developer",
    company: "Tech Studio",
    category: "Frontend",
    description: "Build and maintain responsive user interfaces."
  },
  {
    title: "Backend Developer",
    company: "API Corp",
    category: "Backend",
    description: "Work with databases and server-side logic."
  },
  {
    title: "Frontend Intern",
    company: "Startup Hub",
    category: "Internship",
    description: "Assist in building UI components and layouts."
  },
  {
    title: "React Developer",
    company: "Product Team",
    category: "Frontend",
    description: "Develop modern interfaces using React."
  }
];

const jobList = document.getElementById("jobList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function renderJobs(filteredJobs) {
  jobList.innerHTML = "";

  if (filteredJobs.length === 0) {
    jobList.innerHTML = "<p>No jobs found.</p>";
    return;
  }

  filteredJobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
      <span class="tag">${job.category}</span>
      <h3>${job.title}</h3>
      <div class="company">${job.company}</div>
      <p>${job.description}</p>
      <a href="#">View details →</a>
    `;

    jobList.appendChild(card);
  });
}

function filterJobs() {
  const searchText = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchText);
    const matchesCategory = category === "all" || job.category === category;
    return matchesSearch && matchesCategory;
  });

  renderJobs(filtered);
}

// Event listeners
searchInput.addEventListener("input", filterJobs);
categoryFilter.addEventListener("change", filterJobs);

// Initial render
renderJobs(jobs);
