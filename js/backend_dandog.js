window.onload = function () {
  // 페이지 맨 위로 이동.
  document.querySelector(".page_up").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelector('header li:first-child').addEventListener('click', function () {
      document.querySelector('.service').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('header li:nth-child(2)').addEventListener('click', function () {
      document.querySelector('.overview').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('header li:last-child').addEventListener('click', function () {
      document.querySelector('.ui_back').scrollIntoView({ behavior: 'smooth' });
  });
};
