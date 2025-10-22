// 頁面共用功能，可擴充動畫或事件
// console.log("網站載入完成：我的日常生活");

// function goToPage(select) {
//   if (select.value) {
//     location.href = select.value;
//   }
// }

// 當連結由斜線開頭，路徑是由從網頁的根開始找尋，所以也是屬於絕對路徑。 路徑是由檔案自身相對位置開始找尋，自己的位置改變了，找到的結果也會不同，這就是相對路徑。 href="../index.css" 如果連結前面寫了兩個點 ../，就會找到上一層的檔案。 這個可以連續接起來使用，例如：../../，就是找到上上層的檔案，以此類推。

// function goHome() {
//   location.href = "../index.html"; // 回首頁
// }

// function goBack() {
//   history.back(); // 回前頁
// }

function goBack() {
  history.go(-1); //會後退一頁
}
