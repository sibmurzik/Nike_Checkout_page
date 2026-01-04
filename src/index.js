import './styles.css'


window.onload = function () {
    let notAvailableSizes = ['EU 33.5', 'EU 34', 'EU 34.5', 'EU 36.5', 'EU 37.5', 'EU 38.5', 'EU 39.5'];
    let selectedSize = null;
    const mobileMenu = document.getElementById('mobile_menu');
    const favoriteIcon = document.getElementById('favorite_icon');
    const favoriteInHeader = document.getElementById('favorite_in_header');
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
                    target.classList.remove("bg-white");
                    target.classList.add("bg-amber-100");
                    return;
                }
                if (target === selectedSize) {
                    if(target.classList.contains("bg-white")) {
                        target.classList.remove("bg-white");
                        target.classList.add("bg-amber-100");

                    } else {
                        target.classList.remove("bg-amber-100");
                        target.classList.add("bg-white");
                    }
                } else {
                    target.classList.remove("bg-white");
                    target.classList.add("bg-amber-100");
                    selectedSize.classList.remove("bg-amber-100");
                    selectedSize.classList.add("bg-white");
                    selectedSize = target;
                }


            })
        }

    }

    document.getElementById('open_menu').addEventListener('click', function(event) {
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("flex");

    })

    document.getElementById('close_menu').addEventListener('click', function(event) {
        mobileMenu.classList.remove("flex");
        mobileMenu.classList.add("hidden");
    })

    document.getElementById('add_to_favorite').addEventListener('click', function(event) {
        if (favoriteIcon.classList.contains("fill-none")) {
            favoriteIcon.classList.remove("fill-none");
            favoriteIcon.classList.add("fill-black");
            favoriteInHeader.classList.remove("fill-none");
            favoriteInHeader.classList.add("fill-black");
        }

        else {
            favoriteIcon.classList.remove("fill-black");
            favoriteIcon.classList.add("fill-none");
            favoriteInHeader.classList.remove("fill-black");
            favoriteInHeader.classList.add("fill-none");
        }

    })







};

