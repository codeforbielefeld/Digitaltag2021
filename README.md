# Digitaltag2021

Am 18.6.2021 ist der bundesweite Digitaltag. Wir überlegen, eine Aktion oben an der Promenade zu machen. Es soll Kinder und Familien anregen, zu mehr Bewegung und Sport an der frischen Luft. 

# Wir setzten von den zwei unten stehenden Varianten die Variante 1b um (Entscheidung am Community-Abend 20.5.2021 getroffen)

## Idee 1b - ohne Lichtschranken
Auf der Promenade sind zwischen Burg und Brands Busch verschiedene QR Codes verteilt. 
Variante (1): Hinter jedem QR Code versteckt sich nur ein Formular, in dem sich eingetragen werden muss, dass die Station passiert worden ist
Variante (2): Hinter jedem QR Code versteckt sich neben dem Formular eine zu beantwortende Frage (z.B. Schätzfragen: Wie hoch ist der Baum? Wie viele Bäume wurden an der Promenade neu gepflanzt? Wie lang ist die Promenade? etc.). Auch hier wird am Ende eine schicke pdf-Urkunde an die Kinder verschickt.

## Für die Idee 1b gibt es bereits Ideen, das mit Google Forms + Google Apps Script umzusetzen

Als google Account für die Umsetzung wurde von Meike codeforbi.digitaltag2021@gmail.com angelegt.

Es ist ein Minimalbeispiel (das bis jetzt noch auf Meikes privatem google Account liegt) mit nur zwei Stationen. Es wird nur geprüft, ob eine Email-Adresse bereits an beiden Stationen einen Eintrag hinterlassen hat. Am Community-Abend am 20.5.2021 wurde beschlossen für Datensparsamkeit immer nur eine Email Adresse zur Identifizierung zu nehmen und nicht auch noch einen Namen zu prüfen oder evtl. dass eine Familie mit mehreren Kindern eine Email Adresse nimmt mit und jedes Kind wird anhand des noch einzugebenden Vornamens identifiziert, da nun Kinder durch das digitale Corona-Schuljahr auch spätestens ab Schulbeginn eigene E-Mail-Adressen haben.

- Jede Station ist ein eigenes Formular in Google Forms, über das dann im Quizformat eine Antwort gegeben werden kann
- Automatisch werden die Antworten mit Punkten bewertet (Quiz-Funktion von Google Forms)
- Jedes Formular hat eine eigenes Google Sheet (unter Antworten: neue Tabelle erstellen, diese wird mit dem Formular verlinkt). Die Daten dieser Tabellen werden in ein neues Google Sheet überführt. Dafür wird eine eigene Google Tabelle angelegt. 
- In der neu angelegte Google Tabelle (hier: "merge_sheets" wird das Google App Scripts zum zusammenführen aller Daten *merge_sheets* ausgeführt(zeitlich getriggert). Dafür wird im Menü des neuen Google Sheets "Tools" -> "Skripteditor" gewählt. Vorher werden in der neuen Tabelle "merge_sheets" für jede Station ein eigens Tabellenblatt mit den Namen "Station 1" bis "Station 9" eingefügt.
- der zeitliche Trigger wird über Trigger hinzufügen beim Google App Scripts einfach eingefügt. Aktuell werden alle 30 Minuten Daten zusammengeführt.
- Das Google Apps Script *automatic_email* prüft (auch zeitlich getriggert) in dem Google Sheet mit allen *gemergten* Ergebnissen der einzelnen Stationen, ob alle Stationen von einer E-Mail "besucht" worden sind, also Antworten vorhanden sind. Die erreichten Punkte werden aufsummiert. Am Ende wird eine Email versendet. Zum Versenden der Email ruft eine Funktion extra den HTML Code aus **email.html** auf und setzt hier die erreichte Punktezahl ein. In **email.html** werden die beiden Logo Dateien vom Digitaltag und Code for Bielefeld verwendet. 
- um die ausgehenden Emails zu protokollieren und keine Emails doppelt zu versenden (HINWEIS: es kann nur einmal mit einer Email Adresse teilgenommen werden!!) werden ausgehende Mails in Tabelle "mails_out" protokolliert.
- Das Google Apps Script *automatic_email* wird im gdrive direkt als Google App Script hinzugefügt.

Beim ersten Ausführen der Google App Scripts muss der Datenzugriff autorisiert werden. Es kommt die Meldung *Autorisierung erforderlich: Für dieses Projekt ist Ihre Erlaubnis zum Dateizugriff erforderlich*. Das ist zu bestätigen.

Für die Email gibt es einen ersten HTML Entwurf in **email_punktezahl.html** der mit dem Editor https://html5-editor.net/ erstellt worden ist. Unter https://github.com/codeforbielefeld/Digitaltag2021/blob/main/preview_mail.JPG findet ihr einen Screenshot aus der Voransicht des Editors, wie die Email ungefähr ausschauen kann. Und so sieht die Druckansicht aus in Thunderbird (in der Voransicht sind hier die Hintegrundfarben noch sichtbar): https://github.com/codeforbielefeld/Digitaltag2021/blob/main/preview_mail.pdf

An jeder Station muss der QR Code aber auch noch weitere Information zu unserer Aktion sichtbar sein. Mit https://www.qrcode-monkey.com/de/ ist der QR Code hier in dem Minimalbeispiel für Station 1 mit unserem Logo erstellt worden. Das funktioniert recht gut. 


## Idee 1a: (wird nicht umgesetzt)
Kinder sind immer für ein Wettrennen zu haben!! 
Oben auf der Promenade bauen wir mit Flatterband eine 400m Bahn auf zwischen Burg und "Zur Schönen Aussicht". Am Anfang und am Ende ist eine Lichtschranke etc. zur Zeitnahme. Am Start müssen die Eltern einen QR Code scannen, Name und E-Mail Adresse eingeben und einwilligen, dass ihr Kind auf eigene Gefahr unser Bewegungsangebot wahr nimmt. Am Ende wird Zeit gemeinsam mit Name und E-Mail Adresse abgespeichert und alle Kinder erhalten eine pdf-Urkunde mit Name und Zeit zum ausdrucken an die angegebene E-Mail Adresse geschickt. 
