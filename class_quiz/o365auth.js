function getCookie(name) {
  var cookies = document.cookie.split('; ');
  for(var i = 0; i < cookies.length; i++) {
    var nv = cookies[i].split('=');
    if (nv[0] === name) return nv[1];
  }
  return null;
}

function setCookie(name, value, days, path) {
  var date = new Date();
  date.setTime(date.getTime() + (days * 86400 * 1000));
  document.cookie = name + '=' + value + '; expires=' + date.toGMTString() + '; path=' + path;
}

function fedAuth(link) {
  var isIE = (navigator.userAgent.indexOf('Trident/') != -1);
  var isManagedPC = (navigator.userAgent.indexOf('CBHS') != -1);  // set via GPO

  var kmsi = false;   // microsoft online 'keep me signed in' setting
  if (isIE) {
    if (isManagedPC) {
      kmsi = true;
    } else {
      var kmsiCookie = getCookie('kmsi');

      if (kmsiCookie) {
        kmsi = (kmsiCookie=='yes');
      } else {
        kmsi = confirm('Would you like to enable the "Open with Explorer" Office 365 feature?\nOn a public PC, choose Cancel to prevent unauthorised access to your files/email.');
      }

      setCookie('kmsi', ((kmsi) ? 'yes' : 'no'), 30, '/start');
    }
  }

  var loginOptions = (kmsi) ? 1 : 2;

  var url = link.href;
  url = encodeURIComponent(encodeURIComponent(url));
  url = 'https://sso.cbhs.school.nz/adfs/ls/?wa=wsignin1.0&wtrealm=urn:federation:MicrosoftOnline&wctx=MEST%3D0%26LoginOptions%3D' + loginOptions + '%26wa%3Dwsignin1.0%26wreply%3D' + url;

  link.onclick = null;
  link.href = url;
}