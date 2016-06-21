# Assembler Zeitschleifen-Generator
Dies ist eine kleine Webseite, die Zeit- oder Warteschleifen für Microcontroller der 8051-Familie generiert.
## Installation
Da das Skript nur aus HTML und JavaScript besteht, ist eine Installation nicht erforderlich. Du kannst einfach die index.html in deinem Lieblingsbrowser öffnen.
## Verwendung
Zuerst gibst du die Taktfrequenz des Mikrocontrollers an (Standard 10 MHz).
Danach kannst du die Dauer in Sekunden eingeben.

Das Skript errechnet dabei unmittelbar die Werte, die für die Zeitschleife in die Register geladen werden müssen.
Eine Zeile darunter wird die fertige Zeitschleife, wie sie direkt in den Quellcode übertragen werden kann, ausgegeben.
## Lizenz
Das Projekt steht unter der Apache License 2.0. Den kompletten Lizenztext siehst du in der Datei _LICENSE_.
### Drittanieter-Software
Das Projekt enthält eine Kopie der JavaScript-Bibliothek _jQuery_ in der Version 3.0.0 von http://jquery.com.
jQuery wird in der MIT License bereitgestellt, den kompletten Lizenztext findest du in der Datei _LICENSE-jQuery_.
