# Notes diagram

    sequenceDiagram
        participant Navegador as Browser
        participant Servidor as Server

        Note over Navegador: User writes a note and clicks the button

        Navegador->>Servidor: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
        Servidor->>Navegador: HTTP 302 redirect to notes
        Navegador->>Servidor: HTTP GET nhttps://studies.cs.helsinki.fi/exampleapp/notes
        Servidor->>Navegador: HTML-Code

        Navegador->>Servidor: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
        Servidor-->>Navegador: main.css
        Navegador->>Servidor: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
        Servidor-->>Navegador: main.js
        Navegador->>Servidor: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
        Servidor-->>Navegador: data.json
