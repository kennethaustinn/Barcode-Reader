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

Die Installation sollte über das Klonen des ganzen Projekts erfolgen. Dabei sollten keine Probleme auftauchen oder die Installation über das downloaden der Zip Datei erfolgt, dann kann man direkt extrahieren und Programm starten. Um **das Programm zu starten** man kann die Datei _app.js_ öffnen und die App einfach kompilieren und ausführen lassen. In der Konsole wird das Ergebnis vom Barcode angezeigt.

Bei dem App selbst habe ich 2 Packages benutzt einmal für das Einlesen des Barcodes (_dynamsoft-node-barcode_) und für die Umwandlung von PDF zu image Datei (_pdf-poppler_). Da leider das Dynamsoft können nur Bilder Datei erkennen und dort habe ich auch eine Free Trial Lizenz benutzt.
