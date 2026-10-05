document.getElementById('year').textContent = new Date().getFullYear();

  var menuBtn = document.getElementById('menuBtn');
  var navLinks = document.getElementById('navLinks');
  menuBtn.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { navLinks.classList.remove('open'); });
  });

  var fileInput = document.getElementById('q-photos');
  var fname = document.getElementById('fname');
  fileInput.addEventListener('change', function () {
    fname.textContent = fileInput.files.length ? fileInput.files.length + ' file(s) selected' : '';
  });

  var form = document.getElementById('quoteForm');
  var success = document.getElementById('formSuccess');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.style.display = 'none';
    success.classList.add('show');
  });

  var filterBtns = document.querySelectorAll('.filter-btn');
  var items = document.querySelectorAll('.gallery-item');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.getAttribute('data-filter');
      items.forEach(function (item) {
        item.hidden = !(f === 'all' || item.getAttribute('data-cat') === f);
      });
    });
  });
