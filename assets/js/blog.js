const themeButtonEl = $('#theme-btn');
const backbtn = $('#back')



let isDark = true;
themeButtonEl.on('click', function () {
    if (isDark) {
      $('body').css({ 'background-color': '#1a1a1a', color: 'white' });
      isDark = !isDark;
    } else {
        $('body').css({ 'background-color': 'white', color: '#1a1a1a' });
        isDark = !isDark;
      }
  });

  
    event.preventDefault();

  backbtn.on("click", function (){
    location.href = "./index.html"
  });