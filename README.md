Nav Master:

---

### Responsive Navigation Menu

Questo repository contiene un menu di navigazione responsive progettato per adattarsi a schermi fino alla risoluzione di piccoli laptop. Il menu è particolarmente adatto per siti con numerose pagine di reindirizzamento, permettendo una navigazione ordinata e strutturata anche per utenti su dispositivi più compatti.

### Scopo

Il menu è pensato per siti con una struttura complessa e molte pagine, come potrebbe essere un sito aziendale o un portfolio esteso. Tutti i link principali e i sottolink sono configurabili attraverso una struttura definita in JavaScript. Questo approccio rende il menu facilmente personalizzabile e adattabile, permettendo una gestione centralizzata dei collegamenti.

### Configurazione

Tutti gli elementi del menu e i rispettivi sottolink si trovano nell'array `menuItems`, strutturato come segue:

```javascript
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
```

### Personalizzazione

La struttura `menuItems` è completamente personalizzabile. Ogni elemento principale ha un titolo (`title`), un link (`link`), e un array di elementi di dropdown (`ContDrop`) con i relativi sottotitoli e link. Aggiungere, rimuovere o modificare voci è semplice: basta aggiornare le voci dell'array `menuItems` per riflettere le pagine del sito.

### Responsive Design

Il menu è ottimizzato per adattarsi a schermi di piccole dimensioni, compresi laptop compatti, garantendo che il layout rimanga utilizzabile e accessibile anche per dispositivi mobili o schermi più piccoli. 

--- 

Mario M8la.
