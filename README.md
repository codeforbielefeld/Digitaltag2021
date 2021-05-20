# Digitaltag2021

Am 18.6.2021 ist der bundesweite Digitaltag. Wir überlegen, eine Aktion oben an der Promenade zu machen. Es soll Kinder und Familien anregen, zu mehr Bewegung und Sport an der frischen Luft. 

Wir setzten von den zwei unten stehenden Varianten die Variante 1b um (Entscheidung am Community-Abend 20.5.2021 getroffen)

## Idee 1a:
Kinder sind immer für ein Wettrennen zu haben!! 
Oben auf der Promenade bauen wir mit Flatterband eine 400m Bahn auf zwischen Burg und "Zur Schönen Aussicht". Am Anfang und am Ende ist eine Lichtschranke etc. zur Zeitnahme. Am Start müssen die Eltern einen QR Code scannen, Name und E-Mail Adresse eingeben und einwilligen, dass ihr Kind auf eigene Gefahr unser Bewegungsangebot wahr nimmt. Am Ende wird Zeit gemeinsam mit Name und E-Mail Adresse abgespeichert und alle Kinder erhalten eine pdf-Urkunde mit Name und Zeit zum ausdrucken an die angegebene E-Mail Adresse geschickt. 

## Idee 1b - ohne Lichtschranken
Auf der Promenade sind zwischen Burg und Brands Busch verschiedene QR Codes verteilt. 
Variante (1): Hinter jedem QR Code versteckt sich nur ein Formular, in dem sich eingetragen werden muss, dass die Station passiert worden ist
Variante (2): Hinter jedem QR Code versteckt sich neben dem Formular eine zu beantwortende Frage (z.B. Schätzfragen: Wie hoch ist der Baum? Wie viele Bäume wurden an der Promenade neu gepflanzt? Wie lang ist die Promenade? etc.). Auch hier wird am Ende eine schicke pdf-Urkunde an die Kinder verschickt.

## Für die Idee 1b gibt es bereits Ideen, das mit Google Forms + Google Apps Script umzusetzen:

Es ist ein Minimalbeispiel mit nur zwei Stationen. Es wird nur geprüft, ob eine Email-Adresse bereits an beiden Stationen einen Eintrag hinterlassen hat. Es fehlt noch, dass auf Email und Vorname geprüft wird, denn eine Elternteil kann mit zwei Kindern unterwegs sein und möchte aber nur eine Email-Adresse für beide Kinder nutzen.

- Jede Station ist ein eigenes Formular in Google Forms, über das dann im Quizformat eine Antwort gegeben werden kann
- Automatisch werden die Antworten mit Punkten bewertet (Quiz-Funktion von Google Forms)
- Das Google Apps Script *merge_sheets* führt dann (zeitlich getriggert) immer wieder alle Daten in ein Sheet zusammen. Das zusammenführen könnte auch im nächsten Schritt gemeinsam durchgeführt werden....
- Das Google Apps Script *automatic_email* prüft, ob alle Stationen von einer E-Mail "besucht" worden sind, also Antworten vorhanden sind. Die erreichten Punkte werden aufsummiert. Am Ende wird eine Email versendet. Auch hier kann zeitlicher Trigger gesetzt werden. 

In den Skripten fehlt noch, neben der Prüfung auf Email UND Vorname, eine Prüfung, dass nur einmal eine Email versendet wird und das es eine schöne HTML Email oder ein schönes pdf gibt.

An jeder Station muss der QR Code aber auch noch weitere Information zu unserer Aktion sichtbar sein. Mit https://www.qrcode-monkey.com/de/ ist der QR Code hier in dem Minimalbeispiel für Station 1 mit unserem Logo erstellt worden. Das funktioniert recht gut. 
