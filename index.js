let iniNav = 0;
const btnHome = document.getElementById("Home");
btnHome.addEventListener("click", main);
function nav(){
    // Array con oggetti per il menu
    const menuItems = [
        {
            id: 1,
            title: "Item 1",
            link: "Example/sample.html",
            ContDrop: [
                { id: 1.1, title: "Subitem 1", link: "Example/sample.html" },
                { id: 1.2, title: "Subitem 2", link: "Example/sample.html" }
            ]
        },
        {
            id: 2,
            title: "Item 2",
            link: "Example/sample.html",
            ContDrop: [
                { id: 2.1, title: "Subitem 1", link: "Example/sample.html" },
                { id: 2.2, title: "Subitem 2", link: "Example/sample.html" },
                { id: 2.3, title: "Subitem 3", link: "Example/sample.html" },
                { id: 2.4, title: "Subitem 4", link: "Example/sample.html" },
                { id: 2.5, title: "Subitem 5", link: "Example/sample.html" },
                { id: 2.6, title: "Subitem 6", link: "Example/sample.html" },
                { id: 2.7, title: "Subitem 7", link: "Example/sample.html" },
                { id: 2.8, title: "Subitem 8", link: "Example/sample.html" },
                { id: 2.9, title: "Subitem 9", link: "Example/sample.html" },
                { id: 2.10, title: "Subitem 10", link: "Example/sample.html" },
                { id: 2.11, title: "Subitem 11", link: "Example/sample.html" },
                { id: 2.12, title: "Subitem 12", link: "Example/sample.html" },
                { id: 2.13, title: "Subitem 13", link: "Example/sample.html" },
                { id: 2.14, title: "Subitem 14", link: "Example/sample.html" },
                { id: 2.15, title: "Subitem 15", link: "Example/sample.html" },
                { id: 2.16, title: "Subitem 16", link: "Example/sample.html" },
                { id: 2.17, title: "Subitem 17", link: "Example/sample.html" },
                { id: 2.18, title: "Subitem 18", link: "Example/sample.html" },
                { id: 2.19, title: "Subitem 19", link: "Example/sample.html" },
                { id: 2.20, title: "Subitem 20", link: "Example/sample.html" },
                { id: 2.21, title: "Subitem 21", link: "Example/sample.html" },
                { id: 2.22, title: "Subitem 22", link: "Example/sample.html" },
                { id: 2.23, title: "Subitem 23", link: "Example/sample.html" },
                { id: 2.24, title: "Subitem 24", link: "Example/sample.html" },
                { id: 2.25, title: "Subitem 25", link: "Example/sample.html" },
                { id: 2.26, title: "Subitem 26", link: "Example/sample.html" },
                { id: 2.27, title: "Subitem 27", link: "Example/sample.html" },
                { id: 2.28, title: "Subitem 28", link: "Example/sample.html" },
                { id: 2.29, title: "Subitem 29", link: "Example/sample.html" },
                { id: 2.30, title: "Subitem 30", link: "Example/sample.html" }
            ]
        },
        {
            id: 3,
            title: "Item 3",
            link: "Example/sample.html",
            ContDrop: [
                { id: 3.1, title: "Subitem 1", link: "Example/sample.html" },
                { id: 3.2, title: "Subitem 2", link: "Example/sample.html" }
            ]
        },
        {
            id: 4,
            title: "Item 4",
            link: "Example/sample.html",
            ContDrop: [
                { id: 4.1, title: "Subitem 1", link: "Example/sample.html" },
                { id: 4.2, title: "Subitem 2", link: "Example/sample.html" }
            ]
        },
        {
            id: 5,
            title: "Item 5",
            link: "Example/sample.html",
            ContDrop: [
                { id: 5.1, title: "Subitem 1", link: "Example/sample.html" },
                { id: 5.2, title: "Subitem 2", link: "Example/sample.html" },
                { id: 5.3, title: "Subitem 3", link: "Example/sample.html" },
                { id: 5.4, title: "Subitem 4", link: "Example/sample.html" },
                { id: 5.5, title: "Subitem 5", link: "Example/sample.html" },
                { id: 5.6, title: "Subitem 6", link: "Example/sample.html" },
                { id: 5.7, title: "Subitem 7", link: "Example/sample.html" },
                { id: 5.8, title: "Subitem 8", link: "Example/sample.html" },
                { id: 5.9, title: "Subitem 9", link: "Example/sample.html" },
                { id: 5.10, title: "Subitem 10", link: "Example/sample.html" }
            ]
        }
    ];
    // Qua funzione per gestire il menu alto
    async function AssegnazioneMenu() {
        iniNav = 1;
        for (let i = 0; i < menuItems.length; i++) {
            let h1 = document.getElementById(menuItems[i].id);
            if (h1) {
                h1.innerHTML = menuItems[i].title;
            }

            let dropdown = document.getElementById(`dropdown${menuItems[i].id}`);
            if (dropdown) {
                for (let j = 0; j < menuItems[i]["ContDrop"].length; j++) {
                    let menDrop = menuItems[i]["ContDrop"][j];
                    let button = document.createElement("button");
                    button.id = menDrop.id;
                    button.innerHTML = menDrop.title;
                    button.addEventListener("click", async function () {
                        console.log(menDrop.title);
                        console.log(menDrop.link);
                        await loadMain(menDrop.link);
                    });
                    dropdown.appendChild(button);
                }
            }
            for(let i = 0; i < 5; i++) {
                let button = document.getElementById(`btn${menuItems[i].id}`);
                button.addEventListener("click", function () {
                    switch (i) {
                        case 0:
                            CreateCard(Card2);
                            break;
                        case 1:
                            CreateCard(Card3);
                            break;
                        case 2:
                            CreateCard(Card4);
                            break;
                        case 3:
                            CreateCard(Card5);
                            break;
                        case 4:
                            CreateCard(Card6);
                            break;
                    }
                });
            }
        }
    }

    // Menu card
    // Array per menu card principale
    const CardMain = [
        { id: "Card0", imgSrc: "CardImage/sample.png", title: "Item 1", link: "PageFolder" },
        { id: "Card1", imgSrc: "CardImage/sample.png", title: "Item 2", link: "PageFolder" },
        { id: "Card2", imgSrc: "CardImage/sample.png", title: "Item 3", link: "PageFolder" },
        { id: "Card3", imgSrc: "CardImage/sample.png", title: "Item 4", link: "PageFolder" },
        { id: "Card4", imgSrc: "CardImage/sample.png", title: "Item 5", link: "PageFolder" },
        { id: "Card5", imgSrc: "CardImage/sample.png", title: "Item 6", link: "Example/sample.html" },
        { id: "Card6", imgSrc: "CardImage/sample.png", title: "Item 7", link: "Example/sample.html" },
        { id: "Card7", imgSrc: "CardImage/sample.png", title: "Item 8", link: "Example/sample.html" },
        { id: "Card8", imgSrc: "CardImage/sample.png", title: "Item 9", link: "Example/sample.html" },
        { id: "Card9", imgSrc: "CardImage/sample.png", title: "Item 10", link: "Example/sample.html" },
        { id: "Card10", imgSrc: "CardImage/sample.png", title: "Item 11", link: "Example/sample.html" },
        { id: "Card11", imgSrc: "CardImage/sample.png", title: "Item 12", link: "Example/sample.html" }
    ];
    const Card2 = [
        { id: "Card0", title: "Item 1", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card1", title: "Item 2", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card2", title: "Item 3", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card3", title: "Item 4", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card4", title: "Item 5", imgSrc: "CardImage/sample.png", link: "Example/sample.html" }
    ];
    const Card3 = [
        { id: "Card0", title: "Item 1", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card1", title: "Item 2", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card2", title: "Item 3", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card3", title: "Item 4", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card4", title: "Item 5", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card5", title: "Item 6", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card6", title: "Item 7", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card7", title: "Item 8", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card8", title: "Item 9", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card9", title: "Item 10", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card10", title: "Item 11", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card11", title: "Item 12", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card12", title: "Item 13", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card13", title: "Item 14", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card14", title: "Item 15", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card15", title: "Item 16", imgSrc: "CardImage/sample.png", link: "Example/sample.html" }
    ];
    const Card4 = [
        { id: "Card0", title: "Item 1", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card1", title: "Item 2", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card2", title: "Item 3", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card3", title: "Item 4", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card4", title: "Item 5", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card5", title: "Item 6", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card6", title: "Item 7", imgSrc: "CardImage/sample.png", link: "Example/sample.html" }
    ];
    const Card5 = [
        { id: "Card0", title: "Item 1", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card1", title: "Item 2", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card2", title: "Item 3", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card3", title: "Item 4", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card4", title: "Item 5", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card5", title: "Item 6", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card6", title: "Item 7", imgSrc: "CardImage/sample.png", link: "Example/sample.html" }
    ];
    const Card6 = [
        { id: "Card0", title: "Item 1", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card1", title: "Item 2", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card2", title: "Item 3", imgSrc: "CardImage/sample.png", link: "Example/sample.html" },
        { id: "Card3", title: "Item 4", imgSrc: "CardImage/sample.png", link: "Example/sample.html" }
    ];

    // Qua funzione per gestire il menu card
    function AssegnazioneCard() {
        CreateCard(CardMain);
        for(let i = 0; i < 5; i++) {
            let BtnCard = document.getElementById(`Card${i}`);
            BtnCard.addEventListener("click", function () {
                switch (i) {
                    case 0:
                        CreateCard(Card2);
                        break;
                    case 1:
                        CreateCard(Card3);
                        break;
                    case 2:
                        CreateCard(Card4);
                        break;
                    case 3:
                        CreateCard(Card5);
                        break;
                    case 4:
                        CreateCard(Card6);
                        break;
                }
            });
        }
    }
    function CreateCard(CardArray) {
        const MainLoader = document.getElementById("LoaderContent");
        MainLoader.innerHTML = "";
        console.log(MainLoader)
        for (let i = 0; i < CardArray.length; i++) {
            let button = document.createElement("button");
            button.id = CardArray[i].id;
            button.addEventListener("click", function() {
                loadMain(CardArray[i].link);
            });
            let img = document.createElement("img");
            img.src = CardArray[i].imgSrc;
            img.alt = CardArray[i].title;
            let h1 = document.createElement("h1");
            h1.innerHTML = CardArray[i].title;
            button.appendChild(img);
            button.appendChild(h1);
            MainLoader.appendChild(button);
        }
    }
    // Qua gestisci l'utente quando clicca sul suo account e assegnazione in campo
    function UserAccount() {
        let Btnuser = document.getElementById("user");
        let h1user = document.getElementById("nickname");
        Btnuser.addEventListener("click", function () {
            window.open('https://github.com/MarioM8la08', '_blank');// Per reindirizzare alla pagina user.html
        });
        let IDuser = "MarioM8la"; // ID utente
        h1user.innerHTML = IDuser; // Assegna il nome utente
    }
    // LoadPage
    async function loadMain(url) {
        if (url !== "PageFolder") {
            try {
                const response = await fetch(url);
                const text = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(text, 'text/html');

                const bodyContent = doc.querySelector('body');
                if (bodyContent) {
                    const loaderContent = document.getElementById('LoaderContent');
                    loaderContent.innerHTML = bodyContent.innerHTML;

                    // Load dynamic CSS
                    const styles = doc.querySelectorAll('link[rel="stylesheet"], style');
                    for (const style of styles) {
                        if (style.tagName.toLowerCase() === 'link') {
                            const cssHref = style.href;
                            const cssResponse = await fetch(cssHref);
                            const cssText = await cssResponse.text();
                            const newStyle = document.createElement('style');
                            newStyle.innerHTML = cssText;
                            document.head.appendChild(newStyle);
                        } else {
                            const newStyle = document.createElement('style');
                            newStyle.innerHTML = style.innerHTML;
                            document.head.appendChild(newStyle);
                        }
                    }

                    // Load JS
                    const scripts = doc.querySelectorAll('script');
                    scripts.forEach(script => {
                        const newScript = document.createElement('script');
                        if (script.src) {
                            newScript.src = script.src;
                        } else {
                            newScript.innerHTML = script.innerHTML;
                        }
                        loaderContent.appendChild(newScript);
                    });
                } else {
                    console.error('No body tag found in the loaded page.');
                }
            } catch (error) {
                console.error('Error loading page:', error);
            }
        }
    }
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            const rect = dropdown.getBoundingClientRect();
            const viewportWidth = window.innerWidth;

            if (rect.right > viewportWidth) {
                console.log('dropdown-wrap');
            } else {
                console.log('dropdown-no-wrap');
            }
        });
    });
// Funzione principale
    if (iniNav === 0) {
        AssegnazioneMenu().then(r => console.log("Menu Assegnato"));
        AssegnazioneCard();
        UserAccount();
    } else{
        AssegnazioneCard();
    }
}
// Funzione principale
function main() {
    pageAct = 0;
    nav();
}
document.addEventListener("DOMContentLoaded", main); // Quando il documento è pronto esegui la funzione main

