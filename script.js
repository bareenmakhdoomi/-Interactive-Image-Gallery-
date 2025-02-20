$(document).ready(function () {
    const gallery = $(".gallery");
    const imagesPerLoad = 10;
    let loadedImages = 0;

    // Image Data (Assigning images to categories)
    const images = [
        { src: "images/flower1.webp", category: "nature" },
        { src: "images/flower2.webp", category: "nature" },
        { src: "images/flower3.webp", category: "animated" },
        { src: "images/flower4.webp", category: "nature" },
        { src: "images/flower5.webp", category: "nature" },
        { src: "images/flower6.webp", category: "nature" },
        { src: "images/flower7.webp", category: "nature" },
        { src: "images/flower8.webp", category: "animated" },
        { src: "images/flower9.webp", category: "nature" },
        { src: "images/flower10.webp", category: "nature" },
        { src: "images/flower11.webp", category: "nature" },
        { src: "images/flower12.webp", category: "animated" },
        { src: "images/flower13.webp", category: "nature" },
        { src: "images/flower14.webp", category: "animated" },
        { src: "images/flower15.webp", category: "nature" },
        { src: "images/flower16.webp", category: "nature" },
        { src: "images/flower17.webp", category: "animated" },
        { src: "images/flower18.webp", category: "nature" },
        { src: "images/flower19.webp", category: "nature" },
        { src: "images/flower20.webp", category: "nature" },
        { src: "images/flower21.webp", category: "nature" },
        { src: "images/flower22.webp", category: "animated" },
        { src: "images/flower23.webp", category: "animated" },
        { src: "images/flower24.webp", category: "nature" },
        { src: "images/flower25.webp", category: "nature" },
    ];

    function loadImages() {
        for (let i = loadedImages; i < loadedImages + imagesPerLoad && i < images.length; i++) {
            let imgElement = `<img src="${images[i].src}" class="gallery-item" data-category="${images[i].category}">`;
            gallery.append(imgElement);
        }
        loadedImages += imagesPerLoad;
    }
    
    loadImages();

    // Filter Functionality
    $(".filter-btn").click(function () {
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");
        let filter = $(this).data("filter");

        $(".gallery img").each(function () {
            if (filter === "all" || $(this).data("category") === filter) {
                $(this).fadeIn();
            } else {
                $(this).fadeOut();
            }
        });
    });

    // Load More Button
    $("#loadMore").click(function () {
        loadImages();
        if (loadedImages >= images.length) {
            $(this).hide();
        }
    });

    // Lightbox Functionality
    let currentIndex = 0;
    $(document).on("click", ".gallery img", function () {
        $(".lightbox").fadeIn();
        $(".lightbox-image").attr("src", $(this).attr("src"));
        currentIndex = $(".gallery img").index(this);
    });

    $(".close").click(function () {
        $(".lightbox").fadeOut();
    });

    $(".prev").click(function () {
        if (currentIndex > 0) {
            currentIndex--;
            $(".lightbox-image").attr("src", $(".gallery img").eq(currentIndex).attr("src"));
        }
    });

    $(".next").click(function () {
        if (currentIndex < $(".gallery img").length - 1) {
            currentIndex++;
            $(".lightbox-image").attr("src", $(".gallery img").eq(currentIndex).attr("src"));
        }
    });
});
