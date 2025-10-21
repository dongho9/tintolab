const gnb = document.querySelector("#gnb");
const gnbBar = document.querySelector("#gnbBar");
const logo = document.querySelector("h1");
const header = document.querySelector("header");
const topBtn = document.querySelector("#topBtn");
const footerList = document.querySelectorAll("footer dl dd");

// 반응형 메뉴 클릭 이벤트
gnbBar.addEventListener("click", (e) => {
  gnbBar.classList.toggle("active");
  gnb.classList.toggle("active");
  logo.classList.toggle("active");
});

// 스크롤시 헤더 위로 올라가기
let prevScroll = 0;
window.addEventListener("scroll", (e) => {
  let nowScroll = window.scrollY;
  if (nowScroll > prevScroll) {
    header.classList.add("active");
    prevScroll = nowScroll;
  } else {
    header.classList.remove("active");
    prevScroll = nowScroll;
  }

  // 스크롤Y값이 100위면 탑버튼 표시
  if (nowScroll > 100) {
    topBtn.classList.add("active");
  } else {
    topBtn.classList.remove("active");
  }
});

// 로고 클릭 이벤트
logo.addEventListener("click", (e) => {
  e.preventDefault();
  // 클릭시 lenis 잠깐 정지
  lenis.stop();
  // 위로 이동
  window.scrollTo({ top: 0, behavior: "smooth" });
  // 이동 후 lenis 다시 활성화
  lenis.start();
  gnbBar.classList.remove("active");
  gnb.classList.remove("active");
  logo.classList.remove("active");
});

// 탑버튼 클릭 이벤트
topBtn.addEventListener("click", () => {
  // 클릭시 lenis 잠깐 정지
  lenis.stop();
  // 위로 이동
  window.scrollTo({ top: 0, behavior: "smooth" });
  // 이동 후 lenis 다시 활성화
  lenis.start();
});

// 메뉴 클릭시 이벤트 제거
const list = document.querySelectorAll("#gnb ul li a");
list.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
    gnbBar.classList.remove("active");
    gnb.classList.remove("active");
    logo.classList.remove("active");

    const href = e.currentTarget.getAttribute("href");
    lenis.scrollTo(href);
  });
});

// 리사이즈시 메뉴 이벤트 제거
window.addEventListener("resize", () => {
  gnbBar.classList.remove("active");
  gnb.classList.remove("active");
  logo.classList.remove("active");
});

// 푸터 클릭 이동 방지
footerList.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// lenis 라이브러리
const lenis = new Lenis();

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
