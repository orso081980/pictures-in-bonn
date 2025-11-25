#  Guida semplice per cambiare le foto e i testi del sito

Questo documento spiega passo passo, in modo semplice e senza termini tecnici, come modificare il contenuto del sito (file Markdown) e come sostituire o aggiungere le foto che appaiono nelle pagine.

**Cosa vedrai nel progetto**
- La cartella `content/` contiene pagine scritte in testo semplice (Markdown). Una sotto-cartella importante è `content/galleries/`, dove sono le gallerie fotografiche.
- La cartella `public/img/` contiene tutte le foto (immagini) che il sito mostra.

**1) Che cos'è un file Markdown (file .md)?**
- È un file di testo semplice usato per scrivere pagine: titolo, testo descrittivo e una parte iniziale chiamata "front matter" (una piccola lista di informazioni). Non serve sapere programmare per cambiare questi file: aprili e modifica il testo.


```yaml
---
title: "Kabelleitung"
layout: default
cover:
  src: "/img/gal/cable/unnamed-1.jpg"
  alt: "Morning dancers"
  width: 1041
  height: 1625
---
```

Qui sotto puoi scrivere una breve descrizione della galleria (testo libero).

Se il sito usa uno shortcode per le gallerie (ad esempio `masonry-gallery`), una sezione immagini ben formattata potrebbe essere:

::masonry-gallery
images:
  - src: "/img/gal/cable/unnamed-6.jpg"
    alt: "Das Ballett"
    width: 524
    height: 881
    caption: "Das Ballett — 9x14, Orwo BN 111 Bonn 06.25"
  - src: "/img/gal/cable/unnamed-7.jpg"
    alt: "Altro scatto"
    width: 600
    height: 900
    caption: "Descrizione foto 2"
:::

Annotazioni importanti sull'esempio:
- `src`: percorso dell'immagine, che deve corrispondere al file dentro `public/img/...` (nell'esempio `/img/gal/cable/...`).
- `alt`: testo alternativo per accessibilità e SEO.
- `width` e `height`: dimensioni in pixel; non è obbligatorio ma aiuta il layout.
- `caption`: didascalia visualizzata sotto la foto (opzionale).

Ricorda: verifica con lo sviluppatore quale sintassi di apertura/chiusura del blocco gallery (`::masonry-gallery` / `:::` o altra) richiede il renderer Markdown usato dal sito.

Spiegazione rapida:
- `title`: è il titolo che comparirà nella pagina.
- `layout`: Default, lascialo cosi.
- `cover`: la foto nella pagina principale.

**2) Come modificare un file Markdown (passo passo, semplice)**
1. Da questa pagina https://github.com/orso081980/pictures-in-bonn/tree/main/content apri il file che vuoi cambiare oppure apri la cartella galleries.
2. Trova il file della galleria che vuoi modificare: avrà estensione `.md`.
3. Clicca edit this file (l'icona della penna)
4. Modifica il titolo o la descrizione come faresti con un documento di testo.
5. Se vuoi cambiare le immagini mostrate, le immagini si trovano in public/img/gal. Il percorso pero' da indicare è src: "/img/gal come vedi nei file precedenti.
6. Salva il file e chiudi l'editor.

Esempio pratico: volessi cambiare il titolo, trova la riga `title:` e sostituisci il testo tra virgolette.

**3) Dove mettere o cambiare le foto (cartella `public/img/`)**
- Le immagini usate dal sito si trovano nella cartella `public/img/`.
- Per sostituire una foto già usata dalla galleria: trova il file nella cartella `public/img/` e sostituiscilo con la nuova immagine usando lo stesso nome file. In questo modo la galleria mostrerà automaticamente la nuova foto senza bisogno di modificare il Markdown.

Passi semplici per sostituire una foto 

1. https://github.com/orso081980/pictures-in-bonn/tree/main/public/img/gal/above (esempio)
2. Add file (+ create a new file, oppure upload a new file)
3. Trascina la nuova foto dentro la cartella oppure scegli file dal tuo pc.
4. Se vuoi che la nuova foto sostituisca una esistente, copia la nuova foto usando lo stesso nome del file esistente (ad esempio `foto1.jpg`) e conferma la sovrascrittura quando richiesto.

Consigli pratici sui nomi dei file:
- Usa nomi semplici: tutto minuscolo, senza spazi, separa parole con trattini: `mia-foto-01.jpg`.
- Mantieni l'estensione `.jpg` (il template usa immagini JPG). Se la tua foto è `.png` funziona ugualmente ma è meglio convertire in `.jpg` per risparmiare spazio.

Se vuoi aggiungere nuove foto (senza sostituire):
1. Metti la foto in `public/img/` con un nome nuovo, es. `nuova-foto.jpg`.
2. Apri il file `.md` della galleria e aggiungi la riga con il percorso nella lista `images`:
   - `/img/nuova-foto.jpg`
3. Salva il file Markdown.

**4) Aggiungere una nuova galleria**
1. Crea un nuovo file `.md` in `content/galleries/`, ad esempio `galleria-nuova.md`.
2. Copia l'esempio di front matter (vedi sopra) e aggiungi i nomi delle immagini che vuoi mostrare.
3. Crea una nuova cartella in `public/img/` con lo stesso nome della galleria come nuova-cartella e assicurati che i nomi corrispondano.
4. Salva il file. 

PS. Importante da ricordare, gli spazi e i simboli prima del testo contano, cambia solo i testi, le foto e i percorsi per le foto, altrimenti il layout del sito potrebbe rompersi.