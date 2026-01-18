(function() {
  var form = document.getElementById('kabooly-form-6');
  if (!form) return;

  var iframe = document.createElement('iframe');
  var baseUrl = 'https://crm.kabooly.com/embed/form/6';
  var params = [];

  var urlParams = new URLSearchParams(window.location.search);
  ['utm_source', 'utm_campaign', 'utm_medium', 'utm_content', 'utm_term'].forEach(function(param) {
    var value = urlParams.get(param);
    if (value) params.push(param + '=' + encodeURIComponent(value));
  });

  iframe.src = baseUrl + (params.length ? '?' + params.join('&') : '');
  iframe.style.width = '100%';
  iframe.style.border = 'none';
  iframe.style.minHeight = '400px';
  iframe.onload = function() {
    window.addEventListener('message', function(e) {
      if (e.data.formId === '6' && e.data.height) {
        iframe.style.height = e.data.height + 'px';
      }
    });
  };
  form.appendChild(iframe);
})();
