let slide_index = 1;
SLidershow(slide_index);

function Slide_mover(n){
    SLidershow(slide_index += n);
}

function Current_slide(n){
    SLidershow(slide_index = n);
}

function SLidershow(n){
    let i;
    const slide = document.getElementsByClassName("slide_image");
    const dot = document.getElementsByClassName("dot");

    if (n > slide.length) {slide_index = 1}
    if (n < 1) {slide_index = slide.length}

    for(i=0; i < slide.length; i++){
        slide[i].style.display = "none";
    }

    for(i=0; i < dot.length; i++){
        dot[i].className = dot[i].className.replace(" active", "");
    }
    
    slide[slide_index-1].style.display = "block";
    dot[slide_index-1].className += " active";
}