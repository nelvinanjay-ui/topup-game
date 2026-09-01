let selectedNominal = null;
let selectedPrice = 0;

function selectNominal(button, nominal, price) {
  selectedNominal = nominal;
  selectedPrice = price;

  // Hapus pilihan sebelumnya
  document.querySelectorAll(".nominals button").forEach(btn => {
    btn.classList.remove("active");
  });

  // Tandai pilihan yang dipilih
  button.classList.add("active");
}

function selectGame(game, button) {
  document.getElementById("selectedGame").textContent = game;

  document.querySelectorAll(".game").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
}

function order() {
  const playerId = document.getElementById("playerId").value;
  const zone = document.getElementById("zone").value;
  const payment = document.getElementById("payment").value;
  const result = document.getElementById("result");

  if (!playerId) {
    result.textContent = "⚠️ Masukkan ID Player terlebih dahulu.";
    return;
  }

  if (!selectedNominal) {
    result.textContent = "⚠️ Pilih nominal top up terlebih dahulu.";
    return;
  }

  result.innerHTML = `
    ✅ Pesanan berhasil dibuat!<br><br>
    ID Player: ${playerId}<br>
    Server/Zone: ${zone || "-"}<br>
    Nominal: ${selectedNominal}<br>
    Harga: Rp${selectedPrice.toLocaleString("id-ID")}<br>
    Pembayaran: ${payment}
  `;
}

function checkOrder() {
  const orderNumber = document.getElementById("orderCheck").value;
  const status = document.getElementById("status");

  if (!orderNumber) {
    status.textContent = "⚠️ Masukkan nomor pesanan.";
    return;
  }

  status.textContent = "🔎 Pesanan sedang dicek...";
    }
