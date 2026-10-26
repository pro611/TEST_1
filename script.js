// 전문이 화면에 들어오면 각 줄의 밑줄을 순서대로 그립니다.
const introduction = document.querySelector('.introduction');

if (introduction) {
  introduction.querySelectorAll('.intro-line').forEach((line, index) => {
    line.style.setProperty('--line-index', index);
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        introduction.classList.add('is-visible');
        observer.disconnect();
      }
    }, { threshold: 0.35 });

    observer.observe(introduction);
  } else {
    introduction.classList.add('is-visible');
  }
}
