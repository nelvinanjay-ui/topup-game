let selectedNominal = null;
let selectedPrice = 0;


/* =========================
   PILIH NOMINAL
========================= */

function selectNominal(button, nominal, price) {

  selectedNominal = nominal;
  selectedPrice = price;

  document.querySelectorAll(".nominals button")
    .forEach(function(btn) {
      btn.classList.remove("active");
    });

  button.classList.add("active");
}


/* =========================
   PILIH GAME
========================= */

function selectGame(game, button) {

  document.getElementById("selectedGame")
    .textContent = game;

  document.querySelectorAll(".game")
    .forEach(function(btn) {
      btn.classList.remove("active");
    });

  button.classList.add("active");
}


/* =========================
   BUAT PESANAN
========================= */

function order() {

  const playerId =
    document.getElementById("playerId").value.trim();

  const zone =
    document.getElementById("zone").value.trim();

  const payment =
    document.getElementById("payment").value;

  const result =
    document.getElementById("result");


  if (playerId === "") {

    result.innerHTML =
      "⚠️ Masukkan ID Player terlebih dahulu.";

    return;
  }


  if (selectedNominal === null) {

    result.innerHTML =
      "⚠️ Pilih nominal top up terlebih dahulu.";

    return;
  }


  const orderNumber =
    "TOPUP-" +
    Math.floor(100000 + Math.random() * 900000);


  /* SIMPAN DATA PESANAN */

  localStorage.setItem(
    "orderData",
    JSON.stringify({

      orderNumber: orderNumber,

      game:
        document.getElementById("selectedGame")
        .textContent,

      playerId: playerId,

      zone: zone || "-",

      nominal: selectedNominal,

      price: selectedPrice,

      payment: payment,

      status: "Menunggu Pembayaran"

    })
  );


  result.innerHTML =

    "✅ Pesanan berhasil dibuat!<br><br>" +

    "<b>Nomor Pesanan: " +
    orderNumber +
    "</b><br>" +

    "ID Player: " +
    playerId +
    "<br>" +

    "Server/Zone: " +
    (zone || "-") +
    "<br>" +

    "Nominal: " +
    selectedNominal +
    "<br>" +

    "Harga: Rp" +
    selectedPrice.toLocaleString("id-ID") +
    "<br>" +

    "Pembayaran: " +
    payment;

}


/* =========================
   KE HALAMAN PEMBAYARAN
========================= */

function goToPayment() {

  const data =
    localStorage.getItem("orderData");


  if (!data) {

    alert(
      "⚠️ Buat pesanan terlebih dahulu."
    );

    return;
  }


  window.location.href =
    "payment.html";
}


/* =========================
   CEK PESANAN
========================= */

function checkOrder() {

  const orderNumber =
    document.getElementById("orderCheck")
    .value.trim();

  const status =
    document.getElementById("status");


  if (orderNumber === "") {

    status.innerHTML =
      "⚠️ Masukkan nomor pesanan terlebih dahulu.";

    return;
  }


  const data =
    JSON.parse(
      localStorage.getItem("orderData")
    );


  if (!data) {

    status.innerHTML =
      "❌ Data pesanan tidak ditemukan.";

    return;
  }


  if (orderNumber !== data.orderNumber) {

    status.innerHTML =
      "❌ Nomor pesanan tidak ditemukan.";

    return;
  }


  const orderStatus =
    data.status ||
    "Menunggu Pembayaran";


  status.innerHTML =

    "<div>" +

    "<h3>📦 Pesanan Ditemukan</h3>" +

    "<p>Nomor Pesanan:<br>" +
    "<b>" +
    data.orderNumber +
    "</b></p>" +

    "<p>Game:<br>" +
    "<b>" +
    data.game +
    "</b></p>" +

    "<p>ID Player:<br>" +
    "<b>" +
    data.playerId +
    "</b></p>" +

    "<p>Zone:<br>" +
    "<b>" +
    data.zone +
    "</b></p>" +

    "<p>Nominal:<br>" +
    "<b>" +
    data.nominal +
    "</b></p>" +

    "<p>Total:<br>" +
    "<b>Rp" +
    data.price.toLocaleString("id-ID") +
    "</b></p>" +

    "<hr>" +

    "<p>🟢 Status:</p>" +

    "<h3>" +
    orderStatus +
    "</h3>" +

    "</div>";

}
