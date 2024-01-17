//--плавная прокрутка

document.querySelectorAll('a').forEach(elem => {
	elem.addEventListener('click', function (e) {
		e.preventDefault()
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		})
	})
})
//---------------------

//-мигание иконки скролла

let scrollIcon = document.querySelector('.scrollDown')
setInterval(function () {
	scrollIcon.classList.toggle('opac')
}, 1000)

//---------------------

// ---- parallax -----

let bigElements = document.querySelectorAll('.bigIconHeader')
let aveElements = document.querySelectorAll('.avagageIconHeader')
let smallElement = document.querySelectorAll('.smallElements')
let headerTitle = document.querySelector('.header-title')
let headerSubText = document.querySelector('.header-subtitle')

//вывод title в спанах на страницу
let title = 'Print speed test'
let splited = title.split('')
// let mapes = splited.map(elem => `<span>${elem}</span>`)
// let mapes = splited.map(elem => {
// 	let span = document.createElement('span')
// 	span.innerText = elem
// 	return span
// })
splited.forEach(elem => {
	let span = document.createElement('span')
	span.innerText = elem
	headerTitle.appendChild(span)
})

// console.log(mapes)
// headerTitle.innerHTML = mapes.join('').toString()
//-------------------------------------------
function opacityForElements() {
	let childrens = headerTitle.children
	bigElements.forEach(elem => {
		elem.style.opacity = 0
	})

	aveElements.forEach(elem => {
		elem.style.opacity = 0
	})
	smallElement.forEach(elem => {
		elem.style.opacity = 0
	})
	headerSubText.style.opacity = 0
	for (let i = 0; i < childrens.length; i++) {
		childrens[i].style.opacity = 0
	}
}
opacityForElements()
let sec = 100
function writeHeaderTitle() {
	let childrens = headerTitle.children
	for (let i = 0; i < childrens.length; i++) {
		sec += 50
		setTimeout(() => {
			childrens[i].style.opacity = 1
		}, sec)
	}
}

// let lol = headerTitle.children
// for (let i = 0; i < lol.length; i++) {
// 	console.log(lol[i])
// }

window.onload = () => {
	bigElements.forEach(elem => {
		setTimeout(() => {
			elem.style.opacity = 1
		}, getRandomInt(100, 500))
	})
	aveElements.forEach(elem => {
		setTimeout(() => {
			elem.style.opacity = 1
		}, getRandomInt(100, 500))
	})
	smallElement.forEach(elem => {
		setTimeout(() => {
			elem.style.opacity = 1
		}, getRandomInt(100, 500))
	})

	setTimeout(() => {
		headerSubText.style.opacity = 1
	}, getRandomInt(100, 500))
	writeHeaderTitle()
}

// функция для генерации рандомных чисел
function getRandomInt(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min) + min) // Максимум не включается, минимум включается
}

//функция паралакс для повторного использования)
function parallax(element, x, y) {
	element.forEach((elem, i) => {
		let rotate = getRandomInt(-30, 30)
		elem.style.transform = `rotate(${rotate}deg)`
		window.addEventListener('mousemove', e => {
			const mouseX = e.clientX
			const mouseY = e.clientY

			let offsetBigX = (i + y) * x
			let offsetBigY = (i + y) * x

			let translateX = (mouseX / window.innerWidth) * offsetBigX
			let translateY = (mouseY / window.innerHeight) * offsetBigY

			elem.style.transform = `translate(-${translateX}px, -${translateY}px) rotate(${rotate}deg)`
		})
	})
}

parallax(bigElements, 30, 3)
parallax(aveElements, 10, 1.5)
parallax(smallElement, 6, 1)

//---------------------------------------

//---- burger menu -----
let burgerBtn = document.querySelector('.burger-menu-icon')
let addActiveBtn = document.querySelectorAll('.addActive')

burgerBtn.addEventListener('click', () => {
	addActiveBtn.forEach(elem => {
		elem.classList.toggle('active')
	})
	document.body.classList.toggle('no-scroll')
})

//header-nav header-content main dark_theme light-dark-theme
//Смена темы
let changeThemeElements = [
	'header-nav',
	'header-content',
	'main',
	'light-dark-theme',
]
let changeThemeBtn = document.querySelector('.light-dark-theme')

changeThemeBtn.addEventListener('click', () => {
	for (let i = 0; i < changeThemeElements.length; i++) {
		let docElem = document.querySelector(`.${changeThemeElements[i]}`)
		docElem.classList.toggle('dark_theme')
	}
})
