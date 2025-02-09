/////////////////////////////////////  INITIALISATION ////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// GET ELEMENTS

let pageContainer = document.getElementById("container");
let cnvDiv = document.getElementById("canvasDiv");
let bgCanv = document.getElementById("canvas");
let sidebar = document.getElementById("sidebar");
let headerLogo = document.getElementById("header-logo");
let hdrLogoSym = document.getElementById("header-logo-symbol");
let hdrLogoCnv = document.getElementById("header-logo-canvas");
let body = document.getElementById("body-content");
let bio = document.getElementById("body-content-bio");
let bioText = document.getElementById("bio-text");
let bioTitleBox = document.getElementById("bio-title");
let bioTitle1 = document.getElementById("bio-title-1");
let bioTitle2 = document.getElementById("bio-title-2");
let bioTitle3 = document.getElementById("bio-title-3");
let bodyCopy = document.getElementById("body-copy-cont");
let reelLink = document.getElementById("nav-reel-link");
let bioLink = document.getElementById("nav-bio-link");
let navMobCheck = document.getElementById("nav-mob-check");
let navLinksMobile = document.getElementById("nav-links-mobile");
let reelLinkMob = document.getElementById("nav-reel-link-mobile");
let bioLinkMob = document.getElementById("nav-bio-link-mobile");
let aSound = document.querySelector('#a-sound');
let aNoise = document.querySelector('#a-noise');
let aSpace = document.querySelector('#a-space');
let vidSplash = document.getElementById("video-splash");
let vidPlayer = document.getElementById("video-player");
let linkedVid = document.getElementById("linked-video");
let filterBtn = document.getElementById("reel-filter");
let filterIcon = document.getElementById("filter-icon");
let filterClose = document.getElementById("close-icon");
let filterMenu = document.getElementById("filter-menu");
let filters = document.getElementById("filters");
let sortArrows = document.querySelectorAll('.sort-arrow');
let filterCheckboxes;
let bioNoise = false;


/// SET VARIABLES

let selected = "reel"
let filterCats = [];
let formatCats = [];
let catArray = [];
let formatArray = [];
let sortByDate = "des";
let filterOpen = false;
let count = 0;

/////////////////////////////////////  PAGE SETUP ////////////////////////////////////////////////////////////////////////////////////////////////////////////


/// Set dimensions
let maxWidth = window.innerWidth;
let maxHeight = window.innerHeight;

pageContainer.setAttribute("style", `width: ${window.innerWidth}px;`);
pageContainer.setAttribute("style", `height: ${window.innerHeight}px;`);

window.addEventListener("resize", () => {
    pageContainer.setAttribute("style", `width: ${window.innerWidth}px;`);
    pageContainer.setAttribute("style", `height: ${window.innerHeight}px;`);

    if (window.innerWidth > 900) {
        cnvDiv.setAttribute("style", `display: block; width: calc(6rem + ${bioText.offsetWidth}px); height: ${bioText.offsetHeight}px;`);
    } else {
        cnvDiv.setAttribute("style", `display: block; width: ${pageContainer.offsetWidth}px); height: ${pageContainer.offsetHeight}px;`);
    }

    bgCanv.setAttribute("style", `width: ${cnvDiv.offsetWidth}px; height: ${cnvDiv.offsetHeight}px;`);
    bgCanv.width = cnvDiv.offsetWidth;
    bgCanv.height = cnvDiv.offsetHeight;

    if (bioNoise) {
        cnvDiv.style.opacity = 0.3;
    };

    if (window.innerWidth < 900) {
        hdrLogoSym.style.top = "1.5rem";
        hdrLogoSym.style.left = "12rem";
        hdrLogoSym.style.height = "4rem";
        hdrLogoSym.style.width = "4rem";
        hdrLogoCnv.setAttribute("style", `width: ${hdrLogoSym.offsetWidth}px; height: ${hdrLogoSym.offsetHeight}px;`);
        hdrLogoCnv.width = hdrLogoSym.offsetWidth;
        hdrLogoCnv.height = hdrLogoSym.offsetHeight;
    } else {

        hdrLogoSym.style.top = "0.2rem";
        hdrLogoSym.style.left = "21rem";
        hdrLogoSym.style.height = "12rem";
        hdrLogoSym.style.width = "12rem";
        hdrLogoCnv.setAttribute("style", `width: ${hdrLogoSym.offsetWidth}px; height: ${hdrLogoSym.offsetHeight}px;`);
        hdrLogoCnv.width = hdrLogoSym.offsetWidth;
        hdrLogoCnv.height = hdrLogoSym.offsetHeight;
    }
});

/////////////////////////////////////  EVENT LISTENERS ////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// NAV MENU EVENT LISENERS
reelLink.addEventListener("click", () => {
    selected = "reel"
    reelLink.style.opacity = 1;
    bioLink.style.opacity = 0.3;
    showWork();
    cnvDiv.style.display = "none";
});

reelLink.addEventListener("mouseover", () => {
    reelLink.style.opacity = 1;
})

reelLink.addEventListener("mouseout", () => {
    if (selected != "reel") {
        reelLink.style.opacity = 0.3;
    }
});

bioLink.addEventListener("click", () => {
    selected = "bio"
    reelLink.style.opacity = 0.3;
    bioLink.style.opacity = 1;
    if (filterOpen) {
        filterIcon.style.display = "block";
        filterClose.style.display = "none";
        filterMenu.style.transform = "translateX(150%)";
        filterOpen = false;
    }
    showBio();

    delay(500).then(() => {
        bioNoise = true;
        setupBio();
        drawBio();
    });
});

bioLink.addEventListener("mouseover", () => {
    bioLink.style.opacity = 1;
});

bioLink.addEventListener("mouseout", () => {
    if (selected != "bio") {
        bioLink.style.opacity = 0.3;
    }
});


/// MOBILE NAV EVENT LISTENER

navMobCheck.addEventListener("click", () => {
    if (navMobCheck.checked) {
        navLinksMobile.style.top = "7rem";
    } else {
        navLinksMobile.style.top = "-27rem";
    }
});

reelLinkMob.addEventListener("click", () => {
    selected = "reel"
    reelLink.style.opacity = 1;
    bioLink.style.opacity = 0.6;
    // contactLink.style.opacity = 0.6;
    body.style.paddingLeft = "2.5rem";
    body.style.paddingRight = "2.5rem";
    showWork();
    cnvDiv.style.display = "none";
    navLinksMobile.style.top = "-20rem";
    navMobCheck.checked = false;
});

bioLinkMob.addEventListener("click", () => {
    selected = "bio"
    reelLink.style.opacity = 0.6;
    bioLink.style.opacity = 1;
    showBio();
    bioText.paddingTop;
    navLinksMobile.style.top = "-20rem";
    navMobCheck.checked = false;

    delay(500).then(() => {
        bioNoise = true;
        setupBio();
        drawBio();
    });
});

/// VIDEO SPLASH EVENT LISTENER

vidSplash.addEventListener("click", () => {
    vidSplash.classList.add('fade-out');
    linkedVid.classList.add('fade-out');
    delay(500).then(() => {
        vidSplash.style.display = "none";
        vidSplash.classList.remove('fade-out');
        linkedVid.classList.remove('fade-out');
    });
    linkedVid.setAttribute("src", "");
});


/// FILTER ICON ANIMATION

filterBtn.addEventListener("click", () => {

    if (!filterOpen) {
        filterIcon.style.display = "none";
        filterClose.style.display = "block";
        filterMenu.style.transform = "translateX(0%)";

        delay(10).then(() => {
            filters.style.opacity = 1;
        });


        filterOpen = true;
    } else {
        filterIcon.style.display = "block";
        filterClose.style.display = "none";
        filterMenu.style.transform = "translateX(150%)";
        filterOpen = false;
    }
});


/// SORT ARROW EVENT LISTENERS

sortArrows.forEach((sortArrow) => {
    sortArrow.addEventListener('mousedown', () => {
        sortArrows.forEach(sortArrow => sortArrow.querySelector('.svg-arrow').classList.remove('sort-arrow-checked'));
        if (!sortArrow.querySelector('.arrow-check-input').checked) {
            sortArrow.querySelector('.svg-arrow').classList.add('sort-arrow-checked');
            sortByDate = sortArrow.id.replace('sort-', '');
            filterReels(catArray, formatArray, sortByDate);

        } else {
            sortArrow.querySelector('.svg-arrow').classList.remove('sort-arrow-checked');
        }
    });
});


/// FILTER CHECKBOX EVENT LISTENERS
function addFilterEventListeners() {
    filterCheckboxes.forEach((checkbox) => {
        let cBox = checkbox.querySelector('.filter-check-input');
        let cBoxCategory = cBox.id.replace("cbx-", "");
        let svg = checkbox.querySelector(`#svg-${cBoxCategory}`);
        let path = checkbox.querySelector(`#path-${cBoxCategory}`);
        let polyline = checkbox.querySelector(`#polyline-${cBoxCategory}`);
        checkbox.addEventListener('mousedown', () => {
            let cBoxSection = cBox.dataset.section;
            if (!cBox.checked) {
                if (cBoxSection === "category") {
                    if (catArray.indexOf(cBoxCategory) === -1) {
                        catArray.push(cBoxCategory);
                        filterReels(catArray, formatArray, sortByDate);
                    }
                }
                if (cBoxSection === "format") {
                    if (formatArray.indexOf(cBoxCategory) === -1) {
                        formatArray.push(cBoxCategory);
                        filterReels(catArray, formatArray, sortByDate);
                    }
                }
            } else {
                if (cBoxSection === "category") {
                    let index = catArray.indexOf(cBoxCategory);
                    if (index > -1) {
                        catArray.splice(index, 1);
                        filterReels(catArray, formatArray, sortByDate);
                    }
                }
                if (cBoxSection === "format") {
                    let index = formatArray.indexOf(cBoxCategory);
                    if (index > -1) {
                        formatArray.splice(index, 1);
                        filterReels(catArray, formatArray, sortByDate);
                    }
                }
            }
        });
        checkbox.addEventListener("change", function () {
            if (cBox.checked) {
                svg.style.stroke = "var(--accent-color, #ffffffFF)";
                svg.style.webkitFilter = "drop-shadow(5px 5px 25px #ffffffFF)";
                svg.style.filter = "drop-shadow(0px 0px 3px #ffffffFF)";

                path.style.strokeDashoffset = "60";
                path.style.transition = "all 0.3s linear";

                polyline.style.strokeDashoffset = "42";
                polyline.style.transition = "all 0.2s linear";
                polyline.style.transitionDelay = "0.15s";
            } else {
                svg.style.stroke = "#c8ccd4";
                svg.style.filter = "none";

                path.style.strokeDashoffset = "0";
                path.style.transition = "all 0.3s linear";

                polyline.style.strokeDashoffset = "66";
                polyline.style.transition = "all 0.2s linear";
                polyline.style.transitionDelay = "0s";
            }


        });
    });
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// FUNCTIONS /////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// DELAY TIME

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
};

/// STRING SEPARATOR

function formatString(input) {
    return input
        .split(',')
        .map(s => s.trim())
        .map(s => s.toLowerCase())
        .join('');
};

/// PAGE FADER

function fadeInPage() {
    if (!window.AnimationEvent) { return; }
    let fader = document.getElementById('fader');
    delay(25).then(() => {
        fader.classList.add('fade-out');
    });
}

/// LOGO ANIM

function mtSoundLogo() {
    hdrLogoCnv.setAttribute("style", `width: ${hdrLogoSym.offsetWidth}px; height: ${hdrLogoSym.offsetHeight}px;`);
    hdrLogoCnv.width = hdrLogoSym.offsetWidth;
    hdrLogoCnv.height = hdrLogoSym.offsetHeight;
    setup();
    draw();
}

/// SHOW BIO

function showBio() {
    let mediaCardArr = [].slice.call(document.getElementsByClassName("media-card"));
    for (let i = 0; i < mediaCardArr.length; i++) {
        mediaCardArr[i].style.opacity = 0;
    }
    filterBtn.style.opacity = 0;
    delay(300).then(() => {
        filterBtn.style.display = "none";
        if (window.innerWidth <= 900) {
            body.style.paddingLeft = "0";
        }
        for (let i = 0; i < mediaCardArr.length; i++) {
            mediaCardArr[i].style.opacity = 0;
        }
        delay(25).then(() => {
            for (let i = 0; i < mediaCardArr.length; i++) {
                mediaCardArr[i].style.display = "none";
            }
            delay(25).then(() => {
                body.style.display = "flex";
                body.style.Top = "0";
                body.style.paddingTop = "0";
                bio.style.display = "flex";
                body.style.paddingRight = "0";

                delay(25).then(() => {
                    if (window.innerWidth > 900) {
                        cnvDiv.setAttribute("style", `display: block; width: calc(6rem + ${bioText.offsetWidth}px); height: ${bioText.offsetHeight}px;`);
                    } else {
                        console.log(pageContainer.offsetWidth);
                        cnvDiv.setAttribute("style", `display: block; width: ${pageContainer.offsetWidth}px; height: ${pageContainer.offsetHeight}px;`);
                    }

                    bgCanv.setAttribute("style", `width: ${cnvDiv.offsetWidth}px; height: ${cnvDiv.offsetHeight}px;`);
                    bgCanv.width = cnvDiv.offsetWidth;
                    bgCanv.height = cnvDiv.offsetHeight;
                    bio.style.opacity = 1;

                    if (count == 0) {
                        delay(500).then(() => {
                            bioTitle1.style.opacity = 1;
                            delay(300).then(() => {
                                aSound.classList.add('contChange');

                                delay(2750).then(() => {
                                    bioTitle2.style.opacity = 1;

                                    delay(500).then(() => {
                                        aNoise.classList.add('animNoise');

                                        delay(2750).then(() => {
                                            bioTitle3.style.opacity = 1;

                                            delay(750).then(() => {
                                                aSpace.style.letterSpacing = "1vw";

                                                delay(500).then(() => {
                                                    aSpace.style.transitionDuration = "0.3s";

                                                    delay(500).then(() => {
                                                        bioTitleBox.style.minHeight = "auto";
                                                        aSpace.style.letterSpacing = "0em";
                                                        cnvDiv.style.opacity = 1;
                                                        bodyCopy.style.display = "grid"

                                                        delay(1000).then(() => {
                                                            bodyCopy.style.opacity = 1;
                                                            aSound.classList.remove('contChange');
                                                            aSound.innerHTML += "designer."
                                                            aNoise.classList.remove('animNoise');
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                        aSound.addEventListener("mouseover", () => {
                            aSound.innerHTML = "engineer."
                            delay(25).then(() => {
                                aSound.innerHTML = "recordist."
                                delay(25).then(() => {
                                    aSound.innerHTML = "editor."
                                    delay(25).then(() => {
                                        aSound.innerHTML = "mixer."
                                        delay(25).then(() => {
                                            aSound.innerHTML = "creator."
                                            delay(25).then(() => {
                                                aSound.innerHTML = "designer."
                                            });
                                        });
                                    });
                                });
                            });
                        });
                        count += 1;
                    } else {
                        cnvDiv.style.opacity = 0.3;
                    }
                });
            });
        });
    });
};

/// SHOW WORK

function showWork() {
    let mediaCardArr = [].slice.call(document.getElementsByClassName("media-card"));
    bio.style.opacity = 0;

    delay(300).then(() => {
        bio.style.display = "none";
        bioNoise = false;
        body.style.height = "";
        if (window.innerWidth > 900) {
            body.style.paddingTop = "5rem";
            body.style.paddingRight = "6rem";
        } else {
            body.style.paddingTop = "6rem";
        };
        body.style.display = "grid";
        filterBtn.style.display = "flex";
        for (let i = 0; i < mediaCardArr.length; i++) {
            mediaCardArr[i].style.display = "flex";
        }
        delay(25).then(() => {
            for (let i = 0; i < mediaCardArr.length; i++) {
                mediaCardArr[i].style.opacity = 1;
            }
            filterBtn.style.opacity = 1;
        })
    })
};

// FILTERS REELS ON PAGE

function filterReels(catArray = [], formatArray = [], sortKey = "") {
    body.removeChild(document.querySelectorAll('.reel-pad')[0]);
    if (!body) return;

    let mediaCards = Array.from(body.getElementsByClassName("media-card"));

    mediaCards.forEach(card => {
        let categoryValues = card.dataset.category;
        let format = card.dataset.format;

        let categoryMatch = catArray.length === 0 || catArray.some(cat => categoryValues.includes(cat));
        let formatMatch = formatArray.length === 0 || formatArray.includes(format);

        if (categoryMatch && formatMatch) {
            if (card.style.display != "flex") {
                card.style.display = "flex";
            }
        } else {
            card.style.display = "none";
        }
    });

    if (sortKey === "asc" || sortKey === "des") {
        mediaCards.sort((a, b) => {
            let yearA = parseInt(a.dataset.year, 10) || 0;
            let yearB = parseInt(b.dataset.year, 10) || 0;
            return sortKey === "asc" ? yearA - yearB : yearB - yearA;
        });

        mediaCards.forEach(card => body.appendChild(card));

    }

    let divPad = document.createElement('div');
    divPad.className = "reel-pad";
    body.appendChild(divPad);
}

/// BUILD FILTER MENU

function createFilterCategories() {
    let filterCont = document.getElementById('filt-cat-cont');
    for (let i = 0; i < filterCats.length; i++) {
        filterCont.insertAdjacentHTML("beforeend",
            `<div class="filt-cats" id="filt-cat-${i}">
            <div class="filt-cat-label">${filterCats[i]}</div>
            <div class="filt-pad"></div>
            <div class="filt-check">
                <div class="checkbox-cont">
                    <input type="checkbox" id="cbx-${filterCats[i].replaceAll(" ", "").toLowerCase()}" class="filter-check-input" data-section="category" style="display: none;">
                    <label for="cbx-${filterCats[i].replaceAll(" ", "").toLowerCase()}" class="check">
                        <svg id="svg-${filterCats[i].replaceAll(" ", "").toLowerCase()}" width="18px" height="18px" viewBox="0 0 18 18">
                            <path id="path-${filterCats[i].replaceAll(" ", "").toLowerCase()}"
                                d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z">
                            </path>
                            <polyline id="polyline-${filterCats[i].replaceAll(" ", "").toLowerCase()}" points="1 9 7 14 15 4"></polyline>
                        </svg>
                    </label>
                </div>
            </div>
            </div>`
        );
    }
}

function createFormatCategories() {
    let formatCont = document.getElementById('filt-format-cont');
    for (let i = 0; i < formatCats.length; i++) {
        formatCont.insertAdjacentHTML("beforeend",
            `<div class="filt-cats" id="filt-format-${i}">
            <div class="filt-format-label">${formatCats[i]}</div>
            <div class="filt-pad"></div>
            <div class="filt-check">
                <div class="checkbox-cont">
                    <input type="checkbox" id="cbx-${formatCats[i].replaceAll(" ", "").replaceAll("&", "").toLowerCase()}" class="filter-check-input" data-section="format" style="display: none;">
                    <label for="cbx-${formatCats[i].replaceAll(" ", "").replaceAll("&", "").toLowerCase()}" class="check">
                        <svg id="svg-${formatCats[i].replaceAll(" ", "").replaceAll("&", "").toLowerCase()}" width="18px" height="18px" viewBox="0 0 18 18">
                            <path id="path-${formatCats[i].replaceAll(" ", "").replaceAll("&", "").toLowerCase()}"
                                d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z">
                            </path>
                            <polyline id="polyline-${formatCats[i].replaceAll(" ", "").replaceAll("&", "").toLowerCase()}" points="1 9 7 14 15 4"></polyline>
                        </svg>
                    </label>
                </div>
            </div>
            </div>`
        );
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  FILE INPUT & LOAD PAGE ////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// DYNAMICALLY CREATE MEDIA CARDS
//
/// NODE STRUCTURE FOR MEDIA CARD CREATION - leave for reference
// let node = `<div class="media-card" id="${reelArrayRand[i].vidURL}">
//                 <div class="media-card-item">
//                     <div class="img-wrapper"><img loading="lazy" class="thumbnail" display="block"
//                             src="./images/${reelArrayRand[i].imgName}.png">
//                     </div>
//                     <div class="credit">
//                         <div class="media-title">${reelArrayRand[i].title}</div>
//                         <div class="media-year">${reelArrayRand[i].year}</div>
//                         <div class="media-cat">${reelArrayRand[i].cat}</div>
//                         <div class="media-credit"><a class="media-credit-link" title="${reelArrayRand[i].credit}" href="${reelArrayRand[i].creditLink}" target="_blank">${reelArrayRand[i].credit}</a></div>
//                     </div>
//                 </div>
//             </div>`

fetch('reelMedia.json')
    .then(response => response.json())
    .then(reelData => {
        reelArray = reelData.reelMedia;

        reelArray.forEach((reel) => {
            let div = document.createElement('div');
            div.className = "media-card";
            div.dataset.category = reel.cat.replaceAll(" ", "").replaceAll(",", " ").toLowerCase();

            let tempCatList = reel.cat.split(", ");
            tempCatList.forEach((cat) => {
                if (!filterCats.includes(cat)) {
                    filterCats.push(cat);
                }
            });

            div.dataset.format = reel.format.replaceAll(" ", "").replaceAll("&", "").toLowerCase();

            let tempFormatList = reel.format.split(", ");
            tempFormatList.forEach((format) => {
                if (!formatCats.includes(format)) {
                    formatCats.push(format);
                }
            });

            div.dataset.year = reel.year;
            div.dataset.vidUrl = reel.vidUrl;
            body.appendChild(div);

            let div2 = document.createElement('div');
            div2.className = "media-card-item";
            div.appendChild(div2);

            let div3 = document.createElement('div');
            div3.className = "img-wrapper";
            div2.appendChild(div3);

            let reelImg = document.createElement('img');
            reelImg.loading = "lazy";
            reelImg.className = "thumbnail";
            reelImg.display = "block";
            reelImg.src = `./images/reelimages/${reel.imgName}.png`
            div3.appendChild(reelImg);

            let div4 = document.createElement('div');
            div4.className = "credit";
            div2.appendChild(div4);


            let div5 = document.createElement('div');
            div5.className = "media-title";
            div5.textContent = reel.title;
            div4.appendChild(div5);

            let div6 = document.createElement('div');
            div6.className = "media-year";
            div6.textContent = reel.year.toString().substring(0, 4);
            div4.appendChild(div6);

            let div7 = document.createElement('div');
            div7.className = "media-cat";
            if (reel.format == "Series") {
                div7.textContent = "TV " + reel.format + " - " + reel.cat;
            } else if (reel.format == "Feature") {
                div7.textContent = reel.format + " Film - " + reel.cat;
            } else if (reel.format == "Immersive") {
                div7.textContent = reel.format + " Media - " + reel.cat;
            } else {
                div7.textContent = reel.format + " - " + reel.cat;
            }

            div4.appendChild(div7);

            let div8 = document.createElement('div');
            div8.className = "media-credit";
            let a = document.createElement('a');
            a.className = "media-credit-link";
            a.title = reel.credit;
            a.innerHTML = reel.credit;
            a.href = reel.creditlink;
            a.target = "_blank";
            div4.appendChild(div8);
            div8.appendChild(a);
        });

        let divPad = document.createElement('div');
        divPad.className = "reel-pad";
        body.appendChild(divPad);

        let mediaCards = document.querySelectorAll('.media-card');
        let mediaCardImgs = document.querySelectorAll('.img-wrapper');

        for (let i = 0; i < mediaCards.length; i++) {
            mediaCardImgs[i].addEventListener('click', () => {
                linkedVid.setAttribute("src", mediaCards[i].dataset.vidUrl);
                vidSplash.style.display = "flex";
                vidSplash.classList.add('fade-in');
                vidPlayer.style.opacity = 1;
                delay(1500).then(() => {
                    vidSplash.classList.remove('fade-in');
                });
            });
        }

        ////////!!! PAGE LOADERS !!!////////
        filterReels(catArray, formatArray, sortByDate);
        createFilterCategories();
        createFormatCategories();
        filterCheckboxes = document.querySelectorAll('.filt-check');
        addFilterEventListeners();
        initPageSort = document.getElementById('sort-des');
        initPageSort.querySelector('.arrow-check-input').checked = true;
        initPageSort.querySelector('.svg-arrow').classList.add('sort-arrow-checked');
    })
    .catch(error => console.error('Error fetching JSON:', error));

mtSoundLogo();
fadeInPage();