const colors = ["green", "skyblue", "orange", "yellow"];  // 각 슬라이드에 사용할 색상
let currentSlide = 0;  // 현재 슬라이드 인덱스

const slideLeft = document.querySelector('.img_slide_L');
const slideMain = document.querySelector('.img_slide_main');
const slideRight = document.querySelector('.img_slide_R');
const totalSlides = colors.length;  // 총 슬라이드 수

// 슬라이드를 업데이트하는 함수
function updateSlides() {
    slideLeft.style.backgroundColor = colors[(currentSlide + 2) % totalSlides];  // 좌측 슬라이드
    slideMain.style.backgroundColor = colors[(currentSlide + 1) % totalSlides];  // 메인 슬라이드
    slideRight.style.backgroundColor = colors[currentSlide];  // 우측 슬라이드
}

// 슬라이드 전환 함수
function nextSlide() {
    setTimeout(() => {
        currentSlide = (currentSlide + 1) % totalSlides;  // 슬라이드 인덱스 업데이트
        slideMain.style.backgroundColor = colors[(currentSlide + 1) % totalSlides];  // 우측 → 메인
    }, 300);

    setTimeout(() => {
        slideLeft.style.backgroundColor = colors[(currentSlide + 2) % totalSlides];  // 메인 → 좌측
    }, 600);

    setTimeout(() => {
        slideRight.style.backgroundColor = colors[currentSlide];  // 좌측 → 우측
    }, 900);
}

// 첫 슬라이드 설정
updateSlides();

// 5초마다 슬라이드 전환
setInterval(() => {
    nextSlide();
    updateSlides();
}, 5000);

// 필터 기능
const filters = document.querySelectorAll('input[name="category"]');
const gameItems = document.querySelectorAll('.all_game_item');

filters.forEach(filter => {
    filter.addEventListener('change', function() {
        const category = this.value;
        gameItems.forEach(item => {
            item.classList.remove('active');
            if (category === "A" || item.classList.contains(`category-${category}`)) {
                item.classList.add('active');  // 카테고리 필터링
            }
        });
    });
});

// 기본적으로 A (모든 카테고리) 활성화
document.querySelector('input#catA').checked = true;
gameItems.forEach(item => item.classList.add('active'));
