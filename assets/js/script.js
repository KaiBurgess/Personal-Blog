const themeButtonEl = $('#theme-btn');


const submitbtn = $('#submit')


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
   
  submitbtn.on("click", function (){
    const firstNameEl = $('input[name="first-name"]').val();
    const tittle = $('#tittle').val();
    const content = $('#content').val();
    console.log (firstNameEl, tittle, content);
    location.href = "./blog.html"

  });


//   💡   &#9728