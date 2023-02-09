function configureListeners() {
    // select img elements  
    let images = document.getElementsByTagName('img');


     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners      
        images[i].addEventListener('mouseover', addOpacity);
        images[i].addEventListener('mouseout', removeOpacity);
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    this.className = "dim";
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     this.className = "";

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price     
            price = '$10.00'
            colorName = 'Lime Green'
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price    
            price = '$11.00'
            colorName = 'Medium Brown'
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            price = '$12.00'
            colorName = 'Royal Blue'
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            price = '$13.00'
            colorName = 'Solid Red'
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price       
            price = '$14.00'
            colorName = 'Solid White'
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price        
            price = '$15.00'
            colorName = 'Solid Black'
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            price = '$16.00'
            colorName = 'Solid Cyan'
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price   
            price = '$18.00'
            colorName = 'Solid Purple'
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = '$19.00'
            colorName = 'Solid Yellow'
            break;   
        default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.querySelector('#color-price')
        // display price
        colorPrice.textContent = price;
        
        let color = document.querySelector('#color-name')
        //display color name
        color.textContent = colorName;
    }
    
    updatePrice(colorName, price);
}
