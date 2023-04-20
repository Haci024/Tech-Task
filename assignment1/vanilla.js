function changeCategory(category) {
    var imageElement = document.getElementById("#myImage");
    
    switch (category) {
        case 1:
            imageElement.style.backgroundImage = "url('./images/layer-28@2x.png')"; 
            break;
        case 2:
            imageElement.style.backgroundImage = "url('./images/layer-27@2x.png')"; 
            break;
        case 3:
            imageElement.style.backgroundImage = "url('./images/layer-26@2x.png')"; 
            break;
    
            case 4:
                imageElement.style.backgroundImage = "url('./images/layer-24@2x.png')"; 
                break; 
                case 5:
                    imageElement.style.backgroundImage = "url('./images/layer-25@2x.png')"; 
                    break; 
                    case 6:
                        imageElement.style.backgroundImage = "url('./images/layer-29@2x.png')"; 
                        break; 
                       default:
            break;   
    }
}