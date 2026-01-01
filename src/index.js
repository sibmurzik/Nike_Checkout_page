import './styles.css'


window.onload = function () {
    let notAvailableSizes = ['EU 33.5', 'EU 34', 'EU 34.5', 'EU 36.5', 'EU 37.5', 'EU 38.5', 'EU 39.5'];
    let selectedSize = null;

    const sizesTable = document.getElementById('sizes_table').children;

    for (let size of sizesTable) {
        if (notAvailableSizes.includes(size.textContent)) {
            size.classList.add("text-pale_border");
            size.classList.add("bg-neutral-100");
            size.classList.add("pointer-events-none");
        }else {
            size.addEventListener( "click", function(event) {
                let target = event.target;
                if(selectedSize == null) {
                    selectedSize = target;
                    target.classList.toggle("bg-amber-100");
                    return;
                }
                if (target === selectedSize) {
                    target.classList.toggle("bg-white");
                } else {
                    target.classList.toggle("bg-amber-100");
                    selectedSize.classList.toggle("bg-white");
                    selectedSize = target;
                }


            })
        }

    }




};

