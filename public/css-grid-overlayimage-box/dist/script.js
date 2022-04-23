const selectWritingMode = document.getElementById("writing-mode");

selectWritingMode.addEventListener("change", () => {
  document.documentElement.style.setProperty(
    "--direction",
    selectWritingMode.value
  );
});