function openModal(src) {
	var modal = document.getElementById('myModal')
	var modalImg = document.getElementById('img01')
	var captionText = document.getElementById('caption')

	modal.style.display = 'block'
	modalImg.src = src
	captionText.innerHTML = src.alt

	// Получение элемента <span> (закрыть) и закрытие модального окна при нажатии на него
	var span = document.getElementsByClassName('close')[0]
	span.onclick = function () {
		modal.style.display = 'none'
	}
}


function downloadCertificate() {
	var link = document.createElement('a')
	link.href = '/Coursera TBLGQ7H2EFNP (2).pdf' // Укажите путь к файлу сертификата
	link.download = 'Certificate.pdf' // Название файла для сохранения
	link.dispatchEvent(new MouseEvent('click'))
}


// Этот скрипт можно использовать для добавления дополнительных интерактивных эффектов, например, анимации при наведении
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.icon').classList.add('animate');
    });
    item.addEventListener('mouseleave', () => {
        item.querySelector('.icon').classList.remove('animate');
    });
});
