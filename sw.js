// service worker ພື້ນຖານ — ບໍ່ cache ຫຍັງພິເສດ, ມີໄວ້ເພື່ອໃຫ້ browser (ໂດຍສະເພາະ Android/Chrome)
// ຮັບຮູ້ວ່າເວັບນີ້ເປັນ PWA ທີ່ "ຕິດຕັ້ງໄດ້" (installable)
self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  // ປ່ອຍໃຫ້ browser ໄປດຶງຂໍ້ມູນຕາມປົກກະຕິ (ບໍ່ cache) — ລະບົບນີ້ຕ້ອງການ
  // ຂໍ້ມູນສົດຈາກ Apps Script ຢູ່ແລ້ວ ຈຶ່ງບໍ່ຄວນ cache ການຕິດຕໍ່ API
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
