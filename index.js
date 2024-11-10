const menuItems = [
    {
        id: 1,
        title: "Home",
        ContDrop: [
            { id: 1.1, title: "Subitem 1" },
            { id: 1.2, title: "Subitem 2" }
        ]
    },
    {
        id: 2,
        title: "Contact",
        ContDrop: [
            { id: 2.1, title: "Subitem 1" },
            { id: 2.2, title: "Subitem 2" }
        ]
    },
    {
        id: 3,
        title: "About",
        ContDrop: [
            { id: 3.1, title: "Subitem 1" },
            { id: 3.2, title: "Subitem 2" }
        ]
    },
    {
        id: 4,
        title: "Services",
        ContDrop: [
            { id: 4.1, title: "Subitem 1" },
            { id: 4.2, title: "Subitem 2" }
        ]
    },
    {
        id: 5,
        title: "Portfolio",
        ContDrop: [
            { id: 5.1, title: "Subitem 1" },
            { id: 5.2, title: "Subitem 2" },
            { id: 5.3, title: "Subitem 3" },
            { id: 5.4, title: "Subitem 4" },
            { id: 5.5, title: "Subitem 5" },
            { id: 5.6, title: "Subitem 6" },
            { id: 5.7, title: "Subitem 7" },
            { id: 5.8, title: "Subitem 8" },
            { id: 5.9, title: "Subitem 9" },
            { id: 5.10, title: "Subitem 10" }
        ]
    }
];
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
                dropdown.innerHTML += `<button id="${menDrop["id"]}">${menDrop["title"]}</button>`;
            }
        }
    }
}

AssegnazioneMenu();