<script>
  document.getElementById("simpleForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    document.getElementById("message").innerHTML = `Thank you, ${name}! We will contact you at ${email}.`;
  });
</script>
