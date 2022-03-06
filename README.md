# Barcode Scanner

* Verantwortlich : Kenneth Austin
* Auftraggeber : Dionysius Irza Refiano

**Anforderungen :** 
- Die APP soll mit Node JS entwickelt werden
- Die APP soll die PDF Datei einlesen und dann den PDF417 Barcode einlesen
- Die APP soll das Ergebnis vom Einlesen des Barcodes anzeigen. Es reicht das Ergebnis in der Konsole auszugeben.
- Die Testaufgabe PDF Datei im Anhang soll zum Testen genutzt werden
- Der Quellcode soll vom Anfang an in dem Github gepusht werden, damit jede Änderungen in Github zu sehen sind
- In der Readme File soll eine Anleitung geschrieben werden, wie man die APP ausführen kann
- Der Github Link soll an mich per Mail am Montag 07.03.2022 senden

## Installationshinweise

Die Installation sollte über das Klonen des ganzen Projekts erfolgen.
Dabei sollten keine Probleme auftauchen.

Bei dem App selbst habe ich 2 Packages genutzt einmal für das Einlesen des Barcodes(**dynamsoft-node-barcode**) und für die Umwandlung von PDF zu image Datei (**pdf-poppler**). Da leider das Dynamsoft kann nur Bilder Datei erkennen.

Für die Anwendung der App man kann direkt über das Terminal / Eingabeaufforderung der Befehl node app.js oder die App einfach kompilieren und run lassen. In der Konsole wird das Ergebnis vom Barcode angezeigt.
