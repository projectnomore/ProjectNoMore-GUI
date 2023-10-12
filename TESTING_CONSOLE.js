javascript:(function() {
  var iframe = document.createElement('iframe');
  iframe.src = 'https://n3z5qq.csb.app/index.html';
  iframe.style.position = 'fixed';
  iframe.style.top = '20px';
  iframe.style.left = '20px';
  iframe.style.width = '600px';
  iframe.style.height = '500px';
  iframe.style.border = '1px solid black';
  iframe.style.zIndex = '9999';
  iframe.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
  iframe.style.overflow = 'scroll';
  iframe.style.cursor = 'move';

  var isDragging = false;
  var offsetX, offsetY;

  iframe.addEventListener('mousedown', function(e) {
    isDragging = true;
    offsetX = e.clientX - iframe.getBoundingClientRect().left;
    offsetY = e.clientY - iframe.getBoundingClientRect().top;
  });

  document.addEventListener('mousemove', function(e) {
    if (isDragging) {
      var left = e.clientX - offsetX;
      var top = e.clientY - offsetY;
      iframe.style.left = left + 'px';
      iframe.style.top = top + 'px';
    }
  });

  document.addEventListener('mouseup', function() {
    isDragging = false;
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '}') {
      iframe.style.display = 'none';
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === ']') {
      iframe.style.display = 'block';
    }
  });

  iframe.style.display = 'block';
  document.body.appendChild(iframe);
})();
