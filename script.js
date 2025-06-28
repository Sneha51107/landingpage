
  document.getElementById("loginbtn").addEventListener("click", function () {
    document.getElementById("loginform").classList.remove("hidden");
  });

  // Optional: Handle form submission
  function submitlogin() {
    const user = document.getElementById("Username").value;
    const pass = document.getElementById("Password").value;

    alert("Username: " + user + "\nPassword: " + pass);
    // Hide form after submit
    document.getElementById("loginform").classList.add("hidden");
  }

