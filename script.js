'use strict';

import { mixingCombinations } from "./constants.js";

document.addEventListener('DOMContentLoaded', () => {

    // DOM events
    const gameItemsContainerEl = document.querySelector('.game__items');
    const mixingAreaEl = document.querySelectorAll('.game__mixing-area');
    const recipeWrapper = document.querySelector('.recipe-wrapper');
    const recipeBookButton = document.getElementById('recipe-book-button');
    const recipeBookEl = document.getElementById('recipe-book');
    const recipeBookTitle = document.querySelector('.recipe-book-title');
    const closeRecipeBook = document.getElementById('close-recipe-book');
    const progressEl = document.querySelector('.progress');
    const resetBtn = document.querySelector('.game__reset');

    // Variable declarations and initialization
    const NUMBER_START_ELEMENTS = 4;

    let itemsCountBySubcategory = {};
    // Total possible elements for each subcategory
    const totalElementsPerSubcategory = {
        'water': 7,
        'earth': 5,
        'air': 4,
        'fire': 4,
        'foundations of life': 2,
        'development of life': 8,
        'professions': 2,
        'products of activity': 7,
        'phenomena': 8,
        'abstractions': 3,
    };

    const gameItemsString = localStorage.getItem('gameItems');
    let gameItems = [];
    if (gameItemsString) {
        const gameItemsParsed = JSON.parse(gameItemsString);

        // Fixing previous bug with builder
        const gameItemsFilteredBuilder = gameItemsParsed.filter(item =>  item.name !== 'Builder');

        // Adding updated structure of the game item objects
        gameItems = gameItemsFilteredBuilder.map(item => {
            const combination = mixingCombinations.find(combination => {
                return item.name === combination.result.name;
            });
            if (!combination) return item;
            return combination.result;
        });
        gameItems.forEach(gameItem => {
            if (!gameItem.category) return;
            addRecipeToBook(gameItem);
        });
    } else {
        gameItems = [
            {
                name: 'water',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/water.png',
                alt: 'water'
            },
            {
                name: 'fire',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/fire.png',
                alt: 'fire'
            },
            {
                name: 'earth',
                title: 'Icon by Umeicon - Flaticon',
                src: 'icons/earth.png',
                alt: 'earth'
            },
            {
                name: 'air',
                title: 'Icon by torskaya - Flaticon',
                src: 'icons/air.png',
                alt: 'air'
            },
        ];
    }

    const numberOfUniqueEl = mixingCombinations.length;
    let selectedItems = [];
    const clickSound = new Audio('click.mp3');
    const successSound = new Audio('success.mp3');

    // Functions
    function capitalize(str) {
        const strArray = str.split(' ');
        strArray[0] = strArray[0][0].toUpperCase() + strArray[0].slice(1).toLowerCase();
        return strArray.join(' ');
    }

    function createItemImage(gameItem) {
        const img = document.createElement('img');
        img.src = gameItem.src;
        img.alt = gameItem.alt;
        return img;
    }

    // Calculating game progress based on number of created items from all game items
    function calculateProgress() {
        const progress = Math.ceil(((gameItems.length - NUMBER_START_ELEMENTS) / numberOfUniqueEl) * 100);
        progressEl.style.width = `${progress}%`;
    }

    // Add item to mixing area
    function addToMixingArea(areaIndex, gameItem) {
        const mixingImgEl = createItemImage(gameItem);
        mixingAreaEl[areaIndex].textContent = ''; // Clearing the area before adding a new element
        mixingAreaEl[areaIndex].append(mixingImgEl);
    }

    function render() {
        gameItemsContainerEl.textContent = '';
        gameItems.forEach(gameItem => {
            const gameItemEl = document.createElement('div');
            gameItemEl.classList.add('game__item');
            gameItemEl.setAttribute('title', gameItem.title);
            gameItemEl.dataset.name = gameItem.name;

            const gameItemImg = createItemImage(gameItem);
            gameItemEl.append(gameItemImg);

            const gameItemCaption = document.createElement('div');
            gameItemCaption.classList.add('game__item-caption');
            gameItemCaption.textContent = capitalize(gameItem.name);

            gameItemEl.append(gameItemCaption);
            gameItemsContainerEl.append(gameItemEl);
        });
    }

    // Event delegation for game item clicks
    gameItemsContainerEl.addEventListener('click', (event) => {
        const gameItemEl = event.target.closest('.game__item');
        if (!gameItemEl) return; // If the click is not on a game element, exit the handler

        const gameItemName = gameItemEl.dataset.name;
        handleGameItemClick(gameItemName);
    });

    // Handle click on game item
    function handleGameItemClick(gameItemName) {
        // Prevent adding more than two items
        if (selectedItems.length < 2) {
            const gameItem = gameItems.find(item => item.name === gameItemName);
            if (!gameItem) return; // If the element is not found, exit the handler

            clickSound.play();
            selectedItems.push(gameItem);

            // Add to mixing area and check for combination if two items are selected
            addToMixingArea(selectedItems.length - 1, gameItem);
            if (selectedItems.length === 2) {
                mixingElements(selectedItems[0], selectedItems[1]);
            }
        }
    }

    function mixingElements(selectedItem1, selectedItem2) {
        const mixingCombination = mixingCombinations.find((mixingCombination) => {
            return (
                (
                    (selectedItem1.name === mixingCombination.item1 && selectedItem2.name === mixingCombination.item2) ||
                    (selectedItem1.name === mixingCombination.item2 && selectedItem2.name === mixingCombination.item1)
                ) &&
                !gameItems.find(item => item.name === mixingCombination.result.name)
            );
        });
        if (mixingCombination) {
            successfulMixing(mixingCombination.result);
        } else {
            unsuccessfulMixing();
        }
    }

    // Adding the new created item, clearing the mixing zone, calculating progress and rendering with the new item
    function successfulMixing(newItem) {
        successSound.play();
        gameItems.push(newItem);

        localStorage.setItem('gameItems', JSON.stringify(gameItems));

        addRecipeToBook(newItem);
        clearMixingArea();
    }

    // Adding class with a shaking animation to the mixing areas, then removing it and clearing the mixing zone
    function unsuccessfulMixing() {
        mixingAreaEl.forEach(mixingArea => {
            mixingArea.classList.add('shake');
            clearMixingArea();
            setTimeout(() => mixingArea.classList.remove('shake'), 200);
        });
    }

    function clearMixingArea() {
        selectedItems = [];
        setTimeout(() => mixingAreaEl.forEach(mixingArea => mixingArea.textContent = ''), 100);
        calculateProgress();
        render();
    }

    function updateRecipeBookTitle() {
        const itemsGlobalCount = Object.values(itemsCountBySubcategory).reduce((sum, item) => sum + item, 0);

        let countDisplay = recipeBookTitle.querySelector('.count-display');
        if (!countDisplay) {
            countDisplay = document.createElement('span');
            countDisplay.classList.add('count-display');
            recipeBookTitle.appendChild(countDisplay);
        }

        countDisplay.textContent = ` (${itemsGlobalCount}/${mixingCombinations.length})`;
    }

    function addRecipeToBook(recipe) {
        const category = capitalize(recipe.category);
        const subCategory = capitalize(recipe.subcategory);

        // First, find or create the category section
        let categorySection = document.querySelector(`.category[data-category="${category}"]`);
        if (!categorySection) {
            categorySection = document.createElement('div');
            categorySection.classList.add('category');
            categorySection.setAttribute('data-category', category);
            categorySection.innerHTML = `<h2 class="category-title">${category}</h2>`;
            recipeWrapper.appendChild(categorySection);
        }

        // Then, find or create the subcategory section within the category
        let subCategorySection = categorySection.querySelector(`.subcategory[data-subcategory="${subCategory}"]`);
        if (!subCategorySection) {
            subCategorySection = document.createElement('div');
            subCategorySection.classList.add('subcategory');
            subCategorySection.setAttribute('data-subcategory', subCategory);
            subCategorySection.innerHTML = `<h3 class="subcategory-title">${subCategory}</h3>`;
            categorySection.appendChild(subCategorySection);
        }

        // Create the new recipe element
        const recipeEl = document.createElement('div');
        recipeEl.classList.add('recipe');
        recipeEl.innerHTML = `
            <img src="${recipe.srcOfMixedEl1}" alt="${recipe.alt}" class="recipe-icon">
            <div class="game__mixing-symbol">+</div>
            <img src="${recipe.srcOfMixedEl2}" alt="${recipe.alt}" class="recipe-icon">
            <div class="game__mixing-symbol">=</div>
            <img src="${recipe.src}" title="${recipe.title}" alt="${recipe.alt}" class="recipe-icon">
        `;

        // Increment the count of created elements for this subcategory
        if (!itemsCountBySubcategory[recipe.subcategory]) {
            itemsCountBySubcategory[recipe.subcategory] = 0;
        }
        itemsCountBySubcategory[recipe.subcategory]++;

        // Find or create the count display next to the subcategory title
        let countDisplay = subCategorySection.querySelector('.count-display');
        if (!countDisplay) {
            countDisplay = document.createElement('span');
            countDisplay.classList.add('count-display');
            subCategorySection.querySelector('.subcategory-title').appendChild(countDisplay);
        }

        // Update the count display
        countDisplay.textContent = ` (${itemsCountBySubcategory[recipe.subcategory]}/${totalElementsPerSubcategory[recipe.subcategory]})`;

        // Append the new recipe element to the subcategory section
        subCategorySection.appendChild(recipeEl);

        // Update the Recipe Book title with the global count each time a new recipe is added
        updateRecipeBookTitle();
    }

    // Event handlers
    recipeBookButton.addEventListener('click', toggleRecipeBook);
    closeRecipeBook.addEventListener('click', toggleRecipeBook);
    resetBtn.addEventListener('click', resetGame);

    // Game initialization
    render();
    updateRecipeBookTitle();
    calculateProgress();

    // Functions for event handlers
    // Toggle visibility of the recipe book
    function toggleRecipeBook() {
        recipeBookEl.classList.toggle('show');
        recipeBookEl.classList.toggle('hidden');
    }

    function resetGame() {
        itemsCountBySubcategory = [];
        gameItems.splice(NUMBER_START_ELEMENTS);
        recipeWrapper.textContent = '';
        localStorage.clear();
        updateRecipeBookTitle();
        clearMixingArea();
    }
});