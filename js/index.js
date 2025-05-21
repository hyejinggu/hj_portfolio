window.onload = function () {
  // 페이지 맨 위로 이동
  const pageUpButton = document.querySelector(".page_up");
  if (pageUpButton) {
    pageUpButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 아이콘 애니메이션
  const techIcons = document.querySelectorAll('.tech-icon');
  
  techIcons.forEach((icon, index) => {
    setTimeout(() => {
      icon.style.opacity = '0';
      icon.style.transform = 'translateY(20px)';
      icon.style.transition = 'none';
      
      setTimeout(() => {
        icon.style.transition = 'all 0.5s ease';
        icon.style.opacity = '1';
        icon.style.transform = 'translateY(0)';
      }, 100);
    }, index * 200);
  });
  
  // 타이핑 효과
  const phrases = [
    "Solving problems elegantly...",
    "Building scalable solutions...",
    "Creating reliable systems...",
    "Optimizing database performance..."
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;
  const typingElement = document.getElementById('typing-text');
  
  // typing-text 요소가 있는지 확인
  if (typingElement) {
    function typeEffect() {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        // 삭제 중
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50; // 삭제는 빠르게
      } else {
        // 타이핑 중
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 150; // 타이핑은 느리게
      }
      
      // 다음 단계 결정
      if (!isDeleting && charIndex === currentPhrase.length) {
        // 타이핑 완료
        isDeleting = true;
        typingDelay = 1500; // 단어 완성 후 대기 시간
      } else if (isDeleting && charIndex === 0) {
        // 삭제 완료
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length; // 다음 문구로
        typingDelay = 500; // 다음 문구 시작 전 대기 시간
      }
      
      setTimeout(typeEffect, typingDelay);
    }
    
    // 타이핑 효과 시작
    setTimeout(typeEffect, 1000);
  }
};