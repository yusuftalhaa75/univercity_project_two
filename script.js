function gonder() {
  const input = document.getElementById("feedbackInput").value;
  const mesajAlani = document.getElementById("mesaj");
  const kutu = document.getElementById("gelenMesaj");

  if (input.trim() !== "") {
    mesajAlani.textContent = input;
    kutu.style.display = "block";
    document.getElementById("feedbackInput").value = "";
  } else {
    alert("Lütfen bir mesaj yazın.");
  }
}
