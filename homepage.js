<!-- JavaScript -->
<script>
  function changeContent() {
    const select = document.getElementById("mySelect");
    const div = document.getElementById("myDiv");
    const selectedOption = select.value;

    // Hide all paragraphs in the div
    const paragraphs = div.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].classList.remove("active");
    }

    // Show the selected paragraph
    const selectedParagraph = div.querySelector(`#${selectedOption}`);
    selectedParagraph.classList.add("active");
  }
</script>