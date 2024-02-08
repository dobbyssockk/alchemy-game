'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const NUMBER_START_ELEMENTS = 4;

    const clickSound = new Audio('click.mp3');

    const gameItems = [
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

    const gameItemsContainerEl = document.querySelector('.game__items');

    function render() {
        gameItemsContainerEl.innerHTML = '';

        gameItems.forEach(item => {
            const gameItemEl = document.createElement('div');
            gameItemEl.classList.add('game__item');
            gameItemEl.setAttribute('title', item.title);

            const gameItemImg = document.createElement('img');
            gameItemImg.src = item.src;
            gameItemImg.alt = item.alt;

            gameItemEl.append(gameItemImg);

            const gameItemCaption = document.createElement('div');
            gameItemCaption.classList.add('game__item-caption');
            gameItemCaption.textContent = `${item.name[0].toUpperCase()}${item.name.slice(1)}`;

            gameItemEl.append(gameItemCaption);

            gameItemsContainerEl.append(gameItemEl);
        })

        const gameItemEl = document.querySelectorAll('.game__item');

        gameItemEl.forEach(itemEl => {
            itemEl.addEventListener('click', () => {
                if (selectedItems.length === 2) {
                    console.log('enough');
                    return;
                }
                if (itemEl === selectedItems[0] || itemEl === selectedItems[1]) {
                    console.log('exist');
                    return;
                }

                gameItems.forEach(gameItem => {
                    clickSound.play();
                    if (itemEl.querySelector('img').alt === gameItem.alt) {
                        selectedItems.push(gameItem);
                        if (selectedItems.length === 1) {
                            const mixingImgEl = document.createElement('img');
                            mixingImgEl.src = gameItem.src;
                            mixingImgEl.alt = gameItem.alt;

                            mixingAreaEl[0].append(mixingImgEl);
                        } else {
                            const mixingImgEl = document.createElement('img');
                            mixingImgEl.src = gameItem.src;
                            mixingImgEl.alt = gameItem.alt;

                            mixingAreaEl[1].append(mixingImgEl);
                            mixingElements(selectedItems[0], selectedItems[1]);
                        }
                    }
                })
            })
        })
    }
    render();

    const mixingAreaEl = document.querySelectorAll('.game__mixing-area');

    let selectedItems = [];

    const mixingCombinations = [
        {
            item1: 'water',
            item2: 'fire',
            result: {
                name: 'steam',
                title: 'Icon by Vitaly Gorbachev - Flaticon',
                src: 'icons/steam.png',
                alt: 'steam',
                srcOfMixedEl1: 'icons/water.png',
                srcOfMixedEl2: 'icons/fire.png'
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
                srcOfMixedEl1: 'icons/earth.png',
                srcOfMixedEl2: 'icons/air.png'
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
                srcOfMixedEl1: 'icons/water.png',
                srcOfMixedEl2: 'icons/earth.png'
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
                srcOfMixedEl1: 'icons/air.png',
                srcOfMixedEl2: 'icons/fire.png'
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
                srcOfMixedEl1: 'icons/earth.png',
                srcOfMixedEl2: 'icons/life.png'
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
                srcOfMixedEl1: 'icons/air.png',
                srcOfMixedEl2: 'icons/water.png'
            }
        },
        {
            item1: 'energy',
            item2: 'air',
            result: {
                name: 'lightning',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/lightning.png',
                alt: 'lightning',
                srcOfMixedEl1: 'icons/energy.png',
                srcOfMixedEl2: 'icons/air.png'
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
                srcOfMixedEl1: 'icons/lava.png',
                srcOfMixedEl2: 'icons/water.png'
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
                srcOfMixedEl1: 'icons/stone.png',
                srcOfMixedEl2: 'icons/water.png'
            }
        },
        {
            item1: 'sand',
            item2: 'fire',
            result: {
                name: 'glass',
                title: 'Icon by smalllikeart - Flaticon',
                src: 'icons/glass.png',
                alt: 'glass',
                srcOfMixedEl1: 'icons/sand.png',
                srcOfMixedEl2: 'icons/fire.png'
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
                srcOfMixedEl1: 'icons/fire.png',
                srcOfMixedEl2: 'icons/stone.png'
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
                srcOfMixedEl1: 'icons/mud.png',
                srcOfMixedEl2: 'icons/sand.png'
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
                srcOfMixedEl1: 'icons/water.png',
                srcOfMixedEl2: 'icons/frost.png'
            }
        },
        {
            item1: 'clay',
            item2: 'fire',
            result: {
                name: 'brick',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/brick.png',
                alt: 'brick',
                srcOfMixedEl1: 'icons/clay.png',
                srcOfMixedEl2: 'icons/fire.png'
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
                srcOfMixedEl1: 'icons/air.png',
                srcOfMixedEl2: 'icons/steam.png'
            }
        },
        {
            item1: 'energy',
            item2: 'cloud',
            result: {
                name: 'storm',
                title: 'Icon by max.icons - Flaticon',
                src: 'icons/storm.png',
                alt: 'storm',
                srcOfMixedEl1: 'icons/energy.png',
                srcOfMixedEl2: 'icons/cloud.png'
            }
        },
        {
            item1: 'earth',
            item2: 'cloud',
            result: {
                name: 'fog',
                title: 'Icon by photo3idea_studio - Flaticon',
                src: 'icons/fog.png',
                alt: 'fog',
                srcOfMixedEl1: 'icons/earth.png',
                srcOfMixedEl2: 'icons/cloud.png'
            }
        },
        {
            item1: 'ice',
            item2: 'cloud',
            result: {
                name: 'hail',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/hail.png',
                alt: 'hail',
                srcOfMixedEl1: 'icons/ice.png',
                srcOfMixedEl2: 'icons/cloud.png'
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
                srcOfMixedEl1: 'icons/air.png',
                srcOfMixedEl2: 'icons/cloud.png'
            }
        },
        {
            item1: 'fire',
            item2: 'sky',
            result: {
                name: 'sun',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/sun.png',
                alt: 'sun',
                srcOfMixedEl1: 'icons/fire.png',
                srcOfMixedEl2: 'icons/sky.png'
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
                srcOfMixedEl1: 'icons/ice.png',
                srcOfMixedEl2: 'icons/sun.png'
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
                srcOfMixedEl1: 'icons/sand.png',
                srcOfMixedEl2: 'icons/glass.png'
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
                srcOfMixedEl1: 'icons/human.png',
                srcOfMixedEl2: 'icons/plant.png'
            }
        },
        {
            item1: 'beast',
            item2: 'farmer',
            result: {
                name: 'livestock',
                title: 'Icon by Eucalyp - Flaticon',
                src: 'icons/livestock.png',
                alt: 'livestock',
                srcOfMixedEl1: 'icons/beast.png',
                srcOfMixedEl2: 'icons/farmer.png'
            }
        },
        {
            item1: 'livestock',
            item2: 'farmer',
            result: {
                name: 'milk',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/milk.png',
                alt: 'milk',
                srcOfMixedEl1: 'icons/livestock.png',
                srcOfMixedEl2: 'icons/farmer.png'
            }
        },
        {
            item1: 'time',
            item2: 'milk',
            result: {
                name: 'cheese',
                title: 'Icon by Freepik - Flaticon',
                src: 'icons/cheese.png',
                alt: 'cheese',
                srcOfMixedEl1: 'icons/time.png',
                srcOfMixedEl2: 'icons/milk.png'
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
                srcOfMixedEl1: 'icons/sky.png',
                srcOfMixedEl2: 'icons/cheese.png'
            }
        }
    ];

    const NUMBER_UNIQUE_ELEMENTS = mixingCombinations.length;

    function mixingElements(selectedItem1, selectedItem2) {
        let isSuccessful = false;

        mixingCombinations.forEach((mixingCombination, i) => {
            if (
                (selectedItem1.name === mixingCombination.item1 && selectedItem2.name === mixingCombination.item2) ||
                (selectedItem1.name === mixingCombination.item2 && selectedItem2.name === mixingCombination.item1)
            ) {
                successfulMixing(mixingCombination.result, i);
                isSuccessful = true;
                return;
            }
        });

        if (!isSuccessful) {
            unsuccessfulMixing();
        }
    }

    function successfulMixing(newItem, i) {
        gameItems.push(newItem);
        mixingCombinations.splice(i, 1);
        selectedItems = [];
        setTimeout(() => {
            mixingAreaEl.forEach(mixingArea => {
                mixingArea.innerHTML = '';
            })
        }, 200);
        render();
        addingToRecipeBook(newItem);
        calculateProgress();
    }

    function unsuccessfulMixing() {
        mixingAreaEl.forEach(mixingArea => {
            mixingArea.classList.add('shake');
            setTimeout(() => {
                selectedItems = [];
                mixingArea.innerHTML = '';
                mixingArea.classList.remove('shake');
            }, 300);
        })
    }

    const recipesList = document.getElementById('recipes-list');

    function addingToRecipeBook(recipe) {
        const recipeEl = document.createElement('div');
        recipeEl.classList.add('recipe');

        recipeEl.innerHTML = `
            <img src="${recipe.srcOfMixedEl1}" alt="" class="recipe-icon">
            <div class="game__mixing-symbol">+</div>
            <img src="${recipe.srcOfMixedEl2}" alt="" class="recipe-icon">
            <div class="game__mixing-symbol">=</div>
            <img src="${recipe.src}" alt="" class="recipe-icon">
        `;

        recipesList.append(recipeEl);
    }

    const recipeBookButton = document.getElementById('recipe-book-button');
    const recipeBookEl = document.getElementById('recipe-book');
    const closeRecipeBook = document.getElementById('close-recipe-book');

    recipeBookButton.addEventListener('click', () => {
        recipeBookEl.classList.add('show');
        recipeBookEl.classList.remove('hidden');
    });

    closeRecipeBook.addEventListener('click', () => {
        recipeBookEl.classList.remove('show');
        recipeBookEl.classList.add('hidden');
    });

    const progressEl = document.querySelector('.progress');

    function calculateProgress() {
        const progress = Math.ceil(((gameItems.length - NUMBER_START_ELEMENTS) / NUMBER_UNIQUE_ELEMENTS) * 100);
        progressEl.style.width = `${progress}%`;
    }
})