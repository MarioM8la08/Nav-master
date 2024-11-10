const menuItems = [
    {
        id: 1,
        title: "Home",
        link: "home.html",
        ContDrop: [
            { id: 1.1, title: "Subitem 1", link: "subitem1.html" },
            { id: 1.2, title: "Subitem 2", link: "subitem2.html" }
        ]
    },
    {
        id: 2,
        title: "Contact",
        link: "contact.html",
        ContDrop: [
            { id: 2.1, title: "Subitem 1", link: "subitem1.html" },
            { id: 2.2, title: "Subitem 2", link: "subitem2.html" }
        ]
    },
    {
        id: 3,
        title: "About",
        link: "about.html",
        ContDrop: [
            { id: 3.1, title: "Subitem 1", link: "subitem1.html" },
            { id: 3.2, title: "Subitem 2", link: "subitem2.html" }
        ]
    },
    {
        id: 4,
        title: "Services",
        link: "services.html",
        ContDrop: [
            { id: 4.1, title: "Subitem 1", link: "subitem1.html" },
            { id: 4.2, title: "Subitem 2", link: "subitem2.html" }
        ]
    },
    {
        id: 5,
        title: "Portfolio",
        link: "portfolio.html",
        ContDrop: [
            { id: 5.1, title: "Subitem 1", link: "subitem1.html" },
            { id: 5.2, title: "Subitem 2", link: "subitem2.html" },
            { id: 5.3, title: "Subitem 3", link: "subitem3.html" },
            { id: 5.4, title: "Subitem 4", link: "subitem4.html" },
            { id: 5.5, title: "Subitem 5", link: "subitem5.html" },
            { id: 5.6, title: "Subitem 6", link: "subitem6.html" },
            { id: 5.7, title: "Subitem 7", link: "subitem7.html" },
            { id: 5.8, title: "Subitem 8", link: "subitem8.html" },
            { id: 5.9, title: "Subitem 9", link: "subitem9.html" },
            { id: 5.10, title: "Subitem 10", link: "subitem10.html" }
        ]
    }
];
// Qua funzione per gestire il menu
function AssegnazioneMenu() {
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
                button.addEventListener("click", function() {
                    window.location.href = menDrop.link;
                });
                dropdown.appendChild(button);
            }
        }
        let button = document.getElementById(`btn${menuItems[i].id}`);
        if (button) {
            button.addEventListener("click", function () {
                console.log(button);
                // window.location.href = menuItems[i].link;
            });
        }
    }
}
// Qua gestisci l'utente quando clicca sul suo account e assegnazione in campo
function UserAccount() {
    let Btnuser = document.getElementById("user");
    let h1user = document.getElementById("nickname");
    Btnuser.addEventListener("click", function () {
        window.location.href = "user.html"; // Per reindirizzare alla pagina user.html
    });
    let IDuser = "Mariom8la"; // ID utente
    h1user.innerHTML = IDuser; // Assegna il nome utente
}
// Funzione principale
function main() {
    UserAccount();
    AssegnazioneMenu();
}
document.addEventListener("DOMContentLoaded", main); // Quando il documento è pronto esegui la funzione main