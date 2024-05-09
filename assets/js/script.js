const themeButtonEl = $('#theme-btn');
const firstNameEl = $('input[name="first-name"]');

let isDark = true;

// Click event causes alert light theme toggle
themeButtonEl.on('click', function () {
    if (isDark) {
      $('body').css({ 'background-color': '#1a1a1a', color: 'white' });
      isDark = !isDark;
    } else {
        $('body').css({ 'background-color': 'white', color: '#1a1a1a' });
        isDark = !isDark;
      }
  });

  function handleFormSubmit(event) {
    event.preventDefault();

    console.log('First Name:', firstNameEl.val());
  }
   