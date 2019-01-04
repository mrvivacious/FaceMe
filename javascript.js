// sadfasdfasdfsdf
window.onload = () => {
  alert('its loaded fellas');

  document.body.addEventListener('click', fn, false);

  // Add oncilck for the status field
  // if undefind still, check every 5 seconds
  let statusField = document.getElementById('pagelet_composer');
  // console.log(statusField);

  // we catch the event while it is on its path
  statusField.addEventListener('click', (event) => {
    // console.log(event.path[0].toString());

    if (event.path[0].className.toString().includes("_1mf7 _4r1q _4jy0 _4jy3 _4jy1 _51sy selected _42ft") ||
        event.path[0].toString() === '[object HTMLSpanElement]') {
      console.log(' we did it fellas');
      const statusText = statusField.querySelectorAll('[contenteditable="true"]')[0];
      let msg = statusText.innerText;

      alert('This is what you will be posting:\n\n' + msg);
    }
    
    // if (event.path[0] === 29) {
    //   //rip
    //   const statusText = statusField.querySelectorAll('[contenteditable="true"]')[0];
    //   let msg = statusText.innerText;
    //
    //   alert('This is what you will be posting:\n\n' + msg);
    // }
    // btn.addEventListener('click', (event) => {
    //   const statusText = statusField.querySelectorAll('[contenteditable="true"]')[0];
    //   let msg = statusText.innerText;
    //
    //   alert('This is what you will be posting:\n\n"' + msg + '"');
    // });

  });

}

function fn() {
  // console.log(event);
}

/*
// Ideas to try




*/
