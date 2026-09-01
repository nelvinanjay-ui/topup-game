let selectedNominal = null;
let selectedPrice = 0;

function selectNominal(button, nominal, price) {
  selectedNominal = nominal;
  selectedPrice = price;

  document.querySelectorAll(".nominals button").forEach(function(btn) {
    btn.classList.remove("active");
  });

  button.classList.add("active");
}

function selectGame(game, button) {
  document.getElementById("selectedGame").textContent = game;

  document.querySelectorAll(".game").forEach(function(btn) {
    btn.classList.remove("active");
  });

  button.classList.add("active");
}

function order() {
  const playerId = document.getElementById("playerId").value.trim();
  const zone = document.getElementById("zone").value.trim();
  const payment = document.getElementById("payment").value;
  const result = document.getElementById("result");

  if (playerId === "") {
    result.innerHTML = "⚠️ Masukkan ID Player terlebih dahulu.";
    return;
  }

  if (selectedNominal === null) {
    result.innerHTML = "⚠️ Pilih nominal top up terlebih dahulu.";
    return;
  }

  const orderNumber =
    "TOPUP-" + Math.floor(100000 + Math.random() * 900000);

  result.innerHTML =
    "✅ Pesanan berhasil dibuat!<br><br>" +
    "<b>Nomor Pesanan: " + orderNumber + "</b><br>" +
    "ID Player: " + playerId + "<br>" +
    "Server/Zone: " + (zone || "-") + "<br>" +
    "Nominal: " + selectedNominal + "<br>" +
    "Harga: Rp" + selectedPrice.toLocaleString("id-ID") + "<br>" +
    "Pembayaran: " + payment;
}

function checkOrder() {
  const orderNumber = document.getElementById("orderCheck").value.trim();
  const status = document.getElementById("status");

  if (orderNumber === "") {
    status.innerHTML = "⚠️ Masukkan nomor pesanan.";
    return;
  }

  status.innerHTML = "🔎 Pesanan sedang dicek...";
}
