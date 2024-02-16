'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // DOM events
    const gameItemsContainerEl = document.querySelector('.game__items');
    const mixingAreaEl = document.querySelectorAll('.game__mixing-area');
    const recipeWrapper = document.querySelector('.recipe-wrapper');
    const recipeBookButton = document.getElementById('recipe-book-button');
    const recipeBookEl = document.getElementById('recipe-book');
    const closeRecipeBook = document.getElementById('close-recipe-book');
    const progressEl = document.querySelector('.progress');
    const resetBtn = document.querySelector('.game__reset');

    // Variable declarations and initialization
    const NUMBER_START_ELEMENTS = 4;

    const mixingCombinations = [
        {
            item1: 'water',
            item2: 'fire',
            result: {
                name: 'steam',
                title: 'Icon by Vitaly Gorbachev - Flaticon',
                src: 'icons/steam.png',
                alt: 'steam',
                category: 'natural elements',
                subcategory: 'water',
                srcOfMixedEl1: 'icons/water.png',
                srcOfMixedEl2: 'icons/fire.png'
            }
        },
        {
            item1: 'water',
            item2: 'earth',
            result: {
                name: 'mud',
                title: 'Icon by Marz Gallery - Flaticon',
                src: 'icons/mud.png',
                alt: 'mud',
                category: 'natural elements',
                subcategory: 'water',
                srcOfMixedEl1: 'icons/water.png',
                srcOfMixedEl2: 'icons/earth.png'
            }
        },
        {
            item1: 'water',
            item2: 'frost',
            result: {
                name: 'ice',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/ice.png',
                alt: 'ice',
                category: 'natural elements',
                subcategory: 'water',
                srcOfMixedEl1: 'icons/water.png',
                srcOfMixedEl2: 'icons/frost.png'
            }
        },
        {
            item1: 'ice',
            item2: 'sun',
            result: {
                name: 'puddle',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/puddle.png',
                alt: 'puddle',
                category: 'natural elements',
                subcategory: 'water',
                srcOfMixedEl1: 'icons/ice.png',
                srcOfMixedEl2: 'icons/sun.png'
            }
        },
        {
            item1: 'water',
            item2: 'water',
            result: {
                name: 'sea',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/sea.png',
                alt: 'sea',
                category: 'natural elements',
                subcategory: 'water',
                srcOfMixedEl1: 'icons/water.png',
                srcOfMixedEl2: 'icons/water.png'
            }
        },
        {
            item1: 'sea',
            item2: 'sea',
            result: {
                name: 'ocean',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/ocean.png',
                alt: 'ocean',
                category: 'natural elements',
                subcategory: 'water',
                srcOfMixedEl1: 'icons/sea.png',
                srcOfMixedEl2: 'icons/sea.png'
            }
        },
        {
            item1: 'earth',
            item2: 'fire',
            result: {
                name: 'lava',
                title: 'Icon by Good Ware - Flaticon',
                src: 'icons/lava.png',
                alt: 'lava',
                category: 'natural elements',
                subcategory: 'earth',
                srcOfMixedEl1: 'icons/earth.png',
                srcOfMixedEl2: 'icons/fire.png'
            }
        },
        {
            item1: 'earth',
            item2: 'air',
            result: {
                name: 'dust',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/dust.png',
                alt: 'dust',
                category: 'natural elements',
                subcategory: 'earth',
                srcOfMixedEl1: 'icons/earth.png',
                srcOfMixedEl2: 'icons/air.png'
            }
        },
        {
            item1: 'stone',
            item2: 'water',
            result: {
                name: 'sand',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/sand.png',
                alt: 'sand',
                category: 'natural elements',
                subcategory: 'earth',
                srcOfMixedEl1: 'icons/stone.png',
                srcOfMixedEl2: 'icons/water.png'
            }
        },
        {
            item1: 'mud',
            item2: 'sand',
            result: {
                name: 'clay',
                title: 'Icon by Pottery And Ceramics - Flaticon',
                src: 'icons/clay.png',
                alt: 'clay',
                category: 'natural elements',
                subcategory: 'earth',
                srcOfMixedEl1: 'icons/mud.png',
                srcOfMixedEl2: 'icons/sand.png'
            }
        },
        {
            item1: 'lava',
            item2: 'water',
            result: {
                name: 'stone',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/stone.png',
                alt: 'stone',
                category: 'natural elements',
                subcategory: 'earth',
                srcOfMixedEl1: 'icons/lava.png',
                srcOfMixedEl2: 'icons/water.png'
            }
        },
        {
            item1: 'air',
            item2: 'fire',
            result: {
                name: 'energy',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/energy.png',
                alt: 'energy',
                category: 'natural elements',
                subcategory: 'air',
                srcOfMixedEl1: 'icons/air.png',
                srcOfMixedEl2: 'icons/fire.png'
            }
        },
        {
            item1: 'air',
            item2: 'water',
            result: {
                name: 'frost',
                title: 'Icon by Good Ware - Flaticon',
                src: 'icons/frost.png',
                alt: 'frost',
                category: 'natural elements',
                subcategory: 'air',
                srcOfMixedEl1: 'icons/air.png',
                srcOfMixedEl2: 'icons/water.png'
            }
        },
        {
            item1: 'air',
            item2: 'steam',
            result: {
                name: 'cloud',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/cloud.png',
                alt: 'cloud',
                category: 'natural elements',
                subcategory: 'air',
                srcOfMixedEl1: 'icons/air.png',
                srcOfMixedEl2: 'icons/steam.png'
            }
        },
        {
            item1: 'air',
            item2: 'energy',
            result: {
                name: 'storm',
                title: 'Icon by max.icons - Flaticon',
                src: 'icons/storm.png',
                alt: 'storm',
                category: 'natural elements',
                subcategory: 'air',
                srcOfMixedEl1: 'icons/air.png',
                srcOfMixedEl2: 'icons/energy.png'
            }
        },
        {
            item1: 'air',
            item2: 'cloud',
            result: {
                name: 'sky',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/sky.png',
                alt: 'sky',
                category: 'natural elements',
                subcategory: 'air',
                srcOfMixedEl1: 'icons/air.png',
                srcOfMixedEl2: 'icons/cloud.png'
            }
        },
        {
            item1: 'fire',
            item2: 'sand',
            result: {
                name: 'glass',
                title: 'Icon by smalllikeart - Flaticon',
                src: 'icons/glass.png',
                alt: 'glass',
                category: 'natural elements',
                subcategory: 'fire',
                srcOfMixedEl1: 'icons/fire.png',
                srcOfMixedEl2: 'icons/sand.png'
            }
        },
        {
            item1: 'fire',
            item2: 'stone',
            result: {
                name: 'metal',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/metal.png',
                alt: 'metal',
                category: 'natural elements',
                subcategory: 'fire',
                srcOfMixedEl1: 'icons/fire.png',
                srcOfMixedEl2: 'icons/stone.png'
            }
        },
        {
            item1: 'fire',
            item2: 'clay',
            result: {
                name: 'brick',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/brick.png',
                alt: 'brick',
                category: 'natural elements',
                subcategory: 'fire',
                srcOfMixedEl1: 'icons/fire.png',
                srcOfMixedEl2: 'icons/clay.png'
            }
        },
        {
            item1: 'water',
            item2: 'energy',
            result: {
                name: 'life',
                title: 'Icon by Smashicons - Flaticon',
                src: 'icons/life.png',
                alt: 'life',
                category: 'living organisms',
                subcategory: 'foundations of life',
                srcOfMixedEl1: 'icons/water.png',
                srcOfMixedEl2: 'icons/energy.png'
            }
        },
        {
            item1: 'earth',
            item2: 'life',
            result: {
                name: 'plant',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/plant.png',
                alt: 'plant',
                category: 'living organisms',
                subcategory: 'foundations of life',
                srcOfMixedEl1: 'icons/earth.png',
                srcOfMixedEl2: 'icons/life.png'
            }
        },
        {
            item1: 'plant',
            item2: 'time',
            result: {
                name: 'tree',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/tree.png',
                alt: 'tree',
                category: 'living organisms',
                subcategory: 'development of life',
                srcOfMixedEl1: 'icons/plant.png',
                srcOfMixedEl2: 'icons/time.png'
            }
        },
        {
            item1: 'tree',
            item2: 'tree',
            result: {
                name: 'forest',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/forest.png',
                alt: 'forest',
                category: 'living organisms',
                subcategory: 'development of life',
                srcOfMixedEl1: 'icons/tree.png',
                srcOfMixedEl2: 'icons/tree.png'
            }
        },
        {
            item1: 'life',
            item2: 'forest',
            result: {
                name: 'beast',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/beast.png',
                alt: 'beast',
                category: 'living organisms',
                subcategory: 'development of life',
                srcOfMixedEl1: 'icons/life.png',
                srcOfMixedEl2: 'icons/forest.png'
            }
        },
        {
            item1: 'beast',
            item2: 'tree',
            result: {
                name: 'monkey',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/monkey.png',
                alt: 'monkey',
                category: 'living organisms',
                subcategory: 'development of life',
                srcOfMixedEl1: 'icons/beast.png',
                srcOfMixedEl2: 'icons/tree.png'
            }
        },
        {
            item1: 'monkey',
            item2: 'time',
            result: {
                name: 'human',
                title: 'Icon by Boris farias - Flaticon',
                src: 'icons/human.png',
                alt: 'human',
                category: 'living organisms',
                subcategory: 'development of life',
                srcOfMixedEl1: 'icons/monkey.png',
                srcOfMixedEl2: 'icons/time.png'
            }
        },
        {
            item1: 'human',
            item2: 'plant',
            result: {
                name: 'farmer',
                title: 'Icon by max.icons - Flaticon',
                src: 'icons/farmer.png',
                alt: 'farmer',
                category: 'human activities',
                subcategory: 'professions',
                srcOfMixedEl1: 'icons/human.png',
                srcOfMixedEl2: 'icons/plant.png'
            }
        },
        {
            item1: 'human',
            item2: 'brick',
            result: {
                name: 'builder',
                title: 'Icon by Eucalyp - Flaticon',
                src: 'icons/builder.png',
                alt: 'builder',
                category: 'human activities',
                subcategory: 'professions',
                srcOfMixedEl1: 'icons/human.png',
                srcOfMixedEl2: 'icons/brick.png'
            }
        },
        {
            item1: 'builder',
            item2: 'brick',
            result: {
                name: 'building',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/building.png',
                alt: 'building',
                category: 'human activities',
                subcategory: 'products of activity',
                srcOfMixedEl1: 'icons/builder.png',
                srcOfMixedEl2: 'icons/brick.png'
            }
        },
        {
            item1: 'farmer',
            item2: 'beast',
            result: {
                name: 'livestock',
                title: 'Icon by Eucalyp - Flaticon',
                src: 'icons/livestock.png',
                alt: 'livestock',
                category: 'human activities',
                subcategory: 'products of activity',
                srcOfMixedEl1: 'icons/farmer.png',
                srcOfMixedEl2: 'icons/beast.png'
            }
        },
        {
            item1: 'farmer',
            item2: 'livestock',
            result: {
                name: 'milk',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/milk.png',
                alt: 'milk',
                category: 'human activities',
                subcategory: 'products of activity',
                srcOfMixedEl1: 'icons/farmer.png',
                srcOfMixedEl2: 'icons/livestock.png'
            }
        },
        {
            item1: 'milk',
            item2: 'time',
            result: {
                name: 'cheese',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/cheese.png',
                alt: 'cheese',
                category: 'human activities',
                subcategory: 'products of activity',
                srcOfMixedEl1: 'icons/milk.png',
                srcOfMixedEl2: 'icons/time.png'
            }
        },
        {
            item1: 'cloud',
            item2: 'energy',
            result: {
                name: 'lightning',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/lightning.png',
                alt: 'lightning',
                category: 'natural phenomena and abstractions',
                subcategory: 'phenomena',
                srcOfMixedEl1: 'icons/cloud.png',
                srcOfMixedEl2: 'icons/energy.png'
            }
        },
        {
            item1: 'cloud',
            item2: 'earth',
            result: {
                name: 'fog',
                title: 'Icon by photo3idea_studio - Flaticon',
                src: 'icons/fog.png',
                alt: 'fog',
                category: 'natural phenomena and abstractions',
                subcategory: 'phenomena',
                srcOfMixedEl1: 'icons/cloud.png',
                srcOfMixedEl2: 'icons/earth.png'
            }
        },
        {
            item1: 'cloud',
            item2: 'ice',
            result: {
                name: 'hail',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/hail.png',
                alt: 'hail',
                category: 'natural phenomena and abstractions',
                subcategory: 'phenomena',
                srcOfMixedEl1: 'icons/cloud.png',
                srcOfMixedEl2: 'icons/ice.png'
            }
        },
        {
            item1: 'sand',
            item2: 'glass',
            result: {
                name: 'time',
                title: 'Icon by ultimatearm - Flaticon',
                src: 'icons/time.png',
                alt: 'time',
                category: 'natural phenomena and abstractions',
                subcategory: 'abstractions',
                srcOfMixedEl1: 'icons/sand.png',
                srcOfMixedEl2: 'icons/glass.png'
            }
        },
        {
            item1: 'sky',
            item2: 'fire',
            result: {
                name: 'sun',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/sun.png',
                alt: 'sun',
                category: 'natural phenomena and abstractions',
                subcategory: 'abstractions',
                srcOfMixedEl1: 'icons/sky.png',
                srcOfMixedEl2: 'icons/fire.png'
            }
        },
        {
            item1: 'sky',
            item2: 'cheese',
            result: {
                name: 'moon',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/moon.png',
                alt: 'moon',
                category: 'natural phenomena and abstractions',
                subcategory: 'abstractions',
                srcOfMixedEl1: 'icons/sky.png',
                srcOfMixedEl2: 'icons/cheese.png'
            }
        },
    ];

    let createdItems = [];
    // Total possible elements for each subcategory
    const totalElementsPerSubcategory = {
        'water': 6,
        'earth': 5,
        'air': 5,
        'fire': 3,
        'foundations of life': 2,
        'development of life': 5,
        'professions': 2,
        'products of activity': 4,
        'phenomena': 3,
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
            if (item.category || item.subcategory) return item;
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
        createdItems.push(newItem);

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
        createdItems = [];
        setTimeout(() => mixingAreaEl.forEach(mixingArea => mixingArea.textContent = ''), 100);
        calculateProgress();
        render();
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
        if (!createdItems[recipe.subcategory]) {
            createdItems[recipe.subcategory] = 0;
        }
        createdItems[recipe.subcategory]++;

        // Find or create the count display next to the subcategory title
        let countDisplay = subCategorySection.querySelector('.count-display');
        if (!countDisplay) {
            countDisplay = document.createElement('span');
            countDisplay.classList.add('count-display');
            subCategorySection.querySelector('.subcategory-title').appendChild(countDisplay);
        }

        // Update the count display
        countDisplay.textContent = ` (${createdItems[recipe.subcategory]}/${totalElementsPerSubcategory[recipe.subcategory]})`;

        // Append the new recipe element to the subcategory section
        subCategorySection.appendChild(recipeEl);
    }

    // Event handlers
    recipeBookButton.addEventListener('click', toggleRecipeBook);
    closeRecipeBook.addEventListener('click', toggleRecipeBook);
    resetBtn.addEventListener('click', resetGame);

    // Game initialization
    render();
    calculateProgress();

    // Functions for event handlers
    // Toggle visibility of the recipe book
    function toggleRecipeBook() {
        recipeBookEl.classList.toggle('show');
        recipeBookEl.classList.toggle('hidden');
    }

    function resetGame() {
        gameItems.splice(NUMBER_START_ELEMENTS);
        recipeWrapper.textContent = '';
        localStorage.clear();
        clearMixingArea();
    }
});