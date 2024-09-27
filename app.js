const textAndArrowHeaderElements = document.querySelectorAll('.text-and-arrow-header');
const arrowHeaderEl = document.querySelector('.arrow');
const imagesContainerEl = document.querySelector('.images-container');
const mediaFilterDropdownContainer = document.querySelector('.media-filter-dropdown-container');
const allDivsInmediaFilterDropdownContainer = document.querySelectorAll('.media-filter-dropdown-container div');

textAndArrowHeaderElements.forEach((el) => {
    el.addEventListener('mouseover', () => {
        el.querySelector('.arrow').style.borderColor = '#02a388';
        el.querySelector('.arrow').style.transform = 'rotate(225deg)';
    });

    el.addEventListener('mouseout', () => {
        el.querySelector('.arrow').style.borderColor = 'white';
        el.querySelector('.arrow').style.transform = 'rotate(45deg)';
    });
})

imagesContainerEl.addEventListener('click', () => {
    mediaFilterDropdownContainer.style.display = 'block';
    imagesContainerEl.querySelector('.arrow').style.transform = 'rotate(225deg)';
});

mediaFilterDropdownContainer.addEventListener('mouseover', () => {
    mediaFilterDropdownContainer.style.display = 'block';
    imagesContainerEl.querySelector('.arrow').style.transform = 'rotate(225deg)';
})

mediaFilterDropdownContainer.addEventListener('mouseout', () => {
    mediaFilterDropdownContainer.style.display = 'none';
    imagesContainerEl.querySelector('.arrow').style.transform = 'rotate(45deg)';
});


allDivsInmediaFilterDropdownContainer.forEach((el) => {
    el.addEventListener('mouseover', () => {
        el.querySelector('.highlight-green').style.color = '#02a388';
        el.style.borderColor = 'rgba(0, 0, 0, 0.1)';
    });
    el.addEventListener('mouseout', () => {
        el.querySelector('.highlight-green').style.color = 'black';
        el.style.borderColor = 'white';
    })
})