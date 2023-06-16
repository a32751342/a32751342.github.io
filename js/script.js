document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu a');
    const contentSections = document.querySelectorAll('.content');
  
    menuLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        // 移除先前選中的按鈕
        menuLinks.forEach(link => {
          link.classList.remove('selected');
        });
  
        // 隱藏先前顯示的內容
        contentSections.forEach(section => {
          section.classList.add('hidden');
        });
  
        // 更新選中的按鈕
        this.classList.add('selected');
  
        // 顯示相應的內容
        const target = this.getAttribute('href');
        document.querySelector(target).classList.remove('hidden');
      });
    });
  });
  