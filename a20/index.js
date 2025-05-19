let users = [];

async function loadUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await res.json();
  } catch (err) {
    console.error("Error fetching users:", err);
  }
}

loadUsers();

async function findUser() {
  const email = document.getElementById("emailInput").value.trim().toLowerCase();
  const result = document.getElementById("result");

  const user = users.find(u => u.email.toLowerCase() === email);

  if (!user) {
    result.style.color = "red";
    result.textContent = "No user found with that email.";
    return;
  }

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    const posts = await res.json();

    result.style.color = "green";
    result.textContent = `Name: ${user.name}\nTotal Posts: ${posts.length}`;
  } catch (err) {
    result.style.color = "red";
    result.textContent = "Failed to fetch posts.";
  }
}