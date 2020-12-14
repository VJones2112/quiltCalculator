const quiltContainer = document.querySelector('.quiltContainer');

let fabricSubmit = document.querySelector('.fabricSize__submit');
let blockSubmit = document.querySelector('.blockSize__submit');
// let blockType = document.querySelector('.blockTypes'); 

// Function to get FABRIC DIMENSIONS
const getFabricDimensions = () => {
    let fabricLength = document.getElementById('fabricSize__length');
    let fabricWidth = document.getElementById('fabricSize__width');
    console.log(fabricLength.value, fabricWidth.value);
}
// Function to get BLOCK TYPE
const getBlockType = () => {
    let blockType = document.querySelector('.blockTypes'); 
    console.log(blockType.options[blockType.selectedIndex].value);
}
// Function to get BLOCK DIMENSIONS
const getBlockDimensions = () => {
    const blockLength = document.querySelector('.blockDimensions__length');
    const blockWidth = document.querySelector('.blockDimensions__width');
    // console.log(blockLength.value, blockWidth.value);
    return blockLength.value, blockWidth.value;
}
// Function to get SEAM ALLOWANCE
const getSeamAllowance = () => {
    let seamAllowance = document.querySelector('.seamAllowances'); 
    console.log(seamAllowance.options[seamAllowance.selectedIndex].value);
}



// Function to display fabric with dimensions listed
const displayUserFabric = (el) => {
    quiltContainer.innerHTML = '';
    let fabricLength = document.getElementById('fabricSize__length');
    let fabricWidth = document.getElementById('fabricSize__width');
    console.log(fabricLength.value, fabricWidth.value);

    for (let i = 0; i < fabricLength.value; i += 1) {
        let rowLength = document.createElement('div');
        rowLength.className = 'rowLength';
        rowLength.id = 'row' + i;

        for (let j = 0; j < fabricWidth.value; j += 1) {
            let rowWidth = document.createElement('div');
            rowWidth.className = 'rowWidth';
            rowLength.appendChild('rowWidth');
        };
        quiltContainer.appendChild(rowLength);
    }

    el.appendChild(quiltContainer);





    /*quiltContainer.style.gridTemplateRows = `repeat(${fabricLength.value}, 1fr)`;
    quiltContainer.style.gridTemplateColumns = `repeat(${fabricWidth.value}, 1fr)`;
    */
    /*for (let i = 1; i <= fabricLength.value; i++) {
        let div = document.createElement('div');
        div.className = `quilt-cells`;
        for (let j = 1; j <= fabricWidth.value; j++) {
            // let div = document.createElement('div');
            // div.className = `quilt-cells`;
            quiltContainer.appendChild(div);
        }
    }*/


}





// Event Listeners
fabricSubmit.addEventListener('click', displayUserFabric);
document.querySelector('.blockType').addEventListener('change', getBlockType);
blockSubmit.addEventListener('click', getBlockDimensions);
document.querySelector('.seamAllowances').addEventListener('change', getSeamAllowance);