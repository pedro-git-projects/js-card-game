// cards is the array of card objects
const cards = [
	{id:1, imgPath: './public/king_hearts.png'},
	{id:2, imgPath: './public/jack_clubs.png'},
	{id:3, imgPath: './public/queen_diamonds.png'},
	{id:4, imgPath: './public/ace_spades.png'},
]

// backImg represents the back of a card
const backImgSrc = './public/back_black_basic.png'

const container = document.querySelector('.card-container')

// createCard takes a card object and dinamically adds it to the HTML.
const createCard = (el) => { 
    // create div elements that make up a card	
	const cardEl = createEl('div')
	const cardInnerEl = createEl('div')
	const cardFrontEl = createEl('div')
	const cardBackEl= createEl('div')

	// create front and back image elements for a card
	const frontImg = createEl('img')
	const backImg = createEl('img')

	// add class and id to card element
	addClassToEl(cardEl, 'card')
	addIdToEl(cardEl, el.id)

    // add class to inner card element	
	addClassToEl(cardInnerEl, 'card-inner')

	// add class to front card element
	addClassToEl(cardFrontEl, 'card-front')

	// add class to back card element
	addClassToEl(cardBackEl, 'card-back')

	// add src attribute and appropriate value to img element - front of card
	addSrcToEl(frontImg, el.imgPath)

	// add src attribute and appropriate value to img element - back of card
	addSrcToEl(backImg, backImgSrc)

    //assign class to back image element of back of card	
	addClassToEl(backImg, 'card-img')
    //assign class to back image element of front of card	
	addClassToEl(frontImg, 'card-img')

	addChildEl(cardFrontEl, frontImg)
	addChildEl(cardBackEl, backImg)

	addChildEl(cardInnerEl, cardFrontEl)
	addChildEl(cardInnerEl, cardBackEl)

	addChildEl(cardEl, cardInnerEl)

	addCardToGridCell(cardEl)
}


const createEl = (type) => document.createElement(type)

const addClassToEl = (el, className) => { el.classList.add(className) }

const addIdToEl = (el, id) => { el.id = id } 

const addSrcToEl = (el, src) => { el.src = src }

const addChildEl = (parent, child) => { parent.appendChild(child) }

const addCardToGridCell = (card) => {
	const className = mapIdToGridCell(card)
	const cardPosEl = document.querySelector(className)// null
	addChildEl(cardPosEl, card)
}

const mapIdToGridCell = (card) => {
	switch(card.id) {
		case "1":
			return '.card-pos-a'
		case "2":
			return '.card-pos-b'
		case "3":
			return '.card-pos-c' 
		case "4":
			return '.card-pos-d' 
	}
}

const createCards = () => {
	cards.forEach((el) => createCard(el))
}

createCards()
