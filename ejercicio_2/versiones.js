document.addEventListener('DOMContentLoaded', function() {
    const version1Btn = document.querySelector('.version_1');
    const version2Btn = document.querySelector('.version_2');
    const detalles1Btn = document.querySelector('.detalles_1');
    const detalles2Btn = document.querySelector('.detalles_2');
    const conf1Btn = document.querySelector('.conf_1');
    const conf2Btn = document.querySelector('.conf_2');
    const versionContainer = document.querySelector('.version-container');
  
    version1Btn.addEventListener('click', function() {
      document.querySelector('.collapse.show').classList.remove('show');
      document.querySelector('#version_1').classList.add('show');
    });
  
    version2Btn.addEventListener('click', function() {
      document.querySelector('.collapse.show').classList.remove('show');
      document.querySelector('#version_2').classList.add('show');
    });
  
    detalles1Btn.addEventListener('click', function() {
      document.querySelector('.collapse.show').classList.remove('show');
      document.querySelector('#detalles_1').classList.add('show');
    });
  
    detalles2Btn.addEventListener('click', function() {
      document.querySelector('.collapse.show').classList.remove('show');
      document.querySelector('#detalles_2').classList.add('show');
    });
  
    conf1Btn.addEventListener('click', function() {
      document.querySelector('.collapse.show').classList.remove('show');
      document.querySelector('#conf_1').classList.add('show');
    });
  
    conf2Btn.addEventListener('click', function() {
      document.querySelector('.collapse.show').classList.remove('show');
      document.querySelector('#conf_2').classList.add('show');
    });
  });