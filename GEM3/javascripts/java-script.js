$(document).ready(function() {
    let offset = { x: -20, y: -10 }; 

    $('.button1').css('position', 'absolute'); 

    $(document).mousemove(function(event) { 
        let mouseX = event.pageX + offset.x; 
        let mouseY = event.pageY + offset.y; 

        $('.button1').css({ 
            top: mouseY + 'px', 
            left: mouseX + 'px'
        });
    });
});

$(document).ready(function() {
    // При нажатии на кнопку "ПРОДОЛЖИТЬ →" показываем вторую секцию
    $('.button1').click(function() {
      $('.sec1').hide();
      $('.sec2').show();

      
      // Через 5 секунд скрываем вторую секцию и показываем третью
      setTimeout(function() {
        $('.sec2').hide();
        $('.sec3').show();
      }, 2000); // 5000 миллисекунд = 5 секунд

      $('.horizontal').click(function() {
        $('.sec3').hide();
        $('.sec4').show();
      })
    });
  });


document.addEventListener("DOMContentLoaded", function() {
    // используй эту функцию, для элементов которые должны быть выполнены после загрузки HTML
    // Это как Document ready, только для vanila js
    this.onclick 
});
