/*
	Acordeon a medida para la pagina de proyecto (QuickCita).
	No viene incluido en la plantilla Twenty: se agrega aparte para no tocar
	assets/js/main.js (el JS original de la plantilla).
*/
(function () {

	document.addEventListener('DOMContentLoaded', function () {

		var toggles = document.querySelectorAll('.accordion-toggle');

		toggles.forEach(function (toggle) {
			toggle.addEventListener('click', function () {
				var item = toggle.closest('.accordion-item');
				var panel = item.querySelector('.accordion-panel');
				var isOpen = item.classList.contains('is-open');

				if (isOpen) {
					panel.style.maxHeight = null;
					item.classList.remove('is-open');
					toggle.setAttribute('aria-expanded', 'false');
				} else {
					item.classList.add('is-open');
					toggle.setAttribute('aria-expanded', 'true');
					panel.style.maxHeight = panel.scrollHeight + 'px';
				}
			});
		});

	});

})();
