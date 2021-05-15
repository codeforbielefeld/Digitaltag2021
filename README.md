# Digitaltag2021

Am 18.6.2021 ist der bundesweite Digitaltag. Wir überlegen, eine Aktion oben an der Promenade zu machen. Es soll Kinder und Familien anregen, zu mehr Bewegung und Sport an der frischen Luft. 

Wir planen aktuell zwei Varianten:

## Idee 1a:
Kinder sind immer für ein Wettrennen zu haben!! 
Oben auf der Promenade bauen wir mit Flatterband eine 400m Bahn auf zwischen Burg und "Zur Schönen Aussicht". Am Anfang und am Ende ist eine Lichtschranke etc. zur Zeitnahme. Am Start müssen die Eltern einen QR Code scannen, Name und E-Mail Adresse eingeben und einwilligen, dass ihr Kind auf eigene Gefahr unser Bewegungsangebot wahr nimmt. Am Ende wird Zeit gemeinsam mit Name und E-Mail Adresse abgespeichert und alle Kinder erhalten eine pdf-Urkunde mit Name und Zeit zum ausdrucken an die angegebene E-Mail Adresse geschickt. 

## Idee 1b - ohne Lichtschranken
Auf der Promenade sind zwischen Burg und Brands Busch verschiedene QR Codes verteilt. 
Variante (1): Hinter jedem QR Code versteckt sich nur ein Formular, in dem sich eingetragen werden muss, dass die Station passiert worden ist
Variante (2): Hinter jedem QR Code versteckt sich neben dem Formular eine zu beantwortende Frage (z.B. Schätzfragen: Wie hoch ist der Baum? Wie viele Bäume wurden an der Promenade neu gepflanzt? Wie lang ist die Promenade? etc.). Auch hier wird am Ende eine schicke pdf-Urkunde an die Kinder verschickt.

Für die Idee 1b gibt es bereits Ideen, das mit Google Forms umzusetzen:

Es ist ein Minimalbeispiel mit nur zwei Stationen. Es wird nur geprüft, ob eine Email-Adresse bereits an beiden Stationen einen Eintrag hinterlassen hat. Es fehlt noch, dass auf Email und Vorname geprüft wird, denn eine Elternteil kann mit zwei Kindern unterwegs sein und möchte aber nur eine Email-Adresse für beide Kinder nutzen.

- Jede Station ist ein eigenes Formular in Google Forms, über das dann im Quizformat eine Antwort gegeben werden kann
- Automatisch werden die Antworten mit Punkten bewertet
- Das Skript merge_sheets führt dann (zeitlich getriggert) immer wieder alle Daten in ein Sheet zusammen 
- Das Skript automatic_email prüft, ob alle Stationen von einer E-Mail "besucht" worden sind, also Antworten vorhanden sind. Die erreichten Punkte werden aufsummiert.
- Senden der Email

Was noch fehlt, neben der Prüfung auf Email UND Vorname ist eine Prüfung, dass nur einmal eine Email versendet wird und eine schöne HTML Email oder ein schönes pdf.
