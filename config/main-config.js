const CONFIG = {
    title: "Iron and Honor | Dokumentation",
    language: "de",
    favicon: "img/transparent_logo.png",
    logo: {
        path: "img/transparent_logo.png",
        width: "100px",
        alt: "Iron and Honor Logo"
    },

    navigation: {
        title: "Iron and Honor",
        subtitle: "Dokumentation",
        specialItems: [
            {
                name: "NWVars",
                icon: "bx bx-data",
                renderer: "renderNWVars"
            },
            {
                name: "Network Strings",
                icon: "bx bx-transfer",
                renderer: "renderNetStrings"
            },
            {
                name: "Commands",
                icon: "bx bx-terminal",
                renderer: "renderCommands"
            },
            {
                name: "Hooks",
                icon: "bx bx-link",
                renderer: "renderHooks"
            }
        ]
    },

    filters: [
        { type: "all", label: "Alle", default: true },
        { type: "client", label: "Client" },
        { type: "shared", label: "Shared" },
        { type: "server", label: "Server" }
    ],

    typeIcons: {
        client: { icon: "bx bx-desktop", title: "Client" },
        server: { icon: "bx bx-server", title: "Server" },
        shared: { icon: "bx bx-transfer", title: "Shared" }
    },

    search: {
        placeholder: "Suche Funktion...",
        weights: {
            name: 10,
            description: 5,
            module: 3,
            type: 2
        }
    },

    welcome: {
        title: "Willkommen in der Dokumentation",
        message: "Bitte wähle ein Modul in der Navigation oder benutze die Suche, um Funktionen zu finden."
    },

    resources: {
        fonts: [
            "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap",
            "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        ],
        styles: ["style.css"]
    }
};