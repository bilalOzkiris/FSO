```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTTP 201 - Created
    deactivate server

    Note right of browser: The browser executes the callback function that creates a new note, adds it to the notes list, rerenders the notes list, and sends the new note to the server
```