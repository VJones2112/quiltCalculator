const quiltContainer = document.querySelector('.quiltContainer');

let fabricSubmit = document.querySelector('.fabricSize__submit');
let blockSubmit = document.querySelector('.blockSize__submit');
// let blockType = document.querySelector('.blockTypes'); 

// Function to get fabric dimensions
const getFabricDimensions = () => {
    let fabricLength = document.getElementById('fabricSize__length');
let fabricWidth = document.getElementById('fabricSize__width');
    console.log(fabricLength.value, fabricWidth.value);
}

const getBlockType = () => {
    let blockType = document.querySelector('.blockTypes'); 
    console.log(blockType.options[blockType.selectedIndex].value);
}

const getBlockDimensions = () => {
    const blockLength = document.querySelector('.blockDimensions__length');
    const blockWidth = document.querySelector('.blockDimensions__width');
    console.log(blockLength.value, blockWidth.value);
}

const getSeamAllowance = () => {
    let seamAllowance = document.querySelector('.seamAllowances'); 
    console.log(seamAllowance.options[seamAllowance.selectedIndex].value);
}


fabricSubmit.addEventListener('click', getFabricDimensions);
document.querySelector('.blockType').addEventListener('change', getBlockType);
blockSubmit.addEventListener('click', getBlockDimensions);
document.querySelector('.seamAllowances').addEventListener('change', getSeamAllowance);

// Function to display fabric with dimensions listed